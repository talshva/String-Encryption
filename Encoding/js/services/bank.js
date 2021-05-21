var control_code = [];
for (var i = 0; i <= 31; i++) {
    control_code.push(String.fromCharCode(i));
}
control_code.push(String.fromCharCode(127))

var other = [];
for (var i = 33; i <= 47; i++) {
    other.push(String.fromCharCode(i));
}
for (var i = 58; i <= 64; i++) {
    other.push(String.fromCharCode(i));
}
for (var i = 91; i <= 96; i++) {
    other.push(String.fromCharCode(i));
}
for (var i = 124; i <= 126; i++) {
    other.push(String.fromCharCode(i));
}

var digits = [];
for (var i = 48; i <= 57; i++) {
    digits.push(String.fromCharCode(i));
}

var upper_case = [];
for (var i = 65; i <= 90; i++) {
    upper_case.push(String.fromCharCode(i));
}

var lower_case = [];
for (var i = 97; i <= 122; i++) {
    lower_case.push(String.fromCharCode(i));
}

function checkInOther(letter) {
    return !other.includes(letter);
}

function checkInControl(letter) {
    return !control_code.includes(letter);
}

function checkInDigits(letter) {
    return !digits.includes(letter);
}

function checkInUpper(letter) {
    return !upper_case.includes(letter);
}

function checkInLower(letter) {
    return !lower_case.includes(letter);
}