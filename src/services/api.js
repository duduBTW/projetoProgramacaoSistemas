import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOWMxOThlZWRiNDU0YjE1YjRhZDIyMzYwZmI3Y2ZiNiIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiNTIuMjMuMTgyLjg0IiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjEiLCJDb21wYW55SWQiOiIyODk2IiwiQ2xpZW50SWQiOiIwIiwiUm9sZSI6WyIxIiwiNiJdLCJuYmYiOjE1OTg3ODc0NDIsImV4cCI6MTU5ODgzMDY0MiwiaWF0IjoxNTk4Nzg3NDQyLCJpc3MiOiJQcm9TRVNNVC5BUElHYXRld2F5IiwiYXVkIjoiUG9ydGFsV2ViL1BvcnRhbFdlYi8kTEFURVNUL0hvbSJ9.PoDVm-BQixFvaJhMFvfGqW5SzsFbJVsP87dWv7cZ5Atz2KvTMwbn8opLeqzRFrkw",
    },
  },
});
