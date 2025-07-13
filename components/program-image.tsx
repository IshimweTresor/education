interface ProgramImageProps {
  id: number
  type?: "computer" | "business" | "engineering" | "arts" | "science"
}

export default function ProgramImage({ id, type = "computer" }: ProgramImageProps) {
  // Different illustrations based on program type
  const renderIllustration = () => {
    switch (type) {
      case "computer":
        return (
          <>
            {/* Computer/Monitor */}
            <rect x="120" y="120" width="160" height="100" rx="5" fill="#1E293B" />
            <rect x="130" y="130" width="140" height="80" rx="2" fill="#0EA5E9" />
            <rect x="180" y="220" width="40" height="10" fill="#1E293B" />
            <rect x="160" y="230" width="80" height="5" rx="2" fill="#1E293B" />

            {/* Code on screen */}
            <rect x="140" y="140" width="60" height="5" fill="#FFFFFF" />
            <rect x="140" y="150" width="40" height="5" fill="#FFFFFF" />
            <rect x="150" y="160" width="70" height="5" fill="#FFFFFF" />
            <rect x="150" y="170" width="50" height="5" fill="#FFFFFF" />
            <rect x="140" y="180" width="80" height="5" fill="#FFFFFF" />
            <rect x="160" y="190" width="60" height="5" fill="#FFFFFF" />
          </>
        )
      case "business":
        return (
          <>
            {/* Chart/Graph */}
            <rect x="120" y="120" width="160" height="120" rx="5" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />

            {/* Bar chart */}
            <rect x="140" y="190" width="20" height="30" fill="#F97316" />
            <rect x="170" y="170" width="20" height="50" fill="#3B82F6" />
            <rect x="200" y="150" width="20" height="70" fill="#10B981" />
            <rect x="230" y="180" width="20" height="40" fill="#8B5CF6" />

            {/* X and Y axis */}
            <line x1="130" y1="220" x2="270" y2="220" stroke="#64748B" strokeWidth="2" />
            <line x1="130" y1="220" x2="130" y2="130" stroke="#64748B" strokeWidth="2" />

            {/* Briefcase */}
            <rect x="180" y="240" width="40" height="30" rx="5" fill="#64748B" />
            <rect x="190" y="235" width="20" height="5" fill="#64748B" />
          </>
        )
      case "engineering":
        return (
          <>
            {/* Blueprint */}
            <rect x="120" y="120" width="160" height="120" rx="5" fill="#BFDBFE" />

            {/* Blueprint grid */}
            <line x1="120" y1="140" x2="280" y2="140" stroke="#3B82F6" strokeWidth="1" />
            <line x1="120" y1="160" x2="280" y2="160" stroke="#3B82F6" strokeWidth="1" />
            <line x1="120" y1="180" x2="280" y2="180" stroke="#3B82F6" strokeWidth="1" />
            <line x1="120" y1="200" x2="280" y2="200" stroke="#3B82F6" strokeWidth="1" />
            <line x1="120" y1="220" x2="280" y2="220" stroke="#3B82F6" strokeWidth="1" />

            <line x1="140" y1="120" x2="140" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="160" y1="120" x2="160" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="180" y1="120" x2="180" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="200" y1="120" x2="200" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="220" y1="120" x2="220" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="240" y1="120" x2="240" y2="240" stroke="#3B82F6" strokeWidth="1" />
            <line x1="260" y1="120" x2="260" y2="240" stroke="#3B82F6" strokeWidth="1" />

            {/* Engineering design */}
            <circle cx="200" cy="180" r="30" stroke="#0C4A6E" strokeWidth="2" fill="none" />
            <line x1="180" y1="160" x2="220" y2="200" stroke="#0C4A6E" strokeWidth="2" />
            <line x1="180" y1="200" x2="220" y2="160" stroke="#0C4A6E" strokeWidth="2" />

            {/* Tools */}
            <rect x="130" y="250" width="40" height="10" rx="2" fill="#64748B" />
            <rect x="230" y="250" width="30" height="10" rx="5" fill="#64748B" />
          </>
        )
      case "arts":
        return (
          <>
            {/* Canvas */}
            <rect x="150" y="120" width="100" height="120" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />

            {/* Easel */}
            <line x1="140" y1="260" x2="150" y2="120" stroke="#92400E" strokeWidth="5" />
            <line x1="260" y1="260" x2="250" y2="120" stroke="#92400E" strokeWidth="5" />
            <line x1="140" y1="260" x2="260" y2="260" stroke="#92400E" strokeWidth="5" />

            {/* Art on canvas */}
            <circle cx="200" cy="150" r="20" fill="#F97316" />
            <rect x="170" y="180" width="60" height="40" fill="#3B82F6" />

            {/* Paintbrush */}
            <rect x="120" y="200" width="30" height="5" fill="#92400E" />
            <rect x="110" y="197" width="10" height="10" fill="#F97316" />

            {/* Palette */}
            <circle cx="280" cy="200" r="15" fill="#64748B" />
            <circle cx="270" cy="195" r="5" fill="#F97316" />
            <circle cx="280" cy="190" r="5" fill="#3B82F6" />
            <circle cx="290" cy="195" r="5" fill="#10B981" />
          </>
        )
      case "science":
        return (
          <>
            {/* Lab table */}
            <rect x="120" y="180" width="160" height="10" fill="#64748B" />
            <rect x="130" y="190" width="10" height="70" fill="#64748B" />
            <rect x="260" y="190" width="10" height="70" fill="#64748B" />

            {/* Lab equipment */}
            <rect x="150" y="130" width="10" height="50" fill="#CBD5E1" />
            <path d="M140 180 L150 130 L160 130 L170 180 Z" fill="#BFDBFE" />

            <rect x="190" y="150" width="10" height="30" fill="#CBD5E1" />
            <circle cx="195" cy="150" r="15" fill="#BFDBFE" />

            <rect x="230" y="140" width="10" height="40" fill="#CBD5E1" />
            <path d="M220 180 L230 140 L240 140 L250 180 Z" fill="#A7F3D0" />

            {/* Bubbles */}
            <circle cx="155" cy="160" r="3" fill="#FFFFFF" />
            <circle cx="160" cy="150" r="2" fill="#FFFFFF" />
            <circle cx="150" cy="155" r="2" fill="#FFFFFF" />

            <circle cx="195" cy="140" r="3" fill="#FFFFFF" />
            <circle cx="200" cy="145" r="2" fill="#FFFFFF" />

            <circle cx="235" cy="160" r="3" fill="#FFFFFF" />
            <circle cx="230" cy="150" r="2" fill="#FFFFFF" />
          </>
        )
      default:
        return (
          <>
            {/* Default - books and graduation cap */}
            <rect x="150" y="150" width="100" height="20" fill="#F97316" />
            <rect x="150" y="170" width="100" height="20" fill="#3B82F6" />
            <rect x="150" y="190" width="100" height="20" fill="#10B981" />

            <path d="M150 120 L250 120 L200 90 Z" fill="#1E293B" />
            <rect x="190" y="120" width="20" height="10" fill="#1E293B" />
          </>
        )
    }
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="400" height="300" fill="#F8FAFC" />

      {renderIllustration()}

      {/* Program ID badge */}
      <circle cx="50" cy="50" r="20" fill="#F97316" />
      <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FFFFFF">
        {id}
      </text>
    </svg>
  )
}
