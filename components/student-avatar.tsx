interface StudentAvatarProps {
  id: number
}

export default function StudentAvatar({ id }: StudentAvatarProps) {
  // Different color schemes based on student ID
  const colors = [
    { skin: "#FDBA74", hair: "#92400E", shirt: "#3B82F6" },
    { skin: "#FED7AA", hair: "#1E293B", shirt: "#10B981" },
    { skin: "#D8B4FE", hair: "#581C87", shirt: "#F97316" },
    { skin: "#BFDBFE", hair: "#1E3A8A", shirt: "#EC4899" },
    { skin: "#A7F3D0", hair: "#064E3B", shirt: "#8B5CF6" },
  ]

  const color = colors[id % colors.length]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <circle cx="50" cy="50" r="50" fill="#F1F5F9" />

      {/* Shirt/Body */}
      <rect x="30" y="70" width="40" height="40" rx="5" fill={color.shirt} />

      {/* Neck */}
      <rect x="45" y="60" width="10" height="15" fill={color.skin} />

      {/* Face */}
      <circle cx="50" cy="40" r="20" fill={color.skin} />

      {/* Hair - different styles based on ID */}
      {id % 4 === 0 && (
        // Short hair
        <path d="M30 40 A20 20 0 0 1 70 40 L70 30 A20 10 0 0 0 30 30 Z" fill={color.hair} />
      )}

      {id % 4 === 1 && (
        // Long hair
        <path d="M30 40 A20 20 0 0 1 70 40 L70 30 A20 10 0 0 0 30 30 Z M30 40 L25 70 M70 40 L75 70" fill={color.hair} />
      )}

      {id % 4 === 2 && (
        // Curly hair
        <>
          <path d="M30 40 A20 20 0 0 1 70 40 L70 30 A20 10 0 0 0 30 30 Z" fill={color.hair} />
          <circle cx="30" cy="35" r="5" fill={color.hair} />
          <circle cx="70" cy="35" r="5" fill={color.hair} />
          <circle cx="40" cy="25" r="5" fill={color.hair} />
          <circle cx="50" cy="20" r="5" fill={color.hair} />
          <circle cx="60" cy="25" r="5" fill={color.hair} />
        </>
      )}

      {id % 4 === 3 && (
        // Side part
        <path d="M40 40 A20 20 0 0 1 70 40 L70 30 A20 10 0 0 0 40 30 Z" fill={color.hair} />
      )}

      {/* Eyes */}
      <circle cx="40" cy="35" r="3" fill="#1E293B" />
      <circle cx="60" cy="35" r="3" fill="#1E293B" />

      {/* Mouth - different expressions */}
      {id % 3 === 0 && (
        // Smile
        <path d="M40 50 Q50 60 60 50" stroke="#1E293B" strokeWidth="2" fill="none" />
      )}

      {id % 3 === 1 && (
        // Neutral
        <line x1="40" y1="50" x2="60" y2="50" stroke="#1E293B" strokeWidth="2" />
      )}

      {id % 3 === 2 && (
        // Open mouth
        <ellipse cx="50" cy="50" rx="10" ry="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1" />
      )}

      {/* Accessories based on ID */}
      {id % 5 === 0 && (
        // Glasses
        <>
          <circle cx="40" cy="35" r="5" stroke="#64748B" strokeWidth="1" fill="none" />
          <circle cx="60" cy="35" r="5" stroke="#64748B" strokeWidth="1" fill="none" />
          <line x1="45" y1="35" x2="55" y2="35" stroke="#64748B" strokeWidth="1" />
        </>
      )}

      {id % 7 === 0 && (
        // Graduation cap
        <>
          <rect x="35" y="20" width="30" height="5" fill="#1E293B" />
          <path d="M35 20 L50 10 L65 20" fill="#1E293B" />
          <rect x="48" y="10" width="4" height="10" fill="#1E293B" />
          <circle cx="50" cy="10" r="3" fill="#F97316" />
        </>
      )}
    </svg>
  )
}
