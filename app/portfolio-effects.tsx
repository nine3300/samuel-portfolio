"use client";

import { useEffect } from "react";

// Port of the template's inline <script>: micro-interactions, magnetic physics,
// 3D tilt, theme flash and the starfield canvas.
export default function PortfolioEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | HTMLElement,
      type: K,
      handler: (e: WindowEventMap[K]) => void,
      options?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, handler as EventListener, options);
      cleanups.push(() => target.removeEventListener(type, handler as EventListener, options));
    };

    // 1. Dynamic Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // 2. Interactive Cosmic Pointer Glow Follower
    const follower = document.getElementById("cosmic-glow-follower");
    on(window, "pointermove", (e) => {
      if (follower) {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
      }
    });

    // 3. Spotlight Border & Specular Illumination Tracker for all spotlight-cards
    document.querySelectorAll<HTMLElement>(".spotlight-card").forEach((card) => {
      on(card, "pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });

    // 4. Subtle 3D Perspective Tilt on Featured Case Studies
    document.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
      on(card, "mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      on(card, "mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });

    // 5. Magnetic Hover Physics on Key Action Buttons
    document.querySelectorAll<HTMLElement>(".magnetic-btn").forEach((btn) => {
      on(btn, "mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });

      on(btn, "mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    });

    // 6. Enhanced Rotating Role Subtitle Animation
    const roles = ["Frontend Developer", "Full-Stack Engineer", "System Architect", "UI/UX Craftsman"];
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = true;
    const roleElement = document.getElementById("role-text");
    let typeTimer: ReturnType<typeof setTimeout>;

    function typeRole() {
      if (!roleElement) return;
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 45 : 85;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2400; // Pause at complete title
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 450; // Pause before typing next word
      }

      typeTimer = setTimeout(typeRole, speed);
    }
    // Launch after slight delay to align with title reveal
    typeTimer = setTimeout(typeRole, 2600);
    cleanups.push(() => clearTimeout(typeTimer));

    // 9 (declared early). Starfield colors, updated by the theme toggle
    let starColor = "rgba(255, 255, 255, ";
    let lineColor = "rgba(6, 182, 212, ";

    function updateCanvasColors(theme: "light" | "dark") {
      if (theme === "light") {
        starColor = "rgba(100, 70, 160, ";
        lineColor = "rgba(124, 58, 237, ";
      } else {
        starColor = "rgba(255, 255, 255, ";
        lineColor = "rgba(6, 182, 212, ";
      }
    }

    // 7. Theme Toggle with Cosmic Aura Flash Micro-Interaction
    const themeToggleBtn = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    const themeFlash = document.getElementById("theme-flash");
    const html = document.documentElement;

    function setTheme(mode: "light" | "dark") {
      if (themeFlash) {
        themeFlash.classList.remove("scale-0");
        themeFlash.classList.add("scale-150");
        setTimeout(() => {
          themeFlash.classList.remove("scale-150");
          themeFlash.classList.add("scale-0");
        }, 350);
      }

      if (mode === "light") {
        html.classList.remove("dark");
        document.body.style.backgroundColor = "#faf5fc";
        document.body.style.backgroundImage = "linear-gradient(135deg, #fbf7fd 0%, #f5eefc 40%, #ffeedd 100%)";
        document.body.style.color = "#191228";
        sunIcon?.classList.remove("hidden", "rotate-90", "scale-0");
        sunIcon?.classList.add("rotate-0", "scale-100");
        moonIcon?.classList.add("hidden");
        updateCanvasColors("light");
      } else {
        html.classList.add("dark");
        document.body.style.backgroundColor = "#05070e";
        document.body.style.backgroundImage = "radial-gradient(circle at 50% 10%, #0d1224 0%, #05070e 100%)";
        document.body.style.color = "#f1f5f9";
        moonIcon?.classList.remove("hidden");
        moonIcon?.classList.remove("rotate-90", "scale-0");
        moonIcon?.classList.add("rotate-0", "scale-100");
        sunIcon?.classList.add("hidden");
        updateCanvasColors("dark");
      }
    }

    setTheme("dark");

    if (themeToggleBtn) {
      on(themeToggleBtn, "click", () => {
        const isDark = html.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      });
    }

    // 8. Intersection Observer for Smooth Staggered Reveals & Trajectory Beam Progress
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    // Trajectory Timeline Progress Beam update on scroll
    const timelineContainer = document.getElementById("timeline-container");
    const trajectoryBeam = document.getElementById("trajectory-beam");

    function updateTrajectoryBeam() {
      if (!timelineContainer || !trajectoryBeam) return;
      const rect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.75) {
        const scrolled = (windowHeight * 0.75 - rect.top) / rect.height;
        const progress = Math.min(100, Math.max(0, scrolled * 100));
        trajectoryBeam.style.height = `${progress}%`;
      } else {
        trajectoryBeam.style.height = "0%";
      }
    }
    on(window, "scroll", updateTrajectoryBeam, { passive: true });
    updateTrajectoryBeam();

    // 9. Interactive Starfield & Constellation Canvas
    const canvas = document.getElementById("starfield") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    let frame = 0;

    if (canvas && ctx) {
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const mouse: { x: number | null; y: number | null; radius: number } = { x: null, y: null, radius: 140 };

      type Star = { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; twinkleSpeed: number };
      let stars: Star[] = [];
      const STAR_COUNT = Math.floor((width * height) / 9500);

      const initStars = () => {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.35,
            vy: -(Math.random() * 0.4 + 0.15),
            alpha: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
          });
        }
      };

      on(window, "resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initStars();
      });

      on(window, "mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      on(window, "mouseleave" as keyof WindowEventMap, () => {
        mouse.x = null;
        mouse.y = null;
      });

      initStars();

      const renderStarfield = () => {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];

          star.y += star.vy;
          star.x += star.vx;

          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;

          star.alpha += Math.sin(Date.now() * star.twinkleSpeed) * 0.015;
          const currentAlpha = Math.max(0.15, Math.min(0.9, star.alpha));

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = starColor + currentAlpha + ")";
          ctx.fill();

          for (let j = i + 1; j < stars.length; j++) {
            const s2 = stars[j];
            const dx = star.x - s2.x;
            const dy = star.y - s2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 75) {
              const lineAlpha = (1 - dist / 75) * 0.18;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.strokeStyle = lineColor + lineAlpha + ")";
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }

          if (mouse.x !== null && mouse.y !== null) {
            const mdx = star.x - mouse.x;
            const mdy = star.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mdist < mouse.radius) {
              const mAlpha = (1 - mdist / mouse.radius) * 0.45;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = "rgba(6, 182, 212, " + mAlpha + ")";
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }
        }

        frame = requestAnimationFrame(renderStarfield);
      };
      renderStarfield();
      cleanups.push(() => cancelAnimationFrame(frame));
    }

    // 10. Sticky Nav Glass Effect on Scroll
    const navContainer = document.getElementById("nav-container");
    on(
      window,
      "scroll",
      () => {
        if (!navContainer) return;
        if (window.scrollY > 40) {
          navContainer.classList.add("shadow-2xl", "border-cyan-500/30", "bg-space-950/80");
        } else {
          navContainer.classList.remove("shadow-2xl", "border-cyan-500/30", "bg-space-950/80");
        }
      },
      { passive: true }
    );

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
