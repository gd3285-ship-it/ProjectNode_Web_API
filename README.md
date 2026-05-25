<div align="center">

# 🔗 SmartLink Tracker API

**מערכת ניהול, קיצור וניטור קישורים חכמה בזמן אמת**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

*פתרון טכנולוגי מתקדם לניתוח אסטרטגי של תנועת גולשים*

</div>

---

## 📖 אודות הפרויקט
**SmartLink Tracker API** הוא פרויקט Backend מקיף שנועד לאפשר למשווקים ומנהלי מוצר לנטר את איכות התנועה המגיעה לקישורים שלהם. בניגוד למקצרי קישורים רגילים, המערכת שלנו יודעת "לתייג" כל לחיצה ולהבין בדיוק מאיזה ערוץ הגיע הגולש.

## 🚀 יכולות מרכזיות
- **קיצור קישורים דינמי:** יצירה מהירה של קישורים ארוכים למבנה URL קצר.
- **מעקב מבוסס מקורות:** יכולת להוסיף פרמטרים (כגון `?t=facebook`) ולקבל פילוח מדויק ב-Database.
- **ניטור IP:** רישום אוטומטי של כתובת ה-IP של כל לחיצה לצרכי אבטחה וסטטיסטיקה.
- **Dashboard ניהולי:** לוח בקרה מובנה המאפשר צפייה בגרפים ופילוח נתונים בזמן אמת.

---

## 📊 ארכיטקטורת המערכת
הפרויקט בנוי בשיטת ה-MVC, המפרידה בין הלוגיקה של השרת למסד הנתונים:

| רכיב | תיאור |
| :--- | :--- |
| **Controller** | ניהול לוגיקת הניתוב והקליקים |
| **Model** | הגדרת סכימות MongoDB (Links & Clicks) |
| **API Endpoints** | ממשק עבודה מול שירותים חיצוניים |

---

## 🛠 טכנולוגיות בשימוש

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB עם Mongoose
- **Tools:** Thunder Client לבדיקות API

---

## 💻 התחלה מהירה

1. **שכפול הפרויקט:**
   ```bash
   git clone [https://github.com/gd3285-ship-it/ProjectNode_Web_API.git](https://github.com/gd3285-ship-it/ProjectNode_Web_API.git)



   npm install

   הגדרת משתני סביבה:
יש לוודא הגדרת MONGO_URI בתיקיית ה-.env.

הרצה:

Bash
npm start
💡 טיפ למשתמשים
כדי לנטר מקור תנועה מסוים, פשוט הוסיפו את הפרמטר t לקישור:
https://your-api.com/r/:id?t=instagram
