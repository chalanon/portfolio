# 🚀 Quick Start Guide

## การเริ่มต้นใช้งานด่วน (5 นาที)

### ✅ สิ่งที่คุณจะได้

- ✨ Portfolio Website ที่สวยงามและทันสมัย
- 📱 Responsive Design รองรับทุกอุปกรณ์
- 🚀 พร้อม Deploy บน GitHub Pages
- 📱 QR Code Generator สำหรับแชร์เว็บไซต์

---

## 📋 ขั้นตอนการปรับแต่ง

### 1. แก้ไขข้อมูลส่วนตัว (5 นาที)

เปิดไฟล์ `index.html` และค้นหาแล้วแทนที่:

```html
<!-- ชื่อของคุณ -->
"ชื่อของคุณ" → "ชื่อจริง นามสกุล"

<!-- อีเมล -->
"your.email@example.com" → "อีเมลจริงของคุณ"

<!-- โทรศัพท์ -->
"+66 XX-XXX-XXXX" → "เบอร์โทรศัพท์จริง"

<!-- ที่อยู่ -->
"จังหวัดของคุณ" → "จังหวัดที่อยู่จริง"

<!-- Social Media -->
"yourusername" → "username จริงของคุณ"
```

### 2. เพิ่มรูปภาพ (ทำภายหลังได้)

สร้างโฟลเดอร์ `images/` แล้วใส่รูป:

- `profile.jpg` - รูปโปรไฟล์
- `about.jpg` - รูปในส่วน About
- `project1.jpg`, `project2.jpg`, `project3.jpg` - รูปโปรเจกต์

แก้ไขใน `script.js` (บรรทัด 137):

```javascript
const imageConfig = {
  profile: "images/profile.jpg",
  about: "images/about.jpg",
  project1: "images/project1.jpg",
  project2: "images/project2.jpg",
  project3: "images/project3.jpg",
};
```

### 3. ทดสอบในเครื่อง

**วิธีที่ 1: เปิดไฟล์ HTML โดยตรง**

- Double-click ที่ `index.html`
- เว็บจะเปิดใน Browser

**วิธีที่ 2: ใช้ Live Server (แนะนำ)**

- ติดตั้ง VS Code → Extensions → "Live Server"
- Right-click `index.html` → "Open with Live Server"

---

## 🚀 Deploy บน GitHub Pages (10 นาที)

### ขั้นตอนที่ 1: สร้าง GitHub Account

1. ไปที่ [github.com](https://github.com)
2. Sign up (ถ้ายังไม่มี account)
3. Verify email

### ขั้นตอนที่ 2: สร้าง Repository

1. คลิก **"+"** มุมบนขวา → **"New repository"**
2. Repository name: `portfolio` (ตั้งชื่ออะไรก็ได้)
3. เลือก **Public**
4. ✅ **Initialize this repository with a README** (ไม่ต้องติ๊ก)
5. คลิก **"Create repository"**

### ขั้นตอนที่ 3: Upload Files

1. คลิก **"uploading an existing file"**
2. ลากไฟล์ทั้งหมดในโฟลเดอร์ portfolio ไป drop
   - index.html
   - styles.css
   - script.js
   - qrcode-generator.html
   - README.md
   - (และไฟล์อื่นๆ ถ้ามี)
3. พิมพ์ commit message: "Initial commit"
4. คลิก **"Commit changes"**

### ขั้นตอนที่ 4: Enable GitHub Pages

1. คลิก **Settings** (บนสุดของ repository)
2. เลื่อนหาเมนู **"Pages"** (ด้านซ้าย)
3. Source: เลือก **"main"** branch
4. Folder: **"/ (root)"**
5. คลิก **Save**
6. รอสักครู่ จะมี URL ขึ้นมา:
   ```
   https://yourusername.github.io/portfolio/
   ```

### ✅ เสร็จแล้ว!

เข้าชมได้ที่ URL ด้านบน (รอ 1-2 นาที ถ้ายังไม่แสดง)

---

## 📱 สร้าง QR Code

### วิธีที่ 1: ใช้ไฟล์ที่เตรียมไว้ให้

1. เปิดไฟล์ `qrcode-generator.html`
2. ใส่ URL: `https://yourusername.github.io/portfolio/`
3. คลิก "สร้าง QR Code"
4. ดาวน์โหลดและนำไปใช้

### วิธีที่ 2: ใช้เว็บออนไลน์

1. ไปที่ [qr-code-generator.com](https://www.qr-code-generator.com)
2. ใส่ URL ของคุณ
3. ดาวน์โหลด QR Code

### 💡 Tips การใช้ QR Code

- **ทดสอบสแกนก่อนทุกครั้ง** - ต้องเปิดเว็บได้จริง
- **พิมพ์ขนาดที่เหมาะสม** - อย่างน้อย 2x2 cm
- **ใส่ข้อความชี้แจง** - "สแกนเพื่อดู Portfolio"
- **ติดที่เด่น** - บนเอกสารสมัครหรือป้ายนำเสนอ

---

## 🎯 Checklist ก่อนส่งให้มหาลัย

- [ ] ✅ เปลี่ยนชื่อ-นามสกุล แล้ว
- [ ] ✅ อีเมลและเบอร์โทรศัพท์ ถูกต้อง
- [ ] ✅ Social Media links อัพเดทแล้ว
- [ ] ✅ Deploy บน GitHub Pages สำเร็จ
- [ ] ✅ ทดสอบเปิดเว็บได้จากมือถือ
- [ ] ✅ QR Code สแกนได้และเปิดหน้าถูกต้อง
- [ ] ⏳ เพิ่มรูปจริง (ทำภายหลังได้)
- [ ] ⏳ ใส่โปรเจกต์จริง (ทำภายหลังได้)

---

## 🆘 แก้ปัญหาเบื้องต้น

### ❓ เว็บไม่แสดงบน GitHub Pages?

**วิธีแก้:**

1. รอ 2-3 นาที (ครั้งแรกใช้เวลา)
2. ตรวจสอบว่า Repository เป็น **Public**
3. ตรวจสอบว่า Settings → Pages เลือก branch **main** แล้ว
4. ลอง Clear cache browser (Ctrl+Shift+Delete)
5. เข้า URL ใหม่ในโหมด Incognito

### ❓ รูปภาพไม่แสดง?

**วิธีแก้:**

1. ตรวจสอบว่า upload รูปไปแล้ว
2. ตรวจสอบชื่อไฟล์ตรงกับโค้ด (case-sensitive!)
3. ลองใช้ URL เต็ม แทน relative path

### ❓ QR Code สแกนแล้วเข้าไม่ได้?

**วิธีแก้:**

1. ตรวจสอบ URL ในการสร้าง QR Code
2. ลองเปิด URL ใน browser ก่อน
3. ตรวจสอบว่าเว็บ deploy สำเร็จแล้ว

---

## 📞 ต้องการความช่วยเหลือ?

**ทรัพยากรเพิ่มเติม:**

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org)
- [HTML Tutorial - W3Schools](https://www.w3schools.com/html/)

**YouTube Tutorials (แนะนำ):**

- ค้นหา: "GitHub Pages Tutorial"
- ค้นหา: "How to deploy website to GitHub Pages"

---

## 🎓 ขอให้โชคดีกับการสมัครเข้าศึกษาต่อ!

Portfolio นี้จะช่วยให้คุณโดดเด่นและแสดงศักยภาพด้าน IT ได้เป็นอย่างดี 🚀

**จำไว้:** Portfolio ที่ดีคือการแสดงตัวตนที่แท้จริง  
พัฒนาเนื้อหาให้ดีขึ้นเรื่อยๆ และอย่าลืมอัพเดทผลงานใหม่ๆ!
