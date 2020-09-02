import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlODI5MTdhMWM1MmM0NDZkOWE0YmY0OTM4MmZjYWEwMCIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMzQuMjA3LjIyNC43NSIsIlZlcnNpb24iOiIkTEFURVNUIiwiRW52aXJvbm1lbnQiOiJIb20iLCJDb3JlSWQiOiIxIiwiQ29tcGFueUlkIjoiMjg5NiIsIkNsaWVudElkIjoiMCIsIlJvbGUiOlsiMSIsIjYiXSwibmJmIjoxNTk4OTk2NTI0LCJleHAiOjE1OTkwMzk3MjQsImlhdCI6MTU5ODk5NjUyNCwiaXNzIjoiUHJvU0VTTVQuQVBJR2F0ZXdheSIsImF1ZCI6IlBvcnRhbFdlYi9Qb3J0YWxXZWIvJExBVEVTVC9Ib20ifQ._W8QWDvAbtqXzzy1l7s_sm40XlYwxfO6CWPLj0o3Fmc32_650hjFc8cHtVzHnstU",
    },
  },
});
