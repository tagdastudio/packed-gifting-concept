export function MapPlate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 420"
      role="img"
      aria-label="A drawn, illustrative map of the shop's neighbourhood with a pin marked Packed."
      className={className}
    >
      <rect width="600" height="420" fill="#e8dac1" />
      <g stroke="#1b2a20" strokeOpacity="0.12" strokeWidth="1">
        <path d="M0 92h600M0 220h600M0 324h600M108 0v420M246 0v420M402 0v420M520 0v420" />
      </g>
      <g fill="#1b2a20" opacity="0.08">
        <rect x="122" y="112" width="104" height="88" />
        <rect x="262" y="112" width="120" height="88" />
        <rect x="418" y="112" width="82" height="88" />
        <rect x="122" y="240" width="104" height="62" />
        <rect x="262" y="240" width="120" height="62" />
        <rect x="418" y="240" width="82" height="62" />
      </g>
      <g fill="#5f6b3a" opacity="0.35">
        <rect x="34" y="252" width="52" height="50" />
        <rect x="536" y="112" width="42" height="88" />
      </g>
      <path d="M-20 380C90 348 132 300 220 302c98 2 120 42 232 26 60-8 110-32 168-38" stroke="#c9a77c" strokeWidth="14" fill="none" />
      <path d="M-20 380C90 348 132 300 220 302c98 2 120 42 232 26 60-8 110-32 168-38" stroke="#f4ead8" strokeWidth="2" strokeDasharray="6 8" fill="none" opacity="0.7" />
      <path d="M118 336 246 220 402 236 520 148" stroke="#c8452d" strokeWidth="3" strokeDasharray="3 7" fill="none" />
      <g transform="translate(402 236)">
        <circle r="31" fill="#c8452d" opacity="0.12" />
        <path d="M0-22c-13 0-23 10-23 23 0 17 23 39 23 39s23-22 23-39c0-13-10-23-23-23Z" fill="#c8452d" />
        <circle cy="1" r="8" fill="#f4ead8" />
        <path d="M-4 1 0-3l4 4-4 4-4-4Z" fill="#b08a4f" />
      </g>
      <text x="402" y="292" textAnchor="middle" fill="#1b2a20" fontSize="11" fontWeight="600" letterSpacing="3" fontFamily="var(--font-body)">
        PACKED
      </text>
      <text x="402" y="308" textAnchor="middle" fill="#1b2a20" fontSize="9" letterSpacing="2" opacity="0.65" fontFamily="var(--font-body)">
        VINOBA ROAD
      </text>
      <g transform="translate(42 42)">
        <circle r="18" fill="none" stroke="#1b2a20" strokeOpacity="0.3" />
        <path d="M0-11 5 6 0 3-5 6 0-11Z" fill="#1b2a20" opacity="0.6" />
        <text y="-25" textAnchor="middle" fill="#1b2a20" fontSize="8" letterSpacing="2" opacity="0.6" fontFamily="var(--font-body)">
          N
        </text>
      </g>
      <text x="34" y="396" fill="#1b2a20" fontSize="8" letterSpacing="2.2" opacity="0.55" fontFamily="var(--font-body)">
        A DRAWN MAP, NOT TO SCALE
      </text>
      <text x="566" y="396" textAnchor="end" fill="#1b2a20" fontSize="8" letterSpacing="2.2" opacity="0.55" fontFamily="var(--font-body)">
        MYSURU 570005
      </text>
    </svg>
  );
}
