import { Reveal } from './Reveal'

const capabilities = [
  {
    title: 'Kişiselleştirilmiş analiz',
    description: 'İçgörüler; genel ortalamalar yerine senin verilerine, senin geçmişine göre şekillenir.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    title: 'Örüntü tespiti',
    description: 'Farklı veri türleri arasındaki bağlantıları ve tekrar eden örüntüleri ortaya çıkarır.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M7.8 7.4 10.5 16M16.2 7.4 13.5 16M8.2 6h7.6" />
      </svg>
    ),
  },
  {
    title: 'Trend analizi',
    description: 'Zaman içindeki değişimleri görünür kılar; kısa vadeli dalgalanmayla gerçek eğilimi ayırt eder.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18 9 11l4 4 7-9" />
        <path d="M15 6h5v5" />
      </svg>
    ),
  },
  {
    title: 'Açıklanabilir içgörüler',
    description: 'Her içgörünün arkasındaki "neden"i sade bir dille anlatır — kapalı bir kutu değildir.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18h.01" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4.5" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

export function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-[var(--color-paper)] sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[420px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(63,184,138,0.16),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-mint)]">
              Yapay Zekâ
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Yapay zekâ sadece cevap vermemeli,
              <br className="hidden sm:block" /> sağlığını anlamalı.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-white/70">
              GluZen'in yapay zekâsı, verilerini yorumlayıp anlamlandıran bir yardımcı olarak tasarlandı —
              tanı koymaz, karar dayatmaz. Amaç senin sağlığın hakkında daha net görmen.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mint)]/15 text-[var(--color-mint)]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-xl text-center text-sm text-white/45">
            GluZen bir tanı aracı değildir ve tıbbi tavsiye yerine geçmez. Sağlıkla ilgili kararların için
            her zaman bir sağlık uzmanına danış.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
