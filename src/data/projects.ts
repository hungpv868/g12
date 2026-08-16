import type { Lang } from '~/i18n/ui';

/**
 * Case-study content for the Projects page.
 *
 * The Figma projects frame (node 3:10 → "Desktop - 11") pastes pre-composed
 * artwork images with the copy baked in — untranslatable, and reported cut off
 * by the client (feedback 16/08). The VI copy below is transcribed VERBATIM
 * from those artworks (fig assets "10 1"…"23 1"); the photos were cropped out
 * of the same artworks into src/assets/projects-page/case/.
 * The EN version is a draft by Claude; G12 must review it before production.
 *
 * One deliberate fix: the original Jin Fitness results artwork says
 * "về Choi's Pilates" (a copy-paste slip in the design) — corrected to Jin.
 */

export interface CaseSection {
  /** Nội Dung / Hình Ảnh / Trải nghiệm columns, in order */
  columns: { title: string; text: string }[];
  /** hand-written verdict badge, e.g. ĐƠN ĐIỆU → CAO CẤP */
  badge: string;
}

export interface CaseStudy {
  /** stable key, also used to pick images in the component */
  key: 'matilia' | 'chois' | 'jin';
  no: string;
  name: string;
  industry: string;
  platforms: string;
  goal: string;
  before: CaseSection;
  after: CaseSection;
  stats: { value: string; text: string }[];
  /** optional highlight block — only Matilia & Choi's have one in the artwork */
  extra?: { title: string; text: string };
}

export const caseLabels: Record<
  Lang,
  { industry: string; platforms: string; goal: string; before: string; after: string; results: string }
> = {
  vi: {
    industry: 'Ngành Hàng',
    platforms: 'Nền tảng triển khai',
    goal: 'Mong muốn khách hàng',
    before: 'Phân Tích Bối Cảnh',
    after: 'Giải Pháp',
    results: 'Kết Quả',
  },
  en: {
    industry: 'Industry',
    platforms: 'Platforms',
    goal: 'Client goal',
    before: 'Context Analysis',
    after: 'Our Solution',
    results: 'Results',
  },
};

export const caseStudies: Record<Lang, CaseStudy[]> = {
  vi: [
    {
      key: 'matilia',
      no: '01',
      name: 'Matilia Mommy',
      industry: 'FMCG – Dinh dưỡng – Mẹ và Bé',
      platforms: 'Facebook, TikTok',
      goal: 'Xây dựng hình ảnh một dòng sữa bầu cao cấp, đáng tin cậy và thấu hiểu mẹ bầu.',
      before: {
        badge: 'Đơn điệu',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Nội dung dinh dưỡng mang tính chuyên môn cao, dễ tạo cảm giác khô khan, chưa thực sự chạm tới cảm xúc và tâm lý nhạy cảm của mẹ bầu.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Hình ảnh trên nền tảng số chưa thể hiện rõ định vị cao cấp của một thương hiệu nhập khẩu từ Pháp.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Trải nghiệm nhận diện sản phẩm trên môi trường số chưa đủ trực quan, khiến người dùng khó phân biệt hương vị và giá trị nổi bật của từng dòng sản phẩm.',
          },
        ],
      },
      after: {
        badge: 'Cao cấp',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Phát triển nội dung gắn với hành trình làm mẹ, truyền tải kiến thức dinh dưỡng theo cách gần gũi, dễ hiểu và giàu cảm xúc, từ đó định vị Matilia như người bạn đồng hành đáng tin cậy của mẹ bầu.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Chuẩn hóa hệ thống hình ảnh với phong cách visual đồng bộ, tinh tế, thể hiện rõ định vị cao cấp chuẩn Pháp. Thiết kế nhẹ nhàng, phù hợp với mẹ và bé, giúp tăng độ tin cậy ngay từ lần tiếp cận đầu tiên.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Tối ưu nhận diện sản phẩm trên Facebook và TikTok bằng nội dung media trực quan, giúp mẹ bầu dễ phân biệt các dòng vị sữa và nhanh chóng hiểu giá trị dinh dưỡng từng sản phẩm.',
          },
        ],
      },
      stats: [
        { value: '4000+', text: 'Đơn hàng được chốt trong các phiên Megalive' },
        { value: '>3 Triệu', text: 'Tổng lượt xem trên TikTok và Facebook' },
      ],
      extra: {
        title: 'Vận Hành Trơn Chu',
        text: 'Chúng tôi sở hữu đội ngũ chuyên môn đầy đủ từ quảng cáo, media, thiết kế, nội dung đến chăm sóc khách hàng và vận hành đơn hàng, đảm bảo quá trình triển khai chiến dịch diễn ra trơn chu và hiệu quả cho doanh nghiệp.',
      },
    },
    {
      key: 'chois',
      no: '02',
      name: "Choi's Pilates",
      industry: 'Fitness – Pilates – Chăm sóc sức khỏe',
      platforms: 'Facebook, TikTok',
      goal: 'Xây dựng hình ảnh studio Pilates dành cho phụ nữ hiện đại, hướng tới cải thiện vóc dáng, sức khỏe và lối sống lành mạnh.',
      before: {
        badge: 'Chưa "sang"',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Nội dung truyền thông chưa nổi bật được giá trị và lợi ích của Pilates đối với sức khỏe và vóc dáng.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Hình ảnh thương hiệu trên mạng xã hội chưa thể hiện rõ không gian hiện đại, thiết bị cao cấp và chất lượng huấn luyện.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Khách hàng tiềm năng chưa hiểu rõ trải nghiệm tập luyện tại studio.',
          },
        ],
      },
      after: {
        badge: 'Sang xịn',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Xây dựng nội dung chia sẻ về lợi ích của Pilates, cải thiện vóc dáng trước – sau, sức khỏe và lối sống lành mạnh.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Xây dựng hệ thống visual chuyên nghiệp, hiện đại, đồng bộ với không gian và định vị của studio Pilates cao cấp.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Xây dựng hình ảnh huấn luyện viên như những người bạn đồng hành trong hành trình tập luyện, luôn theo sát, hướng dẫn và hỗ trợ học viên cải thiện vóc dáng và sức khỏe.',
          },
        ],
      },
      stats: [
        { value: '100+', text: 'Học viên mới thông qua các chiến dịch Marketing trên Facebook, TikTok và chạy quảng cáo' },
        {
          value: '>1 Triệu',
          text: "Tổng lượt xem trên TikTok và Facebook, gia tăng độ nhận diện về Choi's Pilates đến khách hàng tiềm năng",
        },
      ],
      extra: {
        title: 'Có Cộng Đồng Pilates Riêng',
        text: 'Phát triển cộng đồng học viên Pilates, tăng sự gắn kết và giữ chân khách hàng thông qua các hoạt động tương tác và chương trình quà tặng.',
      },
    },
    {
      key: 'jin',
      no: '03',
      name: 'Jin Fitness',
      industry: 'Gym – Thể hình – Chăm sóc sức khỏe',
      platforms: 'Facebook, TikTok',
      goal: 'Tăng nhận diện thương hiệu phòng gym, thu hút hội viên mới và xây dựng hình ảnh phòng tập năng động, có huấn luyện viên riêng.',
      before: {
        badge: 'Chưa "xịn"',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Nội dung truyền thông chưa thể hiện rõ lợi thế về HLV và chương trình tập luyện.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Hình ảnh phòng tập trên nền tảng số chưa thực sự nổi bật so với các đối thủ.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Cần gia tăng sự quan tâm và tương tác từ khách hàng mục tiêu.',
          },
        ],
      },
      after: {
        badge: 'Xịn',
        columns: [
          {
            title: 'Nội Dung',
            text: 'Xây dựng nội dung về tập luyện, dinh dưỡng và hành trình thay đổi vóc dáng của học viên.',
          },
          {
            title: 'Hình Ảnh',
            text: 'Thiết kế hệ thống visual mạnh mẽ, năng động, phù hợp với lĩnh vực thể hình.',
          },
          {
            title: 'Trải Nghiệm',
            text: 'Quay chụp các buổi tập, hoạt động tại phòng gym nhằm tăng tính chân thực và thu hút người xem.',
          },
        ],
      },
      stats: [
        { value: '100+', text: 'Thành viên mới thông qua các chiến dịch Marketing trên Facebook, TikTok và chạy quảng cáo' },
        {
          value: '>1 Triệu',
          text: 'Tổng lượt xem trên TikTok và Facebook, gia tăng độ nhận diện về Jin Fitness đến khách hàng tiềm năng',
        },
      ],
    },
  ],

  en: [
    {
      key: 'matilia',
      no: '01',
      name: 'Matilia Mommy',
      industry: 'FMCG – Maternal & Baby Nutrition',
      platforms: 'Facebook, TikTok',
      goal: 'Build the image of a premium, trustworthy prenatal milk brand that truly understands expecting mothers.',
      before: {
        badge: 'Plain',
        columns: [
          {
            title: 'Content',
            text: 'Nutrition content was highly technical and dry, failing to connect with the emotions and sensitivities of expecting mothers.',
          },
          {
            title: 'Visuals',
            text: 'Digital imagery did not convey the premium positioning of a brand imported from France.',
          },
          {
            title: 'Experience',
            text: 'Product presentation online was not visual enough — customers struggled to tell flavors and key benefits apart.',
          },
        ],
      },
      after: {
        badge: 'Premium',
        columns: [
          {
            title: 'Content',
            text: 'Content built around the motherhood journey, delivering nutrition knowledge in a warm, accessible, emotional way — positioning Matilia as a trusted companion for moms-to-be.',
          },
          {
            title: 'Visuals',
            text: 'A standardized, refined visual system that clearly signals premium French quality — gentle designs that suit mother and baby and build trust at first sight.',
          },
          {
            title: 'Experience',
            text: 'Visual media content on Facebook and TikTok that helps mothers instantly tell flavors apart and grasp the nutritional value of each product line.',
          },
        ],
      },
      stats: [
        { value: '4000+', text: 'Orders closed during Megalive sessions' },
        { value: '3M+', text: 'Total views across TikTok and Facebook' },
      ],
      extra: {
        title: 'Seamless Operations',
        text: 'Our full in-house team — advertising, media, design, content, customer care and order operations — keeps every campaign running smoothly and effectively.',
      },
    },
    {
      key: 'chois',
      no: '02',
      name: "Choi's Pilates",
      industry: 'Fitness – Pilates – Wellness',
      platforms: 'Facebook, TikTok',
      goal: 'Build the image of a Pilates studio for modern women, focused on body shape, health and a balanced lifestyle.',
      before: {
        badge: 'Understated',
        columns: [
          {
            title: 'Content',
            text: 'Communications did not highlight the value and benefits of Pilates for health and body shape.',
          },
          {
            title: 'Visuals',
            text: 'Social imagery failed to show the modern space, premium equipment and coaching quality.',
          },
          {
            title: 'Experience',
            text: 'Potential customers had little sense of what training at the studio actually feels like.',
          },
        ],
      },
      after: {
        badge: 'Elevated',
        columns: [
          {
            title: 'Content',
            text: 'Content sharing the benefits of Pilates, before–after body transformations, health and balanced living.',
          },
          {
            title: 'Visuals',
            text: 'A professional, modern visual system aligned with the space and positioning of a premium Pilates studio.',
          },
          {
            title: 'Experience',
            text: 'Trainers portrayed as companions on the training journey — always close by, guiding and supporting every member.',
          },
        ],
      },
      stats: [
        { value: '100+', text: 'New members through marketing campaigns on Facebook, TikTok and paid ads' },
        { value: '1M+', text: "Total views on TikTok and Facebook, raising Choi's Pilates brand awareness" },
      ],
      extra: {
        title: 'A Pilates Community of Its Own',
        text: 'A growing member community with stronger engagement and retention through interactive activities and gift programs.',
      },
    },
    {
      key: 'jin',
      no: '03',
      name: 'Jin Fitness',
      industry: 'Gym – Fitness – Wellness',
      platforms: 'Facebook, TikTok',
      goal: 'Grow gym brand awareness, attract new members and build the image of a dynamic gym with personal trainers.',
      before: {
        badge: 'Unpolished',
        columns: [
          {
            title: 'Content',
            text: 'Communications did not showcase the strengths of the trainers and training programs.',
          },
          {
            title: 'Visuals',
            text: 'Gym imagery online did not stand out against competitors.',
          },
          {
            title: 'Experience',
            text: 'Attention and engagement from the target audience needed a real boost.',
          },
        ],
      },
      after: {
        badge: 'Sharp',
        columns: [
          {
            title: 'Content',
            text: 'Content about training, nutrition and members’ body-transformation journeys.',
          },
          {
            title: 'Visuals',
            text: 'A bold, energetic visual system built for the fitness industry.',
          },
          {
            title: 'Experience',
            text: 'Real workout sessions and gym activities on camera for authenticity and reach.',
          },
        ],
      },
      stats: [
        { value: '100+', text: 'New members through marketing campaigns on Facebook, TikTok and paid ads' },
        { value: '1M+', text: 'Total views on TikTok and Facebook, raising Jin Fitness brand awareness' },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────
   Projects by industry — Company Profile section III (pages 18–29),
   client feedback 16/08: "Chia thành các ngành hàng như sau —
   mỗi mục lấy 1-3 dự án". Picks follow the profile's own ordering
   (first 3 per industry). VI copy condensed from the profile text;
   EN is a draft by Claude — G12 must review it before production.
   ───────────────────────────────────────────────────────────────── */

export interface IndustryProject {
  /** matches an image in assets/projects-page/industries/<img>.jpg */
  img: string;
  name: string;
  /** service tags, kept in English exactly as printed in the profile */
  services: string;
  period: string;
  desc: string;
  /** anchor of a detailed case study further down the page */
  caseAnchor?: string;
}

export interface Industry {
  no: string;
  title: string;
  intro: string;
  projects: IndustryProject[];
}

export const industryLabels: Record<Lang, { title: string; caseTitle: string; viewCase: string }> = {
  vi: {
    title: 'Dự Án Theo Ngành Hàng',
    caseTitle: 'Dự Án Nổi Bật',
    viewCase: 'Xem chi tiết dự án',
  },
  en: {
    title: 'Projects by Industry',
    caseTitle: 'Featured Case Studies',
    viewCase: 'View case study',
  },
};

export const industries: Record<Lang, Industry[]> = {
  vi: [
    {
      no: '3.1',
      title: 'Giáo Dục & Đào Tạo',
      intro:
        'G12 Media có kinh nghiệm triển khai truyền thông cho các trường học, cơ sở đào tạo và dự án giáo dục trong nước, quốc tế — tập trung vào xây dựng hình ảnh, truyền thông tuyển sinh, sản xuất nội dung và video dự án.',
      projects: [
        {
          img: 'cgd-victory',
          name: 'CGD Victory School',
          services: 'Truyền thông thương hiệu · Thiết kế sáng tạo · Sản xuất nội dung',
          period: '2016 – 2021',
          desc: 'Đồng hành cùng CGD School trong xây dựng hình ảnh và truyền thông nhà trường: xây dựng nội dung, thiết kế ấn phẩm tuyển sinh và phát triển hình ảnh môi trường học tập, trải nghiệm của học sinh.',
        },
        {
          img: 'tieu-hoc-cngd',
          name: 'Trường Tiểu Học Công Nghệ Giáo Dục',
          services: 'Truyền thông thương hiệu · Thiết kế sáng tạo · Sản xuất nội dung',
          period: '2015 – 2017, 2024 – 2026',
          desc: 'Triển khai quảng cáo, truyền thông nhà trường — truyền tải thông tin rõ ràng, xây dựng hình ảnh chuyên nghiệp, gần gũi và tăng cường kết nối nhà trường – học sinh – phụ huynh.',
        },
        {
          img: 'vnen-srpp',
          name: 'Dự Án VNEN & SRPP',
          services: 'Sản xuất media · Truyền thông dự án',
          period: '2015 – 2017',
          desc: 'Sản xuất nội dung truyền thông cho hai dự án thuộc Bộ Giáo dục & Đào tạo với sự hỗ trợ của Ngân hàng Thế giới: kịch bản, quay dựng chuỗi video phóng sự, tài liệu về mô hình giáo dục tại các địa phương.',
        },
      ],
    },
    {
      no: '3.2',
      title: 'Sức Khỏe, Fitness & Làm Đẹp',
      intro:
        'Giải pháp truyền thông cho các thương hiệu thể thao, chăm sóc sức khỏe và làm đẹp — nội dung xây dựng theo đặc thù từng thương hiệu, tập trung vào trải nghiệm khách hàng, chất lượng dịch vụ và uy tín trên thị trường.',
      projects: [
        {
          img: 'moroccanoil-tigi',
          name: 'Moroccanoil & TIGI Haircare',
          services: 'Truyền thông thương hiệu · Nội dung sản phẩm · Sản xuất media',
          period: '2017 – 2018',
          desc: 'Đồng hành cùng hai thương hiệu chăm sóc tóc chuyên nghiệp toàn cầu trong phát triển nội dung số, quảng cáo và quảng bá thương hiệu đến đông đảo người tiêu dùng tại Việt Nam.',
        },
        {
          img: 'jin-fitness',
          name: 'Jin Fitness',
          services: 'Marketing tích hợp · Mạng xã hội · Sản xuất media · Quảng cáo số',
          period: '2025 – 2026',
          desc: 'Đối tác chiến lược cung cấp giải pháp marketing tổng thể: hoạch định chiến lược, quản trị Fanpage, sản xuất nội dung đa phương tiện và tối ưu quảng cáo số.',
          caseAnchor: 'case-jin',
        },
        {
          img: 'chois-pilates',
          name: "Choi's Pilates",
          services: 'Marketing tích hợp · Mạng xã hội · Sản xuất media · Quảng cáo số',
          period: '2025 – 2026',
          desc: 'Đối tác marketing tổng thể, đồng thời tư vấn định hướng thông điệp báo chí và xử lý rủi ro truyền thông cho thương hiệu.',
          caseAnchor: 'case-chois',
        },
      ],
    },
    {
      no: '3.3',
      title: 'Công Nghệ & Tài Chính',
      intro:
        'G12 Media từng thực hiện các dự án truyền thông cho doanh nghiệp công nghệ, viễn thông và tài chính: truyền thông sản phẩm, quan hệ báo chí, nội dung số, sản xuất media và tổ chức sự kiện giới thiệu giải pháp.',
      projects: [
        {
          img: 'imou',
          name: 'IMOU Vietnam',
          services: 'Truyền thông số · Sản xuất nội dung',
          period: '2021 – 2023',
          desc: 'Quảng cáo và hỗ trợ chiến dịch marketing số: truyền thông giải pháp camera thông minh, làm nổi bật tính năng công nghệ và lan tỏa các chương trình khuyến mãi bán hàng.',
        },
        {
          img: 'lockin',
          name: 'Lockin Việt Nam',
          services: 'Truyền thông thương hiệu · Thiết kế sáng tạo · Sản xuất nội dung',
          period: '2016 – 2021',
          desc: 'Phát triển và duy trì các kênh mạng xã hội của thương hiệu khóa thông minh: xây dựng nội dung, thiết kế hình ảnh, sản xuất video và vận hành truyền thông trên các nền tảng số.',
        },
        {
          img: 'mcredit',
          name: 'Mcredit',
          services: 'Truyền thông thương hiệu · Sản xuất nội dung',
          period: '2019 – 2021',
          desc: 'Đối tác thực thi truyền thông và marketing tích hợp đa kênh cho thương hiệu tài chính tiêu dùng: sản xuất nội dung, thiết kế ấn phẩm số và triển khai các chiến dịch quảng bá.',
        },
      ],
    },
    {
      no: '3.4',
      title: 'Bất Động Sản & Nghỉ Dưỡng',
      intro:
        'Nền tảng kinh nghiệm truyền thông dự án bất động sản, khu đô thị, trung tâm thương mại và nghỉ dưỡng — kết hợp xây dựng nhận diện, thiết kế tài liệu bán hàng, PR báo chí và tổ chức sự kiện.',
      projects: [
        {
          img: 'five-star-garden',
          name: 'Five Star Garden',
          services: 'Xây dựng thương hiệu · Quan hệ công chúng · Sự kiện ra mắt',
          period: '2015',
          desc: 'Giải pháp truyền thông tích hợp cho dự án bất động sản cao cấp: xây dựng hệ thống nhận diện, thiết kế Presskit, PR báo chí và tổ chức sự kiện khởi công, ra mắt dự án.',
        },
      ],
    },
  ],

  en: [
    {
      no: '3.1',
      title: 'Education & Training',
      intro:
        'G12 Media has deep experience running communications for schools, training institutions and education projects at home and abroad — brand building, admissions campaigns, content production and project films.',
      projects: [
        {
          img: 'cgd-victory',
          name: 'CGD Victory School',
          services: 'Brand Communications · Creative Design · Content Production',
          period: '2016 – 2021',
          desc: "Partnering with CGD School on brand image and school communications: content, admissions collateral and imagery showcasing the learning environment and student experience.",
        },
        {
          img: 'tieu-hoc-cngd',
          name: 'CGD Primary School',
          services: 'Brand Communications · Creative Design · Content Production',
          period: '2015 – 2017, 2024 – 2026',
          desc: 'Advertising and school communications — clear information delivery, a professional yet friendly image, and a stronger school–student–parent connection.',
        },
        {
          img: 'vnen-srpp',
          name: 'VNEN & SRPP Projects',
          services: 'Media Production · Project Communications',
          period: '2015 – 2017',
          desc: 'Producing communications content for two Ministry of Education & Training projects backed by the World Bank: scripting and shooting documentary video series about new education models nationwide.',
        },
      ],
    },
    {
      no: '3.2',
      title: 'Health, Fitness & Beauty',
      intro:
        'Communications solutions for sports, wellness and beauty brands — content tailored to each brand, centered on customer experience, service quality and market credibility.',
      projects: [
        {
          img: 'moroccanoil-tigi',
          name: 'Moroccanoil & TIGI Haircare',
          services: 'Brand Communications · Product Content · Media Production',
          period: '2017 – 2018',
          desc: 'Partnering with two global professional haircare brands on digital content, advertising and brand promotion to Vietnamese consumers.',
        },
        {
          img: 'jin-fitness',
          name: 'Jin Fitness',
          services: 'Integrated Marketing · Social Media · Media Production · Digital Ads',
          period: '2025 – 2026',
          desc: 'Strategic full-stack marketing partner: strategy planning, fanpage operations, multimedia content production and performance-ad optimization.',
          caseAnchor: 'case-jin',
        },
        {
          img: 'chois-pilates',
          name: "Choi's Pilates",
          services: 'Integrated Marketing · Social Media · Media Production · Digital Ads',
          period: '2025 – 2026',
          desc: 'Full-stack marketing partner, also advising on press messaging and crisis communications for the brand.',
          caseAnchor: 'case-chois',
        },
      ],
    },
    {
      no: '3.3',
      title: 'Technology & Finance',
      intro:
        'Communications projects for technology, telecom and finance businesses: product communications, press relations, digital content, media production and solution-launch events.',
      projects: [
        {
          img: 'imou',
          name: 'IMOU Vietnam',
          services: 'Digital Communications · Content Production',
          period: '2021 – 2023',
          desc: 'Advertising and digital-marketing support: promoting smart-camera solutions, spotlighting technology features and amplifying sales promotions.',
        },
        {
          img: 'lockin',
          name: 'Lockin Vietnam',
          services: 'Brand Communications · Creative Design · Content Production',
          period: '2016 – 2021',
          desc: "Building and running the smart-lock brand's social channels: content, visual design, video production and day-to-day digital communications.",
        },
        {
          img: 'mcredit',
          name: 'Mcredit',
          services: 'Brand Communications · Content Production',
          period: '2019 – 2021',
          desc: 'Executing integrated multi-channel communications and marketing for the consumer-finance brand: content production, digital collateral and promotional campaigns.',
        },
      ],
    },
    {
      no: '3.4',
      title: 'Real Estate & Hospitality',
      intro:
        'Experience across real-estate, urban, retail and hospitality projects — combining brand identity, sales collateral, press PR and event production.',
      projects: [
        {
          img: 'five-star-garden',
          name: 'Five Star Garden',
          services: 'Branding · Public Relations · Launch Event',
          period: '2015',
          desc: 'End-to-end communications for a premium real-estate project: brand identity, presskit design, press PR and the groundbreaking / launch events.',
        },
      ],
    },
  ],
};
