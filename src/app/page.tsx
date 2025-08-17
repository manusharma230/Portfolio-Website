export default function Home() {
  const PROFILE = {
    name: "Varun Sharma",
    role: "Director • Editor • Motion",
    tagline: "I craft conversion-focused films and motion for brands that move fast.",
    location: "Vancouver, BC",
    email: "manusharma230@gmail.com",
    vimeo: "https://player.vimeo.com/video/1075049380?muted=0&autoplay=0&title=0&byline=0&portrait=0",
  };

  const PROJECTS = [
    { title: "Cinematic Brand Film", blurb: "High-impact 60s launch film blending live action and AI-driven motion." },
    { title: "Docu-Explainer Series", blurb: "Six-part mini doc with data-driven storytelling and clean graphics." },
    { title: "Reactive Social Spots", blurb: "Agile social content engine delivering viral shorts in days, not weeks." },
    { title: "Animation Showcase", blurb: "Playful 2D/3D montage with bold color, rhythm, and character." },
    { title: "Product Explainer", blurb: "Crisp UI motion + VO to clarify features and value." },
    { title: "Campaign Case Study", blurb: "From brief to results—strategy, creative, measured impact." },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <header className="sticky top-0 z-30 border-b border-neutral-800/80 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <div className="hidden gap-6 sm:flex text-sm text-neutral-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden py-20 sm:py-28 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-semibold sm:text-6xl">{PROFILE.name}</h1>
          <p className="mt-3 text-lg text-neutral-300">{PROFILE.role}</p>
          <p className="mt-5 max-w-2xl text-base text-neutral-300">{PROFILE.tagline}</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 shadow-sm">
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

      <section id="work" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">Featured Work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:bg-neutral-900/60 transition">
                <div className="mb-3 h-40 w-full rounded-xl bg-neutral-800/60" />
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 max-w-3xl text-neutral-300">
            I blend directing, editing, and motion with lean production. From fast-turn social to flagship campaigns,
            I design flows that keep quality high and timelines tight.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold">Let’s talk</h2>
          <p className="mt-6 text-neutral-300">Email me a quick brief, timeline, and any refs. I’ll reply with next steps.</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-5 inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Email {PROFILE.email}
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-10 text-sm text-neutral-400">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <a href={`mailto:${PROFILE.email}`} className="underline-offset-4 hover:underline">{PROFILE.email}</a>
        </div>
      </footer>
    </main>
  );
}
