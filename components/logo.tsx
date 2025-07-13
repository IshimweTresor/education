import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export default function Logo({ size = "md", variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-900"
  const accentColor = variant === "white" ? "text-white" : "text-orange-500"

  const logoSize = size === "sm" ? "h-8" : size === "lg" ? "h-12" : "h-10"
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"

  return (
    <Link href="/" className="flex items-center gap-2">
      <svg className={logoSize} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="8" fill={variant === "white" ? "#FFFFFF" : "#F97316"} />
        <path
          d="M25 10L40 18V22H38C38 24.6667 36.6667 30 30 30C23.3333 30 22 24.6667 22 22H20V18L25 10Z"
          fill={variant === "white" ? "#F97316" : "#FFFFFF"}
        />
        <path
          d="M15 24V36C15 37.1046 15.8954 38 17 38H33C34.1046 38 35 37.1046 35 36V24"
          stroke={variant === "white" ? "#F97316" : "#FFFFFF"}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="20" y="30" width="10" height="8" fill={variant === "white" ? "#F97316" : "#FFFFFF"} />
        <path
          d="M25 10L10 18L25 26L40 18L25 10Z"
          stroke={variant === "white" ? "#F97316" : "#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-baseline">
        <span className={`font-bold ${textSize} ${accentColor}`}>Study</span>
        <span className={`font-bold ${textSize} ${textColor}`}>Portal</span>
      </div>
    </Link>
  )
}
