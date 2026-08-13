export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export const defaultLang = 'vi' as const;

export type Lang = keyof typeof languages;

/**
 * The EN translations are a draft by Claude — G12 needs to review them
 * before production. The VI copy is the original content from Figma/Doc.
 */
export const ui = {
  vi: {
    'nav.home': 'Trang Chủ',
    'nav.about': 'Về Chúng Tôi',
    'nav.projects': 'Dự Án',
    'nav.services': 'Dịch Vụ',
    'nav.blog': 'Blog',
    'nav.contact': 'Liên Hệ',
    'nav.menu': 'Mở menu',
    'nav.close': 'Đóng menu',

    'a11y.toggleTheme': 'Chuyển giao diện sáng/tối',
    'a11y.switchLang': 'Chuyển ngôn ngữ',
    'a11y.skipToContent': 'Bỏ qua, tới nội dung chính',

    'cta.consult': 'Liên Hệ Tư Vấn',
    'cta.learnMore': 'Tìm hiểu',
    'cta.learnNow': 'Tìm hiểu ngay',
    'cta.readMore': 'Đọc thêm',
    'cta.seeMore': 'Xem thêm',

    'marquee.marketing': 'Giải Pháp Marketing',
    'marquee.digital': 'Giải Pháp Truyền Thông Số',
    'marquee.advertising': 'Giải Pháp Quảng Cáo',
    'marquee.creative': 'Giải Pháp Sáng Tạo',

    'home.meta.title': 'G12 Media — Đối tác Marketing phát triển bền vững',
    'home.meta.description':
      'G12 Media cung cấp giải pháp Marketing trọn gói: quản trị Fanpage & quảng cáo, content social & TikTok, thiết kế và sản xuất media cho doanh nghiệp Việt.',

    'services.meta.title': 'Dịch Vụ Marketing Trọn Gói — G12 Media',
    'projects.meta.title': 'Dự Án Tiêu Biểu — G12 Media',
    'home.hero.title1': 'Đối tác Marketing giúp',
    'home.hero.title2': 'doanh nghiệp',
    'home.hero.title3': 'phát triển bền vững',
    'home.hero.desc':
      'Từ chiến lược thương hiệu, quản lý Fanpage đến sản xuất Media và Livestream, G12 cung cấp giải pháp toàn diện giúp doanh nghiệp tối ưu chi phí và tối đa hiệu quả kinh doanh.',
    'home.hero.check1': 'Quản trị Fanpage & Quảng cáo',
    'home.hero.check2': 'Thiết kế sáng tạo & Sản xuất Media',
    'home.hero.check3': 'Tư vấn chiến lược thương hiệu & Marketing',
    'home.hero.check4': 'Content Social Media & Video TikTok/Reels',

    'home.services.title1': 'DỊCH VỤ',
    'home.services.title2': 'NỔI BẬT',
    'home.services.desc':
      'G12 Media triển khai giải pháp Marketing trọn gói, giúp doanh nghiệp xây dựng thương hiệu, tiếp cận khách hàng và tạo ra tăng trưởng doanh thu bền vững.',
    'home.services.s1.title': 'MARKETING TỔNG THỂ',
    'home.services.s1.i1': 'Tư vấn chiến lược thương hiệu',
    'home.services.s1.i2': 'Lập kế hoạch Marketing',
    'home.services.s1.i3': 'Định vị sản phẩm & khách hàng mục tiêu',
    'home.services.s2.title': 'CONTENT SOCIAL & TIKTOK',
    'home.services.s2.i1': 'Xây dựng concept kênh',
    'home.services.s2.i2': 'Sản xuất video TikTok/Reels',
    'home.services.s2.i3': 'Kịch bản, quay dựng, tối ưu xu hướng',
    'home.services.s3.title': 'QUẢN LÝ FANPAGE & QUẢNG CÁO',
    'home.services.s3.i1': 'Vận hành Fanpage trọn gói',
    'home.services.s3.i2': 'Chạy Facebook Ads / TikTok Ads',
    'home.services.s3.i3': 'Tối ưu chi phí – tăng đơn hàng',
    'home.services.s4.title': 'THIẾT KẾ & SẢN XUẤT MEDIA',
    'home.services.s4.i1': 'Chụp ảnh, quay TVC, viral video',
    'home.services.s4.i2': 'Livestream bán hàng',
    'home.services.s4.i3': 'Thiết kế ấn phẩm truyền thông',

    'home.projects.title1': 'DỰ ÁN',
    'home.projects.title2': 'TIÊU BIỂU',
    'home.projects.desc':
      'Chúng tôi đã đồng hành cùng nhiều doanh nghiệp ở đa dạng lĩnh vực, giúp họ nâng cao hình ảnh thương hiệu và tăng trưởng khách hàng rõ rệt.',

    'home.who.title': 'G12 MEDIA LÀ AI?',
    'home.who.lead': 'G12 Media',
    'home.who.desc':
      'là đơn vị Truyền thông & Marketing tổng thể, chuyên xây dựng chiến lược thương hiệu, sản xuất nội dung và tối ưu chi phí quảng cáo — giúp doanh nghiệp tăng nhận diện, tăng khách hàng và tăng doanh thu bền vững.',
    'home.who.sub': 'Chúng tôi tập trung trọng vào:',
    'home.who.i1': 'Tư duy chiến lược rõ ràng',
    'home.who.i2': 'Hiệu quả đo lường được',
    'home.who.i3': 'Triển khai nhanh — đo lường minh bạch',

    'home.mission.title': 'SỨ MỆNH CỦA CHÚNG TÔI',
    'home.mission.m1': 'Giúp doanh nghiệp Việt xây dựng thương hiệu bài bản',
    'home.mission.m2': 'Tối ưu chi phí marketing – tối đa hiệu quả bán hàng',
    'home.mission.m3': 'Đồng hành từ chiến lược đến triển khai thực tế',

    'home.philosophy.title': 'TRIẾT LÝ HOẠT ĐỘNG',
    'home.philosophy.desc':
      'Chúng tôi chỉ thành công khi khách hàng tăng trưởng. Mọi quyết định được triển khai với tinh thần:',
    'home.philosophy.i1': 'Thấu hiểu trước khi đề xuất',
    'home.philosophy.i2': 'Cam kết hiệu quả bằng kết quả thực tế',
    'home.philosophy.i3': 'Đồng hành phát triển bền vững cùng khách hàng',
    'home.philosophy.badge': 'G12 – GROW TOGETHER',

    'home.trust.title1': 'NHIỀU KHÁCH HÀNG TIN TƯỞNG',
    'home.trust.title2': 'VÀ SỬ DỤNG DỊCH VỤ',

    'home.posts.title': 'BÀI VIẾT NỔI BẬT',
    'home.callus.title': 'Liên hệ khi bạn cần',

    'footer.connect1': 'Hãy',
    'footer.connect2': 'Kết Nối',
    'footer.connect3': 'Với Chúng Tôi',
    'footer.contact': 'Liên Hệ',
    'footer.newsletter': 'Nhận thông tin mới nhất',
    'footer.emailPlaceholder': 'Địa chỉ email',
    'footer.subscribe': 'Đăng ký nhận tin',
    'footer.rights': 'G12 Media. Mọi quyền được bảo lưu',
    'footer.terms': 'Điều khoản sử dụng',
    'footer.privacy': 'Chính sách bảo mật',

    'about.meta.title': 'Về Chúng Tôi — G12 Media',
    'about.meta.description':
      'G12 Media — đơn vị tiên phong cung cấp các giải pháp quảng cáo, truyền thông và marketing all-in-one tại Việt Nam.',
    'about.story.title': 'Câu Chuyện Của Chúng Tôi',
    'about.story.script': 'Hành trình bắt đầu từ đam mê',
    'about.story.since': 'Từ 2016',
    'about.story.p1':
      'Xuất phát điểm là một nhóm những người trẻ đam mê marketing, sáng tạo nội dung và am hiểu nền tảng số, G12 Media được thành lập với khát vọng trở thành một agency trẻ – sáng tạo – bắt kịp xu hướng.',
    'about.story.p2':
      'Trải qua quá trình phát triển đến nay, G12 Media luôn kiên định với phương châm hoạt động "lấy đam mê làm nền tảng, lấy chiến lược làm kim chỉ nam và lấy kết quả làm thước đo".',
    'about.story.p3':
      'Trong tương lai, chúng tôi tiếp tục hướng tới mục tiêu trở thành đối tác truyền thông tin cậy, đồng hành cùng doanh nghiệp trong việc xây dựng thương hiệu bền vững và kết nối hiệu quả với khách hàng trên môi trường số.',
    'about.story.cta': 'XEM THÊM',
    'about.vision.title': 'Tầm Nhìn Của Chúng Tôi',
    'about.vision.quote':
      'Chúng tôi tin rằng giải pháp Marketing toàn diện chỉ thực sự có ý nghĩa khi mang lại kết quả đo lường được và góp phần thúc đẩy sự phát triển tích cực của thương hiệu và cộng đồng.',
    'about.vision.sign': '_ G12 MEDIA',
    'about.allinone': 'GIẢI PHÁP ALL-IN-ONE',
    'about.diff.title1': 'Điều Gì Khiến G12 Media',
    'about.diff.title2': 'Khác Biệt',
    'about.diff.title3': 'So Với Phần Còn Lại?',
    'about.diff.real': 'REAL',
    'about.diff.realDesc':
      'Chúng tôi cam kết mang lại kết quả có tác động thực tế, từ chiến lược đến thực thi.',
    'about.diff.human': 'HUMAN',
    'about.diff.humanDesc':
      'Nâng cao năng lực chuyên môn nhằm mang đến chất lượng dịch vụ tốt nhất cho quý khách hàng',
    'about.diff.expansion': 'EXPANSION',
    'about.diff.expansionDesc':
      'Mang đến giải pháp Digital Marketing toàn diện trên hành trình xây dựng và phát triển thương hiệu trong môi trường số.',
    'about.diff.innovation': 'INNOVATION',
    'about.diff.innovationDesc':
      'Cập nhật xu hướng mới giúp thương hiệu thích ứng nhanh, giữ vững lợi thế cạnh tranh và không bị tụt lại phía sau',
    'about.commit.title1': 'Cam Kết Của Chúng Tôi',
    'about.commit.title2': '"GROW TOGETHER"',
    'about.commit.with': 'cùng',
    'about.commit.c1': 'khách hàng',
    'about.commit.c1Desc': 'tăng trưởng thương hiệu',
    'about.commit.c2': 'đội ngũ',
    'about.commit.c2Desc': 'phát triển năng lực',
    'about.commit.c3': 'cộng đồng',
    'about.commit.c3Desc': 'lan tỏa giá trị',

    'blog.meta.title': 'Blog Marketing & Case Study — G12 Media',
    'blog.meta.description':
      'Case study, kiến thức đào tạo, tin tức marketing và câu chuyện nội bộ từ đội ngũ G12 Media.',
    'blog.all': 'TẤT CẢ',
    'blog.recent': 'BÀI VIẾT MỚI',
    'blog.categories': 'CHUYÊN MỤC',
    'blog.related': 'BÀI VIẾT LIÊN QUAN',
    'blog.by': 'G12 MEDIA',
    'blog.comingSoon': 'Sắp ra mắt',

    'contact.meta.title': 'Liên Hệ Tư Vấn Marketing — G12 Media',
    'contact.meta.description':
      'Liên hệ G12 Media để được tư vấn giải pháp Marketing trọn gói cho doanh nghiệp của bạn.',
    'contact.title': 'Liên Hệ Với Chúng Tôi',
    'contact.name': 'Họ Và Tên',
    'contact.phone': 'Điện Thoại',
    'contact.email': 'E-mail',
    'contact.message': 'Mô tả dự án của bạn',
    'contact.submit': 'Gửi Liên Hệ',
    'contact.success': 'Cảm ơn bạn! G12 Media sẽ liên hệ lại trong thời gian sớm nhất.',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',

    'a11y.toggleTheme': 'Toggle light/dark theme',
    'a11y.switchLang': 'Switch language',
    'a11y.skipToContent': 'Skip to main content',

    'cta.consult': 'Get a Consultation',
    'cta.learnMore': 'Learn more',
    'cta.learnNow': 'Learn more',
    'cta.readMore': 'Read more',
    'cta.seeMore': 'See more',

    'marquee.marketing': 'Marketing Solution',
    'marquee.digital': 'Digital Media Solution',
    'marquee.advertising': 'Advertising Solution',
    'marquee.creative': 'Creative Solution',

    'home.meta.title': 'G12 Media — Marketing for sustainable growth',
    'home.meta.description':
      'G12 Media delivers all-in-one marketing: fanpage management and ads, social and TikTok content, media design and production for Vietnamese businesses.',

    'services.meta.title': 'All-in-One Marketing Services — G12 Media',
    'projects.meta.title': 'Featured Projects — G12 Media',
    'home.hero.title1': 'The marketing partner for',
    'home.hero.title2': 'sustainable',
    'home.hero.title3': 'business growth',
    'home.hero.desc':
      'From brand strategy and fanpage management to media production and livestreaming, G12 delivers end-to-end solutions that cut costs and maximise business results.',
    'home.hero.check1': 'Fanpage management & advertising',
    'home.hero.check2': 'Creative design & media production',
    'home.hero.check3': 'Brand & marketing strategy consulting',
    'home.hero.check4': 'Social content & TikTok/Reels video',

    'home.services.title1': 'FEATURED',
    'home.services.title2': 'SERVICES',
    'home.services.desc':
      'G12 Media delivers all-in-one marketing solutions that help businesses build their brand, reach customers and grow revenue sustainably.',
    'home.services.s1.title': 'FULL-SERVICE MARKETING',
    'home.services.s1.i1': 'Brand strategy consulting',
    'home.services.s1.i2': 'Marketing planning',
    'home.services.s1.i3': 'Product & target audience positioning',
    'home.services.s2.title': 'SOCIAL CONTENT & TIKTOK',
    'home.services.s2.i1': 'Channel concept development',
    'home.services.s2.i2': 'TikTok/Reels video production',
    'home.services.s2.i3': 'Scripting, filming, trend optimisation',
    'home.services.s3.title': 'FANPAGE & ADS MANAGEMENT',
    'home.services.s3.i1': 'End-to-end fanpage operations',
    'home.services.s3.i2': 'Facebook Ads / TikTok Ads',
    'home.services.s3.i3': 'Lower cost — more orders',
    'home.services.s4.title': 'DESIGN & MEDIA PRODUCTION',
    'home.services.s4.i1': 'Photography, TVC, viral video',
    'home.services.s4.i2': 'Livestream selling',
    'home.services.s4.i3': 'Communication collateral design',

    'home.projects.title1': 'FEATURED',
    'home.projects.title2': 'PROJECTS',
    'home.projects.desc':
      'We have partnered with businesses across many industries, lifting their brand image and driving measurable customer growth.',

    'home.who.title': 'WHO IS G12 MEDIA?',
    'home.who.lead': 'G12 Media',
    'home.who.desc':
      'is a full-service communications and marketing agency specialising in brand strategy, content production and ad cost optimisation — helping businesses grow awareness, customers and revenue sustainably.',
    'home.who.sub': 'We focus on:',
    'home.who.i1': 'Clear strategic thinking',
    'home.who.i2': 'Measurable results',
    'home.who.i3': 'Fast execution — transparent reporting',

    'home.mission.title': 'OUR MISSION',
    'home.mission.m1': 'Help Vietnamese businesses build brands methodically',
    'home.mission.m2': 'Cut marketing cost — maximise sales performance',
    'home.mission.m3': 'Walk with you from strategy to real execution',

    'home.philosophy.title': 'HOW WE WORK',
    'home.philosophy.desc':
      'We only succeed when our clients grow. Every decision we make follows three principles:',
    'home.philosophy.i1': 'Understand before proposing',
    'home.philosophy.i2': 'Commit to results, proven by numbers',
    'home.philosophy.i3': 'Grow sustainably alongside our clients',
    'home.philosophy.badge': 'G12 – GROW TOGETHER',

    'home.trust.title1': 'TRUSTED BY MANY CLIENTS',
    'home.trust.title2': 'WHO USE OUR SERVICES',

    'home.posts.title': 'FEATURED ARTICLES',
    'home.callus.title': 'Call us if you need',

    'footer.connect1': "Let's",
    'footer.connect2': 'Connect',
    'footer.connect3': 'There',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Get the latest information',
    'footer.emailPlaceholder': 'Email address',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'G12 Media. All Rights Reserved',
    'footer.terms': 'Terms of use',
    'footer.privacy': 'Privacy policy',

    'about.meta.title': 'About Us — G12 Media',
    'about.meta.description':
      'G12 Media — a pioneering agency delivering all-in-one advertising, communications and marketing solutions in Vietnam.',
    'about.story.title': 'Our Story',
    'about.story.script': 'A journey that began with passion',
    'about.story.since': 'Since 2016',
    'about.story.p1':
      'Starting out as a group of young people passionate about marketing, content creation and digital platforms, G12 Media was founded with the ambition of becoming a young, creative, trend-savvy agency.',
    'about.story.p2':
      'Throughout our growth, G12 Media has stayed true to one guiding principle: "passion as the foundation, strategy as the compass, results as the measure".',
    'about.story.p3':
      'Looking ahead, we aim to be a trusted communications partner, walking alongside businesses as they build lasting brands and connect effectively with customers in the digital world.',
    'about.story.cta': 'SEE MORE',
    'about.vision.title': 'Our Vision',
    'about.vision.quote':
      'We believe an all-in-one marketing solution is only truly meaningful when it delivers measurable results and contributes to the positive growth of both brands and the community.',
    'about.vision.sign': '_ G12 MEDIA',
    'about.allinone': 'ALL-IN-ONE SOLUTION',
    'about.diff.title1': 'What Make G12 Media',
    'about.diff.title2': 'Different',
    'about.diff.title3': 'From Other?',
    'about.diff.real': 'REAL',
    'about.diff.realDesc':
      'We commit to results with real-world impact, from strategy through to execution.',
    'about.diff.human': 'HUMAN',
    'about.diff.humanDesc':
      'We continuously sharpen our expertise to deliver the best possible service quality to our clients.',
    'about.diff.expansion': 'EXPANSION',
    'about.diff.expansionDesc':
      'We provide comprehensive digital marketing solutions throughout the journey of building and growing brands in the digital space.',
    'about.diff.innovation': 'INNOVATION',
    'about.diff.innovationDesc':
      'We stay on top of new trends so brands adapt fast, keep their competitive edge and never fall behind.',
    'about.commit.title1': 'Our Commitment',
    'about.commit.title2': '"GROW TOGETHER"',
    'about.commit.with': 'with our',
    'about.commit.c1': 'clients',
    'about.commit.c1Desc': 'growing their brands',
    'about.commit.c2': 'team',
    'about.commit.c2Desc': 'developing capabilities',
    'about.commit.c3': 'community',
    'about.commit.c3Desc': 'spreading value',

    'blog.meta.title': 'Marketing Blog & Case Studies — G12 Media',
    'blog.meta.description':
      'Case studies, training know-how, marketing news and inside stories from the G12 Media team.',
    'blog.all': 'ALL',
    'blog.recent': 'RECENT POSTS',
    'blog.categories': 'CATEGORIES',
    'blog.related': 'RELATED POSTS',
    'blog.by': 'G12 MEDIA',
    'blog.comingSoon': 'Coming soon',

    'contact.meta.title': 'Contact & Consultation — G12 Media',
    'contact.meta.description':
      "Contact G12 Media for advice on the all-in-one marketing solution for your business.",
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone',
    'contact.email': 'E-mail',
    'contact.message': 'Describe your project',
    'contact.submit': 'Send Message',
    'contact.success': 'Thank you! G12 Media will get back to you shortly.',
  },
} as const;

export type UIKey = keyof (typeof ui)['vi'];
