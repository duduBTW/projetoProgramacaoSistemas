import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTBjNWU1MmE0NmE0YjVhYTBjNmYwYzFlZWVlZjdiYyIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTQzLjAuMjMuMjI0IiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjEiLCJDb21wYW55SWQiOiIyODk2IiwiQ2xpZW50SWQiOiIwIiwiUm9sZSI6WyIxIiwiNiJdLCJuYmYiOjE1OTc5NTE3NzMsImV4cCI6MTU5Nzk5NDk3MywiaWF0IjoxNTk3OTUxNzczLCJpc3MiOiJQcm9TRVNNVC5BUElHYXRld2F5IiwiYXVkIjoiUG9ydGFsV2ViL1BvcnRhbFdlYi8kTEFURVNUL0hvbSJ9.4V_LqxjqemnFB81kMvaSVWu7DjAnnZLBsqqDlJJ3VhhLcueLRY2tb3CAiNIxt7Vo",
    },
  },
});
