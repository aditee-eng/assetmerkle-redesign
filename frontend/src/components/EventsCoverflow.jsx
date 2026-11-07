import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// Coverflow-style timeline. items: [{ id, title, image, date, subtitle, description, href }]
// Oldest on the left, newest on the right. Starts on the newest event.
const EventsCoverflow = ({ items, linkLabel = "View event" }) => {
  const [active, setActive] = useState(items.length - 1);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const check = () => setSmall(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const go = (i) => setActive(Math.max(0, Math.min(items.length - 1, i)));
  const cw = small ? 190 : 250;
  const first = small ? 125 : 215;
  const gap = small ? 45 : 80;
  const current = items[active];

  return (
    <section
      className="relative w-full py-16 text-white outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(active + 1);
        if (e.key === "ArrowLeft") go(active - 1);
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-6">
          <p className="text-sm text-slate-400">Drag, click a poster or use the arrow keys to move through time</p>
          <div className="flex gap-3">
            {[[-1, ChevronLeft, "Earlier event"], [1, ChevronRight, "Later event"]].map(([d, Icon, label]) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => go(active + d)}
                disabled={active + d < 0 || active + d > items.length - 1}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15 disabled:opacity-30"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/50"
          style={{ height: small ? 460 : 540, perspective: 1400 }}
          onPanEnd={(_, info) => {
            if (info.offset.x < -50) go(active + 1);
            if (info.offset.x > 50) go(active - 1);
          }}
        >
          {items.map((c, i) => {
            const o = i - active;
            const a = Math.abs(o);
            const sign = Math.sign(o);
            const x = o === 0 ? 0 : sign * (first + (a - 1) * gap);
            return (
              <motion.button
                key={c.id}
                onClick={() => go(i)}
                aria-label={c.title}
                className="absolute left-1/2 top-8 text-left"
                style={{ width: cw, marginLeft: -cw / 2, zIndex: 100 - a, pointerEvents: a > 3 ? "none" : "auto" }}
                animate={{
                  x,
                  rotateY: o === 0 ? 0 : -sign * 52,
                  scale: o === 0 ? 1 : 0.88,
                  opacity: a > 3 ? 0 : 1 - a * 0.1,
                  filter: `brightness(${o === 0 ? 1 : 0.5})`,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
              >
                <p className="truncate text-xs font-semibold text-white/90">{c.title}</p>
                <p className="mb-3 truncate text-[11px] text-white/50">{c.date}</p>
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  draggable={false}
                  className="w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/15"
                  style={{ aspectRatio: "3 / 4" }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        <div className="mt-8 flex items-center gap-1.5" role="tablist" aria-label="Events timeline">
          {items.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`${c.date}: ${c.title}`}
              onClick={() => go(i)}
              className="group flex-1 py-3"
            >
              <span className={`block h-1 rounded-full transition-colors duration-300 ${i === active ? "bg-gradient-to-r from-violet-500 to-blue-500" : i < active ? "bg-white/40" : "bg-white/15 group-hover:bg-white/30"}`} />
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div>
              <p className="text-sm font-semibold text-violet-300">{current.date}</p>
              <h3 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">{current.title}</h3>
              {current.subtitle && <p className="mt-1 text-sm font-semibold text-slate-400">{current.subtitle}</p>}
              <p className="mt-3 line-clamp-3 max-w-2xl text-slate-400">{current.description}</p>
            </div>
            {current.href && (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
              >
                {linkLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsCoverflow;
