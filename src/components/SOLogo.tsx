import SOXVIIILogo from '@/assets/images/SOXVIII_LOGO_White.png'

interface SOLogoProps {
  className?: string
}

export function SOLogo({ className = '' }: SOLogoProps) {
  return (
    <img
      src={SOXVIIILogo}
      alt="Speech Olympiad Logo"
      className={`object-cover ${className}`}
    />
  )
}
