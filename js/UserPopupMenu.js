
// Global language labels mapping
const LANGUAGE_LABELS = {
    en: 'English',
    ko: '한국어',
    ja: '日本語'
};

// Global function to initialize language selector
function initLanguageSelector(languageSelect) {
    if (!languageSelect) {
        return;
    }

    // Get available languages from dataset or global variable
    let availableLangs = [];
    const datasetLangs = languageSelect.dataset?.availableLangs
        ? languageSelect.dataset.availableLangs.split(',').map(code => code.trim()).filter(Boolean)
        : [];

    if (datasetLangs.length) {
        availableLangs = datasetLangs;
    } else if (typeof AVAILABLE_LANGS !== 'undefined' && Array.isArray(AVAILABLE_LANGS)) {
        availableLangs = AVAILABLE_LANGS.filter(Boolean);
    }

    if (!availableLangs.length) {
        availableLangs = ['en', 'ko', 'ja'];
    }
    if (!availableLangs.includes('en')) {
        availableLangs.unshift('en');
    }

    const uniqueLangs = Array.from(new Set(availableLangs));

    // Get current language - prioritize dataset, then global variable, then URL
    let currentLang = languageSelect.dataset?.currentLang
        || ((typeof CURRENT_LANG !== 'undefined' && CURRENT_LANG) ? CURRENT_LANG : 'en');
    
    // If dataset doesn't have it, try to get from URL
    if (!languageSelect.dataset?.currentLang) {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const urlLang = pathParts.find(part => uniqueLangs.includes(part));
        if (urlLang) {
            currentLang = urlLang;
        }
    }

    // Update select options
    languageSelect.innerHTML = uniqueLangs.map((langCode) => {
        const label = LANGUAGE_LABELS[langCode] || langCode.toUpperCase();
        const selected = langCode === currentLang ? ' selected' : '';
        return `<option value="${langCode}"${selected}>${label}</option>`;
    }).join('');

    // Ensure current language is selected (in case innerHTML didn't preserve it)
    if (uniqueLangs.includes(currentLang)) {
        languageSelect.value = currentLang;
    }

    // Get root path
    const rootPathValue = languageSelect.dataset?.rootPath
        || ((typeof ROOT_PATH !== 'undefined') ? ROOT_PATH : '');

    // Remove existing event listeners by cloning the element
    const newSelect = languageSelect.cloneNode(true);
    languageSelect.parentNode.replaceChild(newSelect, languageSelect);

    // Add change event listener
    newSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value || 'en';
        const indexPage = (typeof isTestMode !== 'undefined' && isTestMode) ? 'index.html' : 'index';
        let targetUrl;
        
        if (!selectedLang || selectedLang === 'en') {
            targetUrl = rootPathValue ? `${rootPathValue}/${indexPage}` : `/${indexPage}`;
        } else {
            targetUrl = rootPathValue ? `${rootPathValue}/${selectedLang}/${indexPage}` : `/${selectedLang}/${indexPage}`;
        }
        
        window.location.href = targetUrl;
    });

    // Prevent event propagation
    newSelect.addEventListener('mousedown', (event) => event.stopPropagation());
    newSelect.addEventListener('touchstart', (event) => event.stopPropagation());
    newSelect.addEventListener('click', (event) => event.stopPropagation());
}

class UserPopupMenu extends PopupMenu {

    constructor() {
        super();

        this.triggerButton = null;
        this.initialized = false;

        // Create user dropdown content
        this.createUserDropdown();

        // Auto-initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    createUserDropdown() {
        // User info item
        const userInfo = document.createElement('div');
        userInfo.className = 'user-dropdown-item';
        userInfo.id = 'userInfo';
        userInfo.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <img id="userInfoAvatar" src="" alt="User" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
                <div>
                    <div id="userInfoNickname" style="font-weight: 600; font-size: 14px;"></div>
                    <div id="userInfoEmail" style="font-size: 12px; opacity: 0.7;"></div>
                </div>
            </div>
        `;

        // Language select item
        const languageItem = document.createElement('div');
        languageItem.className = 'user-dropdown-item language-select-item';
        
        // Get available languages dynamically
        let availableLangs = [];
        if (typeof AVAILABLE_LANGS !== 'undefined' && Array.isArray(AVAILABLE_LANGS)) {
            availableLangs = AVAILABLE_LANGS.filter(Boolean);
        }
        if (!availableLangs.length) {
            availableLangs = ['en', 'ko', 'ja']; // Default fallback
        }
        if (!availableLangs.includes('en')) {
            availableLangs.unshift('en');
        }
        const uniqueLangs = Array.from(new Set(availableLangs));
        
        // Get current language from URL or global variable
        let currentLang = 'en';
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const urlLang = pathParts.find(part => uniqueLangs.includes(part));
        if (urlLang) {
            currentLang = urlLang;
        } else if (typeof CURRENT_LANG !== 'undefined' && CURRENT_LANG) {
            currentLang = CURRENT_LANG;
        }
        
        const select = document.createElement('select');
        select.id = 'languageSelect';
        select.style.cssText = 'width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; background: white; cursor: pointer;';
        select.setAttribute('data-current-lang', currentLang);
        if (availableLangs.length) {
            select.setAttribute('data-available-langs', uniqueLangs.join(','));
        }
        
        // Add options dynamically
        uniqueLangs.forEach(langCode => {
            const option = document.createElement('option');
            option.value = langCode;
            option.textContent = LANGUAGE_LABELS[langCode] || langCode.toUpperCase();
            if (langCode === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        
        languageItem.appendChild(select);

        // Logout item
        const logoutItem = document.createElement('div');
        logoutItem.className = 'user-dropdown-item logout';
        logoutItem.textContent = '로그아웃';
        logoutItem.style.cursor = 'pointer';
        logoutItem.addEventListener('click', () => {
            g_pUser.logout();
        });

        // Add all items
        this.addMenu(userInfo);
        this.addMenu(languageItem);
        this.addMenu(logoutItem);
    }

    init() {
        if (this.initialized) return;

        const userButton = document.getElementById('userButton');
        if (!userButton) return;

        this.triggerButton = userButton;

        // 버튼 클릭 이벤트
        userButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.isOpen) {
                this.hide();
            } else {
                this.show(userButton);
            }
        });

        this.initialized = true;

        // Update user info if logged in
        this.updateUserInfo();

        // Initialize language selector
        this.initLanguageSelector();
    }

    initLanguageSelector() {
        // Find languageSelect within this menu element to avoid conflicts with topToolbar.ejs
        const languageSelect = this.menuElement ? this.menuElement.querySelector('#languageSelect') : null;
        if (!languageSelect) {
            // Retry after a short delay if element doesn't exist yet
            setTimeout(() => this.initLanguageSelector(), 100);
            return;
        }

        // Use global initLanguageSelector function
        initLanguageSelector(languageSelect);
    }

    updateUserInfo() {
        if (typeof g_pUser === 'undefined' || !g_pUser || !g_pUser.isLogin()) return;

        const user = g_pUser.get();
        const avatarImg = document.getElementById('userInfoAvatar');
        const nicknameDiv = document.getElementById('userInfoNickname');
        const emailDiv = document.getElementById('userInfoEmail');

        if (avatarImg && user.picture) {
            avatarImg.src = user.picture;
        }
        if (nicknameDiv && user.nickname) {
            nicknameDiv.textContent = user.nickname;
        }
        if (emailDiv && user.email) {
            emailDiv.textContent = user.email;
        }
    }

    show(triggerElement) {
        if (this.isOpen) return;

        // Update user info before showing
        this.updateUserInfo();

        // Call parent show with trigger element for positioning
        super.show(triggerElement || this.triggerButton);
    }
}

// 전역 인스턴스 생성
let g_pUserPopupMenu = new UserPopupMenu();

