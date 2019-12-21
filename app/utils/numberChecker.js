
export function numChecker(number) {
    let send_mobile = '';
    let s_mobile = String(number)
    

    if(number === undefined){
        return 'null'
    } else if(number === null){
        return 'null'
    } else if(number === ''){
        return 'null'
    } else {
        if(s_mobile.length === 11){
            send_mobile = '+88' + s_mobile
        }
        else if(s_mobile.length === 13){
            send_mobile = "+" + s_mobile
        }
        else if(s_mobile.length === 10){
            send_mobile = '+880' + s_mobile
        }
        else if(s_mobile.length == 14){
            send_mobile =  s_mobile;
        } else {
            send_mobile = 'null'
        }
    }
    return send_mobile
}