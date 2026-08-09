import type { Lang } from '~/i18n/ui';
import type { ImageMetadata } from 'astro';

import newKhunghoang from '~/content/blog/_assets/new-khunghoang.jpg';
import newMarketing from '~/content/blog/_assets/new-marketing.jpg';
import newChudn from '~/content/blog/_assets/new-chudn.jpg';
import newPillar from '~/content/blog/_assets/new-pillar.jpg';
import relMatilia from '~/content/blog/_assets/rel-matilia.jpg';
import relHeineken from '~/content/blog/_assets/rel-heineken.avif';
import relBitis from '~/content/blog/_assets/rel-bitis.jpg';
import relChois from '~/content/blog/_assets/rel-chois.jpg';
import relAbtest from '~/content/blog/_assets/rel-abtest.jpg';
import relWomensday from '~/content/blog/_assets/rel-womensday.jpg';
import relMedia from '~/content/blog/_assets/rel-media.jpg';
import relMau from '~/content/blog/_assets/rel-mau.jpg';
import relAi from '~/content/blog/_assets/rel-ai.jpg';
import relTop5 from '~/content/blog/_assets/rel-top5ai.jpg';
import coverRecap from '~/content/blog/_assets/cover-recap.jpg';

export type CategoryKey = 'casestudy' | 'noibo' | 'vanhoa' | 'daotao' | 'life' | 'ketnoi' | 'news';

/** Chuyên mục theo doc nội dung; màu chấm lấy theo mockup blog detail. */
export const categories: Record<CategoryKey, { label: Record<Lang, string>; dot: string }> = {
  casestudy: { label: { vi: 'CASESTUDY', en: 'CASE STUDY' }, dot: '#38bdf8' },
  noibo: { label: { vi: 'TRUYỀN THÔNG NỘI BỘ', en: 'INTERNAL COMMS' }, dot: '#fb923c' },
  vanhoa: { label: { vi: 'VĂN HÓA DOANH NGHIỆP', en: 'COMPANY CULTURE' }, dot: '#a78bfa' },
  daotao: { label: { vi: 'ĐÀO TẠO', en: 'TRAINING' }, dot: '#4ade80' },
  life: { label: { vi: 'LIFE @G12MEDIA', en: 'LIFE @G12MEDIA' }, dot: '#f472b6' },
  ketnoi: { label: { vi: 'KẾT NỐI VÀ PHÁT TRIỂN', en: 'CONNECT & GROW' }, dot: '#facc15' },
  news: { label: { vi: 'NEWS', en: 'NEWS' }, dot: '#818cf8' },
};

export interface GhostPost {
  title: Record<Lang, string>;
  category: CategoryKey;
  img: ImageMetadata;
}

/**
 * Widget "Bài viết mới" — theo doc nội dung, cả 6 bài dùng chung đúng 4 mục
 * này (widget tĩnh có chủ đích, không phải danh sách động). Các bài chưa có
 * nội dung nên không có link.
 */
export const recentWidget: GhostPost[] = [
  {
    title: {
      vi: 'DOANH NGHIỆP NHỎ NÊN ỨNG PHÓ NHƯ THẾ NÀO KHI GẶP KHỦNG HOẢNG',
      en: 'HOW SHOULD SMALL BUSINESSES RESPOND TO A CRISIS',
    },
    category: 'daotao',
    img: newKhunghoang,
  },
  {
    title: {
      vi: 'DOANH NGHIỆP CỦA BẠN ĐANG CẦN MARKETING TRỌN GÓI?',
      en: 'DOES YOUR BUSINESS NEED ALL-IN-ONE MARKETING?',
    },
    category: 'news',
    img: newMarketing,
  },
  {
    title: {
      vi: 'CÓ NÊN XÂY DỰNG THƯƠNG HIỆU CHO CHỦ DOANH NGHIỆP?',
      en: 'SHOULD FOUNDERS BUILD A PERSONAL BRAND?',
    },
    category: 'daotao',
    img: newChudn,
  },
  {
    title: {
      vi: 'CONTENT PILLAR LÀ GÌ? VÌ SAO NÓ LÀ XƯƠNG SỐNG CỦA MỌI KẾ HOẠCH CONTENT?',
      en: 'WHAT IS A CONTENT PILLAR AND WHY IS IT THE BACKBONE OF EVERY CONTENT PLAN?',
    },
    category: 'daotao',
    img: newPillar,
  },
];

/**
 * "Bài viết liên quan" theo chuyên mục — đúng bộ 3 mà thiết kế đặt cho từng
 * nhóm bài. Mục nào trùng bài thật thì trang detail sẽ tự thay bằng link thật.
 */
export const relatedByCategory: Record<string, GhostPost[]> = {
  casestudy: [
    {
      title: {
        vi: 'ĐỊNH HÌNH VỊ THẾ SỮA BẦU CAO CẤP CHO MATILIA MOMMY',
        en: 'POSITIONING MATILIA MOMMY AS A PREMIUM PRENATAL MILK BRAND',
      },
      category: 'casestudy',
      img: relMatilia,
    },
    {
      title: {
        vi: 'BẬT MÍ CÔNG THỨC "GLOW-UP" HÌNH ẢNH THƯƠNG HIỆU CHO CHOI\'S PILATES',
        en: 'THE BRAND IMAGE "GLOW-UP" FORMULA FOR CHOI\'S PILATES',
      },
      category: 'casestudy',
      img: relChois,
    },
    {
      title: {
        vi: 'HEINEKEN: KHI "NGƯỜI HÙNG" LÀ NGƯỜI KHÔNG CHẠM LY!',
        en: 'HEINEKEN: WHEN THE HERO IS THE ONE WHO DOESN\'T DRINK',
      },
      category: 'casestudy',
      img: relHeineken,
    },
    {
      title: {
        vi: "BITI'S HUNTER NÂNG NIU BÀN CHÂN VIỆT VỚI BỘ SƯU TẬP MỚI",
        en: "BITI'S HUNTER CHERISHES VIETNAMESE FEET WITH A NEW COLLECTION",
      },
      category: 'casestudy',
      img: relBitis,
    },
  ],
  daotao: [
    {
      title: {
        vi: 'CÓ NÊN XÂY DỰNG THƯƠNG HIỆU CHO CHỦ DOANH NGHIỆP?',
        en: 'SHOULD FOUNDERS BUILD A PERSONAL BRAND?',
      },
      category: 'daotao',
      img: newChudn,
    },
    {
      title: {
        vi: 'A/B TESTING LÀ GÌ? VÌ SAO NÓ QUAN TRỌNG NHƯ THỬ ÁO TRƯỚC KHI MUA?',
        en: 'WHAT IS A/B TESTING AND WHY IT MATTERS LIKE TRYING BEFORE BUYING?',
      },
      category: 'daotao',
      img: relAbtest,
    },
    {
      title: {
        vi: 'DOANH NGHIỆP NHỎ NÊN ỨNG PHÓ NHƯ THẾ NÀO KHI GẶP KHỦNG HOẢNG',
        en: 'HOW SHOULD SMALL BUSINESSES RESPOND TO A CRISIS',
      },
      category: 'daotao',
      img: newKhunghoang,
    },
  ],
  noibo: [
    {
      title: {
        vi: 'NHÌN LẠI THÀNH TỰU 1 NĂM VỪA QUA TẠI G12 MEDIA',
        en: 'LOOKING BACK ON A YEAR OF MILESTONES AT G12 MEDIA',
      },
      category: 'noibo',
      img: coverRecap,
    },
    {
      title: {
        vi: 'G12 MEDIA CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ 8/3',
        en: "G12 MEDIA CELEBRATES INTERNATIONAL WOMEN'S DAY",
      },
      category: 'noibo',
      img: relWomensday,
    },
    {
      title: {
        vi: 'G12 MEDIA THAM GIA ĐÀO TẠO CHUYÊN SÂU TRUYỀN THÔNG ĐẠI CHÚNG',
        en: 'G12 MEDIA JOINS ADVANCED MASS COMMUNICATION TRAINING',
      },
      category: 'noibo',
      img: relMedia,
    },
  ],
  news: [
    {
      title: {
        vi: 'XU HƯỚNG MÀU SẮC TRONG THIẾT KẾ GIAO DIỆN WEBSITE 2026',
        en: 'COLOR TRENDS IN WEBSITE UI DESIGN 2026',
      },
      category: 'news',
      img: relMau,
    },
    {
      title: {
        vi: 'A.I INFLUENCER — TƯƠNG LAI MỚI CỦA THỜI ĐẠI MARKETING SỐ',
        en: 'AI INFLUENCERS — THE NEW FUTURE OF DIGITAL MARKETING',
      },
      category: 'news',
      img: relAi,
    },
    {
      title: {
        vi: 'TOP 5 CÔNG CỤ A.I TỐI ƯU NHẤT HIỆN NAY',
        en: 'TOP 5 MOST EFFECTIVE AI TOOLS TODAY',
      },
      category: 'news',
      img: relTop5,
    },
  ],
};
