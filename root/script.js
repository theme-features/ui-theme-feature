console.log("test-script");


document.addEventListener('DOMContentLoaded', () => {
  const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
  if (ogUrl === 'https://salla.sa/take.trend') {
    console.log("test2");
  }
});