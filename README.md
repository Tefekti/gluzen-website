# GluZen Website

GluZen coming-soon corporate website.

GluZen, yapay zekâ destekli sağlık yönetimi platformu için hazırlanmış "çok yakında" tanıtım sitesi. Statik bir frontend uygulamasıdır; herhangi bir backend, veritabanı veya kimlik doğrulama içermez.

## Stack

React
TypeScript
Vite
Tailwind CSS

## Development

```
npm install
npm run dev
```

## Production Build

```
npm run build
```

Build çıktısı `dist/` klasöründe oluşur.

## Preview

```
npm run preview
```

## Lint

```
npm run lint
```

## Deployment

Hostinger VPS / static web deployment.

`npm run build` sonrası oluşan `dist/` klasörünün içeriği, herhangi bir Node.js çalışma zamanına ihtiyaç duymadan statik dosya olarak sunulabilir (Hostinger static hosting, Nginx, Apache vb.).

## Notlar

- `index.html`, `public/robots.txt` ve `public/sitemap.xml` içindeki `gluzen.com` domain'i placeholder'dır — gerçek production domain'i belirlendiğinde güncellenmelidir (ilgili dosyalarda `TODO` yorumlarıyla işaretlenmiştir).
- `public/og-image.svg` temsili bir paylaşım görselidir.
- İletişim/gizlilik/kullanım koşulları sayfaları henüz mevcut değildir; footer'daki ilgili linkler bilinçli olarak devre dışı bırakılmıştır.
