import type { ReactElement } from 'react'

interface DataNode {
  label: string
  top: string
  left: string
  delay: number
  icon: ReactElement
}

const iconProps = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const nodes: DataNode[] = [
  {
    label: 'Glikoz',
    top: '11%',
    left: '50%',
    delay: 0,
    icon: (
      <svg {...iconProps}>
        <path d="M3 12h4l2-6 4 12 2-9 2 3h4" />
      </svg>
    ),
  },
  {
    label: 'Aktivite',
    top: '30.5%',
    left: '83.5%',
    delay: 0.6,
    icon: (
      <svg {...iconProps}>
        <path d="M4 12h3l2 6 4-14 2 8h5" />
      </svg>
    ),
  },
  {
    label: 'Uyku',
    top: '69.5%',
    left: '83.5%',
    delay: 1.2,
    icon: (
      <svg {...iconProps}>
        <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      </svg>
    ),
  },
  {
    label: 'Beslenme',
    top: '88.5%',
    left: '50%',
    delay: 1.8,
    icon: (
      <svg {...iconProps}>
        <path d="M12 3c4 0 7 3 7 7 0 6-4 10-7 11-3-1-7-5-7-11 0-4 3-7 7-7Z" />
        <path d="M12 3v4" />
      </svg>
    ),
  },
  {
    label: 'İlaç Takibi',
    top: '69.5%',
    left: '16.5%',
    delay: 2.4,
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="10" width="16" height="7" rx="3.5" transform="rotate(-45 12 12)" />
        <path d="M9 15 15 9" />
      </svg>
    ),
  },
  {
    label: 'Tansiyon',
    top: '30.5%',
    left: '16.5%',
    delay: 3,
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
      </svg>
    ),
  },
]

export function FloatingOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] select-none" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="orb-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3FB88A" />
            <stop offset="1" stopColor="#0E7A5F" />
          </linearGradient>
          <radialGradient id="orb-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#3FB88A" stopOpacity="0.35" />
            <stop offset="1" stopColor="#3FB88A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="155"
          fill="none"
          stroke="#0E7A5F"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="2 8"
          className="animate-rotate-slow"
          style={{ transformOrigin: '200px 200px' }}
        />
        <circle
          cx="200"
          cy="200"
          r="105"
          fill="none"
          stroke="#4D6FE0"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="1 6"
          className="animate-rotate-slow"
          style={{ transformOrigin: '200px 200px', animationDirection: 'reverse', animationDuration: '46s' }}
        />

        <g stroke="#0E7A5F" strokeOpacity="0.35" strokeWidth="1.25" fill="none">
          <path d="M200 200 L200 45" strokeDasharray="4 6" className="animate-dash-flow" />
          <path
            d="M200 200 L334 122.5"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: '-1s' }}
          />
          <path
            d="M200 200 L334 277.5"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: '-2s' }}
          />
          <path
            d="M200 200 L200 355"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: '-3s' }}
          />
          <path
            d="M200 200 L66 277.5"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: '-4s' }}
          />
          <path
            d="M200 200 L66 122.5"
            strokeDasharray="4 6"
            className="animate-dash-flow"
            style={{ animationDelay: '-5s' }}
          />
        </g>

        <circle cx="200" cy="200" r="90" fill="url(#orb-glow)" className="animate-pulse-glow" style={{ transformOrigin: '200px 200px' }} />
        <circle cx="200" cy="200" r="34" fill="url(#orb-core)" opacity="0.92" />
        <circle cx="200" cy="200" r="34" fill="none" stroke="#FBFBF9" strokeOpacity="0.5" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/90">AI</span>
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="animate-float-slow absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ top: node.top, left: node.left, animationDelay: `${node.delay}s` }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[0_6px_20px_-8px_rgba(13,21,18,0.25)]">
            {node.icon}
          </div>
          <span className="whitespace-nowrap text-[0.65rem] font-medium text-[var(--color-ink-soft)]">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  )
}
