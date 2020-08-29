import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjUyYmZlNjY1ZDA0NzQwOTJjZThjNjQyNTFhZDVmZSIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMy44NS42LjE1OCIsIlZlcnNpb24iOiIkTEFURVNUIiwiRW52aXJvbm1lbnQiOiJIb20iLCJDb3JlSWQiOiIxIiwiQ29tcGFueUlkIjoiMjg5NiIsIkNsaWVudElkIjoiMCIsIlJvbGUiOlsiMSIsIjYiXSwibmJmIjoxNTk4MzEwMzc3LCJleHAiOjE1OTgzNTM1NzcsImlhdCI6MTU5ODMxMDM3NywiaXNzIjoiUHJvU0VTTVQuQVBJR2F0ZXdheSIsImF1ZCI6IlBvcnRhbFdlYi9Qb3J0YWxXZWIvJExBVEVTVC9Ib20ifQ.ir4r5L3vdcWdqKwq-eGSJ-3xauift90hQ3Udxy9HBgz3pHmq8hD5lRcd9CDOgql3",
    },
  },
});
