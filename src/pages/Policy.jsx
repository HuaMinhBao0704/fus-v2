import CustomTransition from '../components/shared/CustomTransition';

const Policy = () => {
  return (
    <CustomTransition>
      <div className='w-full max-w-5xl p-5 md:px-10 lg:mx-auto xl:px-0'>
        <h1 className='mb-3 text-center text-2xl font-bold text-fus-brand-dark md:text-4xl'>
          Chính sách bảo vệ dữ liệu cá nhân
        </h1>
        <div className='rules'>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>1. Mục đích và phạm vi thu thập dữ liệu</h2>
            <p>Việc thu thập dữ liệu chủ yếu trên website của FUS bao gồm:</p>
            <ul>
              <li>Họ và tên khách hàng</li>
              <li>Địa chỉ IP của khách hàng</li>
              <li>Số điện thoại</li>
              <li>Địa chỉ Email</li>
              <li>Loại trình duyệt</li>
              <li>
                Những trang mục trong website fusoft.vn mà khách hàng ghé thăm;
              </li>
              <li>
                Khoảng thời gian khách hàng đã dành ra xem những trang mục đó,
                sản phẩm, tìm kiếm thông tin trên trang web, thời gian và ngày
                tháng truy cập, và các số liệu thống kê khác
              </li>
            </ul>
            <p>
              Đây là các thông tin mà chúng tôi cần khách hàng cung cấp khi liên
              hệ tư vấn dịch vụ nhằm đảm bảo quyền lợi cho người tiêu dùng.
            </p>
            <p>
              Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt
              động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử
              của mình. Ngoài ra, Khách hàng có trách nhiệm thông báo kịp thời
              cho chúng tôi về những hành vi sử dụng trái phép, lạm dụng, vi
              phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có
              biện pháp giải quyết phù hợp.
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>2. Phạm vi sử dụng thông tin</h2>
            <p>
              Những thông tin do Khách Hàng cung cấp như được liệt kê tại mục 1
              nêu trên sẽ được sử dụng cho một hoặc tất cả các mục đích sau đây,
              tùy từng trường hợp:
            </p>
            <ul>
              <li>Giao sản phẩm quý khách đã mua tại fusoft.vn</li>
              <li>Thông báo về việc giao hàng, cài đặt và hỗ trợ khách hàng</li>
              <li>Cung cấp thông tin liên quan đến sản phẩm</li>
              <li>
                Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang
                web của chúng tôi theo yêu cầu của khách hàng.
              </li>
            </ul>
            <p>
              Ngoài ra, thông tin khách hàng cung cấp còn có thể được sử dụng để
              hỗ trợ quản lý tài khoản khách hàng; xác nhận và thực hiện các
              giao dịch tài chính liên quan đến các khoản thanh toán trực tuyến
              của khách hàng; kiểm tra dữ liệu tải từ trang web của chúng tôi;
              cải thiện giao diện và/hoặc nội dung của các trang mục trên trang
              web và tùy chỉnh để dễ dàng hơn khi sử dụng; nhận diện khách đến
              thăm trang web; nghiên cứu về nhân khẩu học của người sử dụng; gửi
              đến quý khách thông tin mà chúng tôi nghĩ sẽ có ích hoặc do quý
              khách yêu cầu, bao gồm thông tin về sản phẩm và dịch vụ, với điều
              kiện khách hàng đồng ý không phản đối việc được liên lạc cho các
              mục đích trên.
            </p>
            <p>
              Khi khách hàng đăng ký làm thành viên trên trang web fusoft.vn,
              thông tin cá nhân của khách hàng còn có thể được sử dụng để gửi
              các thông tin khuyến mãi/tiếp thị. Khách hàng có thể hủy nhận các
              thông tin đó bất kỳ lúc nào bằng cách sử dụng chức năng hủy đăng
              ký trong các thông báo quảng cáo.
            </p>
            <p>Lưu ý:</p>
            <ul>
              <li>
                Chúng tôi có thể chia sẻ tên và địa chỉ của quý khách cho dịch
                vụ vận chuyển hoặc nhà cung cấp của chúng tôi để có thể giao
                hàng cho quý khách.
              </li>
              <li>
                Trong trường hợp có yêu cầu của pháp luật: Chúng tôi có trách
                nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu
                cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan
                công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó
                của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông
                tin cá nhân của khách hàng.
              </li>
            </ul>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>3. Thời gian lưu trữ thông tin</h2>
            <p>
              Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu
              cầu hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân khách
              hàng sẽ được bảo mật trên máy chủ của website. Trong trường hợp
              thông tin cá nhân bị nghi ngờ là giả mạo, vi phạm qui định hoặc
              không có sự tương tác đăng nhập trong 6 tháng thì thông tin ấy sẽ
              bị xóa.
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>4. Những người hoặc tổ chức được tiếp nhận thông tin</h2>
            <p>
              Thông tin do chúng tôi yêu cầu Khách hàng cung cấp sẽ chỉ được sử
              dụng trong phạm vi như mục 2 của Chính sách này. Bao gồm hỗ trợ
              khách hàng và cung cấp cho các bên cơ quan chức năng khi được yêu
              cầu.
            </p>
            <p>
              Ngoài ra, các thông tin của Khách hàng sẽ không được tiết lộ cho
              bên thứ 3 nào khác nếu chưa được sự đồng ý của Khách hàng.
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>
              5. Địa chỉ của đơn vị thu thập và quản lý thông tin khách hàng
            </h2>
            <p>CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS</p>
            <ul>
              <li>
                Địa chỉ: Tầng 5, 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái
                Bình, Quận 1, Tp. Hồ Chí Minh
              </li>
              <li>
                Email: <a href='mailto:info@fusoft.vn'>info@fusoft.vn</a>
              </li>
              <li>Hotline: 028.2200.0113</li>
            </ul>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>
              6. Phương tiện và công cụ để khách hàng tiếp cận và chỉnh sửa dữ
              liệu cá nhân của mình
            </h2>
            <p>
              Khách hàng có thể gửi yêu cầu để chúng tôi kiểm tra, cập nhật,
              điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình trên website.
            </p>
            <p>
              Khách hàng có quyền gửi khiếu nại về việc lộ thông tin các nhân
              cho bên thứ 3 đến Ban quản trị của website. Khi tiếp nhận những
              phản hồi này, chúng tôi sẽ xác nhận lại thông tin, phải có trách
              nhiệm trả lời lý do và hướng dẫn Khách hàng khôi phục và bảo mật
              lại thông tin.
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>7. Cam kết bảo mật thông tin cá nhân khách hàng</h2>
            <p>
              Thông tin Khách hàng trên website được cam kết bảo mật tuyệt đối
              theo chính sách bảo vệ thông tin cá nhân đã đặt ra. Việc thu thập
              và sử dụng thông tin của Khách Hàng chỉ được thực hiện khi có sự
              đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy
              định khác.
            </p>
            <p>
              Chúng tôi sử dụng phần mềm Secure Sockets Layer (SSL) để bảo vệ
              thông tin của Khách hàng trong quá trình chuyển dữ liệu bằng cách
              mã hóa thông tin bạn nhập vào.
            </p>
            <p>
              Khách hàng có trách nhiệm tự bảo vệ mình trước sự tiếp cận thông
              tin về password khi dùng chung máy tính với nhiều người. Khi đó,
              Khách hàng phải chắc chắn đã thoát khỏi tài khoản sau khi sử dụng
              dịch vụ của chúng tôi.
            </p>
            <p>
              Chúng tôi cam kết không cố ý tiết lộ thông tin khách hàng, không
              bán hoặc chia sẻ thông tin vì mục đích thương mại.
            </p>
            <p>
              Chính sách bảo mật thông tin khách hàng chỉ được áp dụng tại
              website chúng tôi. Nó không bao gồm hoặc liên quan đến các bên thứ
              ba khác đặt quảng cáo hoặc có liên kết tại website.
            </p>
            <p>
              Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
              đến mất mát dữ liệu khách hàng, chúng tôi sẽ có trách nhiệm thông
              báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông
              báo cho khách hàng được biết.
            </p>
            <p>
              FUS yêu cầu các cá nhân khi đăng ký là Khách hàng, phải cung cấp
              đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên
              lạc, email và chịu trách nhiệm về tính pháp lý của những thông tin
              trên. FUS không chịu trách nhiệm cũng như không giải quyết mọi
              khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét
              thấy tất cả thông tin cung cấp khi đăng ký ban đầu là không chính
              xác.
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>
              8. Cơ chế tiếp nhận và giải quyết các khiếu nại các vấn đề liên
              quan đến thông tin cá nhân
            </h2>
            <p>
              Khi khách hàng gửi thông tin cá nhân của khách hàng cho chúng tôi,
              cũng đồng nghĩa với việc khách hàng đã đồng ý với các điều khoản
              mà chúng tôi đã nêu ở trên, chúng tôi cam kết bảo mật thông tin cá
              nhân của các khách hàng bằng mọi cách thức có thể. Chúng tôi sử
              dụng các hệ thống mã hóa nhằm bảo vệ thông tin này không bị truy
              lục, sử dụng hoặc tiết lộ ngoài ý muốn.
            </p>
            <p>
              Chúng tôi cũng khuyến cáo các khách hàng nên bảo mật các thông tin
              liên quan đến mật khẩu truy xuất của các khách hàng và không nên
              chia sẻ với bất kỳ người nào khác.
            </p>
            <p>
              Trong trường hợp có phản ánh của khách hàng về việc sử dụng thông
              tin trái với mục đích đã nêu, Chúng tôi sẽ tiến hành giải quyết
              theo các bước sau:
            </p>
            <ul>
              <li>
                Bước 1: Khách hàng gửi thông tin phản hồi về việc thông tin cá
                nhân thu thập trái với mục đích đã nêu.
              </li>
              <li>
                Bước 2: Bộ phận Chăm sóc Khách hàng tiếp nhận và giải quyết với
                các bên có liên quan.
              </li>
              <li>
                Bước 3: Trong trường hợp vượt ra khỏi tầm kiểm soát, chúng tôi
                sẽ đưa vụ việc ra các cơ quan có thẩm quyền để yêu cầu giải
                quyết
              </li>
            </ul>
            <p>
              Chúng tôi luôn hoan nghênh các ý kiến đóng góp, liên hệ và phản
              hồi thông tin từ khách hàng về “Chính sách bảo mật” này. Mọi ý
              kiến đóng góp hoặc thắc mắc liên quan xin vui lòng liên hệ qua
              email <a href='mailto:info@fusoft.vn'>info@fusoft.vn</a>
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <h2>9. Thay đổi chính sách bảo mật</h2>
            <p>
              FUS có quyền thay đổi và chỉnh sửa Chính Sách Bảo Mật vào bất kỳ
              lúc nào. Bất cứ thay đổi nào về chính sách này đều được đăng tải
              trên trang web của chúng tôi.
            </p>
            <p>
              Nếu quý khách không hài lòng với việc chúng tôi xử lý thắc mắc hay
              khiếu nại của quý khách, xin vui lòng liên hệ với chúng tôi tại{' '}
              <a href='mailto:info@fusoft.vn'>info@fusoft.vn</a>
            </p>
          </div>
          {/* Rule content */}
          <div className='rule-content'>
            <p className='font-semibold'>
              Chính sách có hiệu lực từ tháng 10/2023.
            </p>
          </div>
        </div>
      </div>
    </CustomTransition>
  );
};

export default Policy;
