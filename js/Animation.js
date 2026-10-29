class Animation {
  constructor() {
    this.init();
  }

  // DOMContentLoaded 체크 후 초기화
  init() {
    return;
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
      const duration = element.getAttribute('data-aos-duration') || 800;
      const delay = element.getAttribute('data-aos-delay') || 0;
      const easing = element.getAttribute('data-aos-easing') || 'ease-out';
      const offset = element.getAttribute('data-aos-offset') || 100;

      console.log( 'animationType: ', animationType, 'duration:', duration, 'delay:', delay, 'easing:', easing, 'offset:', offset);
      this.applyAnimation(element, animationType, {
        duration: parseInt(duration) / 1000, // ms를 초로 변환
        delay: parseInt(delay) / 1000,
        easing: this.convertEasing(easing),
        offset: parseInt(offset)
      });
    });
  }

  // easing 문자열을 GSAP easing으로 변환
  convertEasing(easing) {
    const easingMap = {
      'ease': 'power1.inOut',
      'ease-in': 'power1.in',
      'ease-out': 'power1.out',
      'ease-in-out': 'power1.inOut',
      'linear': 'none'
    };
    return easingMap[easing] || 'power1.out';
  }

  // 애니메이션 타입에 따라 적절한 메서드 호출
  applyAnimation(element, type, options = {}) {
    const defaultOptions = {
      duration: 0.8,
      delay: 0,
      easing: 'power1.out',
      offset: 100
    };
    const opts = { ...defaultOptions, ...options };

    switch (type) {
      case 'fade':
        this.fade(element, opts);
        break;
      case 'fade-up':
        this.fadeUp(element, opts);
        break;
      case 'fade-down':
        this.fadeDown(element, opts);
        break;
      case 'fade-left':
        this.fadeLeft(element, opts);
        break;
      case 'fade-right':
        this.fadeRight(element, opts);
        break;
      case 'fade-up-right':
        this.fadeUpRight(element, opts);
        break;
      case 'fade-up-left':
        this.fadeUpLeft(element, opts);
        break;
      case 'fade-down-right':
        this.fadeDownRight(element, opts);
        break;
      case 'fade-down-left':
        this.fadeDownLeft(element, opts);
        break;
      case 'flip-left':
        this.flipLeft(element, opts);
        break;
      case 'flip-right':
        this.flipRight(element, opts);
        break;
      case 'flip-up':
        this.flipUp(element, opts);
        break;
      case 'flip-down':
        this.flipDown(element, opts);
        break;
      case 'slide-up':
        this.slideUp(element, opts);
        break;
      case 'slide-down':
        this.slideDown(element, opts);
        break;
      case 'slide-left':
        this.slideLeft(element, opts);
        break;
      case 'slide-right':
        this.slideRight(element, opts);
        break;
      case 'zoom-in':
        this.zoomIn(element, opts);
        break;
      case 'zoom-in-up':
        this.zoomInUp(element, opts);
        break;
      case 'zoom-in-down':
        this.zoomInDown(element, opts);
        break;
      case 'zoom-in-left':
        this.zoomInLeft(element, opts);
        break;
      case 'zoom-in-right':
        this.zoomInRight(element, opts);
        break;
      case 'zoom-out':
        this.zoomOut(element, opts);
        break;
      case 'zoom-out-up':
        this.zoomOutUp(element, opts);
        break;
      case 'zoom-out-down':
        this.zoomOutDown(element, opts);
        break;
      case 'zoom-out-left':
        this.zoomOutLeft(element, opts);
        break;
      case 'zoom-out-right':
        this.zoomOutRight(element, opts);
        break;
    }
  }

  // Fade 애니메이션
  fade(element, options) {
    gsap.fromTo(element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Up 애니메이션
  fadeUp(element, options) {
    gsap.fromTo(element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Down 애니메이션
  fadeDown(element, options) {
    gsap.fromTo(element,
      { opacity: 0, y: -50 },
          { 
            opacity: 1, 
            y: 0, 
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Left 애니메이션
  fadeLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Right 애니메이션
  fadeRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Up Right 애니메이션
  fadeUpRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: -50, y: 50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Up Left 애니메이션
  fadeUpLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: 50, y: 50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Down Right 애니메이션
  fadeDownRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: -50, y: -50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Fade Down Left 애니메이션
  fadeDownLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, x: 50, y: -50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Flip Left 애니메이션 (Y축 회전)
  flipLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, rotationY: -90 },
      {
        opacity: 1,
        rotationY: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Flip Right 애니메이션 (Y축 반대 방향 회전)
  flipRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, rotationY: 90 },
      {
        opacity: 1,
        rotationY: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Flip Up 애니메이션 (X축 회전)
  flipUp(element, options) {
    gsap.fromTo(element,
      { opacity: 0, rotationX: 90 },
      {
        opacity: 1,
        rotationX: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Flip Down 애니메이션 (X축 반대 방향 회전)
  flipDown(element, options) {
    gsap.fromTo(element,
      { opacity: 0, rotationX: -90 },
      {
        opacity: 1,
        rotationX: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Slide Up 애니메이션
  slideUp(element, options) {
    gsap.fromTo(element,
      { y: 100 },
      {
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Slide Down 애니메이션
  slideDown(element, options) {
    gsap.fromTo(element,
      { y: -100 },
      {
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Slide Left 애니메이션
  slideLeft(element, options) {
    gsap.fromTo(element,
      { x: 100 },
      {
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Slide Right 애니메이션
  slideRight(element, options) {
    gsap.fromTo(element,
      { x: -100 },
      {
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom In 애니메이션
  zoomIn(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom In Up 애니메이션
  zoomInUp(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.5, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom In Down 애니메이션
  zoomInDown(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.5, y: -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom In Left 애니메이션
  zoomInLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.5, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom In Right 애니메이션
  zoomInRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 0.5, x: -50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom Out 애니메이션
  zoomOut(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 1.5 },
      {
        opacity: 1,
        scale: 1,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom Out Up 애니메이션
  zoomOutUp(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 1.5, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom Out Down 애니메이션
  zoomOutDown(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 1.5, y: -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom Out Left 애니메이션
  zoomOutLeft(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 1.5, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Zoom Out Right 애니메이션
  zoomOutRight(element, options) {
    gsap.fromTo(element,
      { opacity: 0, scale: 1.5, x: -50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: options.duration,
        delay: options.delay,
        ease: options.easing,
            scrollTrigger: {
          trigger: element,
          start: `top ${100 - options.offset / 10}%`,
          toggleActions: 'play none none none'
        }
      }
    );
  }
}

const g_pAnimation = new Animation();