import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export function getEntries(): DiaryEntry[] {
  return diaries;
}

export function addDiary(payload: Omit<DiaryEntry, "id">): void {
  diaries.push({ ...payload, id: diaries.length });
}

export function getEntriesWithoutSensitiveInfo(): NonSensitiveInfoDiaryEntry[] {
  return diaries.map(function (item) {
    const { comment, ...rest } = item;
    return rest;
  });
}

export function findById(id: number): DiaryEntry | undefined {
  const item = diaries.find(function (entry) {
    return Number(entry.id) === id;
  });

  return item;
}
