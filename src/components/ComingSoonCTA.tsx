import { Reveal } from './Reveal'

export function ComingSoonCTA() {
  return (
    <section id="cok-yakinda" className="relative overflow-hidden border-t border-[var(--color-line-soft)] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,var(--color-primary-soft),transparent)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Yeni bir sağlık deneyimi çok yakında.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
            GluZen üzerinde çalışmaya devam ediyoruz. Lansmanı ilk duyanlardan olmak için bizi takip et.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <form
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="cta-form-note"
          >
            <label htmlFor="email-notify" className="sr-only">
              E-posta adresiniz
            </label>
            <input
              id="email-notify"
              type="email"
              disabled
              placeholder="E-posta adresiniz"
              className="w-full flex-1 rounded-full border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-5 py-3.5 text-sm text-[var(--color-ink-faint)] placeholder:text-[var(--color-ink-faint)] disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled
              className="inline-flex shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-[var(--color-ink)]/40 px-6 py-3.5 text-sm font-semibold text-white"
            >
              Yakında Aktif
            </button>
          </form>
          <p id="cta-form-note" className="mt-3 text-xs text-[var(--color-ink-faint)]">
            Bildirim formu henüz aktif değil. Duyurular için yakında buraya dönebilirsin.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
