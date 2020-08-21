import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZWU4MTEzMTVkYjE0OWRkYjYyYmVjZTFhNjk4NTRjZiIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTQzLjAuMjMuMjI0IiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjEiLCJDb21wYW55SWQiOiIyODk2IiwiQ2xpZW50SWQiOiIwIiwiUm9sZSI6WyIxIiwiNiJdLCJuYmYiOjE1OTgwMzQzNTIsImV4cCI6MTU5ODA3NzU1MiwiaWF0IjoxNTk4MDM0MzUyLCJpc3MiOiJQcm9TRVNNVC5BUElHYXRld2F5IiwiYXVkIjoiUG9ydGFsV2ViL1BvcnRhbFdlYi8kTEFURVNUL0hvbSJ9.27sQT13lag4f_x-6O9S0Y28-jWMdLi6Q0UpTzj4GepD-5YHhIlzi7dVaptjs4F38",
    },
  },
});
