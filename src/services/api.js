import axios from "axios";

export const instance = axios.create({
  // baseURL: `https://cors-anywhere.herokuapp.com/https://api.prosesmt.com.br/v1-hom`,
  baseURL: `https://thingproxy.freeboard.io/fetch/https://api.prosesmt.com.br/v1-hom`,
  // baseURL: `https://api.prosesmt.com.br/v1-hom`,
  headers: {
    common: {
      Authorization:
        "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZWYxOGNlMmQyY2Y0M2YyODNlMzYwN2QxYzgxNmEwZCIsIlVzZXJJZCI6IjE5MyIsIlVzZXJOYW1lIjoiVGVzdGUgZGUgVXN1w6FyaW8iLCJVc2VyRW1haWwiOiJjYXJsb3MuYWx2ZXNAcHJvc2VzbXQuY29tLmJyIiwiVXNlclByb2ZpbGUiOiIxIiwiUHJvZHVjdCI6IlBvcnRhbFdlYiIsIkFwcCI6IlBvcnRhbFdlYiIsIlVzZXJJcCI6IjU0LjIzNS4yMjUuMTgwIiwiVmVyc2lvbiI6IiRMQVRFU1QiLCJFbnZpcm9ubWVudCI6IkhvbSIsIkNvcmVJZCI6IjY1IiwiQ29tcGFueUlkIjoiMjg5NiIsIkNsaWVudElkIjoiNTAiLCJSb2xlIjpbIjEiLCI2Il0sIm5iZiI6MTYwNDcwMTE0MiwiZXhwIjoxNjA0NzQ0MzQyLCJpYXQiOjE2MDQ3MDExNDIsImlzcyI6IlByb1NFU01ULkFQSUdhdGV3YXkiLCJhdWQiOiJQb3J0YWxXZWIvUG9ydGFsV2ViLyRMQVRFU1QvSG9tIn0._-cy_rUIS3sDFxqUaQdXdgcvGAU3F-md1mhI8_o-Uvz9X7bAxbDSvcOFTINrjc3V",
    },
  },
});
