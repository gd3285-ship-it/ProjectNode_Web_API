import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import LinksController from "./Controllers/LinksController.js"; // ייבוא ה-Controller
import UserController from "./Controllers/UserController.js"; // ייבוא ה-Controller
import connectDB from "./database.js"; // ייבוא החיבור
import TasksController from "./Controllers/TasksController.js"; // ייבוא ה-Controller
const app = express();
const port = 3000;

connectDB(); // חיבור למסד הנתונים

app.use(cors());
app.use(bodyParser.json());

// --- כל הנתיבים (Routes) של המשימות ---

// שליפת כל המשימות
app.get("/tasks", TasksController.getList);

// שליפת משימה בודדת לפי ID
app.get("/tasks/:id", TasksController.getById);

// הוספת משימה חדשה
app.post("/tasks", TasksController.add);

// עדכון משימה
app.put("/tasks/:id", TasksController.update);

// מחיקת משימה
app.delete("/tasks/:id", TasksController.delete);

// --- סוף נתיבי המשימות ---

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/links", LinksController.getList);

app.post("/links", LinksController.add);
app.get("/users", UserController.getList);
app.post("/users", UserController.add);
app.get("/r/:id", LinksController.redirect);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
