import request from "../utils/request";

export async function exam() {
  return request("/api/v1/institute/all");
}

export async function examListForTeacher(params) {
  return request("/api/v1/exam/mobile/view/list", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/enroll/student/list} POST_URL
 */
export async function examGetEnrollStudentList(params) {
  return request("/api/v1/exam/mobile/enroll/student/list", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/result/submit} POST_URL
 */
export async function examResultSubmit(params) {
  return request("/api/v1/exam/mobile/result/submit", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/student/exam/view} POST_URL
 */
export async function examStudentMarkSheet(params) {
  return request("/api/v1/exam/mobile/get/mark/sheet", {
    method: "POST",
    body: params
  });
}

/***
 * @param {*} params
 * @param {/api/v1/exam/mobile/student/exam/view} POST_URL
 */
export async function getAttandanceByDate(params) {
  return request("/api/v1/exam/mobile/attdendence/single/day", {
    method: "POST",
    body: params
  });
}
/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/student/exam/view} POST_URL
 */
export async function getAttandanceByMonth(params) {
  return request("/api/v1/exam/mobile/attdendence/summary", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam//student/available/exam/type} POST_URL
 */
export async function getAvailableExamTypes(params) {
  return request("/api/v1/exam/mobile/given/exam", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam//student/available/exam/type} POST_URL
 */
export async function getAvailableExamRoutine(params) {
  return request("/api/v1/exam/student/available/exam/routine", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/student/result/publish} POST_URL
 */
export async function examStudentResult(params) {
  return request("/api/v1/exam/mobile/student/result/publish", {
    method: "POST",
    body: params
  });
}

/**
 * @param {*} params
 * @param {/api/v1/exam/mobile/list/exam/type} POST_URL
 */
export async function examExamList(params) {
  return request("/api/v1/exam/mobile/list/exam/type", {
    method: "POST",
    body: params
  });
}

export async function examExamTypeFilter(params) {
  return request("/api/v1/exam/mobile/filter/exam/type", {
    method: "POST",
    body: params
  });
}

export async function examFilter(params) {
  return request("/api/v1/exam/mobile/filtered", {
    method: "POST",
    body: params
  });
}

export async function studentListForEdit(params) {
  return request("/api/v1/exam/mobile/edit/submit/student/list", {
    method: "POST",
    body: params
  });
}

export async function sendstudentUpdateMark(params) {
  return request("/api/v1/exam/mobile/edit/submit/student/update", {
    method: "POST",
    body: params
  });
}

// Get Mark Distribution List
/**
 * @param {url} api_link /api/v1/exam/mobile/distribution/list
 * @param {*} params post body
 */
export async function examMarkDistributionList(params) {
  return request("/api/v1/exam/mobile/distribution/list", {
    method: "POST",
    body: params
  });
}

// Exam Create Recode

/**
 * @param {url} api_link /api/v1/exam/mobile/withdis/init
 * @param {*} params post body
 */
export async function examRecordInit(params) {
  return request("/api/v1/exam/mobile/withdis/init", {
    method: "POST",
    body: params
  });
}

/**
 * @param {url} api_link /api/v1/exam/mobile/withdis/distribute/mark/add
 * @param {*} params post body
 */
export async function examRecordOfDistributeMark(params) {
  return request("/api/v1/exam/mobile/withdis/distribute/mark/add", {
    method: "POST",
    body: params
  });
}

/**
 * @param {url} api_link /api/v1/exam/mobile/withdis/distribute/mark/update
 * @param {*} params post body
 */
export async function examRecordOfDistributeMarkUpdate(params) {
  return request("/api/v1/exam/mobile/withdis/distribute/mark/update", {
    method: "POST",
    body: params
  });
}

/**
 * @param {url} api_link /api/v1/exam/mobile/withdis/singlehead/mark/list
 * @param {*} params post body
 */
export async function headwiseExamStudentList(params) {
  return request("/api/v1/exam/mobile/withdis/singlehead/mark/list", {
    method: "POST",
    body: params
  });
}

/**
 * @param {url} api_link /api/v1/exam/mobile/withdis/singlehead/mark/add
 * @param {*} params post body
 */
export async function headwiseExamStudentAdd(params) {
  return request("/api/v1/exam/mobile/withdis/singlehead/mark/add", {
    method: "POST",
    body: params
  });
}

export async function examRecordOfSingleNumberAdd(params) {
  return request("/api/v1/exam/mobile/withdis/singlenumber/add", {
    method: "POST",
    body: params
  });
}
