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
        if(val != '남성' && val != '여성'){
            return val;
        } 
        
        if( val == '여성'){
            return 'W';
        }
        return 'M';
    }
}