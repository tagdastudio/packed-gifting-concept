import type { Hamper, ItemKind } from "@/content/hampers";

type Props = {
  hamper: Hamper;
  uid?: string;
  className?: string;
};

/**
 * A drawn specimen plate for a hamper. The template ships no product photography, so each box gets a flat,
 * catalog-style illustration built from its own contents and wrap colours. A client's photograph can replace it.
 */
export function HamperPlate({ hamper, uid = hamper.slug, className = "" }: Props) {
  const { bg, ink, accent, ribbon, seal } = hamper.wrap;
  const paper = "#f4ead8";
  const paper2 = "#e8dac1";
  const items = hamper.contents.slice(0, 4);
  const positions = [
    { x: 80, y: 120, rotate: -5, scale: 1.02 },
    { x: 330, y: 108, rotate: 3, scale: 1 },
    { x: 96, y: 300, rotate: 2, scale: 0.94 },
    { x: 342, y: 294, rotate: -3, scale: 1.04 },
  ];

  return (
    <svg
      viewBox="0 0 600 700"
      role="img"
      aria-label={`Illustration of ${hamper.name}: ${hamper.contents.map((item) => item.name).join(", ")}.`}
      className={className}
    >
      <defs>
        <pattern id={`${uid}-stripe`} width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
          <rect width="34" height="34" fill={bg} />
          <rect width="1" height="34" fill={accent} opacity="0.2" />
        </pattern>
        <filter id={`${uid}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <rect width="600" height="700" fill={`url(#${uid}-stripe)`} />
      <rect x="15" y="15" width="570" height="670" fill="none" stroke={ink} strokeOpacity="0.18" />

      <text x="34" y="48" fill={ink} fontSize="11" fontWeight="600" letterSpacing="3.4" fontFamily="var(--font-body)">
        PACKED
      </text>
      <text x="566" y="48" textAnchor="end" fill={ink} fontSize="11" fontWeight="600" letterSpacing="2.6" fontFamily="var(--font-body)">
        {hamper.number.toUpperCase()}
      </text>
      <path d="M34 62h532" stroke={ink} strokeOpacity="0.22" />
      <text x="566" y="668" textAnchor="end" fill={ink} fontSize="9" letterSpacing="2.4" opacity="0.65" fontFamily="var(--font-body)">
        MYSURU · INDIA
      </text>

      {/* The open box sits at the bottom; the contents are arranged above it like a specimen plate. */}
      <ellipse cx="300" cy="608" rx="190" ry="18" fill="#0b120d" opacity="0.28" filter={`url(#${uid}-shadow)`} />

      <g>
        <path d="M150 470 190 424h260l40 46H150Z" fill={paper2} stroke={ink} strokeOpacity="0.35" />
        <path d="M450 470h40v104l-40 36V470Z" fill={paper2} stroke={ink} strokeOpacity="0.35" />
        <path d="M150 470h300v140H150V470Z" fill={paper} stroke={ink} strokeOpacity="0.35" />
        <path d="M150 470 190 424h260l40 46H150Z" fill={ink} opacity="0.16" />
        <path d="M150 470h300v140H150V470Z" fill="none" stroke={ink} strokeOpacity="0.4" />

        {/* Ribbon and a loose tag */}
        <path d="M292 424h18v186h-18V424Z" fill={ribbon} />
        <path d="M292 424h18v6h-18v-6Z" fill={paper} opacity="0.28" />
        <path d="M152 520h296v18H152v-18Z" fill={ribbon} opacity="0.94" />
        <path d="M152 520h296v4H152v-4Z" fill={paper} opacity="0.25" />

        <circle cx="301" cy="529" r="21" fill={seal} />
        <circle cx="301" cy="529" r="14" fill="none" stroke={paper} strokeOpacity="0.32" />
        <text x="301" y="537" textAnchor="middle" fill={ink} fontSize="17" fontWeight="600" fontFamily="var(--font-display)">
          P
        </text>

        <path d="M464 512h104l10 16-10 48h-104l-8-32 8-32Z" fill={paper} stroke={ink} strokeOpacity="0.3" />
        <circle cx="468" cy="536" r="3.4" fill="none" stroke={ink} strokeOpacity="0.45" />
        <text x="514" y="542" textAnchor="middle" fill={ink} fontSize="10" letterSpacing="2" fontFamily="var(--font-body)">
          {hamper.number}
        </text>
        <text x="514" y="558" textAnchor="middle" fill={ink} opacity="0.65" fontSize="8" letterSpacing="1.6" fontFamily="var(--font-body)">
          HAND PACKED
        </text>
      </g>

      {items.map((item, index) => {
        const spot = positions[index];
        return (
          <g key={`${item.name}-${index}`} transform={`translate(${spot.x} ${spot.y}) rotate(${spot.rotate}) scale(${spot.scale})`}>
            <ItemGlyph kind={item.kind} ink={ink} paper={paper} paper2={paper2} accent={accent} ribbon={ribbon} seal={seal} />
          </g>
        );
      })}

      <text x="34" y="646" fill={ink} fontSize="9" letterSpacing="2.6" opacity="0.65" fontFamily="var(--font-body)">
        CONTENTS, DRAWN TO SCALE
      </text>
    </svg>
  );
}

type GlyphProps = {
  kind: ItemKind;
  ink: string;
  paper: string;
  paper2: string;
  accent: string;
  ribbon: string;
  seal: string;
};

/** One object, drawn in the same flat, single-weight language on every plate. */
export function ItemGlyph({ kind, ink, paper, paper2, accent, ribbon, seal }: GlyphProps) {
  const stroke = ink;
  const thin = 1.4;

  switch (kind) {
    case "tin":
      return (
        <g>
          <rect x="18" y="28" width="84" height="86" rx="2" fill={accent} stroke={stroke} strokeWidth={thin} />
          <ellipse cx="60" cy="28" rx="42" ry="10" fill={paper} stroke={stroke} strokeWidth={thin} />
          <rect x="18" y="52" width="84" height="26" fill={paper} opacity="0.92" />
          <text x="60" y="69" textAnchor="middle" fill={ink} fontSize="8" letterSpacing="1.4" fontFamily="var(--font-body)">
            NUTS
          </text>
          <path d="M34 92h52M34 101h34" stroke={ink} strokeOpacity="0.35" strokeWidth="1" />
        </g>
      );
    case "bar":
      return (
        <g>
          <rect x="34" y="18" width="52" height="98" rx="2" fill={accent} stroke={stroke} strokeWidth={thin} />
          <rect x="34" y="44" width="52" height="26" fill={paper} />
          <text x="60" y="61" textAnchor="middle" fill={ink} fontSize="8" letterSpacing="1.2" fontFamily="var(--font-body)">
            DARK
          </text>
          <path d="M44 86h32M44 96h22" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
        </g>
      );
    case "jar":
      return (
        <g>
          <rect x="28" y="30" width="64" height="84" rx="9" fill={accent} stroke={stroke} strokeWidth={thin} />
          <rect x="24" y="20" width="72" height="16" rx="4" fill={paper2} stroke={stroke} strokeWidth={thin} />
          <rect x="40" y="52" width="40" height="34" fill={paper} opacity="0.92" />
          <path d="M48 64h24M48 73h16" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
        </g>
      );
    case "candle":
      return (
        <g>
          <rect x="38" y="32" width="44" height="82" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M60 32v-10" stroke={ink} strokeWidth="1.6" />
          <path d="M60 22c-8-7 2-15 6-18 1 9 7 12 3 18-2 4-7 4-9 0Z" fill={ribbon} stroke={ink} strokeWidth="1" />
          <path d="M46 88h28M46 97h18" stroke={ink} strokeOpacity="0.35" strokeWidth="1" />
        </g>
      );
    case "cup":
      return (
        <g>
          <path d="M28 34h58v38c0 20-13 32-29 32S28 92 28 72V34Z" fill={accent} stroke={stroke} strokeWidth={thin} />
          <ellipse cx="57" cy="34" rx="29" ry="8" fill={paper2} stroke={stroke} strokeWidth={thin} />
          <path d="M86 48c18 0 19 26 0 30" fill="none" stroke={stroke} strokeWidth="2" />
          <path d="M42 74h30" stroke={ink} strokeOpacity="0.35" strokeWidth="1" />
        </g>
      );
    case "bottle":
      return (
        <g>
          <path d="M50 10h20v26l12 16v62H38V52l12-16V10Z" fill={accent} stroke={stroke} strokeWidth={thin} />
          <rect x="50" y="10" width="20" height="8" fill={paper2} stroke={stroke} strokeWidth="1" />
          <rect x="44" y="66" width="32" height="24" fill={paper} opacity="0.92" />
          <path d="M52 78h16" stroke={ink} strokeOpacity="0.4" />
        </g>
      );
    case "card":
      return (
        <g>
          <rect x="14" y="42" width="92" height="56" fill={paper} stroke={stroke} strokeWidth={thin} />
          <path d="M26 58h68M26 70h52M26 82h60" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
          <path d="M86 88c4-6 10-5 12 0" stroke={ribbon} strokeWidth="1.6" fill="none" />
        </g>
      );
    case "cloth":
      return (
        <g>
          <rect x="16" y="36" width="88" height="62" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M16 54h88M16 78h88M52 36v62" stroke={ink} strokeOpacity="0.25" strokeWidth="1" />
          <path d="M16 36v62M104 36v62" stroke={paper} strokeOpacity="0.3" strokeWidth="2" />
        </g>
      );
    case "spoon":
      return (
        <g>
          <ellipse cx="60" cy="34" rx="23" ry="17" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M60 51v64" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
          <path d="M50 34c6-4 14-4 20 0" stroke={paper} strokeOpacity="0.4" fill="none" strokeWidth="1.4" />
        </g>
      );
    case "notebook":
      return (
        <g>
          <rect x="26" y="18" width="68" height="96" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M38 18v96" stroke={ink} strokeOpacity="0.3" />
          <rect x="48" y="48" width="30" height="22" fill={paper} opacity="0.9" />
          <path d="M54 58h18M54 66h12" stroke={ink} strokeOpacity="0.4" strokeWidth="1" />
        </g>
      );
    case "pen":
      return (
        <g>
          <rect x="54" y="12" width="13" height="92" rx="2" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M54 104h13l-6.5 14L54 104Z" fill={paper} stroke={stroke} strokeWidth="1" />
          <path d="M67 26h7v24" stroke={stroke} strokeWidth="2" fill="none" />
          <path d="M58 34h5" stroke={paper} strokeOpacity="0.5" />
        </g>
      );
    case "tea":
      return (
        <g>
          <rect x="24" y="28" width="72" height="84" fill={accent} stroke={stroke} strokeWidth={thin} />
          <rect x="24" y="28" width="72" height="10" fill={paper2} stroke={stroke} strokeWidth="1" />
          <rect x="38" y="54" width="44" height="30" fill={paper} opacity="0.92" />
          <path d="M46 66h28M46 74h16" stroke={ink} strokeOpacity="0.45" strokeWidth="1" />
        </g>
      );
    case "keys":
      return (
        <g>
          <circle cx="40" cy="48" r="20" fill="none" stroke={seal} strokeWidth="6" />
          <path d="M58 48h46M90 48v14M78 48v10" stroke={seal} strokeWidth="6" strokeLinecap="round" />
          <circle cx="40" cy="48" r="26" fill="none" stroke={ink} strokeOpacity="0.25" />
        </g>
      );
    case "diya":
      return (
        <g>
          <path d="M22 60c0 24 17 34 38 34s38-10 38-34H22Z" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M60 30c-9-9 3-18 7-22 1 11 8 14 4 21-3 5-8 5-11 1Z" fill={ribbon} stroke={stroke} strokeWidth="1" />
          <path d="M24 96h72" stroke={ink} strokeOpacity="0.3" />
        </g>
      );
    case "biscuits":
      return (
        <g>
          <circle cx="42" cy="62" r="21" fill={accent} stroke={stroke} strokeWidth={thin} />
          <circle cx="70" cy="54" r="21" fill={paper} stroke={stroke} strokeWidth={thin} />
          <circle cx="58" cy="82" r="19" fill={accent} stroke={stroke} strokeWidth={thin} />
          <circle cx="70" cy="54" r="4" fill={ink} opacity="0.35" />
          <circle cx="42" cy="62" r="4" fill={ink} opacity="0.3" />
        </g>
      );
    case "coffee":
      return (
        <g>
          <path d="M30 24h60l-7 90H37L30 24Z" fill={accent} stroke={stroke} strokeWidth={thin} />
          <path d="M30 24h60l-3 12H33l-3-12Z" fill={paper2} stroke={stroke} strokeWidth="1" />
          <rect x="40" y="54" width="40" height="30" fill={paper} opacity="0.92" />
          <path d="M48 66h24M48 74h14" stroke={ink} strokeOpacity="0.45" strokeWidth="1" />
        </g>
      );
    case "clip":
      return (
        <g>
          <path d="M42 28v52c0 14 22 14 22 0V38c0-10-14-10-14 0v44" fill="none" stroke={seal} strokeWidth="6" strokeLinecap="round" />
          <path d="M48 28v52" stroke={ink} strokeOpacity="0.25" strokeWidth="1" />
        </g>
      );
    default:
      return null;
  }
}
