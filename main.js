function findAll(match, array) {
    let ret = [];
    for(let i = 0; i < array.length; i++) {
        if (Object.is(match, v)) {
            ret.push(v)
        }
        else if (match == null && v == null) {
            ret.push(v)
        }
        else if (typeof match == "boolean" && typeof v == "boolean") {
            if (match == v) {
                ret.push(v);
            }
        }
        else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(v, -0)){
            if (match == v){
                ret.push(v);
            }
        }
        else if(typeof match == "number" &&
            !Object.is(match, NaN) &&
            !Object.is(match, -Infinity) &&
            !Object.is(match, Infinity) &&
            !Object.is(match, -0) &&
            typeof v == "string" &&
            v.trim() != ""
        ){

        }
    }
    return ret;
}




ssss