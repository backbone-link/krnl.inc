import type { CSSProperties } from "react";

const LOGO = "krnl inc";
// [duration, delay] in seconds — primes avoid visible sync
const FLICKER: Array<[number, number] | null> = [
  [4.7, 3.2], // k
  [6.3, 4.1], // r
  [5.1, 3.6], // n
  [7.7, 4.8], // l
  null, //       (space)
  [5.9, 3.9], // i
  [8.3, 4.4], // n
  [6.7, 3.5], // c
];

const logoChars = Array.from(LOGO).map((ch, i) => {
  const t = FLICKER[i];
  return (
    <span
      key={i}
      className={`lchar${ch === " " ? " space" : ""}`}
      style={
        t
          ? ({
              "--f-dur": `${t[0]}s`,
              "--f-delay": `${t[1]}s`,
            } as CSSProperties)
          : undefined
      }
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  );
});

const TAGLINE = "the kernel of intelligence";
const SUBTITLE = "something is compiling \u2014 stay tuned";
const TAGLINE_START = 2200;
const TAGLINE_CHAR_DELAY = 55;
const SUB_CHAR_DELAY = 30;
const SUB_START = TAGLINE_START + TAGLINE.length * TAGLINE_CHAR_DELAY + 400;

const renderChars = (text: string, baseDelay: number, charDelay: number) =>
  Array.from(text).map((ch, i) => (
    <span
      key={i}
      className={`char${ch === " " ? " space" : ""}`}
      style={{ animationDelay: `${baseDelay + i * charDelay}ms` }}
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

export default function Home() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden font-mono">
      {/* scan line */}
      <div className="animate-scan pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-linear-to-r from-transparent via-krnl-faint to-transparent opacity-0" />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        {/* logo */}
        <div className="text-[13px] font-medium uppercase tracking-[0.45em] text-krnl-accent">
          {logoChars}
        </div>

        {/* tagline area */}
        <div className="flex min-h-20 flex-col items-center gap-5 text-center">
          <div className="tagline-text text-[clamp(18px,4vw,42px)] font-light leading-[1.3] tracking-[-0.01em] text-krnl-text">
            {renderChars(TAGLINE, TAGLINE_START, TAGLINE_CHAR_DELAY)}
            <span className="cursor" />
          </div>
          <div className="sub-text text-[13px] font-light uppercase tracking-[0.15em] text-krnl-dim">
            {renderChars(SUBTITLE, SUB_START, SUB_CHAR_DELAY)}
          </div>
        </div>

        {/* dot divider */}
        <div
          className="animate-fade-in size-0.75 rounded-full bg-krnl-faint opacity-0"
          style={{ animationDelay: "4.8s", animationDuration: "0.6s" }}
        />

        {/* email signup — uncomment when ready
        <div
          className="animate-fade-in flex flex-col items-center gap-6 opacity-0"
          style={{ animationDelay: "5.2s" }}
        >
          <div className="flex items-center overflow-hidden rounded-[2px] border border-krnl-faint transition-colors focus-within:border-krnl-dim">
            <input
              type="email"
              placeholder="enter your email"
              className="w-[260px] bg-transparent px-4 py-3 font-mono text-xs font-light tracking-wider text-krnl-text outline-none placeholder:text-krnl-faint"
            />
            <button
              type="button"
              className="cursor-pointer border-l border-krnl-faint bg-transparent px-5 py-3 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-krnl-dim transition-colors hover:bg-krnl-accent/5 hover:text-krnl-text"
            >
              notify me
            </button>
          </div>
        </div>
        */}
      </div>

      {/* bottom bar */}
      <div
        className="animate-fade-in fixed inset-x-0 bottom-0 z-10 flex items-center justify-between px-10 py-6 text-[11px] font-light uppercase tracking-widest text-krnl-faint opacity-0"
        style={{ animationDelay: "5.6s", animationDuration: "0.6s" }}
      >
        <span>© 2025 krnl inc</span>
        <a
          href="https://x.com/arashx07"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors hover:text-krnl-dim"
        >
          contact
        </a>
      </div>
    </div>
  );
}
