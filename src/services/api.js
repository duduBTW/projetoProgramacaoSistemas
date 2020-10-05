import axios from "axios";

export const instance = axios.create({
  // baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  baseURL: `https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWM4Y2ZjYzA5Nzc0MGEyYTIyNDczYTY4ZTExZDk4NCIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTguMjA5LjE2Ni4yMjYiLCJWZXJzaW9uIjoiJExBVEVTVCIsIkVudmlyb25tZW50IjoiSG9tIiwiQ29yZUlkIjoiMSIsIkNvbXBhbnlJZCI6IjI4OTYiLCJDbGllbnRJZCI6IjAiLCJSb2xlIjpbIjEiLCI2Il0sIm5iZiI6MTU5OTQ4MTQ5MSwiZXhwIjoxNTk5NTI0NjkxLCJpYXQiOjE1OTk0ODE0OTEsImlzcyI6IlByb1NFU01ULkFQSUdhdGV3YXkiLCJhdWQiOiJQb3J0YWxXZWIvUG9ydGFsV2ViLyRMQVRFU1QvSG9tIn0.M18CggLzKE14cplrsqDrhOcsfwfwVUh_Au6xBsVB0TD3j02bQa4yGsjiTEL5rOeF",
    },
  },
});
