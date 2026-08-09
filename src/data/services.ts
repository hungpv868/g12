import type { Lang } from '~/i18n/ui';

/**
 * Content for the 4 blocks on the Services page — copied verbatim from Figma frame 1:1430.
 * The EN version is a draft by Claude; G12 must review it before production.
 */
export interface ServiceBlock {
  title: string;
  intro: string[];
  items: { label: string; text: string }[];
}

export const serviceBlocks: Record<Lang, ServiceBlock[]> = {
  vi: [
    {
      title: 'MARKETING TỔNG THỂ',
      intro: [
        'Xây dựng nền móng vững chắc cho hành trình vươn xa.',
        'Chúng tôi giúp doanh nghiệp trả lời câu hỏi: "Bạn là ai và tại sao khách hàng phải chọn bạn?" bằng một bản đồ chiến lược bài bản, thay vì những hoạt động marketing rời rạc.',
      ],
      items: [
        {
          label: 'Tư vấn chiến lược thương hiệu:',
          text: 'Định vị thương hiệu, xây dựng câu chuyện thương hiệu (Brand Story) và bộ nhận diện giá trị cốt lõi.',
        },
        {
          label: 'Lập kế hoạch Marketing tổng thể:',
          text: 'Nghiên cứu thị trường, phân tích đối thủ và lập lộ trình triển khai theo từng giai đoạn (ngắn hạn & dài hạn).',
        },
        {
          label: 'Định vị khách hàng mục tiêu:',
          text: 'Vẽ chân dung khách hàng chuẩn xác để tối ưu hóa thông điệp truyền thông.',
        },
        {
          label: 'Giá trị nhận được:',
          text: 'Thương hiệu có bản sắc riêng, nhất quán và khai thác đúng thị trường ngách để phát triển bền vững.',
        },
      ],
    },
    {
      title: 'CONTENT SOCIAL & TIKTOK',
      intro: [
        'Sáng tạo nội dung "chạm" cảm xúc – Dẫn đầu xu hướng.',
        'Trong kỷ nguyên số, nội dung là "vũ khí" để kết nối. G12 Media giúp thương hiệu của bạn không chỉ xuất hiện mà còn để lại dấu ấn sâu sắc trong tâm trí khách hàng.',
      ],
      items: [
        {
          label: 'Xây dựng Concept kênh:',
          text: 'Định hình phong cách nội dung độc bản cho Facebook, TikTok, Instagram.',
        },
        {
          label: 'Sản xuất Video ngắn (TikTok/Reels/Shorts):',
          text: 'Quy trình trọn gói từ lên ý tưởng, viết kịch bản, quay dựng đến tối ưu hóa theo thuật toán xu hướng.',
        },
        {
          label: 'Nội dung đa mục tiêu:',
          text: 'Kết hợp hài hòa giữa nội dung chia sẻ giá trị, nội dung tương tác và nội dung thúc đẩy bán hàng.',
        },
        {
          label: 'Giá trị nhận được:',
          text: 'Tăng độ nhận diện thương hiệu tự nhiên, thu hút tệp khách hàng trẻ và tạo ra các nội dung có khả năng "viral".',
        },
      ],
    },
    {
      title: 'QUẢN LÝ FANPAGE & QUẢNG CÁO',
      intro: [
        'Vận hành chuyên nghiệp – Tối ưu chuyển đổi.',
        'Chúng tôi biến Fanpage của bạn thành một "cửa hàng" chuyên nghiệp hoạt động 24/7 và dùng quảng cáo để đưa cửa hàng đó đến đúng người đang có nhu cầu.',
      ],
      items: [
        {
          label: 'Vận hành Fanpage trọn gói:',
          text: 'Lên kế hoạch nội dung hàng tháng, thiết kế hình ảnh, chăm sóc tương tác và báo cáo chỉ số định kỳ.',
        },
        {
          label: 'Quảng cáo Facebook & TikTok Ads:',
          text: 'Thiết lập chiến dịch quảng cáo tối ưu tệp đối tượng, ngân sách và mẫu quảng cáo.',
        },
        {
          label: 'Tối ưu hóa phễu chuyển đổi:',
          text: 'Theo dõi sát sao chỉ số để điều chỉnh, nhằm giảm chi phí trên mỗi đơn hàng/khách hàng tiềm năng.',
        },
        {
          label: 'Giá trị nhận được:',
          text: 'Tiết kiệm thời gian quản lý, duy trì sự hiện diện chuyên nghiệp và gia tăng doanh số thực tế.',
        },
      ],
    },
    {
      title: 'THIẾT KẾ & SẢN XUẤT MEDIA',
      intro: [
        'Số hóa hình ảnh – Nâng tầm chuyên nghiệp.',
        'Hình ảnh đẹp là lời chào cao cấp nhất. G12 Media sở hữu đội ngũ Media trẻ trung, biến những giá trị vô hình của sản phẩm thành những khung hình sống động.',
      ],
      items: [
        {
          label: 'Sản xuất hình ảnh/Video:',
          text: 'Chụp ảnh sản phẩm, quay TVC giới thiệu doanh nghiệp, Video viral.',
        },
        {
          label: 'Thiết kế ấn phẩm truyền thông:',
          text: 'Logo, POSM, Banner quảng cáo, Profile doanh nghiệp.',
        },
        {
          label: 'Dịch vụ Livestream:',
          text: 'Hỗ trợ kỹ thuật và kịch bản livestream bán hàng chuyên nghiệp.',
        },
        {
          label: 'Giá trị nhận được:',
          text: 'Hình ảnh thương hiệu chỉn chu, cao cấp, tăng tính thuyết phục và độ tin cậy đối với khách hàng ngay từ cái nhìn đầu tiên.',
        },
      ],
    },
  ],

  en: [
    {
      title: 'FULL-SERVICE MARKETING',
      intro: [
        'A solid foundation for the journey ahead.',
        'We help businesses answer the question: "Who are you, and why should customers choose you?" — with a methodical strategic roadmap instead of scattered marketing activities.',
      ],
      items: [
        {
          label: 'Brand strategy consulting:',
          text: 'Brand positioning, brand storytelling and a core-value identity system.',
        },
        {
          label: 'Full marketing planning:',
          text: 'Market research, competitor analysis and a phased rollout roadmap (short and long term).',
        },
        {
          label: 'Target audience profiling:',
          text: 'Accurate customer personas to sharpen every marketing message.',
        },
        {
          label: 'What you get:',
          text: 'A distinctive, consistent brand that wins its niche and grows sustainably.',
        },
      ],
    },
    {
      title: 'SOCIAL CONTENT & TIKTOK',
      intro: [
        'Content that connects — leading the trend.',
        "In the digital era, content is the weapon of connection. G12 Media makes your brand not just visible, but memorable in your customers' minds.",
      ],
      items: [
        {
          label: 'Channel concept development:',
          text: 'A signature content style for Facebook, TikTok and Instagram.',
        },
        {
          label: 'Short-form video (TikTok/Reels/Shorts):',
          text: 'End-to-end production from ideation and scripting to filming, editing and trend-algorithm optimisation.',
        },
        {
          label: 'Multi-goal content:',
          text: 'A balanced mix of value-sharing, engagement and sales-driving content.',
        },
        {
          label: 'What you get:',
          text: 'Organic brand awareness, a younger audience and content built to go viral.',
        },
      ],
    },
    {
      title: 'FANPAGE & ADS MANAGEMENT',
      intro: [
        'Professional operations — optimised conversion.',
        'We turn your fanpage into a professional storefront that runs 24/7, and use advertising to put that storefront in front of people who are ready to buy.',
      ],
      items: [
        {
          label: 'End-to-end fanpage operations:',
          text: 'Monthly content planning, visual design, community care and regular performance reports.',
        },
        {
          label: 'Facebook & TikTok Ads:',
          text: 'Campaigns optimised across audiences, budgets and creatives.',
        },
        {
          label: 'Conversion funnel optimisation:',
          text: 'Close metric tracking and adjustment to cut cost per order and per lead.',
        },
        {
          label: 'What you get:',
          text: 'Less time managing, a consistently professional presence and real sales growth.',
        },
      ],
    },
    {
      title: 'DESIGN & MEDIA PRODUCTION',
      intro: [
        'Digitised visuals — elevated professionalism.',
        'Beautiful imagery is the finest first impression. Our young media team turns the intangible value of your product into vivid frames.',
      ],
      items: [
        {
          label: 'Photo & video production:',
          text: 'Product photography, corporate TVCs and viral video.',
        },
        {
          label: 'Communication collateral design:',
          text: 'Logos, POSM, ad banners and company profiles.',
        },
        {
          label: 'Livestream services:',
          text: 'Technical support and scripts for professional live selling.',
        },
        {
          label: 'What you get:',
          text: 'A polished, premium brand image that earns trust at first sight.',
        },
      ],
    },
  ],
};
