# 📸 คู่มือการจัดการรูปภาพ

## โครงสร้างโฟลเดอร์ที่แนะนำ

```
portfolio/
├── index.html
├── styles.css
├── script.js
├── images/                 ← สร้างโฟลเดอร์นี้
│   ├── profile.jpg        ← รูปโปรไฟล์หน้าแรก
│   ├── about.jpg          ← รูปส่วน About Me
│   ├── project1.jpg       ← รูปโปรเจกต์ที่ 1
│   ├── project2.jpg       ← รูปโปรเจกต์ที่ 2
│   └── project3.jpg       ← รูปโปรเจกต์ที่ 3
└── README.md
```

## 🎯 ขนาดรูปภาพที่แนะนำ

### รูปโปรไฟล์ (profile.jpg)

- **ขนาด:** 400x400 px (1:1 สี่เหลี่ยมจตุรัส)
- **รูปแบบ:** JPG หรือ PNG
- **ขนาดไฟล์:** ไม่เกิน 500 KB
- **แนะนำ:** รูปหน้าตรง พื้นหลังเรียบๆ หรือตัดพื้นหลังออก

### รูป About (about.jpg)

- **ขนาด:** 500x500 px หรือ 600x600 px
- **รูปแบบ:** JPG หรือ PNG
- **ขนาดไฟล์:** ไม่เกิน 800 KB
- **แนะนำ:** รูปที่แสดงบุคลิกหรือความสนใจของคุณ

### รูปโปรเจกต์ (project1.jpg, project2.jpg, project3.jpg)

- **ขนาด:** 600x400 px (3:2)
- **รูปแบบ:** JPG หรือ PNG
- **ขนาดไฟล์:** ไม่เกิน 1 MB ต่อรูป
- **แนะนำ:** Screenshot ของโปรเจกต์หรือ mockup

## 🛠️ วิธีเพิ่มรูปภาพ

### ขั้นตอนที่ 1: สร้างโฟลเดอร์

1. สร้างโฟลเดอร์ชื่อ `images` ในโฟลเดอร์ portfolio
2. วางรูปภาพทั้งหมดในโฟลเดอร์ `images/`

### ขั้นตอนที่ 2: แก้ไขโค้ด

เปิดไฟล์ `script.js` แล้วหาโค้ดบรรทัดที่ 137:

```javascript
const imageConfig = {
  profile: "images/profile.jpg", // เปลี่ยนตรงนี้
  about: "images/about.jpg", // เปลี่ยนตรงนี้
  project1: "images/project1.jpg", // เปลี่ยนตรงนี้
  project2: "images/project2.jpg", // เปลี่ยนตรงนี้
  project3: "images/project3.jpg", // เปลี่ยนตรงนี้
};
```

### ขั้นตอนที่ 3: ทดสอบ

1. Refresh หน้าเว็บ (F5)
2. ตรวจสอบว่ารูปแสดงถูกต้อง

## 📷 แหล่งรูปภาพฟรี

### รูปถ่ายคุณภาพสูง (ฟรี)

- **[Unsplash](https://unsplash.com)** - รูปคุณภาพสูง ฟรี 100%
- **[Pexels](https://www.pexels.com)** - รูปและวิดีโอฟรี
- **[Pixabay](https://pixabay.com)** - รูป vectors และวิดีโอ

### เครื่องมือแต่งรูป (ฟรี)

- **[Remove.bg](https://www.remove.bg)** - ลบพื้นหลังรูป (5 รูปฟรี/เดือน)
- **[Canva](https://www.canva.com)** - แต่งรูป สร้าง mockup
- **[Photopea](https://www.photopea.com)** - แต่งรูปออนไลน์ (คล้าย Photoshop)
- **[TinyPNG](https://tinypng.com)** - ลดขนาดไฟล์รูป

### เครื่องมือสร้าง Screenshot

- **Windows:** Win + Shift + S
- **[Screely](https://www.screely.com)** - สร้าง mockup screenshot สวยๆ
- **[Mockuphone](https://mockuphone.com)** - ใส่รูปลงบนอุปกรณ์

## 🎨 Tips การถ่าย/เลือกรูป

### รูปโปรไฟล์

✅ **ควร:**

- หน้าตรง แสงสว่างพอดี
- สีเสื้อเรียบร่าย ไม่ลายฉูดฉาด
- พื้นหลังเรียบหรือเบลอ
- รอยยิ้มเป็นธรรมชาติ

❌ **ไม่ควร:**

- รูปกลุ่ม (ตัดคนอื่นออก)
- แสงสว่างน้อยเกินไป
- มุมแปลกๆ
- filter มากเกินไป

### รูปโปรเจกต์

✅ **ควร:**

- Screenshot ของผลงานจริง
- แสดงฟีเจอร์หลักของโปรเจกต์
- ขนาดเท่ากันทุกรูป
- คุณภาพคมชัด

❌ **ไม่ควร:**

- รูปคุณภาพต่ำ เบลอ
- ขนาดไม่เท่ากัน
- สีสันผิดพลาด

## 🔧 การเพิ่มรูปบน GitHub

### วิธีที่ 1: Upload ผ่านเว็บ

1. เข้า GitHub Repository
2. คลิก "Add file" → "Upload files"
3. สร้างโฟลเดอร์: พิมพ์ `images/` แล้วลากรูปเข้าไป
4. Commit changes

### วิธีที่ 2: ใช้ Git Command

```bash
# สร้างโฟลเดอร์
mkdir images

# ย้ายรูปเข้าโฟลเดอร์ images/
# จากนั้น commit และ push

git add images/
git commit -m "Add project images"
git push
```

## ⚡ Optimize รูปภาพ (สำคัญ!)

### เหตุผลที่ต้อง Optimize:

- ⚡ เว็บโหลดเร็วขึ้น
- 📱 ประหยัด Data บนมือถือ
- 🚀 SEO ดีขึ้น

### วิธี Optimize:

1. **ใช้ TinyPNG:**

   - ไปที่ [tinypng.com](https://tinypng.com)
   - ลากรูปทุกรูปเข้าไป
   - ดาวน์โหลดรูปที่ลดขนาดแล้ว
   - ควรลดได้ 50-70% โดยไม่เสียคุณภาพ

2. **ใช้ Squoosh:**
   - ไปที่ [squoosh.app](https://squoosh.app)
   - แต่ละรูปสามารถปรับคุณภาพได้ละเอียด

## 🎯 Checklist รูปภาพ

ก่อน Deploy ตรวจสอบ:

- [ ] รูปทุกรูปใช้ขนาดที่แนะนำ
- [ ] ไฟล์รูปไม่เกิน 1 MB ต่อรูป
- [ ] ผ่านการ Optimize แล้ว
- [ ] ชื่อไฟล์ถูกต้องตรงกับโค้ด
- [ ] อยู่ในโฟลเดอร์ `images/`
- [ ] Upload บน GitHub แล้ว
- [ ] ทดสอบแสดงผลบนเว็บแล้ว

## 🆘 แก้ปัญหารูปไม่แสดง

### ปัญหา 1: รูปไม่แสดงบน localhost

- ตรวจสอบ path: `images/profile.jpg` (ไม่ใช่ `Images/` - case sensitive!)
- Browser DevTools (F12) → Console → ดูข้อผิดพลาด

### ปัญหา 2: รูปไม่แสดงบน GitHub Pages

- ตรวจสอบว่า upload รูปไปแล้ว
- รอ 2-3 นาที หลัง commit
- ตรวจสอบชื่อไฟล์ (case sensitive บน server!)
- Hard refresh: Ctrl+Shift+R

### ปัญหา 3: รูปโหลดช้า

- ลดขนาดไฟล์ด้วย TinyPNG
- เปลี่ยนจาก PNG เป็น JPG (ถ้าไม่ต้องการโปร่งใส)
- ใช้ขนาดที่เหมาะสม (อย่าใช้รูป 4K!)

---

## 💡 Pro Tips

1. **ใช้ชื่อไฟล์ที่เข้าใจง่าย:**

   - ✅ `profile-headshot.jpg`
   - ❌ `IMG_20240115_093045.jpg`

2. **เก็บไฟล์ต้นฉบับ:**

   - เก็บไฟล์รูปต้นฉบับไว้แยก (ก่อน optimize)
   - เผื่อต้องการแก้ไขภายหลัง

3. **Consistent Style:**

   - ใช้ filter/tone สีเดียวกันทั้งเว็บ
   - จะทำให้ดูเป็นมืออาชีพ

4. **Backup:**
   - สำรองรูปไว้หลายที่
   - Google Drive, OneDrive, etc.

---

**หมายเหตุ:** ถ้ายังไม่มีรูป ให้ใช้ placeholder ก่อนได้ เว็บจะยังทำงานปกติ เพียงแต่จะแสดงรูป placeholder สีเทา
