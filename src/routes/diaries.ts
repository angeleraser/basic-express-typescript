import express from "express";
import { addDiary, findById, getEntries } from "../services/diaryServices";
import { toNewDiary } from "../utils";

const router = express.Router();

router.get("/", function (_request, response) {
  response.send(getEntries());
});

router.get("/:id", function (request, response) {
  const diary = findById(Number(request.params.id));

  if (!diary) {
    return void response.sendStatus(404);
  }

  return void response.send(diary);
});

router.post("/", function (request, response) {
  try {
    const { date, weather, visibility, comment } = request.body;
    const newDiary = toNewDiary({ date, weather, visibility, comment });

    addDiary(newDiary);
    response.sendStatus(201);
  } catch (error: any) {
    response.status(400).send({ error: error.message });
  }
});

export default router;
