export function BuildDiagram({ className = "" }: { className?: string }) {
  const slots = [
    { x: 92, y: 108, kind: "jar", fill: "#c8452d" },
    { x: 236, y: 108, kind: "tin", fill: "#b08a4f" },
    { x: 380, y: 108, kind: "bar", fill: "#3b2418" },
    { x: 92, y: 238, kind: "candle", fill: "#e0a32e" },
    { x: 236, y: 238, kind: "cloth", fill: "#2e4a52" },
    { x: 380, y: 238, kind: "card", fill: "#e8dac1" },
    { x: 236, y: 368, kind: "pen", fill: "#b08a4f" },
  ];

  return (
    <svg viewBox="0 0 600 560" role="img" aria-label="A top-down box with seven slots, six filled." className={className}>
      <rect width="600" height="560" fill="#1b2a20" />
      <rect x="16" y="16" width="568" height="528" fill="none" stroke="#f4ead8" strokeOpacity="0.16" />
      <text x="34" y="48" fill="#f4ead8" fontSize="10" letterSpacing="3" fontFamily="var(--font-body)" opacity="0.65">
        YOUR BOX
      </text>
      <text x="566" y="48" textAnchor="end" fill="#f4ead8" fontSize="10" letterSpacing="3" fontFamily="var(--font-body)" opacity="0.65">
        6 / 7
      </text>

      <path d="M78 92 110 72h380l32 20v386l-32 20H110l-32-20V92Z" fill="#24382b" stroke="#f4ead8" strokeOpacity="0.35" />
      <path d="M78 92 110 72h380l32 20H78Z" fill="#2e4a52" stroke="#f4ead8" strokeOpacity="0.25" />
      <path d="M78 478 110 498h380l32-20H78Z" fill="#1b2a20" opacity="0.6" />

      {slots.map((slot, index) => (
        <g key={index} transform={`translate(${slot.x} ${slot.y})`}>
          <rect width="120" height="110" fill="#f4ead8" opacity={slot.kind === "pen" ? 0.06 : 0.1} stroke="#f4ead8" strokeOpacity="0.15" />
          {slot.kind === "pen" ? (
            <g>
              <path d="M52 18v74" stroke="#f4ead8" strokeOpacity="0.3" strokeDasharray="4 5" />
              <path d="M52 18v74" stroke="#b08a4f" strokeWidth="5" />
            </g>
          ) : (
            <g>
              <circle cx="60" cy="48" r="23" fill={slot.fill} />
              <circle cx="60" cy="48" r="12" fill="#1b2a20" opacity="0.25" />
              <text x="60" y="88" textAnchor="middle" fill="#f4ead8" fontSize="8" letterSpacing="1.6" fontFamily="var(--font-body)" opacity="0.6">
                {slot.kind.toUpperCase()}
              </text>
            </g>
          )}
        </g>
      ))}

      <path d="M288 72h24v426h-24V72Z" fill="#c8452d" />
      <path d="M78 288h444v22H78v-22Z" fill="#c8452d" opacity="0.85" />
      <circle cx="300" cy="299" r="20" fill="#b08a4f" />
      <text x="300" y="306" textAnchor="middle" fill="#1b2a20" fontSize="16" fontWeight="600" fontFamily="var(--font-display)">
        P
      </text>

      <path d="M470 220h96l10 16-10 44h-96l-8-30 8-30Z" fill="#f4ead8" stroke="#1b2a20" strokeOpacity="0.3" />
      <text x="514" y="248" textAnchor="middle" fill="#1b2a20" fontSize="8" letterSpacing="1.8" fontFamily="var(--font-body)">
        ONE SLOT
      </text>
      <text x="514" y="260" textAnchor="middle" fill="#1b2a20" fontSize="7" letterSpacing="1.4" fontFamily="var(--font-body)" opacity="0.6">
        LEFT
      </text>

      <text x="34" y="532" fill="#f4ead8" fontSize="9" letterSpacing="2.6" fontFamily="var(--font-body)" opacity="0.55">
        PETITE 3 · MEDIUM 5 · GRAND 7
      </text>
    </svg>
  );
}
