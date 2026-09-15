# GluZen Coming Soon Website — Complete

## 1. Implemented

Sıfırdan, bağımsız bir React + TypeScript + Vite projesi olarak "GluZen Çok Yakında" landing page'i kuruldu. Proje GluZen ana uygulamasına, backend'ine veya herhangi bir başka sisteme dokunmaz; tamamen static bir frontend'dir.

- Vite scaffold (`npm create vite@latest . -- --template react-ts`) temel alındı, varsayılan demo dosyaları (App.css, react.svg, vite.svg, hero.png, boilerplate index.css) temizlendi.
- Tailwind CSS v4 (`@tailwindcss/vite` eklentisi) kuruldu, tema token'ları `src/index.css` içinde `@theme` bloğunda merkezi CSS değişkenleri olarak tanımlandı.
- Component bazlı mimari kuruldu (bkz. bölüm 3).
- Ekstra ağır bağımlılık eklenmedi: animasyonlar framer-motion/motion gibi bir kütüphane yerine saf CSS keyframe'leri + native `IntersectionObserver` tabanlı bir `useInView` hook'u ile yapıldı.

## 2. Design System

Renkler `src/index.css` içinde CSS custom property olarak merkezi yönetiliyor (`--color-*`):

- Zemin: `--color-paper` (#FBFBF9), `--color-surface` (#FFFFFF), `--color-surface-muted`
- Metin: `--color-ink`, `--color-ink-soft`, `--color-ink-faint`
- Vurgu: `--color-primary` / `--color-primary-strong` (koyu teal-yeşil), `--color-mint` (açık yeşil), `--color-sky` (kontrollü, çok az kullanılan mavi)

Tipografi: Inter (Google Fonts, `preconnect` + `display=swap` ile), sistem fontlarına fallback. Başlıklar için negatif letter-spacing ve 600 font-weight.

Görsel dil: keskin köşeli değil ama aşırı yuvarlatılmamış kart radius'ları, kontrollü gölgeler, tek bir accent renk ailesi (yeşil/teal + çok az mavi), generic mavi SaaS şablonlarından kaçınıldı. Logo/wordmark: "GluZen" metni + glikoz eğrisini andıran özel bir SVG ikon (`src/components/Wordmark.tsx`, favicon ve OG görselinde de aynı motif kullanıldı).

## 3. Sections

`src/App.tsx` üzerinden sıralanan bölümler:

1. **Navbar** (`Navbar.tsx`) — scroll'da blur/opaklaşan sabit üst bar, masaüstünde yatay menü, mobilde hamburger + açılır panel.
2. **Hero** (`Hero.tsx` + `FloatingOrb.tsx`) — başlık, alt metin, iki CTA, ve merkezde "AI" düğümünden altı sağlık veri noktasına (Glikoz, Aktivite, Uyku, Beslenme, İlaç Takibi, Tansiyon) uzanan temsili bir veri görselleştirmesi. Görselin altında verinin demo olduğuna dair açık uyarı metni var.
3. **IntroSection** (`IntroSection.tsx`, `#nasil-calisir`) — "Sağlık verileri tek başına yeterli değil" mesajı ve 01/02/03 üç adımlı akış (Topla → Anla → Karar Al).
4. **AISection** (`AISection.tsx`, `#ai`) — koyu temalı bölüm, dört yetenek kartı (kişiselleştirilmiş analiz, örüntü tespiti, trend analizi, açıklanabilir içgörüler) ve altında "tanı aracı değildir" uyarı metni.
5. **FeaturePreview** (`FeaturePreview.tsx`) — gerçek ekran görüntüsü değil, açıkça "Temsili görünüm / Demo" etiketli, illüstratif bir gösterge paneli mockup'ı (sağlık skoru halkası, AI içgörü kutusu, glikoz eğrisi, üç istatistik çubuğu).
6. **TrustSection** (`TrustSection.tsx`, `#hakkimizda`) — gizlilik/güven mesajı, üç ilke kartı. Doğrulanamayan güvenlik sertifikası iddiaları (ör. "256-bit encryption", "HIPAA compliant") kasıtlı olarak kullanılmadı.
7. **ComingSoonCTA** (`ComingSoonCTA.tsx`, `#cok-yakinda`) — final CTA ve **devre dışı** e-posta formu (`disabled` input/buton, sahte "başarılı" mesajı yok, formun henüz aktif olmadığı açıkça belirtiliyor).
8. **Footer** (`Footer.tsx`) — logo, kısa açıklama, link grupları. Henüz var olmayan Gizlilik/Kullanım Koşulları linkleri tıklanamaz şekilde işaretlendi (`aria-disabled`, `title="Yakında eklenecek"`), kırık sayfaya yönlendirme yapılmıyor.

## 4. Animations

- Scroll-reveal: `Reveal.tsx` + `useInView.ts` (native `IntersectionObserver`, ek kütüphane yok). Fade + 18px translateY, 700ms, kademeli `delay` prop'u ile.
- Ambient hareket: `index.css` içinde `float-slow`, `float-slower`, `pulse-glow`, `rotate-slow`, `dash-flow` keyframe'leri — hero orb'daki veri düğümleri, merkezi nabız efekti ve yörünge çizgileri için.
- Navbar scroll geçişi: 300ms transition ile blur/arka plan opaklığı.
- Tüm animasyon süreleri 300–800ms aralığında (staggered reveal'larda toplam gecikme + süre en fazla ~1000ms'ye çıkabiliyor, bu kademeli kart grupları için kasıtlı).
- `prefers-reduced-motion: reduce` desteği: hem `index.css`'te global bir medya sorgusuyla (tüm animasyon/transition süreleri sıfırlanıyor, reveal öğeleri doğrudan görünür başlıyor) hem de `usePrefersReducedMotion.ts` hook'uyla sağlandı.

## 5. Responsive

Tailwind'in varsayılan breakpoint'leri (sm/lg) ile grid/flex düzenleri kuruldu. Playwright ile gerçek tarayıcıda test edildi:

- **1440px masaüstü** — tüm bölümler, navbar, hero orb, 4 sütunlu AI kart grid'i, ürün önizleme kartı doğrulandı (bkz. bölüm 9).
- **390px mobil** — tek sütun stacking, hamburger menü aç/kapat, yatay taşma **yok** (`document.body.scrollWidth === 390`, viewport ile birebir).

Not: Tam sayfa (`fullPage`) Playwright ekran görüntüsü ilk denemede mobilde görsel bir "çakışma" gösterdi; bölüm bölüm ölçüm yapılarak (`getBoundingClientRect`) bunun gerçek bir layout hatası değil, Chromium'un fullPage yakalama mekanizmasının `scroll-behavior: smooth` ile birleşince oluşturduğu bir ekran görüntüsü birleştirme artefaktı olduğu doğrulandı — bölümler arasında gerçek DOM'da hiçbir boşluk veya çakışma yok.

## 6. Accessibility

- Semantic HTML: `header`, `nav`, `main`, `section`, `footer`.
- Başlık hiyerarşisi: tek `h1` (Hero), her bölüm `h2`, kart başlıkları `h3` — atlama yok.
- "İçeriğe atla" (skip-to-content) linki `App.tsx` içinde, sadece klavye odağında görünür.
- Navbar hamburger butonunda `aria-label`, `aria-expanded`, `aria-controls`.
- Form: `label` (`sr-only`), `aria-describedby` ile devre dışı bırakılma nedeninin açıklanması.
- Global `:focus-visible` outline stili.
- Dekoratif SVG'ler `aria-hidden="true"` ile işaretli.
- Kontrast: ana metin/arka plan kombinasyonları WCAG AA hedefiyle seçildi (koyu ink metin açık zemin üzerinde, beyaz metin koyu AI bölümünde).
- `prefers-reduced-motion` desteği (bkz. bölüm 4).

## 7. SEO

- `index.html`: Türkçe `lang="tr"`, açıklayıcı `<title>`, meta description, `canonical`, Open Graph + Twitter Card meta etiketleri, `theme-color`.
- `public/favicon.svg` — özel GluZen ikon motifi.
- `public/og-image.svg` — temsili, marka diliyle uyumlu paylaşım görseli (gerçek ürün ekran görüntüsü değildir).
- `public/robots.txt`, `public/sitemap.xml` oluşturuldu.
- **Bilinen sınırlama:** `canonical`, `og:url`, `og:image`, `twitter:image`, `robots.txt` ve `sitemap.xml` içindeki `https://gluzen.com` domain'i placeholder'dır; ilgili dosyalarda `TODO` yorumu bırakıldı, gerçek domain belirlenince güncellenmelidir.

## 8. Performance

- Ekstra ağır kütüphane yok (framer-motion/GSAP/three.js vb. eklenmedi); animasyonlar saf CSS + native browser API.
- Görsel varlıklar tamamen SVG (raster/stok görsel yok, büyük arka plan video yok).
- Production build çıktısı: `index.html` 2.29 kB, CSS 30.56 kB (gzip 6.48 kB), JS 249.86 kB (gzip 76.25 kB — büyük kısmı React 19 + ReactDOM runtime'ı).
- Google Fonts `preconnect` + `display=swap` ile yüklendi, render'ı bloklamaz.

## 9. Build Verification

```
npm install   → başarılı
npm run build → başarılı (tsc -b && vite build, 0 hata)
npm run lint  → 0 hata, 2 uyarı (react/set-state-in-effect — IntersectionObserver ve matchMedia gibi dış sistemlerle senkronizasyon için standart/beklenen pattern, gerçek bir sorun değil)
```

Playwright ile gerçek Chromium tarayıcısında (headless) uçtan uca doğrulama yapıldı:

- Masaüstü (1440px): Hero, navbar scroll efekti, AI section, ürün önizleme kartı, trust section, final CTA + footer, tam sayfa görünüm — tümü kontrol edildi.
- Mobil (390px): Hero, hamburger menü aç/kapat, tüm bölümler tek tek scroll edilerek kontrol edildi, yatay taşma yok.
- `prefers-reduced-motion: reduce` ile sayfa render edildi, reveal animasyonları anında (geçişsiz) görünür durumda başladı.
- Konsol hataları: **0** (hem masaüstü hem mobil oturumda).

Bu doğrulama sırasında bulunan ve düzeltilen tek gerçek hata: AI section'ın (koyu arka plan) `<h2>` başlığı, `index.css` içindeki global `h1,h2,h3,h4 { color: var(--color-ink) }` kuralı yüzünden koyu metin rengini miras alıyordu ve koyu arka plan üzerinde neredeyse görünmez hale geliyordu. `AISection.tsx` içindeki `<h2>`'ye açık `text-white` sınıfı eklenerek düzeltildi ve diğer tüm başlıklar (hepsi açık renkli arka planlarda) için bu sorunun oluşmadığı tek tek teyit edildi.

## 10. Known Limitations

- E-posta bildirim formu bilinçli olarak **devre dışı**; backend/API entegrasyonu yoktur (spec gereği).
- Gizlilik Politikası ve Kullanım Koşulları sayfaları henüz yazılmadı; footer'daki linkler kırık sayfaya yönlendirmek yerine devre dışı bırakıldı.
- `gluzen.com` production domain placeholder'dır, gerçek domain belirlenince `index.html`, `robots.txt`, `sitemap.xml` güncellenmelidir.
- Otomatik test altyapısı (unit/e2e test runner) bu projede kurulu değildi; doğrulama build + lint + manuel/Playwright tabanlı tarayıcı QA ile yapıldı.
- İletişim e-postası (`merhaba@gluzen.com`, footer) gerçek/aktif bir adres değildir, placeholder'dır.

## 11. Deployment Notes

1. `npm install`
2. `npm run build`
3. Oluşan `dist/` klasörünün içeriği Hostinger üzerinde statik dosya olarak (Node.js çalışma zamanı gerekmeden) yayınlanabilir — dosyalar doğrudan bir web sunucu köküne (Nginx/Apache/Hostinger static hosting) kopyalanabilir.
4. Tek sayfa uygulama olmadığı, client-side routing kullanmadığı için ekstra bir "rewrite/fallback to index.html" kuralına ihtiyaç yoktur.
5. Deploy öncesi `index.html`, `robots.txt`, `sitemap.xml` içindeki placeholder domain'in gerçek domain ile güncellenmesi önerilir.

## 12. Git Status

Bu çalışma alanı şu anda bir Git repository'si **değildir** (proje klasörü sıfırdan oluşturuldu, `git init` çalıştırılmadı). Talimat gereği hiçbir commit veya push işlemi yapılmadı — çalışma alanı sadece hazırlandı. Proje daha sonra ayrı bir GitHub repository'sine push edilmek üzere `.gitignore` (node_modules, dist, .env, editör dosyaları hariç tutulacak şekilde) ve bu README ile hazır durumdadır.
