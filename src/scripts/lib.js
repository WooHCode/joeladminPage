export default {
    getNumerFormatted(val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getGenderFormatted(val) {
        if (val == "M") {
            return val.replace(/M/gi, '남성');
        }
        else {
            return val.toString().replace(/W/gi, '여성')
        }
    },
    getSearchEmpData(val) {
        if (val != '남성' && val != '여성') {
            return val;
        }

        if (val == '여성') {
            return 'W';
        }
        return 'M';
    },
    getDateFormatted(val) {
        let date = new Date(val);
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        let formattedDate = date.toLocaleString('ko-KR', options).replace(/\//g, '년').replace(/d:d:d/g, '시','분','초');
        return formattedDate;
    }
}