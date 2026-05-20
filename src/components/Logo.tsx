export function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#FFFFFF" : "var(--ink)";
  return (
    <div className="flex items-center gap-2 select-none" style={{ color }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="3" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8;
          const x = 18 + Math.cos(a) * 9;
          const y = 18 + Math.sin(a) * 9;
          return <ellipse key={i} cx={x} cy={y} rx="2.6" ry="5" fill="currentColor" opacity="0.85" transform={`rotate(${(i * 360) / 8} ${x} ${y})`} />;
        })}
      </svg>
      <div className="leading-none">
        <div className="text-[10px] tracking-[0.3em] uppercase opacity-80" style={{ fontFamily: "var(--font-sans)" }}>the</div>
        <div className="text-2xl italic -mt-0.5" style={{ fontFamily: "var(--font-serif)" }}>off white</div>
      </div>
    </div>
  );
}
