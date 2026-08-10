/* ==========================================================
   Site Navigation
========================================================== */

const navigationToggle = document.querySelector("[data-site-menu-toggle]");

const navigationMenu = document.querySelector("[data-site-menu]");

document.documentElement.classList.add("js");

if (navigationToggle && navigationMenu) {
  const closeNavigation = () => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigationMenu.dataset.open = "false";
  };

  navigationToggle.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";

    navigationToggle.setAttribute("aria-expanded", String(!isOpen));

    navigationMenu.dataset.open = String(!isOpen);
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navigationToggle.focus();
    }
  });
}

/* ==========================================================
   Current Year
========================================================== */

for (const year of document.querySelectorAll("[data-current-year]")) {
  year.textContent = String(new Date().getFullYear());
}

/* ==========================================================
   Copy Email Button
========================================================== */

function initializeCopyEmail() {
  const copyButton = document.getElementById("copy-email-button");

  if (!copyButton) {
    return;
  }

  if (copyButton.dataset.initialized === "true") {
    return;
  }

  copyButton.dataset.initialized = "true";

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("Pedakolimi.Harish@gmail.com");

      const originalText = copyButton.textContent;

      copyButton.textContent = "Email Copied!";

      setTimeout(() => {
        copyButton.textContent = originalText;
      }, 2000);
    } catch (error) {
      alert("Pedakolimi.Harish@gmail.com");
    }
  });
}

/* ==========================================================
   Image Lightbox
========================================================== */

function initializeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImage) {
    return;
  }

  if (lightbox.dataset.initialized === "true") {
    return;
  }

  lightbox.dataset.initialized = "true";

  let imageScale = 1;

  let translateX = 0;
  let translateY = 0;

  let dragging = false;

  let startX = 0;
  let startY = 0;

  const updateImageTransform = () => {
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${imageScale})`;
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");

    document.body.style.overflow = "";

    const caption = document.getElementById("lightbox-caption");

    if (caption) {
      caption.textContent = "";
      caption.hidden = true;
    }

    imageScale = 1;
    translateX = 0;
    translateY = 0;

    updateImageTransform();
  };

  /*
   * Project images use .c-gallery-slider img
   */
  document.querySelectorAll(".c-gallery-slider img").forEach((image) => {
    if (image.dataset.lightboxInitialized === "true") {
      return;
    }

    image.dataset.lightboxInitialized = "true";

    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      const caption = document.getElementById("lightbox-caption");

      if (caption) {
        caption.textContent = image.dataset.caption || "";
        caption.hidden = !image.dataset.caption;
      }

      imageScale = 1;
      translateX = 0;
      translateY = 0;

      updateImageTransform();

      lightbox.classList.add("is-open");

      document.body.style.overflow = "hidden";

      lightboxImage.style.cursor = "zoom-in";
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target !== lightbox) {
      return;
    }

    closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  /* ----------------------------------------------------------
     Mouse Wheel Zoom
  ---------------------------------------------------------- */

  lightbox.addEventListener(
    "wheel",
    (event) => {
      if (!lightbox.classList.contains("is-open")) {
        return;
      }

      event.preventDefault();

      if (event.deltaY < 0) {
        imageScale += 0.15;
      } else {
        imageScale -= 0.15;
      }

      imageScale = Math.max(0.5, Math.min(imageScale, 5));

      updateImageTransform();

      lightboxImage.style.cursor = imageScale > 1 ? "grab" : "zoom-in";
    },
    { passive: false },
  );

  /* ----------------------------------------------------------
     Drag Image
  ---------------------------------------------------------- */

  lightboxImage.addEventListener("mousedown", (event) => {
    if (imageScale <= 1) {
      return;
    }

    dragging = true;

    startX = event.clientX - translateX;
    startY = event.clientY - translateY;

    lightboxImage.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (event) => {
    if (!dragging) {
      return;
    }

    translateX = event.clientX - startX;
    translateY = event.clientY - startY;

    updateImageTransform();
  });

  document.addEventListener("mouseup", () => {
    dragging = false;

    lightboxImage.style.cursor = imageScale > 1 ? "grab" : "zoom-in";
  });
}

/* ==========================================================
   Read More
========================================================== */

function initializeReadMore() {
  document.querySelectorAll("[data-expand-button]").forEach((button) => {
    if (button.dataset.initialized === "true") {
      return;
    }

    const content = button.nextElementSibling;

    if (!content) {
      return;
    }

    button.dataset.initialized = "true";

    button.addEventListener("click", () => {
      const isOpen = content.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));

      button.textContent = isOpen ? "Read Less ↑" : "Read More ↓";
    });
  });
}

/* ==========================================================
   Project Media Carousels
========================================================== */

function initializeCarousels() {
  document.querySelectorAll(".c-media-carousel").forEach((mediaCarousel) => {
    if (mediaCarousel.dataset.initialized === "true") {
      return;
    }

    const carousel = mediaCarousel.querySelector("[data-carousel]");

    if (!carousel) {
      return;
    }

    const previousButton = mediaCarousel.querySelector("[data-carousel-prev]");

    const nextButton = mediaCarousel.querySelector("[data-carousel-next]");

    const dotsContainer = mediaCarousel.parentElement.querySelector(
      "[data-carousel-dots]",
    );

    if (!previousButton || !nextButton) {
      return;
    }

    mediaCarousel.dataset.initialized = "true";

    const getItems = () => {
      return Array.from(carousel.children);
    };

    const getItemWidth = () => {
      const firstItem = carousel.children[0];

      if (!firstItem) {
        return carousel.clientWidth;
      }

      const style = window.getComputedStyle(carousel);

      const gap = parseFloat(style.columnGap || style.gap || "0");

      return firstItem.getBoundingClientRect().width + gap;
    };

    /* ========================================================
       Arrow Navigation
    ======================================================== */

    previousButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: -getItemWidth(),
        behavior: "smooth",
      });
    });

    nextButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: getItemWidth(),
        behavior: "smooth",
      });
    });

    /* ========================================================
       Carousel Dots
    ======================================================== */

    if (dotsContainer) {
      const items = getItems();

      dotsContainer.innerHTML = "";

      items.forEach((_, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "c-carousel-dot";

        dot.setAttribute("aria-label", `Go to item ${index + 1}`);

        dot.addEventListener("click", () => {
          carousel.scrollTo({
            left: index * getItemWidth(),
            behavior: "smooth",
          });
        });

        dotsContainer.appendChild(dot);
      });

      const updateDots = () => {
        const itemWidth = getItemWidth();

        if (!itemWidth) {
          return;
        }

        const index = Math.round(carousel.scrollLeft / itemWidth);

        const dots = dotsContainer.querySelectorAll(".c-carousel-dot");

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === index);
        });
      };

      carousel.addEventListener("scroll", updateDots, { passive: true });

      updateDots();
    }
  });
}

/* ==========================================================
   Video Fullscreen + Caption
========================================================== */

function initializeVideoFullscreen() {
  document.querySelectorAll("[data-video-player]").forEach((player) => {
    if (player.dataset.initialized === "true") {
      return;
    }

    const fullscreenButton = player.querySelector("[data-video-fullscreen]");

    if (!fullscreenButton) {
      return;
    }

    player.dataset.initialized = "true";

    fullscreenButton.addEventListener("click", async () => {
      try {
        if (!document.fullscreenElement) {
          await player.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      } catch (error) {
        console.error("Fullscreen error:", error);
      }
    });
  });
}

/* ==========================================================
   Experience Item Loader
========================================================== */

async function loadExperienceItems() {
  const experienceContainer = document.getElementById("experience-items");

  if (!experienceContainer) {
    return;
  }

  const experienceItems = [
    /* "/assets/experience_assets/project_demo/project_demo.html", */
    /* uncomment this if you want to test something */

    "/assets/experience_assets/project_ember/project_ember.html",
    "/assets/experience_assets/iit_bhilai/iit_bhilai.html",
    "/assets/experience_assets/safefollow/safefollow.html",
    "/assets/experience_assets/four_bar_workspace_envelope/four_bar_workspace_envelope.html",
    "/assets/experience_assets/mobile_3d_printer/mobile_3d_printer.html",
    "/assets/experience_assets/scara_construction/scara_construction.html",
    "/assets/experience_assets/kelvin6k/kelvin6k.html",
    "/assets/experience_assets/aibar/aibar.html",
    "/assets/experience_assets/gitam_university/gitam_university.html",
  ];

  for (const itemPath of experienceItems) {
    try {
      const response = await fetch(itemPath);

      if (!response.ok) {
        throw new Error(`Failed to load experience item: ${itemPath}`);
      }

      const html = await response.text();

      experienceContainer.insertAdjacentHTML("beforeend", html);

      if (typeof window.renderTechBadges === "function") {
        window.renderTechBadges();
      }
    } catch (error) {
      console.error(error);
    }
  }

  /*
   * Project HTML has now been inserted.
   * Initialize everything that depends on it.
   */

  initializeExperienceComponents();
}

/* ==========================================================
   Experience Components
========================================================== */

function initializeExperienceComponents() {
  initializeReadMore();
  initializeLightbox();
  initializeCarousels();
  initializeVideoFullscreen();
}

/* ==========================================================
   Page Initialization
========================================================== */

document.addEventListener("DOMContentLoaded", async () => {
  initializeCopyEmail();

  await loadExperienceItems();

  initializeExperienceComponents();

  /*
   * Handle direct links to dynamically loaded experience items.
   *
   * Example:
   * /experience/#mobile_3d_printer
   *
   * The browser processes the hash before the project HTML
   * has been fetched, so we perform the scroll after loading.
   */
  const hash = window.location.hash;

  if (hash) {
    const targetId = decodeURIComponent(hash.substring(1));
    const target = document.getElementById(targetId);

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
});
