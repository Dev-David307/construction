  const slides = document.querySelectorAll('.hero-slider .slide');
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds per slide

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, slideInterval);


  setInterval(autoSlide, 5000);

    const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

    document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-box h2");
    const speed = 200; // lower = faster

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.textContent.replace(/\D/g, '');
          const increment = Math.ceil(target / speed);
          let count = 0;

          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.textContent = count;
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = counter.getAttribute("data-original");
            }
          };

          if (!counter.classList.contains("counted")) {
            counter.setAttribute("data-original", counter.textContent);
            counter.classList.add("counted");
            counter.textContent = "0";
            updateCount();
          }
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
  });

 document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // You can replace this with actual backend submission later
      alert('Thank you for your message! We will get back to you soon.');
      form.reset(); // Clear the form
    });
  });

  const buttons = document.querySelectorAll('.filter-buttons button');
  const works = document.querySelectorAll('.gallery .work');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      works.forEach(work => {
        const category = work.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          work.style.display = 'block';
        } else {
          work.style.display = 'none';
        }
      });
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

