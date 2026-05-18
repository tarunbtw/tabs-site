const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const xIcon = document.getElementById("x-icon");

let isMenuOpen = false;

mobileMenuButton?.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu?.classList.remove("hidden");
    hamburgerIcon?.classList.add("hidden");
    xIcon?.classList.remove("hidden");
  } else {
    mobileMenu?.classList.add("hidden");
    hamburgerIcon?.classList.remove("hidden");
    xIcon?.classList.add("hidden");
  }
});

// entrance animations
window.addEventListener("load", () => {
  const downloadBtn = document.getElementById("download-btn");
  const installHint = document.getElementById("install-hint");
  const preview = document.getElementById("preview");

  setTimeout(() => {
    downloadBtn?.classList.remove("opacity-0", "translate-y-2");
  }, 200);

  setTimeout(() => {
    installHint?.classList.remove("opacity-0", "translate-y-2");
  }, 350);

  setTimeout(() => {
    preview?.classList.remove("opacity-0", "translate-y-4");
  }, 500);
});

// rotating subtitle text
(() => {
  const el = document.getElementById("rotating-text");
  if (!el) return;

  const messages = [
    'a <span class="text-green-400">simple</span> configurable new tab',
    '🔒 <span class="text-lime-400">privacy</span> focused',
    '🎨 customized to <span class="text-pink-400">you</span>',
    '⚙️ <span class="text-yellow-400">endless</span> customizations',
    '🚀 smooth <span class="text-teal-300">animations</span>'
  ];

  let i = 0;

  const show = () => {
    el.innerHTML = messages[i];
    el.classList.remove("opacity-0", "translate-y-4");
    el.classList.add("opacity-100", "translate-y-0");
  };

  const hide = (cb: () => void) => {
    el.classList.remove("opacity-100", "translate-y-0");
    el.classList.add("opacity-0", "translate-y-4");

    const onEnd = (e: TransitionEvent) => {
      if (e.target !== el) return;
      el.removeEventListener("transitionend", onEnd);
      cb();
    };

    el.addEventListener("transitionend", onEnd);
  };

  requestAnimationFrame(show);

  setInterval(() => {
    hide(() => {
      i = (i + 1) % messages.length;
      requestAnimationFrame(show);
    });
  }, 3000);
})();

// preview fade-in
(() => {
  const el = document.getElementById("preview");
  if (!el) return;

  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-y-4");
    el.classList.add("opacity-100", "translate-y-0");
  });
})();