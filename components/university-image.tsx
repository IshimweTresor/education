interface UniversityImageProps {
  id: number
}

export default function UniversityImage({ id }: UniversityImageProps) {
  // Different color schemes based on university ID
  const colors = [
    { primary: "#F97316", secondary: "#FDBA74", accent: "#7C2D12" },
    { primary: "#3B82F6", secondary: "#BFDBFE", accent: "#1E3A8A" },
    { primary: "#10B981", secondary: "#A7F3D0", accent: "#065F46" },
    { primary: "#8B5CF6", secondary: "#DDD6FE", accent: "#5B21B6" },
    { primary: "#EC4899", secondary: "#FBCFE8", accent: "#9D174D" },
  ]

  const color = colors[id % colors.length]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Sky background */}
      <rect width="400" height="300" fill="#F8FAFC" />

      {/* Main building */}
      <rect x="100" y="100" width="200" height="150" fill={color.primary} />

      {/* Roof/Top */}
      <path d="M80 100 L200 50 L320 100 L80 100" fill={color.accent} />

      {/* Windows */}
      <rect x="120" y="120" width="30" height="40" fill={color.secondary} />
      <rect x="170" y="120" width="30" height="40" fill={color.secondary} />
      <rect x="220" y="120" width="30" height="40" fill={color.secondary} />
      <rect x="270" y="120" width="30" height="40" fill={color.secondary} />

      <rect x="120" y="180" width="30" height="40" fill={color.secondary} />
      <rect x="170" y="180" width="30" height="40" fill={color.secondary} />
      <rect x="220" y="180" width="30" height="40" fill={color.secondary} />
      <rect x="270" y="180" width="30" height="40" fill={color.secondary} />

      {/* Door */}
      <rect x="185" y="200" width="30" height="50" fill={color.accent} />
      <circle cx="195" cy="225" r="3" fill={color.secondary} />

      {/* Steps */}
      <rect x="175" y="250" width="50" height="5" fill="#94A3B8" />
      <rect x="180" y="255" width="40" height="5" fill="#94A3B8" />
      <rect x="185" y="260" width="30" height="5" fill="#94A3B8" />

      {/* Columns */}
      <rect x="110" y="100" width="10" height="150" fill={color.accent} />
      <rect x="280" y="100" width="10" height="150" fill={color.accent} />

      {/* Flag */}
      <rect x="200" y="30" width="5" height="40" fill="#64748B" />
      <rect x="205" y="30" width="30" height="20" fill={color.primary} />

      {/* Trees */}
      <rect x="50" y="230" width="10" height="30" fill="#92400E" />
      <circle cx="55" cy="210" r="20" fill="#84CC16" />

      <rect x="340" y="230" width="10" height="30" fill="#92400E" />
      <circle cx="345" cy="210" r="20" fill="#84CC16" />

      {/* Path */}
      <path d="M200 300 L200 260 L185 260 L215 260" stroke="#94A3B8" strokeWidth="5" />

      {/* University name or emblem */}
      <circle cx="200" cy="80" r="15" fill={color.secondary} />
      <text x="200" y="85" textAnchor="middle" fontSize="20" fontWeight="bold" fill={color.accent}>
        {id}
      </text>
    </svg>
  )
}
