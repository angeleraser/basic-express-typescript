import { DiaryEntry, Visibility, Weather } from "./types";

function parseComment(commentFromRequest: any) {
  if (!isString(commentFromRequest)) {
    throw new Error("Incorrect or missing comment");
  }

  return commentFromRequest;
}

function parseDate(dateFromRequest: any) {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error("Incorrect or missing date");
  }

  return dateFromRequest;
}

function isString(value: any) {
  return typeof value === "string";
}

function isDate(value: any) {
  return Boolean(Date.parse(value));
}

function isWeather(value: any) {
  return Object.values(Weather).includes(value);
}

function parseWeather(weatherFromRequest: any): Weather {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error("Incorrect or missing weather");
  }

  return weatherFromRequest;
}

function isVisibility(value: any) {
  return Object.values(Visibility).includes(value);
}

function parseVisibility(weatherFromRequest: any): Visibility {
  if (!isString(weatherFromRequest) || !isVisibility(weatherFromRequest)) {
    throw new Error("Incorrect or missing Visibility");
  }

  return weatherFromRequest;
}

export function toNewDiary(bodyFromRequest: any) {
  const newEntry: Omit<DiaryEntry, "id"> = {
    comment: parseComment(bodyFromRequest.comment),
    date: parseDate(bodyFromRequest.date),
    weather: parseWeather(bodyFromRequest.weather),
    visibility: parseVisibility(bodyFromRequest.visibility),
  };

  return newEntry
}
