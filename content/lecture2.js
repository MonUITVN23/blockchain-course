// Buổi 2 Content - Các Nguyên lý Mật mã học trong Blockchain
// This file will be loaded dynamically by the main index.html

// Add slides for Buổi 2
addSlide(`
<div class="slide active">
    <div class="slide-title-page">
        <img src="assets/logo.png" alt="Logo" class="title-page-logo" onerror="this.style.display='none'">
        <div class="title-content">
            <div class="main-title">Blockchain: Nền tảng, Ứng dụng & Bảo mật</div>
            <h1>Các Nguyên lý Mật mã học<br>trong Blockchain</h1>
            <div class="instructor-info"><span>Giảng viên: ThS. Trần Tuấn Dũng</span></div>
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Mục tiêu Buổi học 🎯</h2>
    <div class="slide-content">
        <p>Kết thúc buổi học, sinh viên sẽ nắm vững:</p>
        <ul>
            <li><strong>Hàm băm Mật mã:</strong> Cách tạo ra "vân tay số" và vai trò của nó.</li>
            <li><strong>Mật mã hóa Khóa công khai:</strong> Cách tạo ra danh tính và sở hữu tài sản số.</li>
            <li><strong>Chữ ký số:</strong> Cách xác thực giao dịch mà không cần trung gian.</li>
            <li><strong>Cây Merkle:</strong> Cách Blockchain quản lý hàng ngàn giao dịch một cách hiệu quả.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Ôn lại Buổi 1 & Dẫn nhập</h2>
    <div class="slide-content">
        <p>Buổi trước, chúng ta đã đặt câu hỏi: "Làm sao để xây dựng <strong>niềm tin</strong> trong một hệ thống không có người lãnh đạo?"</p>

        <div class="highlight-box" style="font-size: 1.5em;">
            Câu trả lời là: <strong>Cryptography (Mật mã học)</strong>
        </div>
        
        <p>Mật mã học thay thế niềm tin vào một tổ chức bằng niềm tin vào các quy luật toán học. Hôm nay, chúng ta sẽ tìm hiểu cách nó hoạt động.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phần I: Hàm băm - "Vân tay" của Dữ liệu</h2>
    <div class="slide-content">
        <p>Hãy tưởng tượng hàm băm như một chiếc máy xay ma thuật:</p>
        <ul>
            <li>Bạn có thể cho bất cứ thứ gì vào: một chữ cái, một cuốn sách, một bộ phim...</li>
            <li>Đầu ra (kết quả băm) luôn là một chuỗi ký tự có độ dài không đổi.</li>
            <li>Không thể nào từ "bột" xay ra mà ráp lại thành vật thể ban đầu.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Minh họa về Hàm băm (SHA-256)</h2>
    <div class="slide-content">
        <p>Sự thay đổi dù nhỏ nhất ở đầu vào cũng tạo ra kết quả khác biệt hoàn toàn.</p>
        
        <div class="code-block">
            // Đầu vào 1<br>
            <strong>Input:</strong> "Xin chao the gioi"<br>
            <strong>Output:</strong> 29b0e219...18d91f42<br><br>
            // Chỉ thay đổi 1 ký tự 'X' -> 'x'<br>
            <strong>Input:</strong> "xin chao the gioi"<br>
            <strong>Output:</strong> 99933390...6044702d // Kết quả khác biệt 100%!
        </div>
        
        <p>→ Đây gọi là <strong>Hiệu ứng thác đổ (Avalanche Effect)</strong>.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Đặc tính VÀNG của Hàm băm (1/3)</h2>
    <div class="slide-content">
        <h3>Tính đơn định (Deterministic)</h3>
        <ul>
            <li>Một đầu vào <strong>luôn luôn</strong> tạo ra cùng một kết quả đầu ra.</li>
            <li><code>hash("Syllabus")</code> hôm nay hay 10 năm sau vẫn cho ra cùng một chuỗi hash.</li>
        </ul>
        
        <div class="highlight-box" style="font-size: 1.3em; text-align: left; margin-top: 30px;">
            <strong>Tại sao quan trọng?:</strong> Cho phép mọi người trong mạng lưới có thể tự mình kiểm tra và xác minh tính hợp lệ của dữ liệu. Nếu tôi và bạn cùng băm một khối và ra kết quả giống nhau, chúng ta biết rằng chúng ta có cùng một dữ liệu.
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Đặc tính VÀNG của Hàm băm (2/3)</h2>
    <div class="slide-content">
        <h3>Tính một chiều (One-Way / Pre-image Resistance)</h3>
        <ul>
            <li>Rất dễ để tính <code>Y = hash(X)</code>.</li>
            <li>Nhưng gần như <strong>không thể</strong> tìm ra <code>X</code> nếu chỉ biết <code>Y</code>.</li>
        </ul>
        
        <div class="highlight-box" style="font-size: 1.3em; text-align: left; margin-top: 30px;">
            <strong>Tại sao quan trọng?:</strong> Giúp bảo vệ dữ liệu. Ví dụ, Merkle Root tóm tắt hàng ngàn giao dịch, nhưng không ai có thể từ Merkle Root mà suy ngược ra được nội dung của các giao dịch đó.
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Đặc tính VÀNG của Hàm băm (3/3)</h2>
    <div class="slide-content">
        <h3>Tính kháng va chạm (Collision Resistance)</h3>
        <ul>
            <li>Cực kỳ khó để tìm ra hai đầu vào khác nhau <code>X</code> và <code>Z</code> sao cho <code>hash(X) = hash(Z)</code>.</li>
            <li>Với SHA-256, xác suất này nhỏ hơn cả việc trúng số độc đắc nhiều lần liên tiếp.</li>
        </ul>
        
        <div class="highlight-box" style="font-size: 1.3em; text-align: left; margin-top: 30px;">
            <strong>Tại sao quan trọng?:</strong> Đảm bảo tính toàn vẹn của chuỗi. Nếu có thể tạo ra va chạm, kẻ gian có thể tạo ra một khối giả mạo có cùng hash với khối thật để lừa đảo hệ thống.
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Ứng dụng của Hàm băm: Tạo ra "Chuỗi"</h2>
    <div class="slide-content">
        <p>Đây là cách các khối được liên kết với nhau một cách bất biến.</p>
        
        <div class="code-block">
            // Tiêu đề Khối 100<br>
            <strong>Hash_100:</strong> 0000...abcd<br><br>
            // Tiêu đề Khối 101<br>
            <strong>Previous_Hash:</strong> 0000...abcd ← Liên kết tới Khối 100<br>
            <strong>...</strong><br>
            <strong>Hash_101:</strong> 0000...efgh
        </div>
        
        <p>Hàm băm chính là "chất keo" mật mã học gắn kết toàn bộ lịch sử của Blockchain.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phần II: Mật mã Khóa công khai - Danh tính Số của bạn</h2>
    <div class="slide-content">
        <p>Hệ thống này giải quyết một vấn đề kinh điển: Làm sao để <strong>giao tiếp an toàn</strong> và <strong>xác định danh tính</strong> trên một mạng lưới công cộng và không tin cậy?</p>
        
        <p>Nó tạo ra một cặp khóa có quan hệ toán học với nhau...</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Ví von về Hòm thư & Chìa khóa</h2>
    <div class="slide-content">
        <ul>
            <li><strong>Khóa Công khai (Public Key):</strong> Giống như <strong>địa chỉ hòm thư</strong> của bạn. Bạn có thể chia sẻ nó cho bất kỳ ai muốn gửi thư (tài sản) cho bạn.</li>
            <li><strong>Khóa Riêng tư (Private Key):</strong> Giống như <strong>chìa khóa</strong> để mở hòm thư. Chỉ có bạn giữ nó. Ai có chìa khóa này, người đó có thể lấy mọi thứ bên trong.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Trông chúng như thế nào?</h2>
    <div class="slide-content">
        <p>Đây không phải là những khái niệm trừu tượng. Chúng là những đoạn dữ liệu có thật.</p>
        
        <div class="code-block">
            // Một Khóa Riêng tư (dạng Hexadecimal, 256-bit)<br>
            <strong>Private Key:</strong><br>
            8e3c...b733<br><br>
            
            ↓ (Thuật toán ECC) ↓<br><br>
            
            // Địa chỉ Ethereum tương ứng (tạo từ Khóa Công khai)<br>
            <strong>Address:</strong><br>
            0x71C7...A18e
        </div>
        
        <p>Mối quan hệ này là <strong>một chiều</strong>: có thể từ khóa riêng tư tạo ra địa chỉ, nhưng không thể làm ngược lại.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Cảnh báo An ninh Tối quan trọng! ⚠️</h2>
    <div class="slide-content">
        <p>Trong thế giới Blockchain, có một câu thần chú:</p>
        
        <div class="quote-block" style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); color: #856404;">
            "Not Your Keys, Not Your Coins"<br>
            (Không phải khóa của bạn, không phải tiền của bạn)
        </div>
        
        <ul>
            <li>Nếu bạn để lộ khóa riêng tư, bạn <strong>mất tất cả tài sản</strong>. Không có tổng đài hay ngân hàng nào để gọi hỗ trợ.</li>
            <li>Nếu bạn lưu khóa trên một sàn giao dịch, về mặt kỹ thuật, họ mới là người đang giữ tài sản của bạn.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phần III: Chữ ký số - Dấu ấn Không thể Chối cãi</h2>
    <div class="slide-content">
        <p>Làm sao mạng lưới biết một giao dịch là hợp lệ và thực sự đến từ bạn?</p>
        
        <p>Chữ ký số cung cấp hai bằng chứng sắt đá:</p>
        <ul>
            <li><strong>Tính xác thực (Authenticity):</strong> Giao dịch được tạo bởi chủ nhân của khóa riêng tư.</li>
            <li><strong>Tính toàn vẹn (Integrity):</strong> Giao dịch không hề bị chỉnh sửa.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Quy trình Ký một Giao dịch</h2>
    <div class="slide-content">
        <p style="margin-bottom: 15px;">Các bước mà Alice sẽ thực hiện để gửi gói tin cho Bob: Tạo <strong>Tx</strong> → <strong>Hash(Tx)</strong> → Ký bằng <strong>Private Key</strong> → Đóng gói &amp; truyền đi</p>
        
        <div style="display: flex; gap: 8px; margin: 10px 0; align-items: center;">
            <button id="crypto-play" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-size: 14px; font-weight: bold;">
                ▶️ Chạy
            </button>
            <button id="crypto-reset" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-size: 14px; font-weight: bold;" disabled>
                ⟲ Reset
            </button>
            <span id="crypto-status" style="color: #666; font-size: 13px; margin-left: 10px;">Sẵn sàng.</span>
        </div>

        <div style="display: grid; grid-template-columns: 1.2fr 1fr 1.2fr; gap: 16px; margin: 20px 0;">
            <!-- Step 1: Transaction Data -->
            <div id="tx-card" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; min-height: 180px; position: relative; transition: all 0.3s ease;">
                <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                    Bước 1 · Dữ liệu giao dịch gốc
                </div>
                <div style="position: absolute; top: 12px; right: 12px; font-size: 11px; padding: 4px 8px; border-radius: 20px; background: #007bff; color: white; font-weight: bold;">
                    Tx
                </div>
                <pre id="tx-content" style="margin: 0; white-space: pre-wrap; word-break: break-word; font-size: 12px; line-height: 1.4; background: #ffffff; border: 1px solid #dee2e6; padding: 12px; border-radius: 8px; color: #495057; min-height: 120px; overflow: auto;">
<code>// Chưa khởi tạo…</code></pre>
            </div>

            <!-- Step 2: Hashing Machine -->
            <div id="hash-card" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; min-height: 180px; transition: all 0.3s ease;">
                <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                    Bước 2 · Băm dữ liệu (SHA-256)
                </div>
                
                <!-- Hashing Machine -->
                <div id="hash-machine" style="height: 50px; border: 2px dashed #6c757d; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 12px;">
                    <div style="width: 12px; height: 12px; border: 2px solid #007bff; border-radius: 50%; border-top-color: transparent; animation: spin 1s linear infinite;"></div>
                    <div style="width: 12px; height: 12px; border: 2px solid #28a745; border-radius: 50%; border-top-color: transparent; animation: spin 1.5s linear infinite;"></div>
                    <span id="machine-status" style="color: #6c757d; font-size: 12px;">Máy băm đang chờ…</span>
                </div>
                
                <!-- Hash Result -->
                <div style="background: #e3f2fd; border-radius: 8px; padding: 12px;">
                    <div style="font-size: 11px; color: #1976d2; font-weight: bold; margin-bottom: 6px;">Hash(Tx)</div>
                    <pre id="hash-content" style="margin: 0; font-size: 11px; line-height: 1.3; color: #333; word-break: break-all;">
<code>// …</code></pre>
                </div>
            </div>

            <!-- Step 3: Digital Signature -->
            <div id="sig-card" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; min-height: 180px; position: relative; transition: all 0.3s ease;">
                <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                    Bước 3 · Ký bằng Private Key (ECDSA P-256)
                </div>
                <div style="position: absolute; top: 12px; right: 12px; font-size: 11px; padding: 4px 8px; border-radius: 20px; background: #ffc107; color: #212529; font-weight: bold;">
                    Signature
                </div>
                <pre id="sig-content" style="margin: 0; white-space: pre-wrap; word-break: break-word; font-size: 11px; line-height: 1.3; background: #ffffff; border: 1px solid #dee2e6; padding: 10px; border-radius: 8px; color: #495057; height: 60px; overflow: auto;">
<code>// …</code></pre>
                <div style="margin-top: 8px;">
                    <div style="font-size: 11px; color: #6c757d; font-weight: bold; margin-bottom: 4px;">Public Key của Alice</div>
                    <pre id="pub-content" style="margin: 0; font-size: 10px; line-height: 1.2; background: #f8f9fa; border: 1px solid #dee2e6; padding: 8px; border-radius: 6px; color: #495057; height: 50px; overflow: auto;">
<code>// …</code></pre>
                </div>
            </div>
        </div>

        <!-- Step 4: Final Package -->
        <div id="package-card" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; margin: 16px 0; transition: all 0.3s ease;">
            <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                Bước 4 · Gói tin hoàn chỉnh gửi đi
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
                <div style="flex: 1;">
                    <!-- Single button that starts disabled and gets enabled after completion -->
                    <div style="background: #ffffff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px; text-align: center;">
                        <button id="view-result-btn" style="background: #e9ecef; color: #6c757d; border: 2px solid #ced4da; border-radius: 12px; padding: 15px 30px; font-size: 16px; font-weight: bold; cursor: not-allowed; transition: all 0.3s ease; opacity: 0.6;" disabled>
                            📦 Xem kết quả
                        </button>
                        <div id="package-status" style="margin-top: 10px; color: #6c757d; font-style: italic; font-size: 14px;">
                            🕐 Chờ hoàn thành các bước trước...
                        </div>
                    </div>
                </div>
                
                <!-- Network Animation -->
                <div style="width: 300px; height: 80px;">
                    <svg viewBox="0 0 300 80" style="width: 100%; height: 100%;">
                        <defs>
                            <marker id="arrow-marker" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#6c757d"></path>
                            </marker>
                        </defs>
                        <path id="network-route" d="M20 40 C 80 20, 150 60, 220 30 S 280 50, 280 40" fill="none" stroke="#6c757d" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arrow-marker)"/>
                        <circle cx="20" cy="40" r="12" fill="#007bff" stroke="#0056b3" stroke-width="2"/>
                        <circle cx="100" cy="30" r="8" fill="#6c757d" stroke="#495057" stroke-width="1"/>
                        <circle cx="180" cy="50" r="8" fill="#6c757d" stroke="#495057" stroke-width="1"/>
                        <circle cx="280" cy="40" r="12" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
                        <circle id="data-packet" r="6" fill="#ffc107" cx="20" cy="40"/>
                        <text x="5" y="60" style="font-size: 10px; fill: #495057;">Alice</text>
                        <text x="265" y="60" style="font-size: 10px; fill: #495057;">Bob</text>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Modal for Package Details -->
        <div id="package-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; backdrop-filter: blur(5px);">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; border-radius: 16px; padding: 24px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 2px solid #e9ecef; padding-bottom: 12px;">
                    <h3 style="margin: 0; color: #2e7d32; font-size: 18px;">📦 Chi tiết Gói tin Hoàn chỉnh</h3>
                    <div style="display: flex; gap: 8px;">
                        <button id="copy-package-btn" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 14px; font-weight: bold;">Copy Package</button>
                        <button id="close-modal" style="background: #dc3545; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-size: 14px; font-weight: bold;">✕ Đóng</button>
                    </div>
                </div>
                
                <div style="background: #f8f9fa; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                    <h4 style="margin: 0 0 12px 0; color: #495057; font-size: 14px;">🔍 Cấu trúc Gói tin:</h4>
                    <pre id="modal-package-content" style="margin: 0; font-size: 12px; line-height: 1.4; background: white; border: 1px solid #dee2e6; padding: 16px; border-radius: 8px; color: #495057; overflow-x: auto;">
<code>// Đang tải...</code></pre>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                    <div style="background: #e3f2fd; border-radius: 8px; padding: 12px; border-left: 4px solid #2196f3;">
                        <div style="font-weight: bold; color: #1976d2; font-size: 12px; margin-bottom: 4px;">📄 Transaction Data</div>
                        <div style="color: #0d47a1; font-size: 11px;">Dữ liệu giao dịch gốc (From, To, Amount)</div>
                    </div>
                    <div style="background: #f3e5f5; border-radius: 8px; padding: 12px; border-left: 4px solid #9c27b0;">
                        <div style="font-weight: bold; color: #7b1fa2; font-size: 12px; margin-bottom: 4px;">🔑 Public Key</div>
                        <div style="color: #4a148c; font-size: 11px;">Khóa công khai của Alice (để xác minh)</div>
                    </div>
                    <div style="background: #e8f5e8; border-radius: 8px; padding: 12px; border-left: 4px solid #4caf50;">
                        <div style="font-weight: bold; color: #2e7d32; font-size: 12px; margin-bottom: 4px;">✨ Digital Signature</div>
                        <div style="color: #1b5e20; font-size: 11px;">Chữ ký số (bằng chứng xác thực)</div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @keyframes spin { to { transform: rotate(360deg); } }
            .highlight-card { border-color: #007bff !important; box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25) !important; }
        </style>
    </div>
</div>
`);

// ============ VERIFIER SLIDE ============
addSlide(`
<div class="slide">
    <h2>Quy trình Xác minh Chữ ký số</h2>
    <div class="slide-content">
        <p>Sau khi Alice ký giao dịch, bây giờ Bob (hoặc bất kỳ ai) có thể <strong>xác minh</strong> tính hợp lệ của gói tin:</p>
        
        <!-- ========== VERIFIER VIEW ========== -->
        <section id="viewVerify" class="view">
            <p class="small">Node sẽ xử lý gói <code>[Tx, AlicePublicKey, Signature]</code> từ Signer để xác minh và gửi lên mạng Blockchain.</p>
            
            <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                <button id="loadFromStorage" style="background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: bold;">
                    📥 Load từ bộ nhớ
                </button>
                <button id="verifyRun" style="background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%); color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: bold;">
                    ✔ Verify
                </button>
                <button id="verifyReset" style="background: #6c757d; color: white; border: none; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: bold;" disabled>
                    ⟲ Reset
                </button>
                <span style="margin-left: auto; color: #6c757d; font-size: 14px; align-self: center;" id="statusV">Idle.</span>
            </div>

            <!-- Input Package -->
            <div style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                    Gói tin đầu vào cho Verifier
                </div>
                <textarea id="pkgInput" style="width: 100%; height: 80px; padding: 12px; border: 1px solid #ced4da; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 12px; resize: vertical; box-sizing: border-box;" placeholder='Dán JSON package ở đây (từ slide trước)…'></textarea>
            </div>

            <!-- Verification Steps Grid -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
                <!-- Step 1: Split Package -->
                <div id="v1" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; transition: all 0.3s ease;">
                    <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                        Bước 1 · Tách gói tin
                    </div>
                    <pre id="vSplit" style="margin: 0; font-size: 11px; line-height: 1.3; background: #ffffff; border: 1px solid #dee2e6; padding: 12px; border-radius: 8px; color: #495057; height: 120px; overflow: auto;"><code>// …</code></pre>
                </div>

                <!-- Step 2: Hash Transaction -->
                <div id="v2" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; transition: all 0.3s ease;">
                    <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                        Bước 2 · Hash(Tx) lại
                    </div>
                    <div style="text-align: center; margin-bottom: 8px;">
                        <div id="machine-status-v" style="font-size: 10px; color: #28a745; font-weight: bold;">Máy băm đang chờ…</div>
                    </div>
                    <pre id="vHash" style="margin: 0; font-size: 11px; line-height: 1.3; background: #ffffff; border: 1px solid #dee2e6; padding: 12px; border-radius: 8px; color: #495057; height: 80px; overflow: auto;"><code>// …</code></pre>
                </div>

                <!-- Step 3: Verify Signature -->
                <div id="v3" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; transition: all 0.3s ease;">
                    <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                        Bước 3 · Verify Signature
                    </div>
                    <pre id="vVerify" style="margin: 0; font-size: 11px; line-height: 1.3; background: #ffffff; border: 1px solid #dee2e6; padding: 12px; border-radius: 8px; color: #495057; height: 120px; overflow: auto;"><code>// …</code></pre>
                </div>

                <!-- Step 4: Compare Results -->
                <div id="v4" style="background: #f8f9fa; border: 2px solid #e9ecef; border-radius: 12px; padding: 16px; transition: all 0.3s ease;">
                    <div style="font-size: 12px; color: #6c757d; letter-spacing: 0.5px; margin-bottom: 8px; text-transform: uppercase; font-weight: bold;">
                        Bước 4 · So sánh A ≟ B
                    </div>
                    <pre id="vCompare" style="margin: 0; font-size: 11px; line-height: 1.3; background: #ffffff; border: 1px solid #dee2e6; padding: 12px; border-radius: 8px; color: #495057; height: 100px; overflow: auto;"><code>// …</code></pre>
                </div>
            </div>
        </section>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Bảng so sánh: Băm vs. Mã hóa vs. Ký số</h2>
    <div class="slide-content">
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
                <tr style="background-color: #f8f9fa;">
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Chức năng</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Mục đích</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Khóa sử dụng</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">Kết quả</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Băm (Hashing)</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Kiểm tra tính toàn vẹn</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Không dùng khóa</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">"Vân tay số"</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Mã hóa (Encryption)</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Bảo vệ tính bí mật</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Khóa công khai</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Dữ liệu bị xáo trộn</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;"><strong>Ký số (Signing)</strong></td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Xác thực & Chống chối bỏ</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">Khóa riêng tư</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">"Chữ ký"</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Phần IV: Cây Merkle - Tối ưu hóa Hiệu suất</h2>
    <div class="slide-content">
        <p>Một khối có thể chứa hàng ngàn giao dịch. Làm sao một ví điện thoại (light client) có thể xác minh giao dịch của mình mà không cần tải về cả khối (hàng Megabyte dữ liệu)?</p>
        
        <p>Cây Merkle cho phép tóm tắt toàn bộ giao dịch trong khối thành một chuỗi hash duy nhất.</p>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Xây dựng Cây Merkle - Animation</h2>
    <div class="slide-content">
        <p>Quá trình này diễn ra từ dưới lên trên, bằng cách băm liên tục các cặp hash.</p>
        
        <div style="display: flex; gap: 12px; margin-bottom: 16px;">
            <button id="merkle-play" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-size: 14px; font-weight: bold;">
                ▶ Xây dựng Cây
            </button>
            <button id="merkle-reset" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 12px; cursor: pointer; font-size: 14px; font-weight: bold;" disabled>
                ⟲ Reset
            </button>
            <span style="margin-left: auto; color: #6c757d; font-size: 14px; align-self: center;" id="merkle-status">Sẵn sàng xây dựng cây.</span>
        </div>

        <div style="width: 100%; height: 345px; background: #0f1220; border: 2px solid #23284b; border-radius: 16px; position: relative; display: flex; align-items: center; justify-content: center;">
            <svg id="merkle-svg" viewBox="0 0 640 350" style="width: 100%; height: 100%;">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="b"/>
                        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
        
        <div style="margin-top: 16px; background: #f8f9fa; border-radius: 12px; padding: 16px;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 12px;">
                <div style="text-align: center;">
                    <div style="width: 20px; height: 20px; background: #ef4444; border-radius: 50%; margin: 0 auto 4px; border: 2px solid #dc2626;"></div>
                    <div><strong>Lá (Leaves)</strong><br>Dữ liệu gốc</div>
                </div>
                <div style="text-align: center;">
                    <div style="width: 20px; height: 20px; background: #60a5fa; border-radius: 50%; margin: 0 auto 4px; border: 2px solid #3b82f6;"></div>
                    <div><strong>Nút trung gian</strong><br>Hash của cặp con</div>
                </div>
                <div style="text-align: center;">
                    <div style="width: 20px; height: 20px; background: #f59e0b; border-radius: 50%; margin: 0 auto 4px; border: 2px solid #d97706;"></div>
                    <div><strong>Merkle Root</strong><br>Hash gốc</div>
                </div>
            </div>
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Sức mạnh của Bằng chứng Merkle (Merkle Proof)</h2>
    <div class="slide-content">
        <p>Để chứng minh <strong>Giao dịch A (tạo ra HA)</strong> có trong khối, bạn không cần cả cây. Bạn chỉ cần:</p>
        <ul>
            <li><strong>HB</strong> (để tính H_AB)</li>
            <li><strong>H_CD</strong> (để tính H_ABCD)</li>
            <li><strong>Merkle Root</strong> (để so sánh kết quả cuối cùng)</li>
        </ul>
        
        <div class="highlight-box" style="font-size: 1.3em; text-align: left; margin-top: 30px;">
            → Một lượng dữ liệu cực nhỏ để xác minh, giúp các thiết bị yếu có thể tương tác an toàn với Blockchain.
        </div>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tổng hợp: Vòng đời của một Giao dịch</h2>
    <div class="slide-content">
        <p style="font-size: 1.8em;">Hãy xem cả 4 thành phần hoạt động cùng nhau như thế nào:</p>
        <ul style="font-size: 1em; line-height: 1.8;">
            <li>Alice dùng <strong>Khóa Riêng tư</strong> để tạo <strong>Chữ ký số</strong> cho giao dịch.</li>
            <li>Giao dịch được đưa vào một khối cùng hàng ngàn giao dịch khác.</li>
            <li>Tất cả được <strong>Băm</strong> và sắp xếp vào một <strong>Cây Merkle</strong> để tạo ra Merkle Root.</li>
            <li>Khối được liên kết vào chuỗi bằng cách đưa <strong>Hash</strong> của khối trước vào tiêu đề.</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Tóm tắt Buổi 2</h2>
    <div class="slide-content">
        <p>Hôm nay chúng ta đã giải mã được 4 "phép thuật" toán học đằng sau Blockchain. Chúng là nền tảng cho sự an toàn và tin cậy của toàn bộ hệ thống.</p>
        
        <ul>
            <li><strong>Hàm băm mật mã</strong> tạo ra "vân tay số" và liên kết các khối</li>
            <li><strong>Mật mã khóa công khai</strong> tạo ra danh tính và quyền sở hữu</li>
            <li><strong>Chữ ký số</strong> xác thực giao dịch không cần trung gian</li>
            <li><strong>Cây Merkle</strong> tối ưu hóa việc xác minh dữ liệu</li>
        </ul>
    </div>
</div>
`);

addSlide(`
<div class="slide">
    <h2>Buổi học tiếp theo...</h2>
    <div class="slide-content">
        <h3>Buổi 3: Bitcoin và Cryptocurrency</h3>
        <p>Câu hỏi tiếp theo: "Làm thế nào Bitcoin áp dụng tất cả những nguyên lý mật mã học này để tạo ra hệ thống tiền tệ đầu tiên hoàn toàn phi tập trung?"</p>
        
        <ul>
            <li>Kiến trúc và cơ chế hoạt động của Bitcoin</li>
            <li>Quá trình mining và Proof of Work</li>
            <li>Cách giao dịch Bitcoin được xử lý</li>
        </ul>
        
        <div class="highlight-box" style="margin-top: 30px; font-size: 2.5em;">
            <h4 style="color: #0077B6;">Câu hỏi & Thảo luận?</h4>
        </div>
    </div>
</div>
`);

// Initialize the slideshow after loading all slides
// Note: initializeSlideshow() is called from index.html, not here

// WebCrypto Animation for Digital Signing
function initializeCryptoAnimation() {
    setTimeout(() => {
        const playBtn = document.getElementById('crypto-play');
        const resetBtn = document.getElementById('crypto-reset');
        const statusEl = document.getElementById('crypto-status');
        
        if (!playBtn || !resetBtn || !statusEl) {
            console.log('⏳ Crypto animation elements not found, will retry...');
            return;
        }
        
        console.log('✅ Crypto animation elements found, initializing...');
        
        let busy = false, keys;
        
        // Helper functions
        const sleep = (ms) => new Promise(r => setTimeout(r, ms));
        const enc = (s) => new TextEncoder().encode(s);
        const toHex = (buf) => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
        const b64url = (buf) => {
            let b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
            return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        };
        const json = (obj) => JSON.stringify(obj, null, 2);
        
        // Deterministic string for hashing
        function stableStringify(obj) {
            if (obj === null || typeof obj !== 'object') return JSON.stringify(obj);
            if (Array.isArray(obj)) return '[' + obj.map(stableStringify).join(',') + ']';
            return '{' + Object.keys(obj).sort().map(k => JSON.stringify(k) + ':' + stableStringify(obj[k])).join(',') + '}';
        }
        
        async function sha256(str) {
            const buf = await crypto.subtle.digest('SHA-256', enc(str));
            return buf;
        }
        
        async function genEcdsa() {
            return await crypto.subtle.generateKey({name: 'ECDSA', namedCurve: 'P-256'}, true, ['sign', 'verify']);
        }
        
        async function sign(hashBuf, privKey) {
            return await crypto.subtle.sign({name: 'ECDSA', hash: 'SHA-256'}, privKey, hashBuf);
        }
        
        async function exportPubJwk(pub) {
            const jwk = await crypto.subtle.exportKey('jwk', pub);
            return jwk;
        }
        
        function highlightCard(cardId) {
            document.getElementById(cardId).classList.add('highlight-card');
            document.getElementById(cardId).scrollIntoView({behavior: 'smooth', block: 'center'});
        }
        
        function clearHighlight(cardId) {
            document.getElementById(cardId).classList.remove('highlight-card');
        }
        
        async function run() {
            if (busy) return;
            busy = true;
            playBtn.disabled = true;
            resetBtn.disabled = true;
            statusEl.textContent = 'Đang chạy…';
            
            try {
                // STEP 1: Build Transaction
                const tx = { From: 'Alice', To: 'Bob', Amount: '1 ETH', Nonce: 1 };
                document.getElementById('tx-content').textContent = json(tx);
                highlightCard('tx-card');
                await sleep(1200);
                
                // STEP 2: Hash Transaction
                clearHighlight('tx-card');
                highlightCard('hash-card');
                document.getElementById('machine-status').textContent = 'Đang băm với SHA-256…';
                await sleep(800);
                
                const txDet = stableStringify(tx);
                const hashBuf = await sha256(txDet);
                const hashHex = toHex(hashBuf).slice(0, 64) + '…';
                document.getElementById('hash-content').textContent = 'Hash(Tx) = ' + hashHex;
                await sleep(1000);
                
                // STEP 3: Generate keys + sign
                clearHighlight('hash-card');
                highlightCard('sig-card');
                keys = await genEcdsa();
                const sig = await sign(hashBuf, keys.privateKey);
                document.getElementById('sig-content').textContent = 'Signature = 0x' + toHex(sig).slice(0, 96) + '…';
                
                const jwk = await exportPubJwk(keys.publicKey);
                document.getElementById('pub-content').textContent = json(jwk);
                await sleep(1200);
                
                // STEP 4: Package and enable result button
                clearHighlight('sig-card');
                highlightCard('package-card');
                const pkg = { tx, alicePublicKey: jwk, signature: b64url(sig) };
                
                // Enable the result button
                const resultBtn = document.getElementById('view-result-btn');
                const statusText = document.getElementById('package-status');
                
                if (resultBtn && statusText) {
                    // Enable button with nice green styling
                    resultBtn.disabled = false;
                    resultBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                    resultBtn.style.color = 'white';
                    resultBtn.style.border = '2px solid #28a745';
                    resultBtn.style.cursor = 'pointer';
                    resultBtn.style.opacity = '1';
                    resultBtn.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
                    
                    // Update status text
                    statusText.innerHTML = '<span style="color: #28a745; font-weight: bold;">Lấy kết quả để xác minh tại slide sau!</span>';
                    
                    // Store package data for modal
                    window.cryptoPackageData = pkg;
                    
                    // Add click event for modal
                    resultBtn.onclick = function() {
                        showPackageModal(pkg);
                    };
                    
                    console.log('✅ Result button is now enabled and clickable');
                } else {
                    console.error('❌ Could not find result button');
                }
                
                await sleep(800);
                
                // Animate packet along the network path
                const path = document.getElementById('network-route');
                const packet = document.getElementById('data-packet');
                if (path && packet) {
                    const len = path.getTotalLength();
                    let t = 0;
                    const dur = 2500;
                    const t0 = performance.now();
                    
                    function step(now) {
                        t = Math.min(1, (now - t0) / dur);
                        const p = path.getPointAtLength(t * len);
                        packet.setAttribute('cx', p.x);
                        packet.setAttribute('cy', p.y);
                        if (t < 1) requestAnimationFrame(step);
                        else done();
                    }
                    requestAnimationFrame(step);
                } else {
                    done();
                }
                
                function done() {
                    statusEl.textContent = 'Xong ✅ Gói tin đã đến Bob! Click vào ô xanh để xem chi tiết.';
                    playBtn.disabled = true;
                    resetBtn.disabled = false;
                    busy = false;
                    clearHighlight('package-card');
                    
                    // Pulse Bob node
                    const bobNode = document.querySelector('circle[fill="#28a745"]');
                    if (bobNode) {
                        bobNode.animate([
                            {transform: 'scale(1)'},
                            {transform: 'scale(1.3)'},
                            {transform: 'scale(1)'}
                        ], {duration: 800, iterations: 3});
                    }
                }
                
            } catch (error) {
                console.error('Animation error:', error);
                statusEl.textContent = 'Lỗi: ' + error.message;
                busy = false;
                playBtn.disabled = false;
                resetBtn.disabled = false;
            }
        }
        
        function showPackageModal(pkg) {
            const modal = document.getElementById('package-modal');
            const modalContent = document.getElementById('modal-package-content');
            
            if (modal && modalContent) {
                modalContent.textContent = json(pkg);
                modal.style.display = 'block';
                
                // Add modal close functionality
                const closeBtn = document.getElementById('close-modal');
                if (closeBtn) {
                    closeBtn.onclick = function() {
                        modal.style.display = 'none';
                    };
                }
                
                // Add copy package functionality
                const copyBtn = document.getElementById('copy-package-btn');
                if (copyBtn) {
                    copyBtn.onclick = async function() {
                        try {
                            const packageText = json(pkg);
                            await navigator.clipboard.writeText(packageText);
                            
                            // Visual feedback
                            const originalText = copyBtn.innerHTML;
                            copyBtn.innerHTML = '✅ Đã Copy!';
                            copyBtn.style.background = '#28a745';
                            
                            setTimeout(() => {
                                copyBtn.innerHTML = originalText;
                                copyBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                            }, 2000);
                            
                        } catch (error) {
                            console.error('Copy failed:', error);
                            const originalText = copyBtn.innerHTML;
                            copyBtn.innerHTML = '❌ Lỗi Copy';
                            copyBtn.style.background = '#dc3545';
                            
                            setTimeout(() => {
                                copyBtn.innerHTML = originalText;
                                copyBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                            }, 2000);
                        }
                    };
                }
                
                // Close on background click
                modal.onclick = function(e) {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                };
                
                // Close on Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && modal.style.display === 'block') {
                        modal.style.display = 'none';
                    }
                });
            }
        }
        
        function resetAll() {
            document.getElementById('tx-content').textContent = '// Chưa khởi tạo…';
            document.getElementById('hash-content').textContent = '// …';
            document.getElementById('sig-content').textContent = '// …';
            document.getElementById('pub-content').textContent = '// …';
            document.getElementById('machine-status').textContent = 'Máy băm đang chờ…';
            statusEl.textContent = 'Sẵn sàng.';
            
            // Reset package button to disabled state
            const resultBtn = document.getElementById('view-result-btn');
            const statusText = document.getElementById('package-status');
            
            if (resultBtn && statusText) {
                // Reset button to disabled state
                resultBtn.disabled = true;
                resultBtn.style.background = '#e9ecef';
                resultBtn.style.color = '#6c757d';
                resultBtn.style.border = '2px solid #ced4da';
                resultBtn.style.cursor = 'not-allowed';
                resultBtn.style.opacity = '0.6';
                resultBtn.style.boxShadow = 'none';
                
                // Reset status text
                statusText.innerHTML = '🕐 Chờ hoàn thành các bước trước...';
                statusText.style.color = '#6c757d';
                
                // Remove click handler
                resultBtn.onclick = null;
            }
            
            // Hide modal if open
            const modal = document.getElementById('package-modal');
            if (modal) {
                modal.style.display = 'none';
            }
            
            ['tx-card', 'hash-card', 'sig-card', 'package-card'].forEach(clearHighlight);
            
            const packet = document.getElementById('data-packet');
            if (packet) {
                packet.setAttribute('cx', 20);
                packet.setAttribute('cy', 40);
            }
            
            playBtn.disabled = false;
            resetBtn.disabled = true;
            busy = false;
            
            // Clear package data
            if (window.cryptoPackageData) {
                delete window.cryptoPackageData;
            }
        }
        
        playBtn.addEventListener('click', run);
        resetBtn.addEventListener('click', resetAll);
        
        console.log('✅ Crypto animation initialized successfully');
        
    }, 500);
}

// Initialize crypto animation
initializeCryptoAnimation();

// Also initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeCryptoAnimation);

// Re-initialize when slides change
document.addEventListener('slideChange', initializeCryptoAnimation);

// Check periodically for the animation elements
const cryptoChecker = setInterval(() => {
    const playBtn = document.getElementById('crypto-play');
    if (playBtn) {
        console.log('🎯 Found crypto animation elements, initializing...');
        initializeCryptoAnimation();
        clearInterval(cryptoChecker);
    }
}, 1000);

// ============ VERIFIER ANIMATION JAVASCRIPT ============
function initializeVerifierAnimation() {
    const loadBtn = document.getElementById('loadFromStorage');
    const verifyBtn = document.getElementById('verifyRun');
    const resetBtn = document.getElementById('verifyReset');
    const statusEl = document.getElementById('statusV');
    const pkgInput = document.getElementById('pkgInput');
    
    if (!loadBtn || !verifyBtn || !resetBtn || !statusEl || !pkgInput) {
        console.log('⏳ Verifier animation elements not found, will retry...');
        return;
    }
    
    console.log('✅ Verifier animation elements found, initializing...');
    
    let busy = false;
    
    // Helper functions
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const enc = (s) => new TextEncoder().encode(s);
    const toHex = (buf) => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    const b64urlDecode = (str) => {
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        while (str.length % 4) str += '=';
        return Uint8Array.from(atob(str), c => c.charCodeAt(0));
    };
    const json = (obj) => JSON.stringify(obj, null, 2);
    
    function highlightCard(id) {
        document.getElementById(id).style.border = '2px solid #007bff';
        document.getElementById(id).style.boxShadow = '0 0 10px rgba(0,123,255,0.3)';
    }
    
    function clearHighlight(id) {
        document.getElementById(id).style.border = '2px solid #e9ecef';
        document.getElementById(id).style.boxShadow = 'none';
    }
    
    function stableStringify(obj) {
        if (obj === null || typeof obj !== 'object') return JSON.stringify(obj);
        if (Array.isArray(obj)) return '[' + obj.map(stableStringify).join(',') + ']';
        return '{' + Object.keys(obj).sort().map(k => JSON.stringify(k) + ':' + stableStringify(obj[k])).join(',') + '}';
    }
    
    async function runVerification() {
        if (busy) return;
        busy = true;
        verifyBtn.disabled = true;
        resetBtn.disabled = false;
        
        try {
            statusEl.textContent = 'Đang xác minh...';
            
            // Parse input package
            const pkgText = pkgInput.value.trim();
            if (!pkgText) {
                throw new Error('Vui lòng nhập gói tin cần xác minh');
            }
            
            let pkg;
            try {
                pkg = JSON.parse(pkgText);
            } catch {
                throw new Error('Gói tin không đúng định dạng JSON');
            }
            
            if (!pkg.tx || !pkg.alicePublicKey || !pkg.signature) {
                throw new Error('Gói tin thiếu thông tin: cần có tx, alicePublicKey, signature');
            }
            
            // STEP 1: Split package
            highlightCard('v1');
            document.getElementById('vSplit').innerHTML = `<div style="color: #007bff; font-weight: bold; margin-bottom: 8px;">📦 Gói tin được tách thành:</div>
<div style="color: #28a745; font-size: 10px; margin-bottom: 4px;"><strong>• Transaction:</strong></div>
<div style="font-size: 9px; color: #495057; margin-bottom: 8px;">${json(pkg.tx)}</div>
<div style="color: #28a745; font-size: 10px; margin-bottom: 4px;"><strong>• Public Key:</strong></div>
<div style="font-size: 9px; color: #495057; margin-bottom: 8px;">${JSON.stringify(pkg.alicePublicKey, null, 1)}</div>
<div style="color: #28a745; font-size: 10px;"><strong>• Signature:</strong></div>
<div style="font-size: 9px; color: #495057;">${pkg.signature.slice(0, 40)}...</div>`;
            await sleep(1500);
            
            // STEP 2: Hash transaction again
            clearHighlight('v1');
            highlightCard('v2');
            document.getElementById('machine-status-v').textContent = 'Đang băm lại giao dịch...';
            
            const txString = stableStringify(pkg.tx);
            const hashBuf = await crypto.subtle.digest('SHA-256', enc(txString));
            const hashHex = toHex(hashBuf);
            
            document.getElementById('vHash').innerHTML = `<div style="color: #007bff; font-weight: bold; margin-bottom: 8px;">🔄 Băm lại Transaction:</div>
<div style="color: #6c757d; font-size: 10px; margin-bottom: 4px;">Input: ${txString.slice(0, 30)}...</div>
<div style="color: #28a745; font-weight: bold; font-size: 10px;">SHA-256 Hash:</div>
<div style="font-size: 9px; color: #495057; word-break: break-all;">0x${hashHex}</div>`;
            document.getElementById('machine-status-v').textContent = 'Hoàn thành băm!';
            await sleep(1500);
            
            // STEP 3: Verify signature  
            clearHighlight('v2');
            highlightCard('v3');
            
            // Import public key
            const pubKey = await crypto.subtle.importKey(
                'jwk',
                pkg.alicePublicKey,
                { name: 'ECDSA', namedCurve: 'P-256' },
                false,
                ['verify']
            );
            
            // Decode signature
            const sigBuf = b64urlDecode(pkg.signature);
            
            // Verify signature
            const isValid = await crypto.subtle.verify(
                { name: 'ECDSA', hash: 'SHA-256' },
                pubKey,
                sigBuf,
                hashBuf
            );
            
            document.getElementById('vVerify').innerHTML = `<div style="color: #007bff; font-weight: bold; margin-bottom: 8px;">🔐 Xác minh chữ ký:</div>
<div style="color: #6c757d; font-size: 10px; margin-bottom: 4px;">Public Key: ${pkg.alicePublicKey.x.slice(0, 20)}...</div>
<div style="color: #6c757d; font-size: 10px; margin-bottom: 4px;">Signature: ${pkg.signature.slice(0, 20)}...</div>
<div style="color: #6c757d; font-size: 10px; margin-bottom: 8px;">Hash: 0x${hashHex.slice(0, 20)}...</div>
<div style="color: ${isValid ? '#28a745' : '#dc3545'}; font-weight: bold; font-size: 12px;">
${isValid ? '✅ Chữ ký HỢP LỆ' : '❌ Chữ ký KHÔNG HỢP LỆ'}
</div>`;
            await sleep(1500);
            
            // STEP 4: Final comparison and result
            clearHighlight('v3');
            highlightCard('v4');
            
            const result = isValid ? 'THÀNH CÔNG' : 'THẤT BẠI';
            const resultColor = isValid ? '#28a745' : '#dc3545';
            const resultIcon = isValid ? '✅' : '❌';
            
            document.getElementById('vCompare').innerHTML = `<div style="color: #007bff; font-weight: bold; margin-bottom: 8px;">🎯 Kết quả xác minh:</div>
<div style="background: ${isValid ? '#d4edda' : '#f8d7da'}; border: 1px solid ${isValid ? '#c3e6cb' : '#f5c6cb'}; border-radius: 6px; padding: 12px; margin-bottom: 8px;">
<div style="color: ${resultColor}; font-weight: bold; font-size: 14px; text-align: center;">
${resultIcon} ${result}
</div>
</div>
<div style="color: #6c757d; font-size: 9px; line-height: 1.2;">
${isValid 
    ? 'Chữ ký hợp lệ - gói tin được xác thực thành công.' 
    : 'Chữ ký không hợp lệ - gói tin có thể bị thay đổi.'}
</div>`;
            
            statusEl.textContent = `Xác minh hoàn tất: ${result}`;
            await sleep(1000);
            clearHighlight('v4');
            
        } catch (error) {
            console.error('Verification error:', error);
            statusEl.textContent = 'Lỗi: ' + error.message;
            ['v1', 'v2', 'v3', 'v4'].forEach(clearHighlight);
        }
        
        busy = false;
        verifyBtn.disabled = false;
    }
    
    function resetVerification() {
        document.getElementById('vSplit').innerHTML = '<code>// …</code>';
        document.getElementById('vHash').innerHTML = '<code>// …</code>';
        document.getElementById('vVerify').innerHTML = '<code>// …</code>';
        document.getElementById('vCompare').innerHTML = '<code>// …</code>';
        document.getElementById('machine-status-v').textContent = 'Máy băm đang chờ…';
        statusEl.textContent = 'Idle.';
        ['v1', 'v2', 'v3', 'v4'].forEach(clearHighlight);
        
        // Clear input text
        pkgInput.value = '';
        
        verifyBtn.disabled = false;
        resetBtn.disabled = true;
    }
    
    function loadFromStorage() {
        if (window.cryptoPackageData) {
            pkgInput.value = json(window.cryptoPackageData);
            statusEl.textContent = 'Đã load gói tin từ bộ nhớ.';
        } else {
            statusEl.textContent = 'Không tìm thấy gói tin trong bộ nhớ.';
        }
    }
    
    // Event listeners
    verifyBtn.addEventListener('click', runVerification);
    resetBtn.addEventListener('click', resetVerification);
    loadBtn.addEventListener('click', loadFromStorage);
}

// Initialize verifier when slide is loaded
setTimeout(() => {
    const verifyChecker = setInterval(() => {
        const verifyBtn = document.getElementById('verifyRun');
        if (verifyBtn) {
            console.log('🎯 Found verifier elements, initializing...');
            initializeVerifierAnimation();
            clearInterval(verifyChecker);
        }
    }, 1000);
}, 500);

// ============ MERKLE TREE ANIMATION ============
function initializeMerkleAnimation() {
    const playBtn = document.getElementById('merkle-play');
    const resetBtn = document.getElementById('merkle-reset');
    const statusEl = document.getElementById('merkle-status');
    const svg = document.getElementById('merkle-svg');
    
    if (!playBtn || !resetBtn || !statusEl || !svg) {
        console.log('⏳ Merkle animation elements not found, will retry...');
        return;
    }
    
    console.log('✅ Merkle animation elements found, initializing...');
    
    let busy = false;
    
    // Helper functions
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    
    // Positions (giống như code tham khảo)
    const positions = {
        A: {x: 100, y: 280}, B: {x: 220, y: 280}, C: {x: 420, y: 280}, D: {x: 540, y: 280},
        AB: {x: 160, y: 190}, CD: {x: 480, y: 190}, ABCD: {x: 320, y: 100}
    };
    
    function clearSvg() {
        while (svg.lastChild) svg.removeChild(svg.lastChild);
    }
    
    function createNode(id, label, klass) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', `node ${klass}`);
        g.setAttribute('id', `merkle-${id}`);
        
        const pos = positions[id];
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pos.x);
        circle.setAttribute('cy', pos.y);
        circle.setAttribute('r', 20);
        
        // Styling based on class
        if (klass === 'leaf') {
            circle.setAttribute('fill', '#ef4444');
            circle.setAttribute('stroke', '#dc2626');
        } else if (klass === 'parent') {
            circle.setAttribute('fill', '#60a5fa');
            circle.setAttribute('stroke', '#3b82f6');
        } else if (klass === 'root') {
            circle.setAttribute('fill', '#f59e0b');
            circle.setAttribute('stroke', '#d97706');
        }
        circle.setAttribute('stroke-width', '3');
        circle.setAttribute('opacity', '0.8');
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', pos.x);
        text.setAttribute('y', pos.y + 5);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', 'bold');
        text.textContent = label;
        
        g.appendChild(circle);
        g.appendChild(text);
        svg.appendChild(g);
        return g;
    }
    
    function createLine(from, to, opacity = 0.1) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', positions[from].x);
        line.setAttribute('y1', positions[from].y);
        line.setAttribute('x2', positions[to].x);
        line.setAttribute('y2', positions[to].y);
        line.setAttribute('stroke', '#7b86d1');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('opacity', opacity);
        line.setAttribute('id', `line-${from}-${to}`);
        svg.appendChild(line);
        return line;
    }
    
    function drawEdgeAnimated(from, to, duration = 600) {
        return new Promise(resolve => {
            const line = document.getElementById(`line-${from}-${to}`);
            if (!line) {
                resolve();
                return;
            }
            
            const dx = positions[to].x - positions[from].x;
            const dy = positions[to].y - positions[from].y;
            const length = Math.hypot(dx, dy);
            
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
            line.style.opacity = '0.8';
            
            const startTime = performance.now();
            function animate(time) {
                const progress = Math.min(1, (time - startTime) / duration);
                line.style.strokeDashoffset = (1 - progress) * length;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Sau khi hoàn thành, giữ đường hiển thị
                    line.style.strokeDasharray = 'none';
                    line.style.strokeDashoffset = '0';
                    resolve();
                }
            }
            requestAnimationFrame(animate);
        });
    }
    
    function renderInitialNodes() {
        clearSvg();
        
        // Vẽ tất cả đường nối trước (sẽ nằm dưới nodes)
        createLine('A', 'AB');
        createLine('B', 'AB');
        createLine('C', 'CD');
        createLine('D', 'CD');
        createLine('AB', 'ABCD');
        createLine('CD', 'ABCD');
        
        // Sau đó vẽ các nodes (sẽ nằm trên đường nối)
        createNode('A', 'Tx A', 'leaf');
        createNode('B', 'Tx B', 'leaf');
        createNode('C', 'Tx C', 'leaf');
        createNode('D', 'Tx D', 'leaf');
        createNode('AB', 'H(A+B)', 'parent');
        createNode('CD', 'H(C+D)', 'parent');
        createNode('ABCD', 'Root', 'root');
    }
    
    async function playAnimation() {
        if (busy) return;
        busy = true;
        playBtn.disabled = true;
        resetBtn.disabled = true;
        statusEl.textContent = 'Đang xây dựng cây Merkle...';
        
        try {
            // Step 1: Khởi tạo dữ liệu gốc
            statusEl.textContent = 'Bước 1: Khởi tạo dữ liệu gốc (Transactions)';
            await sleep(800);
            
            // Step 2: Build AB
            statusEl.textContent = 'Bước 2: Tạo hash trung gian H(A+B)';
            await Promise.all([
                drawEdgeAnimated('A', 'AB', 600),
                drawEdgeAnimated('B', 'AB', 600)
            ]);
            await sleep(500);
            
            // Step 3: Build CD
            statusEl.textContent = 'Bước 3: Tạo hash trung gian H(C+D)';
            await Promise.all([
                drawEdgeAnimated('C', 'CD', 600),
                drawEdgeAnimated('D', 'CD', 600)
            ]);
            await sleep(500);
            
            // Step 4: Build Root
            statusEl.textContent = 'Bước 4: Tạo Merkle Root từ các hash trung gian';
            await Promise.all([
                drawEdgeAnimated('AB', 'ABCD', 700),
                drawEdgeAnimated('CD', 'ABCD', 700)
            ]);
            
            statusEl.textContent = 'Hoàn thành! Cây Merkle đã được xây dựng. ✅';
            resetBtn.disabled = false;
            
        } catch (error) {
            console.error('Merkle animation error:', error);
            statusEl.textContent = 'Lỗi: ' + error.message;
        }
        
        busy = false;
        playBtn.disabled = false;
    }
    
    function resetAnimation() {
        renderInitialNodes();
        statusEl.textContent = 'Sẵn sàng xây dựng cây.';
        playBtn.disabled = false;
        resetBtn.disabled = true;
        busy = false;
    }
    
    // Event listeners
    playBtn.addEventListener('click', playAnimation);
    resetBtn.addEventListener('click', resetAnimation);
    
    // Initial render
    renderInitialNodes();
}

// Initialize Merkle animation when slide is loaded
setTimeout(() => {
    const merkleChecker = setInterval(() => {
        const merkleBtn = document.getElementById('merkle-play');
        if (merkleBtn) {
            console.log('🎯 Found merkle elements, initializing...');
            initializeMerkleAnimation();
            clearInterval(merkleChecker);
        }
    }, 1000);
}, 500);
