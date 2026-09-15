import { Reveal } from './Reveal'

const steps = [
  {
    index: '01',
    title: 'Verilerini topla',
    description:
      'Glikoz, aktivite, uyku, beslenme ve daha fazlası — sağlık verilerin dağınık uygulamalar yerine tek bir yapıda birleşir.',
  },
  {
    index: '02',
    title: 'Yapay zekâ ile anla',
    description:
      'GluZen, verilerin arasındaki örüntüleri ve eğilimleri tespit ederek sana anlaşılır, açıklanabilir içgörüler sunar.',
  },
  {
    index: '03',
    title: 'Daha bilinçli kararlar al',
    description:
      'Rakamları değil, ne anlama geldiklerini görürsün. Sağlığınla ilgili kararlarını netlikle şekillendirirsin.',
  },
]

export function IntroSection() {
  return (
    <section id="nasil-calisir" className="border-t border-[var(--color-line-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Sağlık verileri tek başına yeterli değil.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
              Önemli olan, o verilerin sana ne söylediğini anlayabilmek. GluZen bu boşluğu dolduruyor.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.index} delay={i * 120}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
                <span className="text-sm font-semibold tabular-nums text-[var(--color-mint)]">{step.index}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
