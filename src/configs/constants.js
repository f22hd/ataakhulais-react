// const baseUrl = "http://127.0.0.1:8000/api";
const baseUrl = "https://api.ataakhulais.com/api";

const constants = {
  Headers: {
    API_KEY: "NvNhzRLGdgl0PV862L121ifAFOFWCtonv6VA8yCujrZLDidULh",
    API_VERSION: "1.0",
    Api_Lang: "ar",
    CONTENT_TYPE: "application/x-www-form-urlencoded",
  },
  add: `${baseUrl}/volunteer`,
  list: `${baseUrl}/volunteer/list`,
  stat: `${baseUrl}/volunteer/stat`,
  search: `${baseUrl}/volunteer/search`,
  content: {
    volunteerText: " يبذلون كل ما بوسعهم من أجل خدمة دينهم ووطنهم بإخلاص.",
    volunteer: "طبيباً",
    specialistText: "متميزون بتخصصاتهم المتنوعة في مجال الطب.",
    specialist: "تخصصاً",
    invitationSubmitted:
      "تمت تسجيلك،ستتم مراجعة بيانات ومن ثم نشرها. شكرا على اهتمامك",
    days: [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
  },
};

export default constants;
