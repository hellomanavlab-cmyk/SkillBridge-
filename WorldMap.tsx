const markers = [
  { cx: 180, cy: 118, label: "USA" },
  { cx: 205, cy: 100, label: "Canada" },
  { cx: 380, cy: 90, label: "UK" },
  { cx: 460, cy: 190, label: "UAE" },
  { cx: 540, cy: 190, label: "India" },
  { cx: 640, cy: 260, label: "Australia" },
];

export default function WorldMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-4">
      <svg viewBox="0 0 720 320" className="h-auto w-full" role="img" aria-label="World map highlighting countries with potential freelance opportunities">
        <defs>
          <pattern id="dotgrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="#DDF7F2" />
          </pattern>
        </defs>
        <rect width="720" height="320" fill="url(#dotgrid)" />

        {/* simplified landmass silhouettes, decorative */}
        <g fill="#EAF6F4" stroke="#CFEFEA" strokeWidth="1">
          <ellipse cx="190" cy="120" rx="95" ry="55" />
          <ellipse cx="380" cy="95" rx="55" ry="35" />
          <ellipse cx="410" cy="190" rx="70" ry="70" />
          <ellipse cx="540" cy="170" rx="70" ry="55" />
          <ellipse cx="630" cy="250" rx="55" ry="40" />
        </g>

        {markers.map((m) => (
          <g key={m.label}>
            <circle cx={m.cx} cy={m.cy} r="9" fill="#16B8A6" opacity="0.18" />
            <circle cx={m.cx} cy={m.cy} r="4.5" fill="#16B8A6" />
            <text
              x={m.cx}
              y={m.cy - 14}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="#142B4A"
            >
              {m.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
