# G12 Media — Website

Website cho G12 Media — đơn vị cung cấp giải pháp quảng cáo, truyền thông và marketing all-in-one.

## Sitemap

| Trang | Mô tả |
|---|---|
| `/` | Trang chủ |
| `/about-us` | About Us — Our Story, Vision, giá trị cốt lõi |
| `/du-an` | Dự Án — case study (Matilia Mommy, Choi's Pilates, Jin Fitness) |
| `/dich-vu` | Dịch Vụ — 4 nhóm dịch vụ |
| `/blog` | Blog listing (filter theo chuyên mục, phân trang) |
| `/blog/[slug]` | Chi tiết bài viết |
| `/lien-he` | Liên hệ — form tư vấn |

## Dịch vụ

- Marketing Tổng Thể
- Content Social & TikTok
- Quản lý Fanpage & Quảng cáo
- Thiết kế & Sản xuất Media

## Chuyên mục Blog

`CASESTUDY` · `TRUYỀN THÔNG NỘI BỘ` · `VĂN HÓA DOANH NGHIỆP` · `ĐÀO TẠO` · `LIFE@G12MEDIA` · `KẾT NỐI VÀ PHÁT TRIỂN` · `NEWS`

## Tài liệu thiết kế

- **Figma (bản làm việc, account technical@glamira.de):** https://www.figma.com/design/T4KnuJUyeShK0SaBbQq04Y/
- **Figma (bản gốc designer):** https://www.figma.com/design/9UBc9vpQhm3fw0pcj4y5m4/G12?node-id=14-1384
- **Drive (mockup + nội dung + assets):** https://drive.google.com/drive/folders/1-EAI3qyKKhgWSwZ30IiexF-E8H9iLpq8
  - `Hình Ảnh/Website/` — 12 mockup Desktop (1440px)
  - `Hình Ảnh/Hình ảnh/` — assets theo trang
  - `Nội dung/` — nội dung text toàn site

## Stack

- **Astro 7** — build tĩnh, không JS thừa (trang chủ hiện xuất 0 file JS ngoài)
- **Tailwind CSS 4** — design token khai báo bằng CSS variables trong `src/styles/global.css`
- **i18n** — routing sẵn có của Astro: tiếng Việt ở `/`, tiếng Anh ở `/en/`
- **Light/dark** — đổi giá trị CSS variable theo `data-theme`, script inline chống nháy màu
- **Font** — Be Vietnam Pro + Corinthia self-host qua `@fontsource`, chỉ nạp subset `latin` + `vietnamese`
- **Deploy** — Netlify (`netlify.toml`); form liên hệ và nhận tin dùng Netlify Forms, không cần backend

## Chạy

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # xuất ra dist/
npm run check    # kiểm tra kiểu
```

## Cấu trúc

```
src/
├── layouts/BaseLayout.astro   # Header + Footer + SEO — MỌI trang kế thừa từ đây
├── components/
│   ├── Header.astro           # pill nav desktop + drawer mobile (dùng chung)
│   ├── Footer.astro           # 2 biến thể: full | compact (dùng chung)
│   ├── Icon.astro             # icon inline theo currentColor, tự hợp dark mode
│   ├── Marquee.astro  Button.astro  SectionTitle.astro  CallUs.astro
│   └── home/                  # các section riêng của trang chủ
├── i18n/                      # ui.ts (chuỗi dịch) + utils.ts (helper route)
├── config/site.ts             # thông tin liên hệ dùng chung
├── styles/global.css          # design token light/dark + hiệu ứng
└── assets/                    # ảnh, Astro tự nén sang WebP khi build
```

Header và Footer **chỉ khai báo trong `BaseLayout`** — trang con không tự dựng lại, chỉ chọn biến thể footer qua prop `footerVariant`.

## Trạng thái

**Đã dựng đủ 7 trang × 2 ngôn ngữ = 24 trang tĩnh**: Trang chủ, About Us, Dự Án, Dịch Vụ, Blog listing, 6 bài blog detail (content collection Markdown ở `src/content/blog/`), Liên Hệ. Tất cả bám hình học Figma (toạ độ node), light/dark, mobile-first.

Blog: bài viết là file Markdown trong `src/content/blog/<vi|en>/<slug>.md` — thêm bài mới chỉ cần tạo file cùng frontmatter (title, category, date, cover, excerpt). Widget "Bài viết mới" và "Bài viết liên quan" cấu hình ở `src/data/blog.ts`.

### Cần G12 cung cấp

- Số điện thoại thật (`src/config/site.ts` đang để `091.xxxx.xxx` theo mockup)
- Bản dịch tiếng Anh chuẩn — bản hiện tại trong `src/i18n/ui.ts` là bản nháp, cần duyệt lại
- Nội dung ~12 bài blog đã có thumbnail nhưng chưa có bài viết
- Link Facebook/TikTok thật (`src/config/site.ts`)
