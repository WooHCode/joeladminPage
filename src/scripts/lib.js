export default {
  getNumerFormatted(val) {
    let num = "" + val;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  getGenderFormatted(val) {
    if (val == "M") {
      return val.replace(/M/gi, "남성");
    } else {
      return val.toString().replace(/W/gi, "여성");
    }
  },
  getSearchEmpData(val) {
    if (val != "남성" && val != "여성") {
      return val;
    }

    if (val == "여성") {
      return "W";
    }
    return "M";
  },
  getDateFormatted(val) {
    let date = new Date(val);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let formattedDate = date
      .toLocaleString("ko-KR", options)
      .replace(/\//g, "년")
      .replace(/d:d:d/g, "시", "분", "초");

    if (formattedDate.charAt(0) === "1") {
      return "아직 출근하지 않았습니다.";
    } else {
      return formattedDate;
    }
  },

  sortDataByDate(data) {
    const sortedKeys = Object.keys(data).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const sortedData = {};
    for (const key of sortedKeys) {
      sortedData[key] = data[key];
    }
    return sortedData;
  },

  getNowDate() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const dateParts = formatter.formatToParts(now).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}`;
  },

  formatDate(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  },
};
