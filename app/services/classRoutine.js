import request from "../utils/request";

export async function getStudentRoutine(params) {
  return request("/api/v1/routine/student", {
    method: "POST",
    body: params
  });
}
