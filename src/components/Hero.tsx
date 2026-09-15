import { FloatingOrb } from './FloatingOrb'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-primary-soft),transparent)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-strong)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)] animate-pulse-glow" />
              GluZen • Yakında
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]">
              Sağlığını anla.
              <br />
              <span className="text-gradient">Geleceğini yönet.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              GluZen, dağınık sağlık verilerini tek bir yerde toplayan ve yapay zekâ ile
              anlamlı içgörülere dönüştüren yeni nesil bir sağlık yönetimi platformu.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cok-yakinda"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_30px_-12px_rgba(14,122,95,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Çok Yakında
              </a>
              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-primary-strong)]"
              >
                Nasıl çalışır?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 text-xs text-[var(--color-ink-faint)]">
              Görselleştirilen veri noktaları demo amaçlıdır ve gerçek kullanıcı verisi içermez.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-6">
          <FloatingOrb />
        </Reveal>
      </div>
    </section>
  )
}
