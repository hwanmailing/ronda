class AOSAnimation {
  constructor(options = {}) {
    // 기본 설정값
    this.config = {
      duration: options.duration || 800,
      offset: options.offset || 100,
      once: options.once !== undefined ? options.once : false
    };
    
    this.init();
  }

  // DOMContentLoaded 체크 후 초기화
  init() {
    const initAnimation = () => {
      // ScrollTrigger 등록
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        this.setupAnimations();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimation);
    } else {
      initAnimation();
    }
  }

  // data-aos 속성을 가진 모든 요소에 애니메이션 적용
  setupAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
      const animationType = element.getAttribute('data-aos');
      const duration = element.getAttribute('data-aos-duration') || this.config.duration;
      const delay = element.getAttribute('data-aos-delay') || 0;
      const offset = element.getAttribute('data-aos-offset') || this.config.offset;
      const once = element.getAttribute('data-aos-once') !== null 
        ? element.getAttribute('data-aos-once') === 'true' 
        : this.config.once;

      // 깜빡임 방지: 초기 상태(from 상태)를 먼저 설정
      const initialState = this.getInitialState(animationType);
      gsap.set(element, initialState);

      this.applyAnimation(element, animationType, {
        duration: parseInt(duration) / 1000, // ms를 초로 변환
        delay: parseInt(delay) / 1000,
        offset: parseInt(offset),
        once: once,
        animationType: animationType // 타입을 options에 추가
      });
    });
  }

  // ScrollTrigger 설정 생성
  getScrollTriggerConfig(element, options) {
    const config = {
      trigger: element,
      start: `top ${100 - options.offset / 10}%`
    };
    
    if (options.once) {
      config.once = true;
    } else {
      config.toggleActions = 'play reverse play reverse';
    }
    
    return config;
  }

  // 각 애니메이션 타입별 초기 상태(from 상태)와 최종 상태(to 상태) 정의
  getAnimationStates(type) {
    const animationStatesMap = {
      'fade': {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      'fade-up': {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 }
      },
      'fade-down': {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 }
      },
      'fade-left': {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 }
      },
      'fade-right': {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 }
      },
      'fade-up-right': {
        from: { opacity: 0, x: -50, y: 50 },
        to: { opacity: 1, x: 0, y: 0 }
      },
      'fade-up-left': {
        from: { opacity: 0, x: 50, y: 50 },
        to: { opacity: 1, x: 0, y: 0 }
      },
      'fade-down-right': {
        from: { opacity: 0, x: -50, y: -50 },
        to: { opacity: 1, x: 0, y: 0 }
      },
      'fade-down-left': {
        from: { opacity: 0, x: 50, y: -50 },
        to: { opacity: 1, x: 0, y: 0 }
      },
      'flip-left': {
        from: { opacity: 0, rotationY: -90 },
        to: { opacity: 1, rotationY: 0 }
      },
      'flip-right': {
        from: { opacity: 0, rotationY: 90 },
        to: { opacity: 1, rotationY: 0 }
      },
      'flip-up': {
        from: { opacity: 0, rotationX: 90 },
        to: { opacity: 1, rotationX: 0 }
      },
      'flip-down': {
        from: { opacity: 0, rotationX: -90 },
        to: { opacity: 1, rotationX: 0 }
      },
      'slide-up': {
        from: { y: 100 },
        to: { y: 0 }
      },
      'slide-down': {
        from: { y: -100 },
        to: { y: 0 }
      },
      'slide-left': {
        from: { x: 100 },
        to: { x: 0 }
      },
      'slide-right': {
        from: { x: -100 },
        to: { x: 0 }
      },
      'zoom-in': {
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: 1, scale: 1 }
      },
      'zoom-in-up': {
        from: { opacity: 0, scale: 0.5, y: 50 },
        to: { opacity: 1, scale: 1, y: 0 }
      },
      'zoom-in-down': {
        from: { opacity: 0, scale: 0.5, y: -50 },
        to: { opacity: 1, scale: 1, y: 0 }
      },
      'zoom-in-left': {
        from: { opacity: 0, scale: 0.5, x: 50 },
        to: { opacity: 1, scale: 1, x: 0 }
      },
      'zoom-in-right': {
        from: { opacity: 0, scale: 0.5, x: -50 },
        to: { opacity: 1, scale: 1, x: 0 }
      },
      'zoom-out': {
        from: { opacity: 0, scale: 1.5 },
        to: { opacity: 1, scale: 1 }
      },
      'zoom-out-up': {
        from: { opacity: 0, scale: 1.5, y: 50 },
        to: { opacity: 1, scale: 1, y: 0 }
      },
      'zoom-out-down': {
        from: { opacity: 0, scale: 1.5, y: -50 },
        to: { opacity: 1, scale: 1, y: 0 }
      },
      'zoom-out-left': {
        from: { opacity: 0, scale: 1.5, x: 50 },
        to: { opacity: 1, scale: 1, x: 0 }
      },
      'zoom-out-right': {
        from: { opacity: 0, scale: 1.5, x: -50 },
        to: { opacity: 1, scale: 1, x: 0 }
      }
    };
    return animationStatesMap[type] || { from: { opacity: 0 }, to: { opacity: 1 } };
  }

  // 각 애니메이션 타입별 초기 상태(from 상태) 정의 (하위 호환성)
  getInitialState(type) {
    const states = this.getAnimationStates(type);
    return states.from;
  }

  // 애니메이션 타입에 따라 적절한 메서드 호출
  applyAnimation(element, type, options = {}) {
    const defaultOptions = {
      duration: 0.8,
      delay: 0,
      offset: 100,
      once: false
    };
    const opts = { ...defaultOptions, ...options };

    // 모든 애니메이션을 하나의 공통 메서드로 처리
    this.animate(element, type, opts);
  }

  // 공통 애니메이션 메서드
  animate(element, type, options) {
    const states = this.getAnimationStates(type);
    
    gsap.fromTo(element,
      states.from,
      {
        ...states.to,
        duration: options.duration,
        delay: options.delay,
        scrollTrigger: this.getScrollTriggerConfig(element, options)
      }
    );
  }
}

const g_pAOSAnimation = new AOSAnimation({
  duration: 600,
  once: true,
  offset: 100
});