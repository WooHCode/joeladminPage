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
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const day = String(now.getUTCDate()).padStart(2, "0");
    const hour = String(now.getUTCHours()).padStart(2, "0");
    const minute = String(now.getUTCMinutes()).padStart(2, "0");
    const second = String(now.getUTCSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
  },
};
