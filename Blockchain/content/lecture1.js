// Buổi 1 Content - Introduction to Blockchain
// This file will be loaded dynamically by the main index.html

// Add slides for Buổi 1
addSlide(`
<div class="slide active">
    <div class="slide-title-page">
        <img src="assets/logo.png" alt="Logo" class="title-page-logo" onerror="this.style.display='none'">
        <div class="title-content">
            <div class="main-title">Blockchain: Nền tảng, Ứng dụng & Bảo mật</div>
            <h1>Tổng quan về Blockchain và<br>Hệ thống Phân tán</h1>
            <div class="instructor-info"><span>Giảng viên: Trần Tuấn Dũng</span></div>
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Mục tiêu Buổi học</h2>
    <div class="slide-content">
        <p>Sau buổi học hôm nay, sinh viên sẽ có khả năng:</p>
        <ul>
            <li><strong>Hiểu</strong> bối cảnh lịch sử dẫn đến sự ra đời của Bitcoin và Blockchain.</li>
            <li><strong>Phân biệt</strong> rạch ròi ba kiến trúc hệ thống: Tập trung, Phân tán và Phi tập trung.</li>
            <li><strong>Trình bày</strong> được các đặc tính cốt lõi của công nghệ Blockchain.</li>
            <li><strong>Nhận dạng</strong> được các loại hình Blockchain phổ biến và ứng dụng của chúng.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tại sao chúng ta cần Blockchain?</h2>
    <div class="slide-content">
        <h3>Vấn đề của Niềm tin trong Kỷ nguyên số</h3>
        <p>Mọi giao dịch online hiện nay đều cần một bên trung gian đáng tin cậy:</p>
        <ul>
            <li><strong>Chuyển tiền:</strong> Cần Ngân hàng xác nhận.</li>
            <li><strong>Mua sắm online:</strong> Cần Sàn TMĐT đảm bảo.</li>
            <li><strong>Mạng xã hội:</strong> Cần Facebook/Google quản lý dữ liệu của bạn.</li>
        </ul>
        <p><strong>Câu hỏi đặt ra:</strong> Liệu chúng ta có thể tạo ra một hệ thống nơi mà <strong>sự tin tưởng được xây dựng bằng thuật toán</strong>, thay vì dựa vào một tổ chức?</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Lịch sử (Phần 1): Giấc mơ về "Tiền mặt Kỹ thuật số"</h2>
    <div class="slide-content">
        <p>Ý tưởng này không mới, nó bắt đầu từ những năm 80-90 với phong trào Cypherpunk.</p>
        <ul>
            <li><strong>1983: e-Cash của David Chaum</strong> - Một nỗ lực tiên phong tạo ra tiền điện tử ẩn danh.</li>
            <li><strong>Thất bại cốt lõi:</strong> Hệ thống của DigiCash vẫn là <strong>tập trung</strong>. Máy chủ của công ty là trung tâm xử lý, là một "điểm yếu chí mạng" (single point of failure).</li>
            <li>Bài toán lớn nhất vẫn chưa có lời giải...</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thách thức lớn nhất: Bài toán Chi tiêu Kép (Double-Spending)</h2>
    <div class="slide-content">
        <p>Trong thế giới vật lý, bạn không thể đưa cho 2 người cùng một tờ tiền. Nhưng trong thế giới số, mọi thứ chỉ là dữ liệu. Dữ liệu có thể bị sao chép.</p>
        <div class="center">
            <code>File_Tien_Ky_Thuat_So.txt (10$) → Copy → File_Tien_Ky_Thuat_So(1).txt (10$)</code>
        </div>
        <p><strong>Làm thế nào để ngăn chặn một người dùng chi tiêu cùng một "đồng tiền số" nhiều lần trong một mạng lưới mà không có ai là người quản lý?</strong></p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Những nỗ lực Tiền-Bitcoin</h2>
    <div class="slide-content">
        <p>Nhiều nhà mật mã học đã cố gắng giải quyết bài toán trên:</p>
        <ul>
            <li><strong>B-money (1998 - Wei Dai):</strong> Đề xuất một kiến trúc phi tập trung, nơi mọi người tham gia duy trì một sổ cái chung.</li>
            <li><strong>Bit Gold (1998 - Nick Szabo):</strong> Đưa ra ý tưởng về "Proof of Work" - người dùng phải giải một bài toán tính toán để tạo ra "vàng kỹ thuật số".</li>
        </ul>
        <p>Cả hai đều là những ý tưởng đột phá, đặt nền móng lý thuyết nhưng chưa được triển khai thành một hệ thống hoàn chỉnh.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Chất xúc tác: Khủng hoảng Tài chính Toàn cầu 2008</h2>
    <div class="slide-content">
        <p>Sự sụp đổ của các định chế tài chính lớn làm lung lay niềm tin của công chúng vào hệ thống ngân hàng tập trung.</p>
        <p>Đây là bối cảnh hoàn hảo cho một giải pháp thay thế ra đời - một hệ thống tài chính không phụ thuộc vào các tổ chức "quá lớn để sụp đổ".</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Giải pháp của Satoshi Nakamoto</h2>
    <div class="slide-content">
        <ul>
            <li><strong>Tháng 10/2008:</strong> Whitepaper <em>"Bitcoin: A Peer-to-Peer Electronic Cash System"</em> được công bố.</li>
            <li><strong>Tháng 01/2009:</strong> Khối đầu tiên (Genesis Block) được tạo ra, khởi chạy mạng lưới.</li>
            <li>Trong khối này, Satoshi đã nhúng một thông điệp mang tính biểu tượng:</li>
        </ul>
        <div class="center">
            <blockquote>"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"</blockquote>
        </div>
        <p>Đây là lời tuyên bố về mục đích của Bitcoin: tạo ra một hệ thống độc lập với tài chính truyền thống.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Kiến trúc Hệ thống (1/4): Tập trung (Centralized)</h2>
    <div class="slide-content">
        <p>Mô hình truyền thống, hoạt động theo kiểu client-server.</p>
        
        <ul>
            <li><strong>Ví dụ:</strong> Hệ thống của một ngân hàng, website của một công ty.</li>
            <li><strong>Ưu điểm:</strong> Dễ quản lý, hiệu suất cao, kiểm soát rõ ràng.</li>
            <li><strong>Nhược điểm:</strong> Điểm yếu chí mạng (nếu máy chủ sập, cả hệ thống sập), dễ bị kiểm duyệt, người dùng phải tin tưởng hoàn toàn vào bên quản lý.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Kiến trúc Hệ thống (2/4): Phi tập trung (Decentralized)</h2>
    <div class="slide-content">
        <p>Quyền lực và quyền ra quyết định được phân bổ cho nhiều điểm (nodes) trong mạng lưới.</p>
        
        <ul>
            <li><strong>Ví dụ:</strong> Bitcoin, Ethereum.</li>
            <li><strong>Ưu điểm:</strong> Chống chịu lỗi tốt hơn (không có điểm yếu chí mạng), khó bị kiểm duyệt, không cần tin tưởng một thực thể duy nhất.</li>
            <li><strong>Nhược điểm:</strong> Phức tạp hơn trong việc phối hợp, hiệu suất có thể thấp hơn.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Kiến trúc Hệ thống (3/4): Phân tán (Distributed)</h2>
    <div class="slide-content">
        <p>Đề cập đến việc dữ liệu và tính toán được đặt ở nhiều vị trí địa lý khác nhau, nhưng có thể vẫn dưới sự kiểm soát của một thực thể.</p>
        
        <ul>
            <li><strong>Ví dụ:</strong> Mạng lưới phân phối nội dung (CDN) của Google, Netflix.</li>
            <li><strong>Mối quan hệ:</strong> Một hệ thống <strong>phi tập trung (decentralized)</strong> bắt buộc phải <strong>phân tán (distributed)</strong>. Nhưng một hệ thống phân tán không nhất thiết phải phi tập trung.</li>
            <li><strong>Blockchain là sự kết hợp của cả hai:</strong> Dữ liệu được <strong>phân tán</strong> trên toàn cầu, và quyền kiểm soát thì <strong>phi tập trung</strong>.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Kiến trúc Hệ thống (4/4): Bảng so sánh</h2>
    <div class="slide-content">
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
                <tr style="background-color: #f8f9fa;">
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Tiêu chí</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Tập trung</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Phi tập trung</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Phân tán</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Kiểm soát</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Một thực thể</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Nhiều thực thể</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Có thể là một hoặc nhiều</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Chống chịu lỗi</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Thấp (SPOF)</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Cao</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Cao</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Hiệu suất</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Cao</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Thấp hơn</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Cao</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Bảo mật</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Dễ bị tấn công vào trung tâm</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Khó tấn công đồng bộ</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Phụ thuộc vào kiến trúc</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Ví dụ</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Ngân hàng</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bitcoin</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Google Search</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (1/6): Sổ cái là gì?</h2>
    <div class="slide-content">
        <p>Về cơ bản, sổ cái là một cuốn sổ ghi lại tất cả các giao dịch. Lịch sử loài người đã sử dụng sổ cái hàng ngàn năm.</p>
        
        <p>Trong một hệ thống tập trung (ngân hàng), chỉ có ngân hàng giữ và có quyền ghi vào sổ cái. Bạn phải tin rằng họ ghi đúng.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (2/6): Sổ cái Phân tán (DLT)</h2>
    <div class="slide-content">
        <p>Blockchain là một dạng đặc biệt của <strong>Công nghệ Sổ cái Phân tán (Distributed Ledger Technology - DLT)</strong>.</p>
        
        <ul>
            <li>Thay vì một cuốn sổ duy nhất, hãy tưởng tượng mỗi người trong mạng lưới đều giữ một bản sao y hệt của cuốn sổ.</li>
            <li>Khi một giao dịch mới xảy ra, nó sẽ được thông báo cho mọi người và tất cả cùng ghi vào sổ của mình.</li>
            <li>Điều này tạo ra sự đồng thuận và minh bạch mà không cần một người ghi sổ trung tâm.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (3/6): Giải phẫu một "Khối"</h2>
    <div class="slide-content">
        <p>Dữ liệu giao dịch không được ghi riêng lẻ, mà được nhóm lại vào các "Khối".</p>
        
        <p>Một khối bao gồm 2 phần chính:</p>
        <ul>
            <li><strong>Tiêu đề khối (Block Header):</strong> Chứa siêu dữ liệu như Mã hash khối trước, Dấu thời gian (Timestamp), Nonce (sẽ học sau), và <strong>Merkle Root</strong> (tóm tắt các giao dịch).</li>
            <li><strong>Thân khối (Block Body):</strong> Danh sách các giao dịch được đưa vào khối.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (4/6): Tạo thành "Chuỗi"</h2>
    <div class="slide-content">
        <p>Đây chính là phần "Chain" trong "Blockchain". Các khối được liên kết với nhau một cách chặt chẽ bằng mật mã học.</p>
        <div class="center">
            <code>[Block N-1] --hash(N-1)→ [Block N] --hash(N)→ [Block N+1]</code>
        </div>
        <ul>
            <li>Mỗi khối trong chuỗi chứa mã hash của khối ngay trước nó.</li>
            <li>Điều này tạo ra một liên kết không thể phá vỡ, giống như các mắt xích của một sợi dây chuyền.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (5/6): Tính Bất biến (Immutability)</h2>
    <div class="slide-content">
        <p>Tại sao việc thay đổi dữ liệu trên Blockchain lại khó đến vậy?</p>
        <div class="center">
            <p><strong>Ai đó sửa dữ liệu trong Block N-1</strong><br>
            ↓<br>
            <strong>Hash của Block N-1 thay đổi</strong><br>
            ↓<br>
            <strong>Liên kết tới Block N bị phá vỡ (vì hash không còn khớp)</strong><br>
            ↓<br>
            <strong>Kẻ tấn công phải tính toán lại hash cho Block N VÀ tất cả các khối sau đó.</strong></p>
        </div>
        <p>Việc này đòi hỏi một năng lực tính toán khổng lồ, khiến cho việc gian lận trở nên <strong>cực kỳ tốn kém và gần như không thể</strong> trên các mạng lưới lớn.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Thành phần Blockchain (6/6): Minh bạch & Giả danh</h2>
    <div class="slide-content">
        <p>Đây là một đặc tính kép thú vị:</p>
        <ul>
            <li><strong>Minh bạch (Transparency):</strong> Bất kỳ ai cũng có thể dùng một trình duyệt khối (Block Explorer) để xem tất cả các giao dịch đã từng xảy ra.</li>
            <li><strong>Giả danh (Pseudonymity):</strong> Danh tính của bạn được đại diện bởi một địa chỉ công khai (ví dụ: <code>0xAbCd...</code>). Không ai biết địa chỉ đó là của bạn, trừ khi bạn tiết lộ.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phân loại Blockchain (1/2): Public vs. Private/Consortium</h2>
    <div class="slide-content">
        <h3>Public Blockchain (Không cần cấp phép - Permissionless)</h3>
        <ul>
            <li>Mở cho bất kỳ ai tham gia. Hoàn toàn phi tập trung.</li>
            <li><strong>Ví dụ:</strong> Bitcoin, Ethereum, Solana.</li>
            <li><strong>Ưu điểm:</strong> An toàn, minh bạch, chống kiểm duyệt.</li>
        </ul>
        
        <h3>Private/Consortium Blockchain (Cần cấp phép - Permissioned)</h3>
        <ul>
            <li>Chỉ những thành viên được mời mới có thể tham gia.</li>
            <li><strong>Ví dụ:</strong> Hyperledger Fabric (doanh nghiệp), Corda (ngân hàng).</li>
            <li><strong>Ưu điểm:</strong> Tốc độ cao, riêng tư, kiểm soát được. Thích hợp cho ứng dụng doanh nghiệp.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phân loại Blockchain (2/2): Bảng so sánh</h2>
    <div class="slide-content">
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
                <tr style="background-color: #f8f9fa;">
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Tiêu chí</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Public Blockchain</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Private/Consortium Blockchain</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Quyền truy cập</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bất kỳ ai (Permissionless)</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bị hạn chế (Permissioned)</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Mức độ phi tập trung</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Cao</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Thấp đến Trung bình</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Tốc độ giao dịch</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Thường chậm hơn</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Rất nhanh</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Bảo mật</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bảo mật bằng tính toán (PoW/PoS)</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bảo mật bằng danh tính người tham gia</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Ứng dụng tiêu biểu</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Tiền tệ, DeFi, NFTs</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Chuỗi cung ứng, Y tế, Tài chính</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tóm tắt Buổi 1</h2>
    <div class="slide-content">
        <ul>
            <li>Blockchain ra đời từ nhu cầu về một hệ thống <strong>tin cậy phi tập trung</strong>, giải quyết được <strong>bài toán chi tiêu kép</strong>.</li>
            <li>Nó là một <strong>sổ cái phân tán</strong>, có kiến trúc <strong>phi tập trung</strong>.</li>
            <li>Các đặc tính cốt lõi: <strong>Bất biến, Minh bạch, và Giả danh</strong>.</li>
            <li>Có nhiều loại Blockchain (<strong>Public, Private</strong>) phù hợp cho các mục đích khác nhau.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Buổi học tiếp theo...</h2>
    <div class="slide-content">
        <h3>Buổi 2: Các Nguyên lý Mật mã học trong Blockchain</h3>
        <p>Chúng ta đã hiểu "CÁI GÌ" và "TẠI SAO". Buổi sau, chúng ta sẽ khám phá "NHƯ THẾ NÀO".</p>
        <ul>
            <li>Hàm băm mật mã</li>
            <li>Mật mã hóa khóa công khai</li>
            <li>Chữ ký số</li>
        </ul>
        <div class="center" style="margin-top: 30px;">
            <h4 style="color: #0077B6;">Câu hỏi & Thảo luận?</h4>
        </div>
    </div>
</div>
`);

// Initialize the slideshow after loading all slides
startSlideshow();
