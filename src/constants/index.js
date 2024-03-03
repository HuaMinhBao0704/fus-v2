import { CiGrid31 } from 'react-icons/ci';
import { VscServer } from 'react-icons/vsc';
import { FaRegUser } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import {
  ffood,
  fastup,
  fnet,
  fumeli,
  promotion,
  ui,
  speed,
  supportTeam,
  supportChannel,
  security,
  anhPhong,
  anhHoang,
  anhTam,
  anhDuy,
} from '../assets';

export const headerLinks = [
  {
    label: 'Về Fusoft',
    is_scroll: true,
    scroll_to: 'moreInfo',
  },
  {
    label: 'Sản phẩm',
    is_scroll: true,
    scroll_to: 'ecosystem',
  },
  {
    label: 'Liên hệ',
    route: '/lien-he',
  },
  {
    label: 'Tin tức',
    route: '/tin-tuc',
  },
];

export const flexingItems = [
  {
    Icon: CiGrid31,
    heading: '4000+',
    desc: 'Phòng máy',
  },
  {
    Icon: VscServer,
    heading: '120.000+',
    desc: 'Máy trạm',
  },
  {
    Icon: FaRegUser,
    heading: '400.000+',
    desc: 'Người dùng mỗi ngày',
  },
  {
    Icon: IoLocationOutline,
    heading: '63',
    desc: 'Tỉnh thành cả nước',
  },
];

export const ecosystemProducts = [
  {
    id: 1,
    image: fastup,
    name: 'Phần mềm cập nhật game',
    desc: 'Phần mềm chuyên dụng cho việc cập nhật game nhanh chóng - đơn giản',
    linkToOutside: false,
    link: '/lien-he',
  },
  {
    id: 2,
    image: ffood,
    name: 'Phần mềm quản lý dịch vụ',
    desc: 'Phần mềm quản lý dịch vụ, bán hàng tự động chuyên nghiệp cho phòng game',
    linkToOutside: true,
    link: 'https://ffood.com.vn/',
  },
  {
    id: 3,
    image: fnet,
    name: 'Phần mềm tính tiền',
    desc: 'Phần mềm quản lý tính tiền hội viên tự động cho phòng game',
    linkToOutside: false,
    link: '/lien-he',
  },
  {
    id: 4,
    image: fumeli,
    name: 'Phần mềm cập nhật game',
    desc: 'Cổng dịch vụ giải trí cho hội viên phòng game duy nhất tại Việt Nam',
    linkToOutside: false,
    link: '/lien-he',
  },
];

export const commitmentItems = [
  {
    id: 1,
    image: speed,
    text: 'Tốc độ nhanh',
    desc: 'Update tự động, khả năng cập nhật dữ liệu nhanh-mạnh là các yếu tố quan trọng mang lại cảm nhận hoàn hảo cho người dùng.',
  },
  {
    id: 2,
    image: ui,
    text: 'Tối ưu hóa giao diện',
    desc: 'Giao diện thân thiện, dễ dàng sử dụng, bạn có thể thao tác mà không gặp phải bất kỳ khó khăn nào.',
  },
  {
    id: 3,
    image: security,
    text: 'Tính bảo mật cao',
    desc: 'Đảm bảo bảo mật cao bằng các giải pháp an ninh tiên tiến, khả năng lưu trữ dữ liệu lớn, cơ chế sao lưu, khôi phục dữ liệu.',
  },
  {
    id: 4,
    image: supportTeam,
    text: 'Đội ngũ kỹ thuật',
    desc: 'Đội ngũ kỹ thuật viên dày dặn kinh nghiệm, luôn sẵn sàng xử lý nhanh chóng, chính xác mọi yêu cầu hỗ trợ bất kể ngày nghỉ hay lễ tết.',
  },
  {
    id: 5,
    image: supportChannel,
    text: 'Đa kênh hỗ trợ',
    desc: 'Sẵn sàng hỗ trợ khách hàng 24/7 đảm bảo rằng mọi vấn đề của khách hàng được giải quyết kịp thời và hiệu quả.',
  },
  {
    id: 6,
    image: promotion,
    text: 'Chương trình ưu đãi CSKH',
    desc: 'Fusoft thường xuyên có nhiều chương trình ưu đãi hấp dẫn, liên kết chăm sóc khách hàng thông qua cổng kết nối khách hàng, hội viên.',
  },
];

export const feedbacks = [
  {
    id: 1,
    image: anhPhong,
    text: 'Anh Phong - quản lý Spartacus Gaming Center',
    desc: 'Với Spartacus Gaming Center, Fusoft là đơn vị đối tác tin cậy, chúng tôi đang sử dụng phần mềm của Fusoft cho tất cả các cơ sở phòng máy của Spartacus. Phần mềm update của Fusoft chất lượng tốt, đội kỹ thuật và phát triển sản phẩm nhiệt tình, chuyên nghiệp. Tôi hoàn toàn hài lòng khi làm việc cùng một đội ngũ chuyên nghiệp như vậy. Chúc cho Fusoft không ngừng phát triển mang đến sản phẩm và dịch vụ chất lượng hơn nữa.',
  },
  {
    id: 2,
    image: anhDuy,
    text: 'Anh Duy - quản lý SBN Premium Quy Nhơn.',
    desc: 'SBN premium là chuỗi phòng nét lớn tại TP Quy Nhơn được thành lập từ 2017 đến nay. Chúng tôi đã dùng qua rất nhiều phần mềm quản lý & update-game trên thị trường và Fusoft là một phần mềm tốt nhất đến hiện tại. Fusoft có thế mạnh là có công ty đại lý tại tỉnh giúp hỗ trợ kỹ thuật nên tôi thật sự an tâm kinh doanh. Tôi cũng hy vọng Fusoft sẽ phát triển và đảm bảo các dịch vụ hỗ trợ thật tốt hơn nữa để chúng tôi cùng đồng hành.',
  },
  {
    id: 3,
    image: anhHoang,
    text: 'Anh Hoàng - HAT Cyber Bình Dương',
    desc: 'Tôi bắt đầu sử dụng phần mềm cập nhật game của Fusoft ngay sau từ khi ra mắt sản phẩm của công ty này cho cyber của tôi ở Bình Dương. Đây là một sản phẩm được đầu tư bài bản do các kỹ sư phần mềm Việt Nam xây dựng nên tôi rất yên tâm. Giao diện đơn giản,thân thiện giúp sản phẩm có chất lượng tốt và đặt biệt các anh kỹ thuật viên rất nhiệt trình trong việc chăm sóc khách hàng sau khi cài đặt sản phẩm. Tôi vẫn tiếp tục tin tưởng các sản phẩm của công ty Fusoft và chúc công ty phát triển tốt. Cảm ơn!',
  },
  {
    id: 4,
    image: anhTam,
    text: 'Anh Tâm - quản lý Cyber Legend',
    desc: 'Tôi biết đến Fusoft từ những người bạn đã làm phòng game và giới thiệu một giải pháp quản lý - cập nhật game tối ưu cho việc quản lý chuỗi phòng máy. Hiện tại chuỗi của tôi có hơn 10 phòng tại TP HCM và đều sử dụng giải pháp phần mềm của Fusoft. Tôi thật sự tin cậy Fusoft vì chất lượng sản phẩm và hỗ trợ khách hàng của công ty và các anh kỹ thuật viên luôn lắng nghe và cập nhật những tính năng mới cho sản phẩm để phù hợp hơn với khách hàng. Chúc công ty Fusoft càng phát triển thành công hơn nữa.',
  },
];

export const fakeImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_52.jpg`;
export const fakeImg2 =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg';
export const fakeImg3 =
  'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg';

export const fakeNews = [
  {
    id: 1,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 3',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg,
    view: 10,
    rating: 5,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 2',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg2,
    view: 10,
    rating: 5,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 3',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg3,
    view: 10,
    rating: 5,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 4',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg,
    view: 10,
    rating: 3.5,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 5',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg3,
    view: 10,
    rating: 4,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    title:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 6',
    create_date: '2024-02-23 15:43:49.0',
    content_type: 'text/html',
    desc: '/news/4.html',
    cover_img: fakeImg2,
    view: 10,
    rating: 2,
    comment: 14,
    short:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];