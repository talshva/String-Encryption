function Base64(mode){
    if(mode == 'Encode'){
        var encodedData = window.btoa(gString);
        encodedData = encodedData.replaceAll('=','');
    }else{
        try {
        var encodedData = window.atob(gString);
        }
        catch(err) {
            Errorhandling('Base 64 Decoding')
          }
    }
    gOutString = encodedData
}

function Byte_Pair(mode){
    var group = ''
    if (mode == 'Encode'){
        if (gString.split('').every(checkInOther)){
            group = other;
        }else if(gString.split('').every(checkInDigits)){
            group = digits;
        }else if(gString.split('').every(checkInUpper)){
            group = upper_case;
        }else if(gString.split('').every(checkInLower)){
            group = lower_case;
        }else{
            Errorhandling('Byte Pair Encoding');
        }

        var flag = j = 0;
        var rules = []
        while (true){
           var couples = []
           var couples_dict = {};
            for (var i = 0 ; i<gString.length ; i++){
                if(gString.slice(i, i+2) == gString.slice(i-1, i+1)){
                    if (flag == 0){
                        flag = 1;
                        continue;
                    }
                }
                if (gString.slice(i,i+2).length == 2){
                couples.push(gString.slice(i, i+2)) ;
                flag = 0;
                }
            }
            
            for (var i=0; i < couples.length; i++) {
            couples_dict[couples[i]] = (couples_dict[couples[i]] || 0) +1 ;
            }
            var highestVal = Math.max.apply(null, Object.values(couples_dict)),
            val = Object.keys(couples_dict).find(function(a) {
             return couples_dict[a] === highestVal; })

            const coup = Object.keys(couples_dict).find(coup => couples_dict[coup] === highestVal);

            if (highestVal == 1){
            break;
            }
            gString = gString.replaceAll(coup, group[j]);
            rules.push(group[j] + ' = ' + coup)
            j += 1;
        }
        gOutString = gString
        gRules = rules

    }else{
        var rules = gRules;
        
        if (rules == []){
        Errorhandling('Byte Pair decoding')
        return;
        } 
        rules = rules.replace('/', '') 
        var rule_list = rules.split(',') 
        for (var i = 0 ; i<rule_list.length ; i++){
           rule_list[i] = rule_list[i].replaceAll(' = ', ',')
        }
        
        var temp_str = gString
        for (var i = rule_list.length-1 ; i>=0 ; i--){
            var coup = rule_list[i].split(',')
            temp_str = temp_str.replaceAll(coup[0], coup[1])
        gOutString = temp_str
        }
    }
}

function Cyclic_Char(mode, amount){
    if (mode == 'Encode'){
    var new_char = '';
    for (var i = 0; i < gString.length; i++) {
        if (gString.charCodeAt(i) <32 || gString.charCodeAt(i) >127){
            Errorhandling("Cyclic Char Encode")
            break;
        }
        amount = parseInt(amount)
        val = gString.charCodeAt(i);
        if (val + amount > 126){
        var temp = (amount - (126 - val)) % 95;
        new_char += String.fromCharCode(31 + temp);
        }else if( val + amount < 32){
        var temp = (Math.abs(amount) - (val - 32)) % 95
        new_char += String.fromCharCode(127 - temp)        
        }else{
        new_char +=  String.fromCharCode(val + amount)
        }
      }
    gOutString = new_char
    }else{
        var flag = 0
        for (var i = 0; i < gString.length; i++) {
            if (gString.charCodeAt(i) <32 || gString.charCodeAt(i) >127){
                Errorhandling("Cyclic Char Decode")
                flag = 1
                break;
            }  
        }
        if (flag == 0){
        Cyclic_Char('Encode', - parseInt(amount))
        } 
    }
}
  
function Cyclic_Bit(mode, amount){
    amount = parseInt(amount)
    if (mode == 'Encode'){
    var temp_bin = '';
    var new_str = '';
    for (var i = 0; i < gString.length; i++) {
        var a = gString[i].charCodeAt(0).toString(2);
        a = ("00000000" + a).slice(-8)
        temp_bin+=a;
    }
    if (amount >= 0){
    var temp = temp_bin.slice(0,amount);
    temp_bin = temp_bin.slice(amount,temp_bin.length) + temp
    }else{
        temp = temp_bin.slice(amount,temp_bin.length)
        temp_bin = temp + temp_bin.slice(0,amount);
    }
    var list = temp_bin.match(/.{1,8}/g);
    if (list[list.length-1] == 0){
        list = list.pop()
    }
    for (var i = 0; i < list.length; i++){
        var a = parseInt(list[i],2).toString(10);
        new_str += String.fromCharCode(parseInt(list[i],2).toString(10))
    }
    gOutString = new_str

    }else{
    Cyclic_Bit('Encode', - parseInt(amount))
    }
}
  
  
function Histogram(txt) {
    if (txt === '') return;
    var others = other + [String.fromCharCode(32)];
    histogram_dic = {"control code": 0, "digits": 0, "upper": 0, "lower": 0, "other printable": 0, "higher than 128": 0}
        if (/\\r|\\n/.exec(txt)){
        histogram_dic["control code"] += 1;
        histogram_dic["lower"] -= 1 ;
        histogram_dic["other printable"] -= 1;
        }
    for (var i = 0; i < txt.length; i++){
        if (digits.includes(txt[i])){
            histogram_dic["digits"] += 1
        }else if (upper_case.includes(txt[i])){
            histogram_dic["upper"] += 1
        }else if (lower_case.includes(txt[i])){
            histogram_dic["lower"] += 1
        }else if (others.includes(txt[i])){
            histogram_dic["other printable"] += 1
        }else if (txt[i].charCodeAt(0)>128){
            histogram_dic["higher than 128"] += 1
        }
    }
    var elOutputString = document.querySelector('.outputString');
    elOutputString.innerText =JSON.stringify(histogram_dic, null, 4);
}
  

function Errorhandling(error){

    var x = document.querySelector(".Error");
    x.style.visibility = "visible";
    x.innerText = error + ' Error'
}