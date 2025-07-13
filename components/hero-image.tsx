export default function HeroImage() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="800" height="500" fill="#F8FAFC" />
      {/* Library/Study Area */}
      <rect x="50" y="50" width="700" height="400" rx="10" fill="#F1F5F9" />
      {/* Bookshelves */}
      <rect x="60" y="60" width="120" height="380" fill="#E2E8F0" />
      <rect x="70" y="70" width="100" height="60" fill="#CBD5E1" />
      <rect x="70" y="140" width="100" height="60" fill="#CBD5E1" />
      <rect x="70" y="210" width="100" height="60" fill="#CBD5E1" />
      <rect x="70" y="280" width="100" height="60" fill="#CBD5E1" />
      <rect x="70" y="350" width="100" height="60" fill="#CBD5E1" />
      {/* Study Table */}
      <rect x="220" y="200" width="300" height="150" rx="5" fill="#CBD5E1" />
      <rect x="230" y="210" width="280" height="130" rx="3" fill="#F8FAFC" />
      {/* Student 1 (sitting at table) */}
      <circle cx="320" cy="180" r="30" fill="#F97316" /> {/* Head */}
      <rect x="305" y="210" width="30" height="60" rx="5" fill="#3B82F6" /> {/* Body */}
      <rect x="290" y="230" width="15" height="40" rx="3" fill="#3B82F6" /> {/* Left arm */}
      <rect x="335" y="230" width="15" height="40" rx="3" fill="#3B82F6" /> {/* Right arm */}
      {/* Student 2 (sitting at table) */}
      <circle cx="420" cy="180" r="30" fill="#FDBA74" /> {/* Head */}
      <rect x="405" y="210" width="30" height="60" rx="5" fill="#10B981" /> {/* Body */}
      <rect x="390" y="230" width="15" height="40" rx="3" fill="#10B981" /> {/* Left arm */}
      <rect x="435" y="230" width="15" height="40" rx="3" fill="#10B981" /> {/* Right arm */}
      {/* Books on table */}
      <rect x="260" y="220" width="40" height="10" fill="#F97316" />
      <rect x="260" y="230" width="40" height="10" fill="#3B82F6" />
      <rect x="260" y="240" width="40" height="10" fill="#10B981" />
      <rect x="450" y="220" width="40" height="10" fill="#F97316" />
      <rect x="450" y="230" width="40" height="10" fill="#3B82F6" />
      {/* Laptop */}
      <rect x="340" y="230" width="60" height="40" rx="3" fill="#64748B" />
      <rect x="345" y="235" width="50" height="30" rx="2" fill="#0EA5E9" />
      <rect x="340" y="270" width="60" height="5" rx="2" fill="#475569" />
      {/* Student 3 (standing) */}
      <circle cx="600" cy="150" r="30" fill="#A3E635" /> {/* Head */}
      <rect x="585" y="180" width="30" height="80" rx="5" fill="#8B5CF6" /> {/* Body */}
      <rect x="570" y="190" width="15" height="50" rx="3" fill="#8B5CF6" /> {/* Left arm */}
      <rect x="615" y="190" width="15" height="50" rx="3" fill="#8B5CF6" /> {/* Right arm */}
      <rect x="585" y="260" width="15" height="50" rx="3" fill="#8B5CF6" /> {/* Left leg */}
      <rect x="600" y="260" width="15" height="50" rx="3" fill="#8B5CF6" /> {/* Right leg */}
      {/* Book in hand */}
      <rect x="550" y="210" width="30" height="20" rx="2" fill="#F97316" />
      {/* Window */}
      <rect x="620" y="70" width="120" height="100" rx="5" fill="#BFDBFE" />
      <line x1="680" y1="70" x2="680" y2="170" stroke="#3B82F6" strokeWidth="2" />
      <line x1="620" y1="120" x2="740" y2="120" stroke="#3B82F6" strokeWidth="2" />
      {/* Plants */}
      <rect x="650" y="300" width="40" height="40" rx="3" fill="#84CC16" />
      <path d="M670 300 L660 270 L670 280 L680 270 L670 300" fill="#84CC16" />
      <path d="M670 300 L650 260 L665 275 L690 260 L670 300" fill="#84CC16" />
      {/* Study lamp */}
      <rect x="230" y="170" width="10" height="40" fill="#64748B" />
      <path d="M235 170 L215 140 L255 140 L235 170" fill="#F97316" />
      <circle cx="235" cy="140" r="10" fill="#FDBA74" />
    </svg>
  )
}
