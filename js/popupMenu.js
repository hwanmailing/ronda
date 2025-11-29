/**
 * PopupMenu - Simple generic popup menu class
 * All popups have the same style, just add menu elements
 */
class PopupMenu {
    constructor() {
        this.menuElement = null;
        this.isOpen = false;

        // Bound event handlers for cleanup
        this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);
        this.boundHandleEscape = this.handleEscape.bind(this);

        // Initialize base styles
        this.initStyles();

        // Create menu container
        this.createMenuContainer();
    }

    /**
     * Create the menu container element
     */
    createMenuContainer() {
        this.menuElement = document.createElement('div');
        this.menuElement.className = 'popup-menu';
        document.body.appendChild(this.menuElement);
    }

    /**
     * Add a menu item (DOM element)
     */
    addMenu(element) {
        if (element instanceof HTMLElement) {
            this.menuElement.appendChild(element);
        }
    }

    /**
     * Show the popup menu
     * @param {HTMLElement} triggerElement - Button that triggered the popup (optional, for positioning)
     */
    show(triggerElement, isBelow) {
        if (this.isOpen) return;

        this.isOpen = true;

        // Position the menu if trigger element is provided
        if (triggerElement) {
            this.positionMenu(triggerElement, isBelow);
        }

        this.menuElement.classList.add('show');

        // Add event listeners
        setTimeout(() => {
            document.addEventListener('click', this.boundHandleOutsideClick);
            document.addEventListener('keydown', this.boundHandleEscape);
        }, 0);
    }

    /**
     * Position the menu relative to trigger element
     */
    positionMenu(triggerElement, isBelow) {
        if (!triggerElement) return;

        const rect = triggerElement.getBoundingClientRect();
        const menuRect = this.menuElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const menuHeight = menuRect.height || 200;
        const menuWidth = menuRect.width || 180;

        // Calculate available space
        const spaceAbove = rect.top;
        const spaceBelow = viewportHeight - rect.bottom;

        let top, left;
        let placement = 'below'; // default

        if (typeof isBelow === 'boolean') {
            placement = isBelow ? 'below' : 'above';
            if (placement === 'below') {
                top = rect.bottom + 12;
                if (top + menuHeight > viewportHeight - 16) {
                    top = Math.min(top, viewportHeight - menuHeight - 16);
                }
            } else {
                top = rect.top - menuHeight - 12;
                if (top < 16) {
                    top = Math.max(top, 16);
                }
            }
        } else {
            // Determine best placement automatically
            if (spaceAbove >= menuHeight + 12 || spaceAbove > spaceBelow) {
                placement = 'above';
                top = rect.top - menuHeight - 12;
                if (top < 16) {
                    placement = 'below';
                    top = rect.bottom + 12;
                }
            } else {
                top = rect.bottom + 12;
                if (top + menuHeight > viewportHeight - 16) {
                    placement = 'above';
                    top = rect.top - menuHeight - 12;
                    if (top < 16) {
                        top = 16;
                        placement = 'below';
                    }
                }
            }
        }

        // Center horizontally on button
        left = rect.left + (rect.width / 2) - (menuWidth / 2);

        // Keep within viewport
        const minLeft = 16;
        const maxLeft = viewportWidth - menuWidth - 16;
        left = Math.max(minLeft, Math.min(left, maxLeft));

        // Apply positioning
        this.menuElement.style.top = `${top}px`;
        this.menuElement.style.left = `${left}px`;

        // Update placement class for arrow
        this.menuElement.classList.remove('above', 'below');
        this.menuElement.classList.add(placement);
    }

    /**
     * Hide the popup menu
     */
    hide() {
        if (!this.isOpen) return;

        this.isOpen = false;
        this.menuElement.classList.remove('show');

        // Remove event listeners
        document.removeEventListener('click', this.boundHandleOutsideClick);
        document.removeEventListener('keydown', this.boundHandleEscape);
    }

    /**
     * Toggle show/hide
     */
    toggle() {
        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }

    /**
     * Handle outside click
     */
    handleOutsideClick(event) {
        if (!this.menuElement.contains(event.target)) {
            this.hide();
        }
    }

    /**
     * Handle escape key
     */
    handleEscape(event) {
        if (event.key === 'Escape') {
            this.hide();
        }
    }

    /**
     * Initialize base styles (same for all popups)
     */
    initStyles() {
        const styleId = 'popup-menu-styles';
        if (document.getElementById(styleId)) return;

        const styles = `
            /* Popup Menu Base Styles - Same for all popups */
            .popup-menu {
                position: fixed;
                z-index: 10000;
                background: #f4c153;
                border: 1px solid #a64a1f;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s ease;
                transform: translateY(-8px);
                will-change: top, left, transform;
            }

            .popup-menu.show {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
            }
        `;

        if (typeof addStyles === 'function') {
            addStyles(styleId, styles);
        } else {
            const styleElement = document.createElement('style');
            styleElement.id = styleId;
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }
    }
}

