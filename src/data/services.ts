import type { Lang } from '~/i18n/ui';

/**
 * Services page content — the SIX categories from Company Profile section II
 * "Our Services" (pages 10–15), per client feedback 16/08: the old 4 Figma
 * blocks are replaced by 2.1–2.6 exactly as the profile presents them.
 * VI copy is transcribed verbatim from the profile; category titles and the
 * tag lines stay in English exactly as printed there.
 * The EN version is a draft by Claude; G12 must review it before production.
 *
 * `img` maps to a file in src/assets/services/: 2.1/2.2/2.4/2.5 use the
 * profile's own images; 2.3 and 2.6 use G12's branded social graphics from
 * the original Figma set (the profile has no photo for 2.6).
 */
export interface ServiceBlock {
  no: string;
  title: string;
  intro: string;
  items: string[];
  /** tag line, kept in English exactly as printed in the profile */
  tags: string;
  img: string;
}

export const serviceLabels: Record<Lang, { included: string; intro: string }> = {
  vi: {
    included: 'Dịch vụ gồm',
    intro:
      'Mỗi doanh nghiệp có những mục tiêu truyền thông và kinh doanh khác nhau. Vì vậy, G12 Media cung cấp các dịch vụ từ xây dựng thương hiệu, thiết kế, sản xuất nội dung, quảng cáo số đến phát triển và vận hành các kênh bán hàng trực tuyến. Tùy theo nhu cầu của từng doanh nghiệp, chúng tôi tư vấn và triển khai giải pháp phù hợp nhằm giúp thương hiệu tiếp cận đúng khách hàng và phát triển hiệu quả.',
  },
  en: {
    included: 'Services include',
    intro:
      'Every business has its own communication and commercial goals. G12 Media covers the full range — brand building, design, content production, digital advertising, and building and running online sales channels. We advise on and deliver the mix that fits each business, so the brand reaches the right customers and grows effectively.',
  },
};

export const serviceBlocks: Record<Lang, ServiceBlock[]> = {
  vi: [
    {
      no: '2.1',
      title: 'Brand Identity & Creative Design',
      intro:
        'G12 Media đồng hành cùng doanh nghiệp trong việc xây dựng hình ảnh thương hiệu chuyên nghiệp và thống nhất trên mọi kênh truyền thông.',
      items: [
        'Thiết kế logo',
        'Thiết kế bộ nhận diện thương hiệu',
        'Thiết kế Key Visual cho các chiến dịch',
        'Thiết kế bao bì, nhãn mác và POSM',
        'Thiết kế ấn phẩm truyền thông trên mạng xã hội',
      ],
      tags: 'Logo · Brand Identity · Key Visual · Packaging · POSM · Social Media Design',
      img: 'pr-21-brand',
    },
    {
      no: '2.2',
      title: 'Digital Marketing',
      intro:
        'G12 Media tư vấn và triển khai các hoạt động quảng cáo trên nền tảng số, giúp doanh nghiệp tiếp cận đúng khách hàng, tăng hiệu quả truyền thông và tối ưu chi phí quảng cáo.',
      items: [
        'Quảng cáo Facebook',
        'Quảng cáo TikTok',
        'Quảng cáo Google',
        'Tối ưu tìm kiếm Google (SEO)',
        'Quảng cáo theo mục tiêu chuyển đổi (Performance Marketing)',
      ],
      tags: 'Facebook Marketing · TikTok Marketing · Google Ads · SEO · Performance Marketing',
      img: 'pr-22-digital',
    },
    {
      no: '2.3',
      title: 'Social Media Management',
      intro:
        'G12 Media xây dựng và quản lý nội dung trên các nền tảng mạng xã hội, giúp doanh nghiệp duy trì hình ảnh thương hiệu và kết nối thường xuyên với khách hàng.',
      items: [
        'Xây dựng kế hoạch nội dung',
        'Viết nội dung và thiết kế hình ảnh',
        'Quản lý Fanpage',
        'Quản lý cộng đồng và tương tác khách hàng',
        'Triển khai các chiến dịch truyền thông trên mạng xã hội',
      ],
      tags: 'Content Strategy · Content Creation · Fanpage Management · Community Management · Viral Campaign',
      img: 'sv-3',
    },
    {
      no: '2.4',
      title: 'Media Production',
      intro:
        'G12 Media sản xuất hình ảnh và video phục vụ hoạt động truyền thông, quảng bá thương hiệu và bán hàng.',
      items: [
        'Quay TVC và video quảng cáo',
        'Sản xuất video TikTok, Facebook Reels',
        'Quay chụp sản phẩm',
        'Quay phim doanh nghiệp',
        'Livestream bán hàng và sự kiện',
        'Biên tập và hậu kỳ video',
      ],
      tags: 'TVC · Viral Video · TikTok Video · Livestream · Product Photography',
      img: 'pr-24-media',
    },
    {
      no: '2.5',
      title: 'Website & Landing Page',
      intro:
        'G12 Media thiết kế và phát triển website, landing page đáp ứng nhu cầu giới thiệu doanh nghiệp, quảng bá sản phẩm và hỗ trợ bán hàng trực tuyến.',
      items: [
        'Thiết kế giao diện',
        'Thiết kế website doanh nghiệp',
        'Thiết kế Landing Page',
        'Thiết kế website bán hàng',
        'Bảo trì và cập nhật website',
      ],
      tags: 'UI/UX · Corporate Website · E-commerce Website · Landing Page · Maintenance',
      img: 'pr-25-web',
    },
    {
      no: '2.6',
      title: 'E-commerce Solutions',
      intro:
        'G12 Media hỗ trợ doanh nghiệp xây dựng và phát triển hoạt động kinh doanh trên các sàn thương mại điện tử.',
      items: [
        'Thiết lập gian hàng',
        'Thiết kế và tối ưu gian hàng',
        'Đăng tải sản phẩm',
        'Quản lý và vận hành gian hàng',
        'Lập kế hoạch các chương trình khuyến mại',
        'Quảng cáo trên Shopee, TikTok Shop và các sàn thương mại điện tử',
      ],
      tags: 'Shopee · TikTok Shop · Lazada · Tiki · Store Operation · Campaign Planning · Marketplace Ads',
      img: 'sv-4',
    },
  ],

  en: [
    {
      no: '2.1',
      title: 'Brand Identity & Creative Design',
      intro:
        'G12 Media partners with businesses to build a professional brand image that stays consistent across every communication channel.',
      items: [
        'Logo design',
        'Brand identity systems',
        'Campaign Key Visuals',
        'Packaging, labels and POSM',
        'Social media communication assets',
      ],
      tags: 'Logo · Brand Identity · Key Visual · Packaging · POSM · Social Media Design',
      img: 'pr-21-brand',
    },
    {
      no: '2.2',
      title: 'Digital Marketing',
      intro:
        'We plan and run advertising across digital platforms — reaching the right customers, lifting communication performance and optimizing ad spend.',
      items: [
        'Facebook advertising',
        'TikTok advertising',
        'Google advertising',
        'Search engine optimization (SEO)',
        'Conversion-driven Performance Marketing',
      ],
      tags: 'Facebook Marketing · TikTok Marketing · Google Ads · SEO · Performance Marketing',
      img: 'pr-22-digital',
    },
    {
      no: '2.3',
      title: 'Social Media Management',
      intro:
        'We build and manage content across social platforms, keeping the brand image alive and the conversation with customers going.',
      items: [
        'Content planning',
        'Copywriting and visual design',
        'Fanpage management',
        'Community management and customer engagement',
        'Social media campaign execution',
      ],
      tags: 'Content Strategy · Content Creation · Fanpage Management · Community Management · Viral Campaign',
      img: 'sv-3',
    },
    {
      no: '2.4',
      title: 'Media Production',
      intro:
        'We produce the photography and video that power communications, brand promotion and sales.',
      items: [
        'TVC and ad video production',
        'TikTok and Facebook Reels videos',
        'Product photography and filming',
        'Corporate films',
        'Sales and event livestreams',
        'Editing and post-production',
      ],
      tags: 'TVC · Viral Video · TikTok Video · Livestream · Product Photography',
      img: 'pr-24-media',
    },
    {
      no: '2.5',
      title: 'Website & Landing Page',
      intro:
        'We design and build websites and landing pages for company introduction, product promotion and online sales.',
      items: [
        'UI design',
        'Corporate websites',
        'Landing pages',
        'E-commerce websites',
        'Website maintenance and updates',
      ],
      tags: 'UI/UX · Corporate Website · E-commerce Website · Landing Page · Maintenance',
      img: 'pr-25-web',
    },
    {
      no: '2.6',
      title: 'E-commerce Solutions',
      intro: 'We help businesses build and grow their sales on e-commerce marketplaces.',
      items: [
        'Store setup',
        'Store design and optimization',
        'Product listing',
        'Store operation and management',
        'Promotion campaign planning',
        'Advertising on Shopee, TikTok Shop and other marketplaces',
      ],
      tags: 'Shopee · TikTok Shop · Lazada · Tiki · Store Operation · Campaign Planning · Marketplace Ads',
      img: 'sv-4',
    },
  ],
};
