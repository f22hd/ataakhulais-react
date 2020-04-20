export function isEnglishWord(text) {
  const regex = new RegExp(/([A-Z)([a-z])\w+/g);
  return regex.test(text);
}

export function transformToArray(obj) {
  const temp = [];
  Object.keys(obj).forEach((key) => {
    temp.push(obj[key]);
  });
  return temp;
}

export function initTime() {
  const arr = [];
  for (let i = 1; i <= 12; i = i + 1) {
    if (i === 12) {
      arr.push(`${i}:00`);
      continue;
    }
    arr.push(`${i}:00`, `${i}:30`);
  }
  return arr;
}

export function getFormattedMobileNumber(mobile) {
  if (mobile.length < 9) return mobile;

  const firstNumber = mobile.charAt(0);
  let formattedNumber = mobile;
  if (Number(firstNumber) === 0) {
    // remove first character which has zero number
    formattedNumber = mobile.slice(1);
  }

  return `966${formattedNumber}`;
}
