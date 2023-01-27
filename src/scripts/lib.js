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
    }
}