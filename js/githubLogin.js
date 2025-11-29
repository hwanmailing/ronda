class GitHubLogin {
    constructor(element) {
        // element가 null인 경우 처리
        if (!element) {
            console.log('GitHubLogin: No element provided, skipping initialization');
            return;
        }
        
        this.loginButton = element;
        this.userMenu = document.querySelector('.user-menu');
        this.userAvatar = document.querySelector('.user-avatar');
        this.logoutItem = document.querySelector('.logout-item');
        this.userButton = document.querySelector('.user-button');
        this.userDropdown = document.querySelector('.user-dropdown');
        this.isTestMode = typeof window !== 'undefined' && typeof isTestMode !== 'undefined'
            ? Boolean(isTestMode)
            : (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
        
        // Nickname modal elements
        this.nicknameModal = document.getElementById('nickname-modal');
        this.nicknameInput = document.getElementById('nickname-input');
        this.nicknameError = document.getElementById('nickname-error');
        this.confirmNicknameBtn = document.getElementById('confirm-nickname');
        this.cancelNicknameBtn = document.getElementById('cancel-nickname');
        this.closeNicknameModalBtn = document.querySelector('.close-nickname-modal');
        
        this.setupEventListeners();
        this.initLoginButton();
        
        // 페이지 로드 시 로그인 상태 확인
        if (typeof g_pUser !== 'undefined' && g_pUser && g_pUser.isLogin()) {
            this.updateUserMenu(g_pUser.get().picture);
        }
    }

    setupEventListeners() {
        // Nickname modal event listeners
        if (this.confirmNicknameBtn) {
            this.confirmNicknameBtn.addEventListener('click', () => this.handleNicknameConfirm());
        }
        if (this.cancelNicknameBtn) {
            this.cancelNicknameBtn.addEventListener('click', () => this.hideNicknameModal());
        }
        if (this.closeNicknameModalBtn) {
            this.closeNicknameModalBtn.addEventListener('click', () => this.hideNicknameModal());
        }
        
        // Enter key in nickname input
        if (this.nicknameInput) {
            this.nicknameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleNicknameConfirm();
                }
            });
        }
    }

    initLoginButton() {
        if (!this.loginButton) return;

        // GitHub 로그인 버튼 생성
        const buttonStyle = window.innerWidth <= 900 ? 'icon' : 'standard';
        
        if (buttonStyle === 'icon') {
            // 아이콘 버튼
            this.loginButton.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/>
                </svg>
            `;
        } else {
            // 표준 버튼
            this.loginButton.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/>
                </svg>
                <span>GitHub로 로그인</span>
            `;
        }

        // 버튼 스타일 설정
        this.loginButton.style.cssText = `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: ${buttonStyle === 'icon' ? '12px' : '10px 16px'};
            background: #24292e;
            color: white;
            border: 1px solid #24292e;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            width: ${buttonStyle === 'icon' ? '44px' : 'auto'};
            height: ${buttonStyle === 'icon' ? '44px' : 'auto'};
        `;

        // 테스트 모드일 경우 오버레이 추가
        if (this.isTestMode) {
            this.addTestOverlay(this.loginButton);
        }

        // 버튼 클릭 이벤트
        this.loginButton.addEventListener('click', () => {
            this.handleGitHubLogin();
        });

        // 화면 크기 변경 시 버튼 업데이트
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const currentIsMobile = window.innerWidth <= 900;
                const newType = currentIsMobile ? 'icon' : 'standard';
                // 버튼 내용만 업데이트 (이미 스타일은 반응형)
                if (newType !== buttonStyle) {
                    this.initLoginButton();
                }
            }, 250);
        });
    }

    handleGitHubLogin() {
        // GitHub OAuth URL로 리다이렉트
        // 서버의 OAuth 시작 엔드포인트로 이동
        const redirectUri = encodeURIComponent(window.location.origin + window.location.pathname);
        const githubAuthUrl = `${API_BASE_URL}/api/auth/github?redirect_uri=${redirectUri}`;
        window.location.href = githubAuthUrl;
    }

    showNicknameModal() {
        if (this.nicknameModal) {
            this.nicknameModal.classList.remove('hidden');
            if (this.nicknameInput) {
                this.nicknameInput.focus();
            }
        }
    }

    hideNicknameModal() {
        if (this.nicknameModal) {
            this.nicknameModal.classList.add('hidden');
            if (this.nicknameInput) {
                this.nicknameInput.value = '';
            }
            if (this.nicknameError) {
                this.nicknameError.classList.add('hidden');
            }
        }
    }

    showNicknameError(message) {
        if (this.nicknameError) {
            this.nicknameError.textContent = message;
            this.nicknameError.classList.remove('hidden');
        }
    }

    hideNicknameError() {
        if (this.nicknameError) {
            this.nicknameError.classList.add('hidden');
        }
    }

    async checkNicknameDuplicate(nickname) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/users/check-nickname?nickname=${encodeURIComponent(nickname)}`);
            const data = await response.json();
            return data.exists || false;
        } catch (error) {
            console.error('Error checking nickname:', error);
            return false;
        }
    }

    async handleNicknameConfirm() {
        const nickname = this.nicknameInput ? this.nicknameInput.value.trim() : '';
        
        if (!nickname) {
            this.showNicknameError('닉네임을 입력해주세요.');
            return;
        }

        // 기본 검증
        if (nickname.length < 2 || nickname.length > 20) {
            this.showNicknameError('닉네임은 2-20자 사이로 입력해주세요.');
            return;
        }
        
        // 닉네임 중복 확인
        const isDuplicate = await this.checkNicknameDuplicate(nickname);
        if (isDuplicate) {
            alert('이미 사용 중인 닉네임입니다.');
            return;
        }

        this.hideNicknameError();
        
        // 닉네임이 확인되면 회원가입 진행
        await this.completeRegistration(nickname);
    }

    async completeRegistration(nickname) {
        try {
            if (!this.pendingUserData) {
                console.log('Registration already completed or data cleared');
                return;
            }

            if (!this.pendingGitHubToken) {
                throw new Error('GitHub authentication data is missing. Please try logging in again.');
            }

            // 필수 데이터 검증
            if (!this.pendingUserData.name || !this.pendingUserData.id || !this.pendingUserData.email || !this.pendingUserData.picture) {
                throw new Error('Incomplete user data. Please try logging in again.');
            }

            const apiResponse = await fetch(`${API_BASE_URL}/api/users/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.pendingGitHubToken}`
                },
                credentials: 'include',
                body: JSON.stringify({
                    name: this.pendingUserData.name,
                    id: this.pendingUserData.id,
                    email: this.pendingUserData.email,
                    picture: this.pendingUserData.picture,
                    nickname: nickname
                })
            });

            if (!apiResponse.ok) {
                const errorData = await apiResponse.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            const data = await apiResponse.json();

            if (!data.success) {
                throw new Error('Registration failed');
            }

            if (!data.user) {
                console.error('API response missing user field:', data);
                throw new Error('Invalid API response format');
            }

            // 토큰을 localStorage에 저장
            if (data.token) {
                localStorage.setItem('auth_token', data.token);
            }

            // 사용자 정보를 localStorage에 저장
            if (typeof g_pUser !== 'undefined' && g_pUser) {
                g_pUser.set(data.user.idx, this.pendingUserData.name, this.pendingUserData.email, nickname, this.pendingUserData.picture, data.user.level || 1, 0);
                g_pUser.save();
            }

            // Update UI with user info
            this.updateUserMenu(this.pendingUserData.picture);
            
            // Clear pending data
            this.pendingGitHubToken = null;
            this.pendingUserData = null;
            
            // 회원가입 성공 - 팝업 닫기
            this.hideNicknameModal();
            
            // 회원가입 축하 메시지
            alert(`🎉 환영합니다, ${nickname}님!\n\nrondasoft.com에 성공적으로 가입되었습니다.`);
            
            // 페이지 새로고침
            window.location.reload();
            
        } catch (error) {
            console.error('Registration error:', error);
            const errorMessage = error.message || 'Registration failed. Please try again.';
            
            if (errorMessage.includes('network') || 
                errorMessage.includes('Network') || 
                errorMessage.includes('fetch') ||
                errorMessage.includes('Failed to fetch') ||
                errorMessage.includes('server_error') ||
                errorMessage.includes('Server error')) {
                this.hideNicknameModal();
                alert(`오류가 발생했습니다: ${errorMessage}\n\n다시 시도해주세요.`);
            } else {
                alert(errorMessage);
            }
        }
    }

    updateUserMenu(picture) {
        const loginButton = document.getElementById('github-login-button');
        const userMenu = document.querySelector('.user-menu');
        const userAvatar = document.querySelector('.user-avatar');
        
        if (loginButton) {
            loginButton.style.display = 'none';
        }
        
        if (userMenu) {
            userMenu.style.display = 'flex';
            if (userAvatar && picture) {
                userAvatar.src = picture;
                if (typeof g_pUser !== 'undefined' && g_pUser) {
                    userAvatar.alt = g_pUser.get().nickname || g_pUser.get().name || 'User';
                }
            }
        }
    }

    // 테스트 로그인 처리
    async handleTestLogin() {
        const testUserData = {
            email: 'admin@localhost.com',
            name: '테스트 관리자',
            id: 'admin_user_1',
            picture: 'https://example.com/admin-avatar.jpg',
            nickname: 'admin'
        };

        const testToken = `test_token_${Date.now()}`;

        try {
            await this.onSignIn(
                testUserData,
                { token: testToken, isTestLogin: true },
                {
                    allowRegistration: false,
                    onMissingUser: () => {
                        alert('테스트 사용자가 없습니다.\n\n먼저 createTestUser.js를 실행하여 테스트 사용자를 생성해주세요.\n\n생성된 사용자 정보:\n- email: admin@localhost.com\n- nickname: admin');
                    }
                }
            );
        } catch (error) {
            console.error('Test login error:', error);
            alert(`테스트 로그인 실패: ${error.message}`);
        }
    }

    addTestOverlay(element) {
        if (!this.isTestMode || !element) {
            return;
        }

        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.position === 'static') {
            element.style.position = 'relative';
        }

        let overlay = element.querySelector('.github-test-overlay');
        if (overlay) {
            return;
        }

        overlay = document.createElement('div');
        overlay.className = 'github-test-overlay';
        overlay.style.cssText = `
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: rgba(0, 0, 0, 0.1);
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: inherit;
            cursor: pointer;
            padding: 12px;
            z-index: 10;
        `;
        overlay.innerHTML = `
            <div>
                <span style="font-size: 0.85rem; font-weight: 500;">테스트 계정</span>
            </div>
        `;

        overlay.addEventListener('click', async (event) => {
            event.preventDefault();
            event.stopPropagation();

            overlay.style.pointerEvents = 'none';
            overlay.dataset.loading = 'true';
            const originalHtml = overlay.innerHTML;
            overlay.innerHTML = `
                <div>
                    테스트 계정 로그인 중...
                </div>
            `;

            try {
                await this.handleTestLogin();
            } catch (error) {
                console.error('Overlay test login error:', error);
            } finally {
                overlay.style.pointerEvents = 'auto';
                delete overlay.dataset.loading;
                overlay.innerHTML = originalHtml;
            }
        });

        element.appendChild(overlay);
    }

    async onSignIn(oUser, authContext, options = {}) {
        const { allowRegistration = true, onMissingUser } = options;
        const token = authContext && authContext.token;

        if (!oUser || !oUser.email) {
            throw new Error('Invalid user data received from authentication provider.');
        }

        if (!token) {
            throw new Error('Authentication token is missing.');
        }

        try {
            // 먼저 사용자가 이미 존재하는지 확인
            const checkResponse = await fetch(`${API_BASE_URL}/api/users/check-email?email=${encodeURIComponent(oUser.email)}`);
            const checkData = await checkResponse.json();
            
            if (checkData.exists) {
                // 기존 사용자 - 바로 로그인
                const loginResponse = await fetch(`${API_BASE_URL}/api/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: oUser.email
                    })
                });

                if (!loginResponse.ok) {
                    const errorData = await loginResponse.json();
                    throw new Error(errorData.message || 'Login failed');
                }

                const loginData = await loginResponse.json();
                if (!loginData.success) {
                    throw new Error('Login failed');
                }

                // 토큰을 localStorage에 저장
                if (loginData.token) {
                    localStorage.setItem('auth_token', loginData.token);
                }

                // 사용자 정보를 localStorage에 저장
                if (typeof g_pUser !== 'undefined' && g_pUser) {
                    g_pUser.set(
                        loginData.user.idx,
                        loginData.user.name || oUser.name,
                        loginData.user.email || oUser.email,
                        loginData.user.nickname || oUser.nickname,
                        loginData.user.picture || oUser.picture,
                        loginData.user.level || 1,
                        0
                    );
                    g_pUser.save();
                }

                // Update UI with user info
                this.updateUserMenu(loginData.user.picture || oUser.picture);

                // 페이지 새로고침
                window.location.reload();
                
            } else {
                if (!allowRegistration) {
                    if (typeof onMissingUser === 'function') {
                        onMissingUser();
                    } else {
                        throw new Error('User not found and registration is not allowed.');
                    }
                    return;
                }

                // 새 사용자 - 닉네임 입력 모달 표시
                this.pendingGitHubToken = token;
                this.pendingUserData = {
                    name: oUser.name || oUser.login || '',
                    id: oUser.id?.toString() || oUser.node_id || '',
                    email: oUser.email,
                    picture: oUser.avatar_url || oUser.picture
                };
                this.showNicknameModal();
            }
            
        } catch (error) {
            console.log('Login error:', error);
            console.error('Login error:', error);

            // localhost에서 GitHub OAuth 에러 발생 시 테스트 로그인으로 자동 전환
            const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            if (isLocalhost || this.isTestMode) {
                console.log('테스트 모드에서 GitHub 로그인 실패. 오버레이를 클릭하여 테스트 계정으로 로그인하세요.');
                return;
            }

            alert(error.message || 'Login failed. Please try again.');
        }
    }

    // URL에서 OAuth 콜백 처리 (서버에서 리다이렉트된 경우)
    async handleOAuthCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('code'); // 서버에서 전달된 세션 토큰
        const error = urlParams.get('error');
        const userDataStr = urlParams.get('user');

        if (error) {
            alert(`GitHub 로그인 오류: ${error}`);
            // URL에서 error 파라미터 제거
            window.history.replaceState({}, document.title, window.location.pathname);
            return;
        }

        if (token && userDataStr) {
            try {
                // URL에서 파라미터 가져오기
                const userData = JSON.parse(decodeURIComponent(userDataStr));

                // URL에서 파라미터 제거
                window.history.replaceState({}, document.title, window.location.pathname);

                // 사용자 정보와 토큰으로 로그인 처리
                await this.onSignIn(userData, { token: token }, { allowRegistration: true });

            } catch (error) {
                console.error('OAuth callback error:', error);
                alert(`로그인 오류: ${error.message}`);
                // URL에서 파라미터 제거
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }
}

// DOM이 로드된 후 GitHubLogin 초기화
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById("github-login-button");
    const g_pLogin = loginButton ? new GitHubLogin(loginButton) : null;
    
    // OAuth 콜백 처리
    if (g_pLogin) {
        g_pLogin.handleOAuthCallback();
    }
});

