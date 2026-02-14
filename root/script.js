// console.log("test-script");


// document.addEventListener('DOMContentLoaded', () => {
//   const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
//   if (ogUrl === 'https://salla.sa/take.trend') {
//     console.log("test2");
//   }
// });

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

        if (
            text.includes(deleteSuccessText) &&
            document.body.classList.contains('salla-1384696568')
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
