class User {
    constructor() {
        this.init();
        this.storageKey = 'user';
        this.load();
    }

    init(){
        this.idx = null;
        this.name = null;
        this.email = null;
        this.nickname = null;
        this.picture = null;
        this.level = 1;
        this.score = 0;
    }

    set(idx, name, email, nickname, picture, level = 1, score = 0) {
        this.idx = idx;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.picture = picture;
        this.level = level;
        this.score = score;
        
        // 사용자별 IndexedDB 재초기화
        // email 또는 idx를 사용하여 사용자별 DB 설정
        const userIdentifier = email || idx;
        if (userIdentifier) {
            // g_isIDBReady로 IDB 초기화 여부 확인
            if (typeof g_isIDBReady !== 'undefined' && g_isIDBReady) {
                // 이미 초기화되었으면 reinitialize
                if (typeof g_pIDB !== 'undefined' && g_pIDB) {
                    g_pIDB.reinitialize(userIdentifier).catch(error => {
                        console.warn('IDB 재초기화 실패:', error);
                    });
                }
            } else {
                // 아직 초기화되지 않았으면 setDbName 후 init
                if (typeof g_pIDB !== 'undefined' && g_pIDB) {
                    g_pIDB.setDbName(userIdentifier);
                    g_pIDB.init()
                        .then(() => {
                            if (typeof g_isIDBReady !== 'undefined') {
                                g_isIDBReady = true;
                            }
                        })
                        .catch(error => {
                            if (typeof g_isIDBReady !== 'undefined') {
                                g_isIDBReady = false;
                            }
                            console.warn('g_pIDB 초기화 실패:', error);
                        });
                }
            }
        }
        
    }

    get() {
        return {
            idx: this.idx,
            name: this.name,
            email: this.email,
            nickname: this.nickname,
            picture: this.picture,
            level: this.level,
            score: this.score
        };
    }

    isLogin() {
        return this.email !== null && this.name !== null;
    }

    load() {
        const userStr = localStorage.getItem(this.storageKey);
        if (userStr) {
            try {
                const user = JSON.parse(userStr);
                this.set(user.idx || null, user.name, user.email, user.nickname, user.picture, user.level || 1, user.score || 0);
            } catch (error) {
                console.error('Error loading user from storage:', error);
                localStorage.removeItem(this.storageKey);
                this.init();
            }
        }
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.get()));
    }

    logout() {
        // 사용자별 IndexedDB 연결 닫기 (기본 DB로 전환)
        if (typeof g_pIDB !== 'undefined' && g_pIDB) {
            g_pIDB.reinitialize(null).catch(error => {
                console.warn('IDB 재초기화 실패:', error);
            });
        }
        
        // Clear user data
        this.init();
        // Clear localStorage
        localStorage.removeItem(this.storageKey);
        // Update UI
        const userMenu = document.querySelector('.user-menu');
        const loginButton = document.getElementById('github-login-button');
        
        if (userMenu) {
            userMenu.style.display = 'none';
        }
        if (loginButton) {
            loginButton.style.display = 'block';
        }
        
        // Reload page to update UI
        window.location.reload();
    }
}

const g_pUser = new User();

