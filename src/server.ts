import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 100 },
    { duration: "30s", target: 60 },
    { duration: "30s", target: 30 },
    { duration: "30s", target: 40 },
    { duration: "20", target: 20 },
    { duration: "10s", target: 10 },
  ],
};

export default function () {
  const res = http.get("https://httpbin.test.k6.io/");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
