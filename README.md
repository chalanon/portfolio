# 🎓 My IT Portfolio Website

Portfolio เว็บไซต์สำหรับการเสนอเข้าศึกษาต่อสาขา IT - ออกแบบให้สวยงาม ทันสมัย และใช้งานง่าย

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Design** - ดีไซน์สวยงามด้วย Gradient และ Glassmorphism
- 📱 **Fully Responsive** - รองรับทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- ⚡ **Smooth Animations** - การเคลื่อนไหวที่ลื่นไหลและน่าสนใจ
- 🚀 **Fast Loading** - โหลดเร็ว ประสิทธิภาพสูง
- 🎯 **SEO Optimized** - เหมาะสมกับ Search Engine
- ♿ **Accessible** - ใช้งานง่ายสำหรับทุกคน

## 📋 Sections

1. **Home** - หน้าแรกพร้อม Hero Section ที่น่าสนใจ
2. **About** - เกี่ยวกับตัวคุณและประวัติ
3. **Skills** - แสดงทักษะและความสามารถ
4. **Projects** - ผลงานและโปรเจกต์ต่างๆ
5. **Education** - ประวัติการศึกษาและใบรับรอง
6. **Contact** - ช่องทางการติดต่อ

## 🛠️ Technologies Used

- **HTML5** - โครงสร้างเว็บไซต์
- **CSS3** - การออกแบบและจัดรูปแบบ
- **JavaScript** - Interactivity และ Animations
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter & Space Grotesk)

## 📦 Installation & Setup

### 1. ดาวน์โหลดโปรเจกต์

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git

# เข้าไปในโฟลเดอร์
cd portfolio
```

### 2. แก้ไขข้อมูลส่วนตัว

เปิดไฟล์ `index.html` และแก้ไขข้อมูลต่อไปนี้:

- **ชื่อของคุณ** (บรรทัด ~58, ~147)
- **อีเมล** (บรรทัด ~110, ~395)
- **โทรศัพท์** (บรรทัด ~400)
- **ที่อยู่** (บรรทัด ~405)
- **Social Media Links** (บรรทัด ~98-107)
- **ข้อมูลการศึกษา** (ส่วน Education Section)
- **โปรเจกต์** (ส่วน Projects Section)

### 3. เพิ่มรูปภาพของคุณ

เปลี่ยนรูปภาพ placeholder ใน `script.js`:

```javascript
const imageConfig = {
  profile: "images/profile.jpg", // รูปโปรไฟล์
  about: "images/about.jpg", // รูป About
  project1: "images/project1.jpg", // รูปโปรเจกต์ 1
  project2: "images/project2.jpg", // รูปโปรเจกต์ 2
  project3: "images/project3.jpg", // รูปโปรเจกต์ 3
};
```

หรือใช้ AI สร้างรูปภาพ:

- [Canva](https://www.canva.com)
- [RemoveBG](https://www.remove.bg) - ลบพื้นหลัง
- [Unsplash](https://unsplash.com) - รูปฟรี

### 4. ทดสอบในเครื่อง

เปิดไฟล์ `index.html` ใน Browser หรือใช้ Live Server:

```bash
# ถ้าใช้ VS Code ให้ติดตั้ง Live Server Extension
# จากนั้นคลิกขวาที่ index.html และเลือก "Open with Live Server"
```

## 🚀 Deploy to GitHub Pages

### ขั้นตอนที่ 1: สร้าง GitHub Repository

1. ไปที่ [GitHub](https://github.com)
2. คลิก **New Repository**
3. ตั้งชื่อ repository: `portfolio` (หรือชื่ออื่นที่ต้องการ)
4. เลือก **Public**
5. คลิก **Create Repository**

### ขั้นตอนที่ 2: Upload โค้ดขึ้น GitHub

```bash
# เริ่มต้น Git repository
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# เชื่อมต่อกับ GitHub
git remote add origin https://github.com/yourusername/portfolio.git

# Push ขึ้น GitHub
git branch -M main
git push -u origin main
```

### ขั้นตอนที่ 3: Enable GitHub Pages

1. ไปที่ Repository ของคุณบน GitHub
2. คลิก **Settings** (ด้านบน)
3. เลื่อนลงไปที่ **Pages** (เมนูด้านซ้าย)
4. ที่ **Source** เลือก:
   - Branch: `main`
   - Folder: `/ (root)`
5. คลิก **Save**
6. รอสักครู่ (1-2 นาที) เว็บจะ Deploy อัตโนมัติ

**🎉 เว็บไซต์ของคุณจะอยู่ที่:**

```
https://yourusername.github.io/portfolio/
```

## 📱 สร้าง QR Code

### วิธีที่ 1: ใช้เว็บไซต์ออนไลน์ (แนะนำ)

1. **QR Code Generator** - [https://www.qr-code-generator.com](https://www.qr-code-generator.com)

   - ใส่ URL: `https://yourusername.github.io/portfolio/`
   - ปรับแต่งสี/รูปแบบตามต้องการ
   - ดาวน์โหลดเป็นไฟล์ PNG หรือ SVG

2. **QR Code Monkey** - [https://www.qrcode-monkey.com](https://www.qrcode-monkey.com)

   - รองรับการใส่โลโก้
   - ปรับสีได้หลากหลาย
   - คุณภาพสูง ฟรี

3. **Canva QR Code** - [https://www.canva.com/qr-code-generator](https://www.canva.com/qr-code-generator)
   - สร้าง QR Code พร้อมดีไซน์
   - ใส่ข้อความ/ภาพประกอบได้

### วิธีที่ 2: ใช้ JavaScript (Auto Generate)

สร้างไฟล์ `qrcode.html`:

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QR Code Generator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      #qrcode {
        background: white;
        padding: 20px;
        border-radius: 15px;
        margin: 20px 0;
      }
      button {
        padding: 12px 24px;
        background: white;
        color: #667eea;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        opacity: 0.9;
      }
      h1 {
        margin-bottom: 10px;
      }
      p {
        opacity: 0.9;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <h1>📱 QR Code - Portfolio</h1>
    <p>สแกนเพื่อเข้าชม Portfolio</p>
    <div id="qrcode"></div>
    <button onclick="downloadQR()">ดาวน์โหลด QR Code</button>

    <script>
      // แทนที่ URL ด้วย GitHub Pages URL ของคุณ
      const portfolioURL = "https://yourusername.github.io/portfolio/";

      // สร้าง QR Code
      new QRCode(document.getElementById("qrcode"), {
        text: portfolioURL,
        width: 256,
        height: 256,
        colorDark: "#667eea",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });

      // ดาวน์โหลด QR Code
      function downloadQR() {
        const canvas = document.querySelector("#qrcode canvas");
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "portfolio-qr-code.png";
        link.href = url;
        link.click();
      }
    </script>
  </body>
</html>
```

เปิดไฟล์นี้ใน Browser แล้วคลิก "ดาวน์โหลด QR Code"

### วิธีที่ 3: ใช้ API

```html
<!-- เพิ่มใน index.html หรือสร้างหน้าใหม่ -->
<img
  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://yourusername.github.io/portfolio/"
  alt="Portfolio QR Code"
/>
```

## 🎨 Customization Tips

### เปลี่ยนสี

แก้ไขใน `styles.css`:

```css
:root {
  --primary-color: #667eea; /* สีหลัก */
  --secondary-color: #764ba2; /* สีรอง */
  --accent-color: #f093fb; /* สีเน้น */
}
```

### เปลี่ยน Font

แก้ไขใน `index.html` (บรรทัด 15-16):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

และใน `styles.css`:

```css
:root {
  --font-primary: "Poppins", sans-serif;
}
```

### เพิ่มโปรเจกต์

Copy โค้ดของ Project Card และแก้ไขข้อมูล:

```html
<div class="project-card" data-aos="fade-up" data-aos-delay="100">
  <!-- เนื้อหาโปรเจกต์ -->
</div>
```

## 📞 Contact Form Integration

### ใช้ FormSubmit (แนะนำ - ฟรี)

แก้ไข `<form>` tag ใน `index.html`:

```html
<form action="https://formsubmit.co/your@email.com" method="POST">
  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
  <input type="hidden" name="_captcha" value="false" />
  <input
    type="hidden"
    name="_next"
    value="https://yourusername.github.io/portfolio/"
  />
  <!-- ฟอร์มอื่นๆ -->
</form>
```

### ใช้ EmailJS (ขั้นสูง)

1. สมัครที่ [EmailJS](https://www.emailjs.com)
2. ตั้งค่า Email Service
3. เพิ่ม Script และแก้ไข JavaScript

## 🔧 Troubleshooting

### ปัญหา: เว็บไม่แสดงบน GitHub Pages

**วิธีแก้:**

- ตรวจสอบว่า repository เป็น Public
- ตรวจสอบว่า Branch และ Folder ถูกต้อง
- รอ 2-3 นาที หลัง Enable GitHub Pages
- Clear Browser Cache (Ctrl + Shift + Delete)

### ปัญหา: รูปภาพไม่แสดง

**วิธีแก้:**

- ตรวจสอบ path รูปภาพ (ใช้ relative path)
- ลองใช้ URL แบบเต็ม
- ตรวจสอบชื่อไฟล์ (case-sensitive บน GitHub)

### ปัญหา: Fonts ไม่โหลด

**วิธีแก้:**

- ตรวจสอบ Google Fonts link
- ใช้ Browser DevTools (F12) ดู Network tab

## 📚 Resources

### Design Inspiration

- [Dribbble](https://dribbble.com) - Portfolio designs
- [Behance](https://www.behance.net) - Creative portfolios
- [Awwwards](https://www.awwwards.com) - Award-winning websites

### Free Assets

- [Unsplash](https://unsplash.com) - Free photos
- [Pexels](https://www.pexels.com) - Free photos & videos
- [Font Awesome](https://fontawesome.com) - Icons
- [Google Fonts](https://fonts.google.com) - Fonts

### Learning Resources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation
- [W3Schools](https://www.w3schools.com) - Tutorials
- [CSS-Tricks](https://css-tricks.com) - CSS guides

## 📝 Checklist ก่อน Deploy

- [ ] แก้ไขข้อมูลส่วนตัวทั้งหมดแล้ว
- [ ] เปลี่ยนรูปภาพ placeholder
- [ ] อัพเดท Social Media links
- [ ] ทดสอบ Responsive design (Desktop, Tablet, Mobile)
- [ ] ทดสอบ Navigation ทุกลิงก์
- [ ] ตรวจสอบ Contact Form
- [ ] เพิ่มโปรเจกต์จริงของคุณ
- [ ] SEO: Title, Description, Keywords
- [ ] ทดสอบบน Browser ต่างๆ (Chrome, Firefox, Safari)

## 🎓 Tips สำหรับการสมัครเข้าศึกษาต่อ

1. **แสดงผลงานจริง** - ใส่โปรเจกต์ที่คุณทำจริงๆ พร้อม link GitHub
2. **เขียนเนื้อหาที่ดี** - อธิบายตัวเอง ความสนใจ เป้าหมาย
3. **ใส่ใบรับรอง** - Course certificates, Awards, ผลการแข่งขัน
4. **Professional Photos** - ใช้รูปถ่ายที่เป็นทางการ
5. **Contact ที่ถูกต้อง** - Email, เบอร์โทร ที่ติดต่อได้จริง
6. **Mobile-Friendly** - ต้องดูดีบนมือถือ เพราะคณะกรรมการอาจดูจากมือถือ
7. **QR Code ชัดเจน** - พิมพ์ขนาดพอดี ทดสอบสแกนให้ได้ก่อน

## 🌟 Next Steps

ขั้นตอนต่อไปที่คุณสามารถพัฒนาเพิ่มเติม:

1. **เพิ่ม Blog Section** - เขียนบทความเกี่ยวกับการเรียนรู้
2. **Dark/Light Mode Toggle** - สลับธีม
3. **Multi-language** - รองรับภาษาไทย/อังกฤษ
4. **Analytics** - ติดตั้ง Google Analytics
5. **Custom Domain** - ใช้ชื่อโดเมนของคุณเอง
6. **Performance Optimization** - Image optimization, Lazy loading
7. **Accessibility** - ปรับปรุง a11y score

## 📄 License

Free to use for personal and educational purposes.

## 🤝 Contributing

ถ้ามีข้อเสนอแนะหรือพบ bug สามารถ:

- เปิด Issue บน GitHub
- ส่ง Pull Request
- ติดต่อผ่านอีเมล

---

**Made with ❤️ for IT Program Application**

🎓 Good luck กับการสมัครเข้าศึกษาต่อสาขา IT! 🚀
