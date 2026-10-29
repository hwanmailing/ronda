class TextAnimation {
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
      // ScrollTrigger 및 TextPlugin 등록
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof TextPlugin !== 'undefined') {
          gsap.registerPlugin(TextPlugin);
        }
        if (typeof DrawSVGPlugin !== 'undefined') {
          gsap.registerPlugin(DrawSVGPlugin);
        }
        this.setupAnimations();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAnimation);
    } else {
      initAnimation();
    }
  }

  // data-aot 속성을 가진 모든 요소에 애니메이션 적용
  setupAnimations() {
    const elements = document.querySelectorAll('[data-aot]');
    
    elements.forEach(element => {
      const animationType = element.getAttribute('data-aot');
      const duration = element.getAttribute('data-aot-duration') || this.config.duration;
      const delay = element.getAttribute('data-aot-delay') || 0;
      const offset = element.getAttribute('data-aot-offset') || this.config.offset;
      const once = element.getAttribute('data-aot-once') !== null 
        ? element.getAttribute('data-aot-once') === 'true' 
        : this.config.once;

      this.applyAnimation(element, animationType, {
        duration: parseInt(duration) / 1000, // ms를 초로 변환
        delay: parseInt(delay) / 1000,
        offset: parseInt(offset),
        once: once
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

  // 텍스트를 글자 단위로 분리
  splitTextIntoChars(text) {
    return text.split('').map(char => char === ' ' ? '\u00A0' : char);
  }

  // 텍스트를 단어 단위로 분리
  splitTextIntoWords(text) {
    return text.split(/(\s+)/).filter(word => word.length > 0);
  }

  // 요소의 텍스트 노드를 재귀적으로 찾아서 처리
  processTextNodes(element, callback) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      // 빈 텍스트 노드가 아닌 경우만 포함
      if (node.textContent && node.textContent.length > 0) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(callback);
  }

  // HTML 태그를 보존하면서 텍스트를 글자 단위로 분리하고 DOM에 적용
  splitTextIntoCharsWithHTML(element) {
    const allSpans = [];
    const textNodes = [];
    
    // 먼저 모든 텍스트 노드를 수집
    this.processTextNodes(element, (textNode) => {
      textNodes.push(textNode);
    });
    
    // 각 텍스트 노드를 처리
    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      if (!text.trim() && !text) return; // 빈 텍스트 노드는 건너뛰기
      
      const chars = this.splitTextIntoChars(text);
      const spans = [];
      
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        spans.push(span);
        allSpans.push(span);
      });
      
      // 텍스트 노드를 span들로 교체
      if (spans.length > 0) {
        const parent = textNode.parentNode;
        if (parent) {
          spans.forEach(span => {
            parent.insertBefore(span, textNode);
          });
          parent.removeChild(textNode);
        }
      }
    });

    return allSpans;
  }

  // HTML 태그를 보존하면서 텍스트를 단어 단위로 분리하고 DOM에 적용
  splitTextIntoWordsWithHTML(element) {
    const allSpans = [];
    const textNodes = [];
    
    // 먼저 모든 텍스트 노드를 수집
    this.processTextNodes(element, (textNode) => {
      textNodes.push(textNode);
    });
    
    // 각 텍스트 노드를 처리
    textNodes.forEach((textNode) => {
      const text = textNode.textContent;
      if (!text.trim() && !text) return; // 빈 텍스트 노드는 건너뛰기
      
      const words = this.splitTextIntoWords(text);
      const spans = [];
      
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        if (word.match(/\s+/)) {
          span.style.marginRight = '0.3em';
        }
        spans.push(span);
        allSpans.push(span);
      });
      
      // 텍스트 노드를 span들로 교체
      if (spans.length > 0) {
        const parent = textNode.parentNode;
        if (parent) {
          spans.forEach(span => {
            parent.insertBefore(span, textNode);
          });
          parent.removeChild(textNode);
        }
      }
    });

    return allSpans;
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

    switch (type) {
      case 'type':
        this.type(element, opts);
        break;
      case 'char':
        this.char(element, opts);
        break;
      case 'word':
        this.word(element, opts);
        break;
      case 'fade':
        this.fade(element, opts);
        break;
      case 'slide':
        this.slide(element, opts);
        break;
      case 'draw':
        this.draw(element, opts);
        break;
      case 'explode':
        this.explode(element, opts);
        break;
      case 'implode':
        this.implode(element, opts);
        break;
      case 'wave':
        this.wave(element, opts);
        break;
      default:
        this.type(element, opts);
        break;
    }
  }

  // 타이핑 효과 (TextPlugin 사용)
  type(element, options) {
    const originalHTML = element.innerHTML;
    const originalText = element.textContent;
    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    // 초기 상태: 빈 텍스트 (HTML 구조는 유지)
    // HTML 태그가 있는 경우 innerHTML을 사용, 없으면 textContent 사용
    if (originalHTML !== originalText) {
      // HTML 태그가 있는 경우: 텍스트만 숨기고 구조는 유지
      this.processTextNodes(element, (textNode) => {
        textNode.textContent = '';
      });
    } else {
      element.textContent = '';
    }

    gsap.to(element, {
      text: originalText,
      duration: options.duration,
      delay: options.delay,
      ease: 'none',
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 글자별 순차 등장
  char(element, options) {
    const spans = this.splitTextIntoCharsWithHTML(element);
    const charCount = spans.length;
    
    if (charCount === 0) return;

    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);
    // duration을 글자수로 나누어 각 글자당 시간 계산
    const charDuration = options.duration / charCount;
    
    gsap.to(spans, {
      opacity: 1,
      duration: charDuration,
      stagger: charDuration,
      delay: options.delay,
      ease: 'none',
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 단어별 순차 등장
  word(element, options) {
    const spans = this.splitTextIntoWordsWithHTML(element);
    const wordCount = spans.length;
    
    if (wordCount === 0) return;

    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);
    // duration을 단어수로 나누어 각 단어당 시간 계산
    const wordDuration = options.duration / wordCount;
    
    gsap.to(spans, {
      opacity: 1,
      duration: wordDuration,
      stagger: wordDuration,
      delay: options.delay,
      ease: 'none',
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 페이드 인 효과
  fade(element, options) {
    const originalText = element.textContent;
    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    gsap.fromTo(element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: options.duration,
        delay: options.delay,
        scrollTrigger: scrollTriggerConfig
      }
    );
  }

  // 슬라이드 인 효과
  slide(element, options) {
    const originalText = element.textContent;
    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    gsap.fromTo(element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration,
        delay: options.delay,
        scrollTrigger: scrollTriggerConfig
      }
    );
  }

  // SVG 그리기 효과 (DrawSVGPlugin 사용)
  draw(element, options) {
    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);
    
    // 요소 내부의 SVG path를 찾기 (.draw 클래스 또는 path 요소)
    const svgPath = element.querySelector('.draw') || element.querySelector('path') || element.querySelector('svg path');
    
    if (!svgPath) {
      console.warn('TextAnimation.draw: SVG path를 찾을 수 없습니다. .draw 클래스나 path 요소가 필요합니다.');
      return;
    }

    // DrawSVGPlugin을 사용한 그리기 애니메이션
    gsap.from(svgPath, {
      drawSVG: '0%',
      ease: 'expo.out',
      duration: options.duration,
      delay: options.delay,
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 텍스트 폭발 효과 (폭발하며 사라짐)
  explode(element, options) {
    const spans = this.splitTextIntoCharsWithHTML(element);
    const charCount = spans.length;
    
    if (charCount === 0) return;

    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    // 초기 상태 설정 - 글자가 이미 보이는 상태에서 시작
    gsap.set(element, { opacity: 1 });
    gsap.set(spans, {
      opacity: 1,
      y: 0,
      rotation: 0,
      x: 0
    });

    // 폭발 효과 (물리 효과로 날아감)
    const explodeDuration = options.duration || 2.5;
    gsap.to(spans, {
      duration: explodeDuration,
      opacity: 0,
      rotation: () => gsap.utils.random(-2000, 2000),
      x: () => gsap.utils.random(-500, 500),
      y: () => gsap.utils.random(-500, 500),
      ease: 'power2.out',
      stagger: 0.015,
      delay: options.delay,
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 텍스트 내파 효과 (폭발 상태에서 원래대로 돌아옴)
  implode(element, options) {
    const spans = this.splitTextIntoCharsWithHTML(element);
    const charCount = spans.length;
    
    if (charCount === 0) return;

    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    // 초기 상태 설정 - 폭발된 상태에서 시작
    gsap.set(element, { opacity: 1 });
    
    // 각 글자에 랜덤한 폭발 위치 저장
    const explodePositions = spans.map(() => ({
      x: gsap.utils.random(-500, 500),
      y: gsap.utils.random(-500, 500),
      rotation: gsap.utils.random(-2000, 2000)
    }));

    // 초기 상태를 폭발된 위치로 설정
    spans.forEach((span, index) => {
      const pos = explodePositions[index];
      gsap.set(span, {
        opacity: 0,
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation
      });
    });

    // 원래 위치로 돌아오는 효과
    const explodeDuration = options.duration || 2.5;
    gsap.to(spans, {
      duration: explodeDuration,
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.015,
      delay: options.delay,
      scrollTrigger: scrollTriggerConfig
    });
  }

  // 텍스트 웨이브 효과 (elastic 등장)
  wave(element, options) {
    const spans = this.splitTextIntoCharsWithHTML(element);
    const charCount = spans.length;
    
    if (charCount === 0) return;

    const scrollTriggerConfig = this.getScrollTriggerConfig(element, options);

    // 초기 상태 설정
    gsap.set(element, { opacity: 1 });
    gsap.set(spans, {
      opacity: 0,
      y: 100,
      rotation: 90
    });

    // 글자들이 나타나는 효과 (elastic)
    gsap.to(spans, {
      duration: options.duration || 1,
      y: 0,
      rotation: 0,
      opacity: 1,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.03,
      delay: options.delay,
      scrollTrigger: scrollTriggerConfig
    });
  }
}

const g_pTextAnimation = new TextAnimation({
  duration: 800,
  once: true,
  offset: 100
});

