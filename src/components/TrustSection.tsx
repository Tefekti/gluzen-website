import { Reveal } from './Reveal'

const principles = [
  {
    title: 'Veri seninle başlar',
    description: 'Sağlık verilerinin sahibi sensin. GluZen bu veriyi senin adına anlamlandırmak için var.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Güvenlik öncelikli tasarım',
    description: 'Platform, geliştirme sürecinin her aşamasında veri güvenliği gözetilerek inşa ediliyor.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 6.5v5c0 5 3.4 8.7 8 9.5 4.6-.8 8-4.5 8-9.5v-5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Kontrol sende',
    description: 'Verilerinin nasıl kullanıldığını görebilmen ve yönetebilmen için netlik önceliğimizdir.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.64 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.65a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.35 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
      </svg>
    ),
  },
]

export function TrustSection() {
  return (
    <section id="hakkimizda" className="border-t border-[var(--color-line-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-strong)]">
                Güven
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Verileriniz değerlidir.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
                GluZen'i, hakkında en hassas verileri paylaşacağın bir platform olarak tasarlıyoruz. Bu
                sorumluluğu, gizliliği ve güvenliği önceliklendirerek karşılıyoruz.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className={i === 2 ? 'sm:col-span-2' : undefined}
              >
                <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
