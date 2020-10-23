import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  // baseURL: `https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YWRjMTA2NzE1YjI0YzM4OTg0ODFkYWQ3NzNhNDRiZSIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTY4LjIyNy4xNTUuMjUxIiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjY1IiwiQ29tcGFueUlkIjoiMjg5NiIsIkNsaWVudElkIjoiNTAiLCJSb2xlIjpbIjEiLCI2Il0sIm5iZiI6MTYwMjk0MzQ0OSwiZXhwIjoxNjAyOTg2NjQ5LCJpYXQiOjE2MDI5NDM0NDksImlzcyI6IlByb1NFU01ULkFQSUdhdGV3YXkiLCJhdWQiOiJQb3J0YWxXZWIvUG9ydGFsV2ViLyRMQVRFU1QvSG9tIn0.GQa23I4SeeilbYcORCyTqGHCk_P_-9ijttgeSD0pB_OlC5GQyDnMRxfA1deX8Q9N",
    },
  },
});
