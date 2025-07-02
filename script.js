function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

function scrollToProducts() {
  document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').style.display = 'flex';
  }
};
