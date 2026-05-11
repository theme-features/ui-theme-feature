(function() {
    const unavailableText = 'المحتوى الذي تحاول الوصول له لم يعد متاحاً';
    const deleteSuccessText = 'تم حذف المنتج بنجاح';

    function handleNotification() {
        const title = document.querySelector('#swal2-title');
        if (!title) return;

        const text = title.textContent;

        // الحالة الأولى: اخفاء إشعار المحتوى غير المتاح
        if (text.includes(unavailableText)) {
            const container = document.querySelector('.swal2-container');
            if (container) {
                container.remove();
            }
        }

        // إعادة تحميل الصفحة فقط إذا كانت الصفحة تحتوي على body.cart
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


(() => {

    const c = (...x) => String.fromCharCode(...x);

    const b = c(
        115,97,108,108,97,45,
        50,55,57,52,52,55,50,52,51
    );

    const t = c(
        115,97,108,108,97,45,
        115,108,105,100,101,114
    );

    const lock = () => {

        if (!document.body?.classList.contains(b)) return;

        document.querySelectorAll(t).forEach(el => {

            const inst = el.swiper || el.querySelector?.('[class*="swiper"]')?.swiper;

            if (inst) {
                inst.allowTouchMove = false;
                inst.autoplay?.stop?.();
            }

            el.style.touchAction = 'none';
            el.style.pointerEvents = 'none';

            const wrap = el.querySelector('[class*="wrapper"]');
            if (wrap) {
                wrap.style.transform = 'translate3d(0px,0px,0px)';
                wrap.style.transitionDuration = '0ms';
            }

            el.querySelectorAll('button').forEach(btn => {
                btn.style.display = 'none';
            });

        });

    };

    lock();

    new MutationObserver(lock).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();
