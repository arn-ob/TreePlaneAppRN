// Config
const config = require("../../envConfig");

let IP = "";
let PAY_IP = "";

if (__DEV__) {
  IP = config.liveAPI
    ? "https://api.mobipath.online"
    : "http://192.168.5.56:2019";
  // IP = config.liveAPI
  //   ? "https://api.mobipath.online"
  //   : "https://api.mobipath.online";

  config.liveAPI
    ? console.log("Debug Mode With Live API working")
    : console.log("Local Host is The API");

  // IP = 'http://192.168.0.143:2019';
  // For Testing Live DB from __DEV__
  // IP = 'https://api.mobipath.online';

  console.log("Development API", IP);
} else {
  IP = "https://api.mobipath.online";
  console.log("Production");
}

const API = {
  // IP Get
  liveIP: IP,

  // Test
  google: "http://www.google.com",
  tokenTest: "dev-arnob",

  // payment
  payHtmlLink: PAY_IP,

  // Login
  loginJWT: IP + "/api/v1/auth/login/jwt",

  // Student
  getStudent: IP + "/api/v1/student/",

  // Teacher
  teacherProfile: IP + "/api/v1/teacher/",

  // institute
  getAllInstitute: IP + "/api/v1/institute/all",

  build_v: "Mobipath-v1.0.38"
};

export default API;
