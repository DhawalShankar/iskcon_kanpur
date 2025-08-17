import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }],
      }
    );
    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Error";
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "API error" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
