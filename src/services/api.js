import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  // baseURL: `https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjUzYmVjYmM3OGU0MzQxYTQwOGE0NWNiNmIzNTE4ZSIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiNTIuOTAuMTQxLjE4NyIsIlZlcnNpb24iOiIkTEFURVNUIiwiRW52aXJvbm1lbnQiOiJIb20iLCJDb3JlSWQiOiI2NSIsIkNvbXBhbnlJZCI6IjI4OTYiLCJDbGllbnRJZCI6IjUwIiwiUm9sZSI6WyIxIiwiNiJdLCJuYmYiOjE2MDI0MzIwMTYsImV4cCI6MTYwMjQ3NTIxNiwiaWF0IjoxNjAyNDMyMDE2LCJpc3MiOiJQcm9TRVNNVC5BUElHYXRld2F5IiwiYXVkIjoiUG9ydGFsV2ViL1BvcnRhbFdlYi8kTEFURVNUL0hvbSJ9.V1917deGklcTI1LTUR4nlb_mewbPtejA8rBp4-Z5KMqccpeQ6NCE_ysnWjBnGcmZ",
    },
  },
});
