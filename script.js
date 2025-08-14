document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navItems = document.querySelectorAll('nav ul li');
  const logo = document.getElementById("logo");
  const header = document.querySelector("header");
  const regionButton = document.querySelector(".region-button");
  const maintenanceSection = document.querySelector("#pc-maintenance");
  const readMoreLink = document.querySelector(".read-more");

  // 🍔 Toggle do menu hambúrguer
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // 🖱️ Scroll suave para seções via data-target
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        const target = document.querySelector(`#${targetId}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          nav.classList.remove('active');
          hamburger.classList.remove('active');
        }
      }
    });
  });

  // 🔝 Clique no logo para voltar ao topo
  if (logo) {
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 🌫️ Transparência do header ao rolar + cursor pointer no final
  if (header && logo) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("transparent", window.scrollY > 0);

      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      logo.classList.toggle("pointer", scrollBottom);
    });
  }

  // ✨ Aparição suave do botão de região
  if (regionButton) {
    setTimeout(() => {
      regionButton.classList.add("visible");
    }, 1000);
  }

  // 🎯 Aparição suave da seção de manutenção
  if (maintenanceSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          maintenanceSection.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(maintenanceSection);
  }

  // 📎 Scroll suave ao clicar em "Ler mais..."
  if (readMoreLink && maintenanceSection) {
    readMoreLink.addEventListener("click", e => {
      e.preventDefault();
      maintenanceSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
