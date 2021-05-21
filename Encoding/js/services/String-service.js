
var gMethod = 'Base64';
var gString = ''
var gOutString = ''
var gMode = 'Encode';
var gRules = [];


function Convert(txt, method, mode, amount) {
  // האון קליק של האד
  var x = document.querySelector(".Error");
  x.style.visibility = "hidden";
  if (txt === '') return;
  gString = txt
  if (method == "Base64"){
    Base64(mode);
  }else if(method == "Byte Pair"){
    Byte_Pair(mode);
  }else if(method == "Cyclic Char"){
    Cyclic_Char(mode, amount)
  }else if(method == "Cyclic Bit"){
    Cyclic_Bit(mode, amount)
  }
}


function setMethod(method) {
  // מזגזגת בין האפשרויות
  gMethod = method;
  var x = document.querySelector(".amount");
  if(method == "Cyclic Char" || method == "Cyclic Bit"){
    x.style.visibility = "visible";
    x.placeholder = 'amount'
  }else if (method == "Byte Pair" && gMode == "Decode"){
    x.style.visibility = "visible";
    x.placeholder = 'Enter rules list:'
  }
  else{
    x.style.visibility = "hidden";
  }
}

function setMode(mode) {
  //  מזגזגת בין האפשרויות של ההצפנה
  gMode = mode;
  var x = document.querySelector(".amount");
  if (mode == "Decode"){
    if (gMethod == "Byte Pair"){
    x.style.visibility = "visible";
    x.placeholder = 'Enter rules list:'
    }
  }else{
    if (gMethod == "Byte Pair"){
      x.style.visibility = "hidden";
    }
    else{
      x.placeholder = 'amount'
    }
  }
}

function copyRules() {
navigator.clipboard.writeText(gRules).then(function() {
    /* clipboard successfully set */
}, function() {
    /* clipboard write failed */
});
}

function setRandom(){
  var chrlist = (upper_case + lower_case + digits).replaceAll(',', '')
  var randomstring = "";
  for (var counter = 0; counter < 8; counter++) {
    randomstring += chrlist[parseInt(Math.floor(Math.random() * chrlist.length))];
  }
  gString = randomstring
  var elNewStringTxt = document.querySelector('.new-String-txt');
  elNewStringTxt.placeholder = randomstring
  elNewStringTxt.value = randomstring
  elNewStringTxt.innerText = randomstring 
}
