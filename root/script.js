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
        115,45,112,114,111,100,117,99,116,115,
        45,115,108,105,100,101,114
    );

    const w = c(
        115,119,105,112,101,114,45,
        119,114,97,112,112,101,114
    );

    const p = c(
        115,45,115,108,105,100,101,114,
        45,112,114,101,118
    );

    const n = c(
        115,45,115,108,105,100,101,114,
        45,110,101,120,116
    );

    const lock = () => {

        if (!document.body?.classList.contains(b)) return;

        document.querySelectorAll(s).forEach(slider => {

            slider.style.pointerEvents = 'none';

            const wrap = slider.querySelector(`.${w}`);

            if (wrap) {

                wrap.style.transform = 'translate3d(0px,0px,0px)';
                wrap.style.transitionDuration = '0ms';

            }

            slider.querySelectorAll(`.${p}, .${n}`).forEach(btn => {

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
