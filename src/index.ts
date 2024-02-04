import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/ping", function (_request, response) {
  console.log("someone pinged here");
  response.send("pon");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
