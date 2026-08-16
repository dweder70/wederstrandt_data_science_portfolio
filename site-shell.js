document.addEventListener('DOMContentLoaded', async () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');

  if (headerTarget) {
    const headerResponse = await fetch('header.html');
    const headerHtml = await headerResponse.text();
    headerTarget.innerHTML = headerHtml;

    const currentPage = page === '' ? 'index.html' : page;
    headerTarget.querySelectorAll('.nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });

    const brandLink = headerTarget.querySelector('.brand');
    if (brandLink && currentPage === 'index.html') {
      brandLink.classList.add('active');
    }
  }

  if (footerTarget) {
    const footerResponse = await fetch('footer.html');
    const footerHtml = await footerResponse.text();
    footerTarget.innerHTML = footerHtml;
  }
});
