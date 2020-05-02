const baseUrl = process.env.REACT_APP_ENDPOINT_URL;

const constants = {
  Headers: {
    API_KEY: process.env.REACT_APP_KEY,
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
