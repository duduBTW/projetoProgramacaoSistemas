import axios from "axios";

export const instance = axios.create({
  // baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  baseURL: `https://thingproxy.freeboard.io/fetch/https://api.prosesmt.com.br/v1-hom`,
  // baseURL: `https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTE4YzY1NGU2ZDc0MWNhYTZhZmYxNWYwYWM4YjBlMCIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJ0ZXN0ZUBwaXp6YXJpYS5jb20uYnIiLCJVc2VyUHJvZmlsZSI6IjEiLCJQcm9kdWN0IjoiUG9ydGFsV2ViIiwiQXBwIjoiUG9ydGFsV2ViIiwiVXNlcklwIjoiMTQzLjAuMjMuMTA4IiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjY1IiwiQ29tcGFueUlkIjoiMjg5NiIsIkNsaWVudElkIjoiNTAiLCJSb2xlIjpbIjEiLCI2Il0sIm5iZiI6MTYwNDM2MDUwMywiZXhwIjoxNjA0NDAzNzAzLCJpYXQiOjE2MDQzNjA1MDMsImlzcyI6IlByb1NFU01ULkFQSUdhdGV3YXkiLCJhdWQiOiJQb3J0YWxXZWIvUG9ydGFsV2ViLyRMQVRFU1QvSG9tIn0.iv5v6sF7E3f2Z_M8iWGVERj9h5i12UE74fPpnqcQl40z5yaJwIcAtc_NVn_jlHCW",
    },
  },
});
