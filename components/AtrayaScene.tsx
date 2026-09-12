"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "@fontsource-variable/manrope";

type AtrayaSceneProps = {
  /** Set to the official contact URL when available. */
  contactHref?: string;
};

function ScrollNavbar({ contactHref }: AtrayaSceneProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050c14]/90 backdrop-blur-xl">
      <nav aria-label="Navegação principal" className="mx-auto flex min-h-18 max-w-[1440px] items-center justify-between gap-6 px-6 sm:px-12 lg:px-20">
        <a href="#inicio" aria-label="Atraya — início" className="atraya-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76c9bf]"><Image src="/images/atraya-logo.png" alt="ATRAYA" width={2172} height={724} unoptimized className="atraya-brand-image" /></a>
        <div className="flex items-center gap-6 text-xs font-medium sm:text-sm">
          <a href="#inicio" className="text-[#acb7bf] transition-colors hover:text-[#e7eae6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76c9bf]">Início</a>
          {contactHref && <a href={contactHref} className="rounded-[3px] border border-white/25 px-4 py-3 text-[#e7eae6] transition-colors hover:border-[#76c9bf] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76c9bf]">Falar com a Atraya <span aria-hidden="true" className="ml-2 text-[#76c9bf]">↗</span></a>}
        </div>
      </nav>
    </header>
  );
}

const scenes = [120, 96, 120];
const totalFrames = scenes.reduce((sum, count) => sum + count, 0);
function frameUrl(index: number) {
  let scene = 0;
  while (index >= scenes[scene] && scene < scenes.length - 1) {
    index -= scenes[scene++];
  }
  return `/sequences/scene-0${scene + 1}/frame-${String(index + 1).padStart(4, "0")}.webp`;
}

export default function AtrayaScene({ contactHref }: AtrayaSceneProps) {
  const container = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = container.current;
    const surface = canvas.current;
    const context = surface?.getContext("2d", { alpha: false });
    if (!section || !surface || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cache = new Map<number, HTMLImageElement>();
    const pending = new Set<number>();
    const failed = new Set<number>();
    let target = 0;
    let disposed = false;
    let raf = 0;
    let lastDrawn = -1;

    function draw(index: number) {
      const image = cache.get(index);
      if (!image || !surface || !context) return;
      const scale = Math.max(surface.width / image.naturalWidth, surface.height / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.drawImage(image, (surface.width - width) / 2, (surface.height - height) / 2, width, height);
      surface.dataset.frame = String(index);
      lastDrawn = index;
    }

    function load(index: number) {
      if (index < 0 || index >= totalFrames || cache.has(index) || pending.has(index) || failed.has(index) || pending.size >= 6) return;
      pending.add(index);
      const image = new window.Image();
      image.decoding = "async";
      image.onload = () => {
        pending.delete(index);
        if (disposed) return;
        cache.set(index, image);
        // Keep decoded images bounded, including when scrolling backward.
        if (cache.size > 36) {
          const farthest = [...cache.keys()].sort((a, b) => Math.abs(b - target) - Math.abs(a - target))[0];
          cache.delete(farthest);
        }
        if (index === target || lastDrawn < 0) draw(index);
        schedule();
      };
      image.onerror = () => { pending.delete(index); failed.add(index); if (!disposed) schedule(); };
      image.src = frameUrl(index);
    }

    function update() {
      raf = 0;
      if (!section || !surface || document.hidden) return;
      const bounds = section.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const distance = Math.max(1, section.offsetHeight - surface.clientHeight);
      const progress = Math.max(0, Math.min(1, -bounds.top / distance));
      target = motion.matches ? 0 : Math.round(progress * (totalFrames - 1));
      if (cache.has(target)) draw(target);
      load(target);
      if (!motion.matches) {
        for (let offset = 1; offset <= 8; offset++) { load(target + offset); load(target - offset); }
      }
    }
    function schedule() { if (!raf && !disposed) raf = window.requestAnimationFrame(update); }
    function resize() {
      if (!surface) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface.width = Math.round(surface.clientWidth * ratio);
      surface.height = Math.round(surface.clientHeight * ratio);
      if (lastDrawn >= 0) draw(lastDrawn);
      schedule();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(surface);
    window.addEventListener("scroll", schedule, { passive: true });
    document.addEventListener("visibilitychange", schedule);
    motion.addEventListener("change", schedule);
    resize();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      document.removeEventListener("visibilitychange", schedule);
      motion.removeEventListener("change", schedule);
      cache.clear();
    };
  }, []);

  const ctaClassName = "group inline-flex min-h-14 items-center justify-between gap-10 rounded-[3px] border border-[#dce5e4]/30 bg-[#0a171e]/60 px-6 py-4 text-[13px] font-semibold tracking-[0.01em] text-[#e7eae6] transition-colors hover:border-[#76c9bf]/70 hover:bg-[#14262c]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#76c9bf]";

  return (
    <section id="inicio" ref={container} lang="pt-BR" aria-labelledby="atraya-hero-title" style={{ fontFamily: '"Manrope Variable", sans-serif' }} className="relative w-full bg-[#050c14] text-[#e7eae6]">
      <ScrollNavbar contactHref={contactHref} />
      <div className="atraya-story-stage relative isolate flex min-h-svh items-center overflow-hidden">
      <div data-hero-background aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/sequences/scene-01/frame-0001.webp)" }} />
        <canvas ref={canvas} className="relative h-full w-full" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(5,12,20,0.90)_15%,rgba(5,12,20,0.72)_65%,rgba(5,12,20,0.58))]" />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 sm:px-12 md:py-32 lg:px-20">
        <div className="relative z-10 mx-auto max-w-[720px] text-center md:mx-0 md:max-w-[min(68vw,780px)] md:text-left">
          <h1 id="atraya-hero-title" className="text-[clamp(2.35rem,5.2vw,4.65rem)] leading-[1.08] font-[500] tracking-[-0.045em] text-balance">
            Construímos tecnologia para empresas em movimento.
          </h1>
          <p className="mx-auto mt-7 max-w-[480px] text-[15px] leading-[1.8] font-normal tracking-[0.005em] text-[#acb7bf] sm:text-base md:mx-0 md:mt-8 md:max-w-[490px]">
            Sites, sistemas e automações sob medida para negócios que querem operar melhor, vender mais e crescer.
          </p>
          <div className="mt-9 md:mt-10">
            {contactHref ? (
              <a href={contactHref} className={ctaClassName}>
                Falar com a Atraya <span aria-hidden="true" className="text-lg font-normal text-[#76c9bf]">↗</span>
              </a>
            ) : (
              <button type="button" disabled className={`${ctaClassName} disabled:cursor-not-allowed`}>
                Falar com a Atraya <span aria-hidden="true" className="text-lg font-normal text-[#76c9bf]">↗</span>
              </button>
            )}
          </div>
        </div>
        <a href="#sobre" className="absolute right-6 bottom-6 z-10 min-h-11 px-3 py-3 text-xs text-[#93a4b1] hover:text-white focus-visible:outline-2 focus-visible:outline-[#73cfc5] sm:right-12 lg:right-20">Pular abertura ↓</a>
      </div>
      </div>
    </section>
  );
}

