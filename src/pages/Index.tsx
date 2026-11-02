import { useState } from "react";
import { TouchControls } from "@/components/TouchControls";
import logo from "@/assets/arcloudgaming_logo_4156fc1f_0.png";

type Game = {
  id: number;
  title: string;
  platform: string;
  genre: string;
  ping: string;
  gradient: string;
  note?: string;
};

const games: Game[] = [
  { id: 1, title: "Cyber Drift 2077", platform: "PC", genre: "Racing", ping: "24 ms", gradient: "from-fuchsia-600 to-indigo-700" },
  { id: 2, title: "Shadow Realm", platform: "Xbox Controller", genre: "Action RPG", ping: "31 ms", gradient: "from-emerald-500 to-teal-700" },
  { id: 3, title: "Skyforge Tactics", platform: "PC", genre: "Strategy", ping: "28 ms", gradient: "from-amber-500 to-orange-700" },
  { id: 4, title: "Iron Court", platform: "PS5 Controller", genre: "Fighting", ping: "19 ms", gradient: "from-sky-500 to-blue-800" },
  { id: 5, title: "Neon Tide", platform: "PC", genre: "Shooter", ping: "22 ms", gradient: "from-rose-500 to-red-800" },
  { id: 6, title: "Lost Horizon", platform: "Xbox Controller", genre: "Adventure", ping: "35 ms", gradient: "from-violet-500 to-purple-800" },
  { id: 7, title: "Minecraft: Java Edition", platform: "PC", genre: "Sandbox", ping: "26 ms", gradient: "from-green-600 to-lime-800", note: "Not on GeForce NOW. Needs a separate Java account." },
  { id: 8, title: "Minecraft: Bedrock Edition", platform: "PC & Controller", genre: "Sandbox", ping: "23 ms", gradient: "from-lime-500 to-emerald-700", note: "Streams only via Xbox PC Game Pass or Microsoft Store." },
  { id: 9, title: "Minecraft: Education Edition", platform: "PC", genre: "Learning", ping: "30 ms", gradient: "from-cyan-500 to-teal-800", note: "Not available on cloud gaming services." },
  { id: 10, title: "Minecraft: Legacy Console Edition", platform: "Xbox Controller", genre: "Sandbox", ping: "29 ms", gradient: "from-stone-500 to-stone-800", note: "Console-only. Not available on cloud gaming services." },
];

const usesController = (game: Game) => game.platform.includes("Controller");

const steps = [
  { title: "Pick a game", text: "Browse your library or any game you already own on PC or console." },
  { title: "Use on-screen buttons", text: "Controller games get a full gamepad right on your screen. No hardware needed." },
  { title: "Play anywhere", text: "The game runs in the cloud and streams live to your phone screen." },
];

const Index = () => {
  const [selected, setSelected] = useState<Game>(games[0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <img src={logo} alt="ARCloudGaming logo" className="h-8 w-8 rounded-lg" />
            AR<span className="text-primary">CloudGaming</span>
          </span>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#library" className="hover:text-foreground">Library</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </nav>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Sign in
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Cloud gaming for any phone
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Play any PC or controller game on your phone
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Your games run on powerful cloud servers and stream straight to your mobile screen. No downloads, no expensive hardware.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
              Start playing
            </button>
            <button className="rounded-lg border border-border px-6 py-3 font-semibold transition hover:bg-muted">
              Watch demo
            </button>
          </div>
        </div>

        {/* Phone preview */}
        <div className="mx-auto w-full max-w-xs">
          <div className="rounded-[2.5rem] border-8 border-border bg-card p-3 shadow-xl">
            <div className={`relative flex aspect-[9/19] flex-col justify-between overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${selected.gradient} p-5 text-white`}>
              <div className="flex items-center justify-between text-xs opacity-90">
                <span>{selected.ping}</span>
                <span>HD · 60 FPS</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80">Now streaming</p>
                <h2 className="mt-1 text-2xl font-bold">{selected.title}</h2>
                <p className="text-sm opacity-80">{selected.platform}</p>
              </div>
              {usesController(selected) ? (
                <TouchControls />
              ) : (
                <div className="flex items-center justify-between text-sm">
                  <span className="rounded-full bg-black/30 px-3 py-1">Touch & mouse</span>
                  <span className="rounded-full bg-black/30 px-3 py-1">Menu</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Game library</h2>
          <span className="text-sm text-muted-foreground">{games.length} games</span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelected(game)}
              className={`overflow-hidden rounded-xl border bg-card text-left transition hover:-translate-y-1 hover:shadow-lg ${
                selected.id === game.id ? "border-primary ring-2 ring-primary" : "border-border"
              }`}
            >
              <div className={`h-28 bg-gradient-to-br ${game.gradient} md:h-36`} />
              <div className="p-3">
                <p className="font-semibold leading-snug">{game.title}</p>
                <p className="text-xs text-muted-foreground">
                  {game.platform} · {game.genre}
                </p>
                {game.note && (
                  <p className="mt-2 text-[11px] text-muted-foreground">{game.note}</p>
                )}
                {usesController(game) && (
                  <span className="mt-2 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                    On-screen buttons
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-border bg-card p-6">
              <span className="text-sm font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing placeholder */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Pricing</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">Free</h3>
            <p className="mt-1 text-3xl font-bold">$0</p>
            <p className="mt-2 text-sm text-muted-foreground">1 hour sessions, standard quality.</p>
          </div>
          <div className="rounded-xl border border-primary bg-card p-6">
            <h3 className="font-semibold">Pro</h3>
            <p className="mt-1 text-3xl font-bold">$12<span className="text-base font-normal text-muted-foreground">/mo</span></p>
            <p className="mt-2 text-sm text-muted-foreground">Unlimited sessions, 1080p at 60 FPS, priority servers.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ARCloudGaming. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
