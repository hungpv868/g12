# G12 Media — Design Spec

Nguồn Figma (bản sao thuộc account technical@glamira.de, MCP đọc được):
**https://www.figma.com/design/T4KnuJUyeShK0SaBbQq04Y/** — fileKey `T4KnuJUyeShK0SaBbQq04Y`, page `0:1` "G12".
(Bản gốc của designer: `9UBc9vpQhm3fw0pcj4y5m4` — chỉ xem qua browser.)

12 frame Desktop 1440px, **không có frame mobile/tablet**. Map node ID:

| Node | Tên frame | Trang | Cao |
|---|---|---|---|
| `1:213` | Wireframe - 2 | Trang chủ | 6522 |
| `1:433` | Desktop - 1 | About Us | 6048 |
| `1:582` | Desktop - 2 | Blog listing | 1620 |
| `1:689` | Desktop - 3 | Blog: Choi's Pilates | 2911 |
| `1:794` | Desktop - 4 | Blog: Matilia Mommy | 2701 |
| `1:897` | Desktop - 5 | Blog: Từ Brief đến Thành quả | 5576 |
| `1:1011` | Desktop - 6 | Blog: Recap 2025 | 3466 |
| `1:1112` | Desktop - 7 | Blog: Marketing trọn gói | 2697 |
| `1:1209` | Desktop - 8 | Blog: Thương hiệu lớn & cột mốc | 3125 |
| `1:1314` | Desktop - 10 | Liên Hệ | 1103 |
| `1:1351` | Desktop - 11 | Dự Án | 9522 |
| `1:1430` | Desktop - 12 | Dịch Vụ | 4087 |

File **không dùng Figma variables** (không có token màu/typography định nghĩa sẵn; chỉ 1 effect `Blur/01` = background blur 30) — style đọc trực tiếp từ node.

## 1. Design tokens

### Màu (trích từ pixel export + logo bộ nhận diện)

| Token | Hex | Dùng cho |
|---|---|---|
| `brand-yellow` | `#FFBE00` | Footer, marquee, đầu gradient logo |
| `brand-orange` | `#FF822B` | Cuối gradient logo, accent |
| `brand-gradient` | `#FFBE00 → #FF822B` | Logo, nút CTA, ticket, heading nhấn |
| `orange-deep` | `#EF754A` | Card dịch vụ nổi bật (card 2 gradient đậm) |
| `cream-bg` | `#FFFBEE` | Nền body chính |
| `cream-card` | `#FFF0BD` | Card vàng nhạt (dịch vụ, blog card) |
| `peach-hero` | `#FFEACA` – `#FFDCB8` | Nền hero gradient đào |
| `nav-bg` | `#FFFCF4` | Pill navigation + header |
| `text-dark` | `#000000` / gần đen | Heading phụ, body |
| Nhấn tiêu đề | cam `#FF822B`-ish + vàng `#FFBE00` | Tiêu đề 2 màu ("DỊCH VỤ **NỔI BẬT**") |

Nền tổng thể: kem ấm, mọi section phân tách bằng dải marquee vàng hoặc khối gradient cam.

### Typography (xác nhận từ Figma node)

| Vai trò | Font | Cỡ đo được | Ghi chú |
|---|---|---|---|
| Toàn bộ heading + body | **Be Vietnam Pro** (Bold / Regular) | H1 hero 44px · heading section 38–64px · marquee 32px · body 15px | Google Font, hỗ trợ tiếng Việt native |
| Script cảm xúc | **Corinthia** (Regular) | 128px | Google Font script; fill gradient `#FFBA03 → #FF812A` + text-shadow |

Chi tiết style đã đọc:
- H1 hero (`1:258`): Be Vietnam Pro Bold 44px, đen, cụm nhấn `#FF842A`
- Section heading 2 màu (`1:267` "DỊCH VỤ NỔI BẬT"): Bold 38px, trắng + nhấn `#E94B23`
- Heading "Our Story" (`1:455`): Bold 64px đen, text-shadow `0 4px 4px rgba(0,0,0,.25)`
- Marquee (`1:440`): Bold 32px trắng, text-shadow nhẹ
- Body bullet (`1:228`): Regular 15px, màu **`#020763` (navy đậm)** — không phải đen thuần
- Script (`1:464`): Corinthia 128px, gradient clip text

**Màu bổ sung từ Figma** (chuẩn hơn số đo pixel): gradient thương hiệu `#FFBA03 → #FF812A`; cam nhấn text `#FF842A`; đỏ-cam nhấn heading trên nền gradient `#E94B23`; navy body `#020763`.

### Thành phần lặp lại (toàn site)

1. **Header**: logo G12 trái + pill nav `#FFFCF4` bo tròn (Home · About Us · Dự Án · Dịch Vụ · Blog · Liên Hệ — mục active nền cam) + hamburger phải. Header nổi trên nền, có shadow nhẹ.
2. **Marquee band**: dải vàng chạy chữ `Marketing Solution ✦ Digital Media Solution ✦ Advertising Solution ✦ Creative Solution` — dùng làm ngăn cách section, xuất hiện ở mọi trang.
3. **Footer** (2 biến thể):
   - *Đầy đủ* (trang chủ, about, dịch vụ): nền vàng `#FFBE00`, heading "Let's **Connect** There" + nút "Liên Hệ Tư Vấn", logo G12 trắng lớn, cột Contact (phone/email/web), form "Get the latest information" (email + nút gửi), social FB/TikTok, bar cuối: copyright © 2026 + Terms + Privacy.
   - *Gọn* (blog, dự án, liên hệ): 1 hàng vàng — social trái, copyright, logo giữa, contact phải.
4. **Nút CTA**: bo tròn viên thuốc, gradient vàng→cam, có mũi tên; hover-style đổ bóng.
5. **Card "ticket"** (Call us if you need): 4 vé gradient cam xếp lệch góc, đục lỗ răng cưa, mỗi vé 1 dịch vụ + nút "Liên hệ".
6. **Section heading**: uppercase 2 màu, đôi khi kèm sub-text nhỏ giữa trang.

## 2. Từng frame

### Desktop 1 — Trang chủ (6522px)
1. Hero: nền đào gradient, trái = H1 "Đối tác Marketing giúp doanh nghiệp **phát triển bền vững**" + đoạn mô tả + 4 gạch check (Quản trị Fanpage & QC / Thiết kế sáng tạo & SX Media / Tư vấn chiến lược / Content Social & Video TikTok/Reels) + nút "Liên Hệ Tư Vấn"; phải = logo G12 lớn.
2. **Dịch vụ nổi bật**: nền gradient vàng→cam, 4 card dọc (Marketing Tổng Thể · Content Social & TikTok [card gradient đậm nổi bật] · Quản lý Fanpage & QC · Thiết kế & SX Media), mỗi card có bullet + nút "Tìm hiểu".
3. **Dự án tiêu biểu**: 3 banner ngang (Jin Fitness + Choi's chung hàng, Matilia full-width) + nút "Tìm hiểu" trên mỗi banner.
4. **G12 Media là ai?**: text trái (định vị, phương châm, 3 gạch đầu dòng tư duy) + logo phải + link "Tìm hiểu ngay →".
5. **Sứ mệnh**: 3 cột icon-line (xây thương hiệu bài bản / tối ưu chi phí / đồng hành thực tế).
6. **Triết lý hoạt động**: trái = heading + 3 bullet; phải = khối "G12 – GROW TOGETHER" nền be + mũi tên.
7. **Khách hàng tin tưởng**: ảnh người thật nền tối + 3 logo khách (Matilia Mommy, Choi's, Jin Fitness) trên thẻ trắng.
8. **Bài viết nổi bật**: 2 card ngang (2 case study) + nút "Tìm hiểu".
9. **Call us if you need**: 4 ticket.
10. Footer đầy đủ.

### Desktop 2 — About Us (6056px)
1. Hero: mosaic ảnh hoạt động làm nền mờ, logo G12 trắng khổng lồ giữa, dòng định vị + tag "ALL-IN-ONE tại Việt Nam".
2. Marquee.
3. **Our Story**: heading + script "Hành trình bắt đầu từ đam mê", ảnh team trong ellipse cam chú thích "Since 2016", 3 đoạn văn, nút "Xem thêm →".
4. **Our Vision**: khối vàng, quote lớn với dấu ngoặc kép cam, ký "_ G12 MEDIA".
5. Marquee "ALL-IN-ONE SOLUTION ✦".
6. **What Make G12 Media Different From Other?**: 4 card REAL / HUMAN (đậm) / EXPANSION / INNOVATION.
7. **Our Commitment "GROW TOGETHER"**: 3 mục đánh số tròn — khách hàng / đội ngũ / cộng đồng.
8. Marquee → **Call us if you need** (4 ticket) → Footer đầy đủ.

### Desktop 3 — Dự Án (9522px, dài nhất)
1. Heading "DỰ ÁN **TIÊU BIỂU**" + intro; film-strip ảnh dự án nghiêng chạy ngang.
2. Marquee.
3. **3 case study lặp cùng cấu trúc** (01. MATILIA MOMMY / 02. CHOI'S PILATES / 03. JIN FITNESS):
   - Tiêu đề số thứ tự + "PROJECT"; badge "Ngành Hàng" | mô tả ngành; nền tảng triển khai (Facebook, TikTok); mong muốn khách hàng
   - Thumbnail video/banner + 2 ảnh mẫu
   - Khối **BEFORE** (pill cam): lưới "PHÂN TÍCH BỐI CẢNH" — Nội Dung / Hình Ảnh / Trải nghiệm + tag chéo ("ĐƠN ĐIỆU" / "CHƯA SANG" / "CHƯA XỊN")
   - Khối **AFTER**: lưới "GIẢI PHÁP" — cùng 3 mục + tag ("CAO CẤP" / "SANG XỊN" / "XỊN") + sao ⭐
   - **Số liệu kết quả** (chữ outline cam lớn): Matilia `4000+` đơn Megalive & `>3 Triệu` view + "Vận Hành Trơn Chu"; Choi's `100+` học viên & `>1 Triệu` view + "Có Cộng Đồng Pilates Riêng"; Jin `100+` thành viên & `>1 Triệu` view — kèm collage ảnh chứng minh
4. Marquee giữa các case → Footer gọn.

### Desktop 4 — Dịch Vụ (4087px)
Heading "DỊCH VỤ **NỔI BẬT**" + intro. 4 khối dịch vụ xen kẽ ảnh/text trái-phải, ngăn cách marquee:
1. **Marketing Tổng Thể** — 5 bullet (tư vấn chiến lược thương hiệu, kế hoạch marketing tổng thể, định vị khách hàng, giá trị nhận được…)
2. **Content Social & TikTok** — concept kênh, video ngắn TikTok/Reels/Shorts, nội dung đa mục tiêu
3. **Quản lý Fanpage & Quảng Cáo** — vận hành 24/7, FB/TikTok Ads, tối ưu phễu chuyển đổi
4. **Thiết kế & Sản xuất Media** — ảnh/video sản phẩm, TVC, ấn phẩm truyền thông, hỗ trợ livestream
Footer đầy đủ.

### Desktop 5 — Blog listing (1620px)
Filter pill 9 nút (ALL active + 8 chuyên mục). Grid 2 cột × 3 hàng card (thumbnail trái + badge chuyên mục + tiêu đề + nút "Đọc thêm"). Phân trang `< 1 2 3 4 5 6 >`. Footer gọn.

### Desktop 6–11 — Blog detail ×6 (2697–5576px)
Layout chung: breadcrumb chuyên mục (chấm màu + tên) → H1 cam 2 dòng → byline "G12 MEDIA | thứ, dd/mm/yyyy - 20:00" → ảnh bìa → body text (H2 sub-heading cam italic) → sidebar phải: **BÀI VIẾT MỚI** (4 thumb + title) + **CHUYÊN MỤC** (7 mục chấm màu) → cuối trang **BÀI VIẾT LIÊN QUAN** 3 card → Footer gọn.

| Frame | Bài | Chuyên mục | Đặc thù |
|---|---|---|---|
| 6 | Glow-up Choi's Pilates | Casestudy | 3 sub-heading script cam |
| 7 | Matilia Mommy | Casestudy | tương tự |
| 8 | Từ Brief đến Thành quả | Đào tạo | 7 khối ảnh notebook: Chẩn đoán (KPIs gốc, Bản đồ mục tiêu) → Phân tích (audit đối thủ, insight) → Hoạch định (media mix, kế hoạch đa kênh) → Sáng tạo (big idea, asset) → Tối ưu (A/B testing, phân bổ ngân sách real-time) → Đo lường (dashboard, báo cáo vs KPI) → Đồng hành (ROI, đề xuất chiến lược mới) |
| 9 | Recap 2025 | TT nội bộ | 3 collage khách hàng: Jin Fitness / Choi's / Matilia |
| 10 | Marketing trọn gói | News | bài liên quan chuyên mục News |
| 11 | Thương hiệu lớn & cột mốc | Đào tạo | 3 sub-heading đánh số: Kỷ luật vận hành / Tư duy di sản / Tính xác thực |

Bài viết liên quan tham chiếu ~10 bài **chưa có nội dung** (Heineken, Biti's Hunter, A/B Testing, Content Pillar, Xu hướng màu 2026, AI Influencer, Top 5 công cụ AI, Women's Day, đào tạo truyền thông đại chúng, khủng hoảng DN nhỏ…).

### Desktop 12 — Liên Hệ (1103px)
Trái: H2 "Liên Hệ Với Chúng Tôi" + form 4 field bo tròn (Họ Và Tên* / Điện Thoại* / E-mail* / Mô tả dự án của bạn — textarea). **Không thấy nút submit trong mockup** (cần xác nhận, có thể nằm trong Figma prototype). Phải: banner ảnh dịch vụ. Footer gọn.

## 3. Kiểm kê asset Drive (thư mục "Hình ảnh", 92 file ≈ 49MB)

### About Us (18 file)
- `ABOUTUS.png` 5000×3337 — ảnh team (Our Story) · `bia web.png` 1440×1024 — hero mosaic + logo G12
- Icon 512×512 **màu đen** trên nền trong: email, facebook, phone ×2, tiktok, world-wide-web — footer dùng bản trắng ⚠️ cần recolor (CSS filter/SVG)
- `LOGO1.png` trắng, `LOGO2.png` gradient (830×454) · `quotes1/2.png` — ngoặc kép trắng/cam (Our Vision)
- `sparkle.png` trắng (marquee) · `số 1/2/3.png` 372×372 — số khoanh tròn vàng nhạt (Commitment) · `ticker1/ticket2.png` 2367×1117 — vé gradient (Call us)

### Blog (12 file)
Thumbnail 6 bài chính (1500–2048px) + bộ icon đen như trên.

### Bộ nhận diện (4) + Logo công ty (3)
Logo trắng có/không chữ (nền trong — chỉ dùng trên nền màu), `mau1/mau2` = logo gradient, `gold.png`/`white.png` 873×456, `Final.pdf` logo vector.

### Trang con của Blog (6 thư mục = 55 file) — map 1:1 với 6 bài
| Thư mục | Bài | Có gì |
|---|---|---|
| 1 | Choi's Pilates | bìa + 3 thumb liên quan + 4 thumb "bài viết mới" |
| 2 | Matilia Mommy | như trên |
| 3 | Từ Brief… | bìa + **nd1–nd7 = 7 ảnh notebook 7 bước** + thumb |
| 4 | Recap 2025 | bìa + nd1–3 collage Jin/Choi's/Matilia + thumb (⚠️ thiếu thumb "BV liên quan 1") |
| 5 | Marketing trọn gói | bìa + thumb (liên quan: xu hướng màu, AI influencer, top 5 AI) |
| 6 | Thương hiệu lớn | bìa + thumb (⚠️ chỉ có "BV liên quan 2", thiếu 1 & 3) |

**Phát hiện quan trọng**: ~12 bài "ma" (chưa có nội dung text) **đều đã có thumbnail** trong các thư mục này — gồm Khủng hoảng DN nhỏ, Marketing trọn gói, Thương hiệu chủ DN, Content Pillar, A/B Testing, Heineken (file `.avif`), Biti's Hunter, Women's Day, Đào tạo truyền thông, Xu hướng màu 2026, AI Influencer, Top 5 công cụ AI. Tức là chỉ thiếu bài viết, không thiếu ảnh.

**Ghi chú kỹ thuật**: bộ "bài viết mới" ×4 lặp nguyên si trong cả 6 thư mục (widget dùng chung — khớp doc nội dung); thumbnail bìa trùng với thư mục Blog/ (chọn 1 nguồn khi import); ảnh gốc tới 5000px & tổng 49MB → cần nén WebP + responsive srcset; 2 file `.avif` (Heineken) giữ nguyên định dạng, browser hỗ trợ tốt.

## 4. Khoảng trống & việc cần chốt

1. **Responsive**: không có design mobile/tablet — tự quyết breakpoint khi code (ưu tiên stack 1 cột, nav thu vào hamburger có sẵn trong design).
2. ~~Tên font~~ → đã chốt: **Be Vietnam Pro** + **Corinthia** (đều Google Fonts, load subset `vietnamese`).
3. Form liên hệ thiếu nút submit trong mockup; footer form email cũng cần endpoint xử lý.
4. Asset trang chủ + trang Dự Án không có file rời — **export được qua Figma MCP `download_assets`** theo node ID trong bảng map ở đầu file (URL asset hết hạn sau 7 ngày, tải về repo ngay khi dùng).
5. SĐT placeholder `091.xxxx.xxx`; email `g12media@gmail.com`; domain `g12media.vn`.
6. ~10 bài blog được tham chiếu nhưng chưa có nội dung.
7. Copyright ghi © 2026.
