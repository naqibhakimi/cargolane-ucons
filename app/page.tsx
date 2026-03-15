"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "We're building something awesome... our developer went for coffee. ☕",
  "Pardon our dust! The hamsters powering our servers are on a break. 🐹",
  "Under construction — please excuse the digital sawdust! 🔨",
  "Our robots are working 24/7. Well, one robot. He's trying his best. 🤖",
  "Building magic here. Estimated time: soon™",
  "Please stand by. Our intern is learning HTML. 💪",
];

export default function UnderConstruction() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="dark relative min-h-dvh overflow-hidden bg-background font-sans">
      {/* Animated tape stripes - primary */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              135deg,
              transparent,
              transparent 20px,
              hsl(var(--primary)) 20px,
              hsl(var(--primary)) 40px
            )`,
            animation: "tapeShimmer 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating cones */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[15%] top-[20%] text-4xl opacity-60 animate-bounce" style={{ animationDelay: "0s", animationDuration: "2.5s" }}>🚧</span>
        <span className="absolute right-[20%] top-[25%] text-3xl opacity-50 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3s" }}>🪧</span>
        <span className="absolute left-[25%] bottom-[30%] text-3xl opacity-45 animate-bounce" style={{ animationDelay: "1s", animationDuration: "2.8s" }}>🔧</span>
        <span className="absolute right-[15%] bottom-[25%] text-4xl opacity-55 animate-bounce" style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}>⛏️</span>
      </div>

      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16">
        {/* Hard hat + title - primary */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <span
            className="text-7xl sm:text-8xl"
            style={{
              animation: "wiggle 2s ease-in-out infinite",
            }}
          >
            🏗️
          </span>
          <h1
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary"
          >
            Under Construction
          </h1>
        </div>

        {/* Rotating funny message */}
        <div className="mb-12 max-w-lg text-center">
          <p
            key={msgIndex}
            className="text-lg text-foreground/90 sm:text-xl"
            style={{
              animation: "fadeInUp 0.6s ease-out",
            }}
          >
            {MESSAGES[msgIndex]}
          </p>
        </div>

        {/* Progress bar - muted track, primary fill */}
        <div className="mb-8 w-full max-w-xs overflow-hidden rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary"
            style={{
              width: "90%",
              animation: "progressJitter 2s ease-in-out infinite",
            }}
          />
        </div>
        {/* <p className="text-sm text-muted-foreground">
          Progress: 90% — the last 10% is &quot;almost done&quot; (we&apos;ve been saying that since 2023)
        </p> */}

        {/* CTA */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Check back soon. Or bring snacks. We like snacks. 🍕
        </p>
      </main>

    </div>
  );
}
