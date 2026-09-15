import { Wordmark } from './Wordmark'

interface FooterLink {
  label: string
  href: string
  todo?: boolean
}

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Ürün',
    links: [
      { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
      { label: 'Yapay Zekâ', href: '#ai' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '#hakkimizda' },
      { label: 'İletişim', href: 'mailto:merhaba@gluzen.com' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '#', todo: true },
      { label: 'Kullanım Koşulları', href: '#', todo: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Wordmark tone="paper" />
            <p className="mt-4 max-w-[22ch] text-sm leading-relaxed text-white/55">
              Yapay zekâ destekli sağlık zekâsı.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                      title={link.todo ? 'Yakında eklenecek' : undefined}
                      onClick={link.todo ? (e) => e.preventDefault() : undefined}
                      aria-disabled={link.todo}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GluZen. Tüm hakları saklıdır.</p>
          <p>GluZen bir tıbbi teşhis aracı değildir.</p>
        </div>
      </div>
    </footer>
  )
}
