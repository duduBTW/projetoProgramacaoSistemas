import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDFiZTZkNTBhMTU0ODE0OTIwMzZkMTRjZTdjMGEyZCIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTQzLjAuMjMuMjI0IiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjEiLCJDb21wYW55SWQiOiIyODk2IiwiQ2xpZW50SWQiOiIwIiwiUm9sZSI6WyIxIiwiNiJdLCJuYmYiOjE1OTgxMTY5MzUsImV4cCI6MTU5ODE2MDEzNSwiaWF0IjoxNTk4MTE2OTM1LCJpc3MiOiJQcm9TRVNNVC5BUElHYXRld2F5IiwiYXVkIjoiUG9ydGFsV2ViL1BvcnRhbFdlYi8kTEFURVNUL0hvbSJ9.-Tjpucc4833_3xz0gJCZ5VRnVglZn7FSxsR2wlDVC4TdmaIuUdeoT16-D3iG6k9o",
    },
  },
});
