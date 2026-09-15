import { Reveal } from './Reveal'

const stats = [
  { label: 'Aktivite', value: 72, color: '#0E7A5F' },
  { label: 'Uyku', value: 58, color: '#4D6FE0' },
  { label: 'Beslenme', value: 65, color: '#3FB88A' },
]

export function FeaturePreview() {
  return (
    <section className="border-t border-[var(--color-line-soft)] bg-[var(--color-surface-muted)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">GluZen deneyiminden bir kesit</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
              Uygulama henüz yayında değil. Aşağıdaki görünüm, deneyimi anlatan temsili bir tasarım
              önizlemesidir.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-14">
          <div className="relative mx-auto max-w-3xl">
            <span className="absolute -top-3 right-5 z-10 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-faint)] shadow-sm">
              Temsili görünüm
            </span>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_30px_60px_-30px_rgba(13,21,18,0.25)]">
              <div className="flex items-center justify-between border-b border-[var(--color-line-soft)] px-6 py-4">
                <div>
                  <p className="text-sm font-semibold">Sağlık Özeti</p>
                  <p className="text-xs text-[var(--color-ink-faint)]">Örnek gösterge paneli</p>
                </div>
                <span className="rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-[0.65rem] font-semibold text-[var(--color-primary-strong)]">
                  Demo
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex items-center gap-4">
                  <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0 -rotate-90">
                    <circle cx="38" cy="38" r="32" fill="none" stroke="var(--color-line)" strokeWidth="7" />
                    <circle
                      cx="38"
                      cy="38"
                      r="32"
                      fill="none"
                      stroke="url(#score-grad)"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={2 * Math.PI * 32 * (1 - 0.78)}
                    />
                    <defs>
                      <linearGradient id="score-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#3FB88A" />
                        <stop offset="1" stopColor="#0E7A5F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>
                    <p className="text-2xl font-bold">78</p>
                    <p className="text-xs text-[var(--color-ink-faint)]">Sağlık skoru (örnek)</p>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-surface-muted)] p-4">
                  <div className="flex items-center gap-2 text-[var(--color-primary-strong)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2" />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-wide">AI İçgörüsü</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    "Son günlerdeki uyku düzenin, akşam aktivite seviyenle ilişkili görünüyor."
                  </p>
                </div>
              </div>

              <div className="border-t border-[var(--color-line-soft)] px-6 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                    Glikoz eğilimi
                  </p>
                  <p className="text-xs text-[var(--color-ink-faint)]">Son 7 gün (örnek)</p>
                </div>
                <svg viewBox="0 0 400 90" className="h-20 w-full overflow-visible">
                  <path
                    d="M0 60 C 30 60, 40 30, 70 34 S 110 65, 140 55 S 180 20, 210 28 S 250 58, 280 48 S 320 22, 350 30 S 385 45, 400 38"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 60 C 30 60, 40 30, 70 34 S 110 65, 140 55 S 180 20, 210 28 S 250 58, 280 48 S 320 22, 350 30 S 385 45, 400 38 V90 H0 Z"
                    fill="var(--color-primary)"
                    opacity="0.06"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-[var(--color-line-soft)] p-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[var(--color-line-soft)] p-4">
                    <p className="text-xs font-medium text-[var(--color-ink-faint)]">{stat.label}</p>
                    <p className="mt-1 text-lg font-bold">{stat.value}%</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
