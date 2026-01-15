# 🎬 วิธีทำ Demo Portfolio (ก่อน Deploy)

## 🚀 วิธีที่ง่ายที่สุด - ใช้ Free Hosting (แนะนำ!)

### **1. Netlify Drop (ไม่ต้องสมัครสมาชิก!)**

✨ **ง่ายที่สุด ใช้เวลาแค่ 2 นาที!**

1. ไปที่ [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. **ลากโฟลเดอร์ portfolio ทั้งโฟลเดอร์** ไปวางในเว็บ
3. รอสักครู่ จะได้ URL ทันที เช่น: `https://random-name-123456.netlify.app`
4. **แชร์ URL นี้ให้มหาลัย** สแกน QR Code ได้เลย!

**ข้อดี:**

- ✅ ไม่ต้องสมัคร ไม่ต้อง login
- ✅ ได้ URL ทันที
- ✅ HTTPS (ปลอดภัย)
- ✅ เว็บเร็ว มั่นคง
- ✅ ฟรี! ไม่มีค่าใช้จ่าย

**ข้อจำกัด:**

- ⚠️ URL จะเป็นชื่อแรนด้อม (แต่ใช้งานได้ปกติ)
- ⚠️ Site จะหายหลัง 24 ชั่วโมง (แต่อัพโหลดใหม่ได้เลย)

---

### **2. Vercel (ต้องสมัครก่อน)**

🔥 **แนะนำถ้าต้องการ URL ที่ดูดี**

1. สมัคร [Vercel](https://vercel.com) ฟรี (ใช้ GitHub account)
2. เชื่อมต่อ GitHub repository
3. Deploy อัตโนมัติ
4. ได้ URL: `https://your-project.vercel.app`

**ข้อดี:**

- ✅ URL สวย กำหนดเองได้
- ✅ Auto Deploy ทุกครั้งที่ push code
- ✅ Analytics ฟรี
- ✅ ฟรีตลอดไป

---

### **3. GitHub Pages (ยอดนิยม มั่นคง)**

📚 **เหมาะสำหรับ long-term**

ดูวิธีใน `QUICK-START.md` หรือ `README.md`

URL: `https://chalanon.github.io/portfolio/`

**ข้อดี:**

- ✅ ฟรีตลอดไป
- ✅ มั่นคง ไม่หาย
- ✅ เชื่อมกับ GitHub ตรงๆ

---

## 💻 วิธีรัน Local แล้วแชร์ออนไลน์

### **วิธีที่ 1: ใช้ ngrok (แนะนำ!)**

**ขั้นตอน:**

1. **ดาวน์โหลด ngrok:**

   - ไปที่ [https://ngrok.com/download](https://ngrok.com/download)
   - ดาวน์โหลดสำหรับ Windows
   - แตกไฟล์ zip

2. **รัน Local Server:**

   ```powershell
   # เปิด PowerShell ในโฟลเดอร์ portfolio
   python -m http.server 8000
   ```

   หรือใช้ Live Server ใน VS Code

3. **รัน ngrok:**

   ```powershell
   # เปิด PowerShell อีกอัน
   # ไปที่โฟลเดอร์ที่มี ngrok.exe
   ./ngrok http 8000
   ```

4. **ได้ URL:**
   ```
   https://abc123.ngrok-free.app
   ```
   **แชร์ URL นี้ได้เลย!**

**ข้อดี:**

- ✅ แชร์ localhost ออกไปได้
- ✅ ได้ HTTPS
- ✅ ทดสอบได้จากมือถือ

**ข้อจำกัด:**

- ⚠️ ต้องเปิด computer ไว้
- ⚠️ URL จะเปลี่ยนทุกครั้งที่รันใหม่ (ฟรีเวอร์ชั่น)

---

### **วิธีที่ 2: ใช้ LocalTunnel**

```powershell
# ติดตั้ง (ครั้งเดียว)
npm install -g localtunnel

# รัน local server
python -m http.server 8000

# เปิด PowerShell อีกอัน แล้วรัน
lt --port 8000
```

ได้ URL: `https://random-name.loca.lt`

---

## 📱 วิธีสร้าง QR Code สำหรับ Demo

### **ใช้ไฟล์ที่เตรียมไว้ให้:**

1. เปิด `qrcode-generator.html`
2. ใส่ URL ที่ได้จากวิธีข้างบน
3. คลิก "สร้าง QR Code"
4. ดาวน์โหลด และแชร์ได้เลย!

---

## 🎯 แนะนำสำหรับการเสนอมหาลัย

### **ตัวเลือกที่ 1: Netlify Drop (ง่าย รวดเร็ว)**

✅ **เหมาะสำหรับ:** ต้องการ Demo เร็วๆ ใช้ไปก่อน

- อัพโหลดวันที่เสนอ
- ได้ URL ใช้งานทันที 24 ชม.
- สร้าง QR Code แชร์

### **ตัวเลือกที่ 2: GitHub Pages (มั่นคง ถาวร)**

✅ **เหมาะสำหรับ:** ใช้งานระยะยาว

- Deploy ครั้งเดียว ใช้ได้นาน
- URL สวย เป็นของตัวเอง
- มืออาชีพ

### **ตัวเลือกที่ 3: ngrok (แบบ Live)**

✅ **เหมาะสำหรับ:** นำเสนอแบบ real-time

- แสดงหน้าจอ computer ให้ดู
- แก้ไขได้ทันที
- Demo แบบ interactive

---

## 📋 Checklist ก่อนส่ง Demo

- [ ] ทดสอบเปิด URL แล้ว (ทำงานได้)
- [ ] ลองเปิดบนมือถือ (responsive)
- [ ] สร้าง QR Code แล้ว
- [ ] ทดสอบสแกน QR Code (เปิดเว็บได้)
- [ ] Screenshot หน้าเว็บไว้ (เผื่อ backup)

---

## 💡 Tips พิเศษ

### **ถ้าต้องการ URL สวยๆ:**

1. Deploy บน Vercel/Netlify
2. ใช้ Custom Domain (ซื้อโดเมนถูกๆ ~100 บาท/ปี)
3. หรือใช้ subdomain ฟรีของ Vercel: `chalanon-portfolio.vercel.app`

### **ถ้าต้องการความมั่นคง:**

1. Deploy บน GitHub Pages
2. ได้ URL: `chalanon.github.io/portfolio`
3. ใช้ได้ตลอดไป ฟรี!

### **ถ้าต้องการแก้ไขบ่อย:**

1. ใช้ Vercel เชื่อมกับ GitHub
2. แก้โค้ด → Push → Auto Deploy
3. ไม่ต้องทำอะไร มันจะอัพเดทเอง

---

## 🚀 เริ่มต้นเลย! (แนะนำ)

**สำหรับการส่งมหาลัยภายใน 1 วัน:**

```
1. ไปที่ https://app.netlify.com/drop
2. ลากโฟลเดอร์ portfolio วาง
3. คัดลอก URL ที่ได้
4. เปิด qrcode-generator.html
5. ใส่ URL → สร้าง QR Code
6. ดาวน์โหลด QR Code
7. ใส่ใน PDF หรือพิมพ์ติดเอกสาร
8. ส่งให้มหาลัย!
```

**ใช้เวลาแค่ 5 นาที!** 🎉

---

**หากต้องการความช่วยเหลือ บอกผมได้เลยครับ!** 😊
