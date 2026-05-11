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
