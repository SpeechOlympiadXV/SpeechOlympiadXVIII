import SOXIXLogo from '@/assets/images/SO_XIX_Logo_White_on_Transparent.png'

interface SOLogoProps {
  className?: string
}

export function SOLogo({ className = '' }: SOLogoProps) {
  return (
    <img
      src={SOXIXLogo}
      alt="Speech Olympiad Logo"
      className={`object-cover ${className}`}
    />
  )
}
