export default function PageAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255,255,255,0.85) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 100% 20%, rgba(220,225,230,0.55) 0%, transparent 50%), radial-gradient(ellipse 65% 45% at 0% 70%, rgba(210,214,218,0.45) 0%, transparent 52%), linear-gradient(180deg, #f2f2f0 0%, #ececea 38%, #e6e6e3 100%)",
        }}
      />

      {/* soft spotlight */}
      <div
        className="absolute left-1/2 top-[12%] h-[55vmax] w-[75vmax] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 38%, transparent 68%)",
          filter: "blur(8px)",
        }}
      />

      {/* depth vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 35%, rgba(0,0,0,0.045) 100%)",
        }}
      />

      {/* refined grid */}
      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 85%)",
        }}
      />

      {/* fine grain */}
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}
