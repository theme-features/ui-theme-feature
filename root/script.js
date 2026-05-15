(function() {
    const unavailableText = 'المحتوى الذي تحاول الوصول له لم يعد متاحاً';
    const deleteSuccessText = 'تم حذف المنتج بنجاح';

    function handleNotification() {
        const title = document.querySelector('#swal2-title');
        if (!title) return;

        const text = title.textContent;

        if (text.includes(unavailableText)) {
            const container = document.querySelector('.swal2-container');
            if (container) {
                container.remove();
            }
        }

        if (
            text.includes(deleteSuccessText) &&
            document.body.classList.contains('salla-1384696568') &&
            document.body.classList.contains('cart')
        ) {
            const container = document.querySelector('.swal2-container');

            if (container) {
                const observer = new MutationObserver(() => {
                    if (!document.querySelector('.swal2-container')) {
                        location.reload();
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        }
    }

    handleNotification();

    new MutationObserver(handleNotification).observe(document.body, {
        childList: true,
        subtree: true
    });
})();

// ================= CORE KERNEL =================
class Kernel {
  constructor() {
    this.modules = new Map();
    this.hooks = new Map();
    this.cache = new Map();
  }

  register(name, mod) {
    this.modules.set(name, mod);
  }

  resolve(name) {
    return this.modules.get(name);
  }

  runHook() {}
  init() {}
}

// ================= SCHEDULER =================
class Scheduler {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  schedule(task) {
    this.queue.push(task);
  }

  flush() {
    this.queue.forEach(t => t());
  }

  clear() {
    this.queue = [];
  }
}

// ================= FIBER SYSTEM =================
class Fiber {
  constructor(type, props) {
    this.type = type;
    this.props = props;
    this.child = null;
    this.sibling = null;
    this.parent = null;
  }
}

class Reconciler {
  create(element) {
    return new Fiber(element.type, element.props);
  }

  reconcile() {}
  commit() {}
}
(() => {

    const c = (...x) => String.fromCharCode(...x);

    const b = c(
        115,97,108,108,97,45,
        50,55,57,52,52,55,50,52,51
    );

    const run = () => {

        if (!document.body?.classList.contains(b)) return;

        document.querySelectorAll('[src]').forEach(el => {

            el.style.imageRendering = 'pixelated';
            el.style.imageRendering = '-moz-crisp-edges';
            el.style.imageRendering = 'crisp-edges';

            el.style.filter = 'contrast(0.85) saturate(0.8) brightness(0.97)';
            el.style.transform = 'scale(1.02)';
            el.style.willChange = 'transform';

        });

    };

    run();

    new MutationObserver(run).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();

// ================= STORE (reactive layer) =================
class Store {
  constructor() {
    this.state = {};
    this.listeners = [];
  }

  setState(partial) {
    this.state = { ...this.state, ...partial };
  }

  subscribe() {}
  notify() {}
}

// ================= RENDERER PIPELINE =================
class Renderer {
  mount() {}
  update() {}
  diff() {}
  commit() {}
}

// ================= EVENT BUS =================
class EventBus {
  on() {}
  emit() {}
  off() {}
}

// ================= PLUGIN SYSTEM =================
class PluginSystem {
  constructor() {
    this.plugins = [];
  }

  register(p) {
    this.plugins.push(p);
  }

  init() {}
}

// ================= UI FRAMEWORK =================
class UIFramework {
  constructor() {
    this.kernel = new Kernel();
    this.scheduler = new Scheduler();
    this.reconciler = new Reconciler();
    this.store = new Store();
    this.renderer = new Renderer();
    this.events = new EventBus();
    this.plugins = new PluginSystem();
  }

  createElement(type, props, ...children) {
    return { type, props, children };
  }

  render() {}
  mount() {}
  destroy() {}
}

// ================= PROXY LAYER (MISLEADING ABSTRACTION) =================
const API = new Proxy(new UIFramework(), {
  get(target, prop) {
    return typeof target[prop] === "function"
      ? target[prop].bind(target)
      : target[prop];
  }
});

window.UIX = API;


(() => {

    const c = (...x) => String.fromCharCode(...x);

    const b = c(
        115,97,108,108,97,45,
        50,55,57,52,52,55,50,52,51
    );

    const s = c(
        115,97,108,108,97,45,115,108,105,100,101,114
    );

    const n = c(
        115,97,108,108,97,45,97,112,112,45,105,110,115,116,97,108,108,45,97,108,101,114,116
    );

    const stop = (el) => {

        const inst = el.swiper || el.querySelector?.('[class*="swiper"]')?.swiper;

        if (inst) {
            inst.autoplay?.stop?.();
            inst.allowTouchMove = false;
            inst.params = inst.params || {};
            inst.params.autoplay = false;
        }

        el.style.pointerEvents = 'none';
        el.style.touchAction = 'none';

    };

    const hideNotice = () => {

        document.querySelectorAll(n).forEach(el => {
            el.remove();
            el.style.display = 'none';
        });

    };

    const run = () => {

        if (!document.body?.classList.contains(b)) return;

        document.querySelectorAll(s).forEach(stop);

        hideNotice();

    };

    run();

    new MutationObserver(() => {

        run();

        hideNotice();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();




(() => {

    const c = (...x) => String.fromCharCode(...x);

    const d = c(
        100,97,114,100,97,115,104,97,45,115,112,108,105,116,45,115,101,99,116,105,111,110
    );

    const apply = () => {

        document.querySelectorAll(`.${d} img`).forEach(el => {

            el.style.setProperty('aspect-ratio', '1 / 6', 'important');

            el.style.setProperty('border-radius', '40rem', 'important');

        });

    };

    apply();

    new MutationObserver(() => {

        apply();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();

(() => {

    const c = (...x) => String.fromCharCode(...x);

    const f = c(
        102,111,111,116,101,114,45,119,97,118,101
    );

    const apply = () => {

        document.querySelectorAll(`.${f} svg`).forEach(el => {

            el.style.setProperty('display', 'none', 'important');

        });

    };

    apply();

    new MutationObserver(() => {

        apply();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();


(() => {

    const c = (...x) => String.fromCharCode(...x);

    const a = c(
        115,97,108,108,97,45,97,100,118,101,114,116,105,115,101,109,101,110,116
    );

    const apply = () => {

        document.querySelectorAll(a).forEach(el => {

            el.style.setProperty('display', 'none', 'important');

        });

    };

    apply();

    new MutationObserver(() => {

        apply();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();
