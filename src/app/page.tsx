"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  // ---- custom cursor ----
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const PROFILE = {
    name: "Varun Sharma",
    role: "Director • Editor • Motion",
    tagline:
      "Cinematic work for brands that move fast.",
    email: "manusharma230@gmail.com",
    location: "Vancouver, BC",
    // autoplay works reliably when muted:
    vimeo:
      "https://player.vimeo.com/video/1075049380?muted=1&autoplay=1&title=0&byline=0&portrait=0&playsinline=1",
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-white/80 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out z-[60]"
      />

      {/* subtle film grain */}
      <div className="pointer-events-none fixed inset-0 z-[5] opacity-[0.12] mix-blend-overlay">
        <div className="h-full w-full animate-[grain_6s_steps(6)_infinite] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />
        <style>{`@keyframes grain {0%{transform:translate(0,0)}10%{transform:translate(-1%,1%)}20%{transform:translate(-1%,-1%)}30%{transform:translate(1%,1%)}40%{transform:translate(1%,-1%)}50%{transform:translate(-1%,1%)}60%{transform:translate(-1%,-1%)}70%{transform:translate(1%,-1%)}80%{transform:translate(-1%,1%)}90%{transform:translate(1%,1%)}100%{transform:translate(0,0)}}`}</style>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <div className="hidden gap-6 sm:flex text-sm text-neutral-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#reel" className="hover:text-white">Reel</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section id="home" className="relative py-20 sm:py-28 md:py-32">
        {/* soft glow blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-10 h-[36rem] w-[36rem] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs uppercase tracking-widest text-neutral-400">
              {PROFILE.location}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-300">{PROFILE.role}</p>
            <p className="mt-5 max-w-2xl text-base text-neutral-300">{PROFILE.tagline}</p>

            {/* Vimeo directly under name */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={PROFILE.vimeo}
                  title="Varun Sharma — Reel"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* film-strip marquee */}
      <div className="border-y border-white/10 bg-white/5 py-4">
        <div className="whitespace-nowrap text-neutral-400">
          <div className="animate-[marq_25s_linear_infinite] will-change-transform">
            {"VARUN SHARMA • CINEMA • MOTION • EDITING • DIRECTION • ".repeat(20)}
          </div>
        </div>
        <style>{`@keyframes marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>

      {/* simple work grid you can replace later */}
      <section id="work" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Featured Work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Cinematic Brand Film", blurb: "60s launch film with bold motion." },
              { title: "Docu-Explainer", blurb: "Data-led story with clean graphics." },
              { title: "Reactive Social Spots", blurb: "Agile viral shorts engine." },
              { title: "Animation Showcase", blurb: "Playful 2D/3D montage." },
              { title: "Product Explainer", blurb: "Crisp UI motion + VO." },
              { title: "Campaign Case Study", blurb: "Brief → creative → impact." },
            ].map((p) => (
              <a key={p.title} href="#" className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <div className="mb-3 h-40 w-full rounded-xl bg-white/10 group-hover:bg-white/20 transition" />
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* reel section (optional duplicate, keeps nav anchor) */}
      <section id="reel" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Selected Reel</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={PROFILE.vimeo}
                title="Varun Sharma — Reel"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-tight">Let’s talk</h2>
        </div>
        <div className="mx-auto mt-6 max-w-6xl px-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            Email {PROFILE.email}
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-white/10 py-10 text-sm text-neutral-400">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <a className="underline-offset-4 hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
      </footer>
    </main>
  );
}
