'use strict';

console.log('Hi');

function onInit() {
  // מרנדר את העמוד, דואג לתצוגה של היוזר
}

function onConvert() {
  // מה קורה בעת הלחיצה על Convert
  var elNewStringTxt = document.querySelector('.new-String-txt');
  var elOutputString = document.querySelector('.outputString');
  var elCopy = document.querySelector('.copy');
  var elAmount = document.querySelector('.amount');
  var txt = String(elNewStringTxt.value);
  var amount = elAmount.value;
  gRules = ''
  gRules = amount
  if (!txt) return;
  gString = txt
  var temp_str = gString
  Convert(txt, gMethod, gMode, amount);
  if (Number.isInteger(parseInt(amount))){
  var rules_Str = "Num: " + gRules
  }else{
  var rules_Str = "Rules: " + gRules
  }
  // elNewStringTxt.value = '';
  elOutputString.innerText = 'Original: "' + temp_str + '"'+'\nNew: "' + gOutString + '"' + "\n" + rules_Str;
  if (gRules != []){
    elCopy.style.visibility = "visible";
    
    }else{
    elCopy.style.visibility = "hidden";
    }
}

function onHistogram(){
  var elNewStringTxt = document.querySelector('.new-String-txt');
  var txt = elNewStringTxt.value;
  Histogram(txt);
}

function onSetMethod(method) {
  setMethod(method);
}

function onSetMode(mode) {
  setMode(mode);
}

function onRandom(){
setRandom();
}
