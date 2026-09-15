interface WordmarkProps {
  tone?: 'ink' | 'paper'
  className?: string
}

export function Wordmark({ tone = 'ink', className = '' }: WordmarkProps) {
  const textColor = tone === 'paper' ? '#FBFBF9' : '#0D1512'
  const accentColor = tone === 'paper' ? '#3FB88A' : '#0E7A5F'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#0D1512" />
        <path
          d="M12 36 L22 36 L26 26 L32 46 L37 30 L41 36 L52 36"
          stroke="url(#wordmark-grad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="wordmark-grad" x1="12" y1="26" x2="52" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3FB88A" />
            <stop offset="1" stopColor="#0E7A5F" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className="text-[1.15rem] font-bold tracking-tight"
        style={{ color: textColor, letterSpacing: '-0.01em' }}
      >
        Glu<span style={{ color: accentColor }}>Zen</span>
      </span>
    </span>
  )
}
