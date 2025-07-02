function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

function scrollToProducts() {
  document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function () {
  const backToTop = document.getElementById('backToTop');
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = () => {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').style.display = 'flex';
  }

  if (!sessionStorage.getItem('welcomeShown')) {
    alert('🐶 Bem-vindo à PetSolux! Seu pet merece o melhor. 🛁');
    sessionStorage.setItem('welcomeShown', 'true');
  }
};
