// Lecture 2 Content - Cryptographic Foundations
// This file will be loaded dynamically by the main index.html

// Add slides for Lecture 2
addSlide(`
<div class="slide active">
    <div class="slide-title-page">
        <img src="assets/logo.png" alt="Logo" class="title-page-logo" onerror="this.style.display='none'">
        <div class="title-content">
            <div class="main-title">Blockchain: Nền tảng, Ứng dụng & Bảo mật</div>
            <h1>Các Nguyên lý Mật mã học<br>trong Blockchain</h1>
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
            <li><strong>Hiểu</strong> các hàm băm mật mã và tính chất của chúng.</li>
            <li><strong>Phân biệt</strong> giữa mã hóa đối xứng và bất đối xứng.</li>
            <li><strong>Giải thích</strong> cách thức hoạt động của chữ ký số.</li>
            <li><strong>Áp dụng</strong> các kiến thức mật mã trong Blockchain.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Hàm Băm Mật mã (Cryptographic Hash Function)</h2>
    <div class="slide-content">
        <h3>Định nghĩa</h3>
        <p>Hàm băm mật mã là một thuật toán toán học nhận đầu vào có độ dài bất kỳ và tạo ra đầu ra có độ dài cố định.</p>
        
        <h3>Ví dụ với SHA-256</h3>
        <ul>
            <li><code>SHA256("Hello") = 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</code></li>
            <li><code>SHA256("Hello World") = a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</code></li>
        </ul>
        
        <p><strong>Lưu ý:</strong> Chỉ thay đổi một ký tự cũng làm thay đổi hoàn toàn kết quả!</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tính chất của Hàm Băm Mật mã</h2>
    <div class="slide-content">
        <ul>
            <li><strong>Deterministic (Xác định):</strong> Cùng đầu vào luôn cho cùng đầu ra.</li>
            <li><strong>Fixed output size (Kích thước đầu ra cố định):</strong> SHA-256 luôn cho ra 256 bit.</li>
            <li><strong>Avalanche effect (Hiệu ứng tuyết lở):</strong> Thay đổi nhỏ ở đầu vào làm thay đổi lớn ở đầu ra.</li>
            <li><strong>One-way function (Hàm một chiều):</strong> Dễ tính từ đầu vào ra đầu ra, nhưng cực khó ngược lại.</li>
            <li><strong>Collision resistant (Chống va chạm):</strong> Rất khó tìm hai đầu vào khác nhau cho cùng đầu ra.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Ứng dụng Hàm Băm trong Blockchain</h2>
    <div class="slide-content">
        <ul>
            <li><strong>Block ID:</strong> Mỗi khối có một hash duy nhất làm định danh.</li>
            <li><strong>Merkle Tree:</strong> Tóm tắt hiệu quả tất cả giao dịch trong khối.</li>
            <li><strong>Proof of Work:</strong> Miners phải tìm hash thỏa mãn điều kiện khó.</li>
            <li><strong>Digital Fingerprint:</strong> Kiểm tra tính toàn vẹn dữ liệu.</li>
            <li><strong>Address Generation:</strong> Tạo địa chỉ ví từ khóa công khai.</li>
        </ul>
        
        <div class="center">
            <p><strong>Hàm băm là "xương sống" bảo mật của Blockchain!</strong></p>
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Mật mã Khóa Công khai (Public Key Cryptography)</h2>
    <div class="slide-content">
        <h3>Khái niệm</h3>
        <p>Hệ thống mật mã bất đối xứng sử dụng một cặp khóa:</p>
        <ul>
            <li><strong>Khóa riêng (Private Key):</strong> Được giữ bí mật, chỉ chủ sở hữu biết.</li>
            <li><strong>Khóa công khai (Public Key):</strong> Có thể chia sẻ công khai.</li>
        </ul>
        
        <h3>Tính chất quan trọng</h3>
        <p>Hai khóa có mối quan hệ toán học chặt chẽ, nhưng:</p>
        <ul>
            <li>Không thể suy ra khóa riêng từ khóa công khai</li>
            <li>Dữ liệu mã hóa bằng khóa này chỉ giải mã được bằng khóa kia</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Chữ ký Số (Digital Signature)</h2>
    <div class="slide-content">
        <h3>Mục đích</h3>
        <ul>
            <li><strong>Authentication (Xác thực):</strong> Chứng minh ai là người gửi.</li>
            <li><strong>Non-repudiation (Không thể chối bỏ):</strong> Người ký không thể phủ nhận.</li>
            <li><strong>Integrity (Toàn vẹn):</strong> Đảm bảo dữ liệu không bị thay đổi.</li>
        </ul>
        
        <h3>Quy trình ký</h3>
        <div class="center">
            <code>
            1. Hash(message) = message_hash<br>
            2. Encrypt(message_hash, private_key) = signature<br>
            3. Send: message + signature + public_key
            </code>
        </div>
        
        <h3>Quy trình xác minh</h3>
        <div class="center">
            <code>
            1. Hash(received_message) = hash1<br>
            2. Decrypt(signature, public_key) = hash2<br>
            3. If hash1 == hash2 → Signature Valid!
            </code>
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tóm tắt Buổi 2</h2>
    <div class="slide-content">
        <ul>
            <li><strong>Hàm băm mật mã</strong> cung cấp tính toàn vẹn và định danh cho dữ liệu Blockchain.</li>
            <li><strong>Mật mã khóa công khai</strong> cho phép xác thực danh tính mà không cần chia sẻ bí mật.</li>
            <li><strong>Chữ ký số</strong> đảm bảo tính xác thực và không thể chối bỏ của giao dịch.</li>
            <li>Ba thành phần này tạo nên <strong>nền tảng bảo mật</strong> cho toàn bộ hệ thống Blockchain.</li>
        </ul>
        
        <div class="center" style="margin-top: 30px;">
            <h4 style="color: #0077B6;">Buổi 3: Bitcoin và Mining</h4>
        </div>
    </div>
</div>
`);

// Initialize the slideshow after loading all slides
startSlideshow();
