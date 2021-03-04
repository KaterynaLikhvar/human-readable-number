module.exports = function toReadable (number) {
  let str = '' + number;
  if (number === 0) {
    return 'zero';
  }
  let objNum = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety', 
    100: 'one hundred'  
  }
  let hund = parseInt(number / 100);
  let dozen = number % 100;
  let digit = number % 10;
  let dozen10  = dozen % 10;

  if (str.length === 3 && dozen === 0){
    return objNum[hund] + ' hundred';
  }
  if (str.length === 3 && dozen !== 0){

      if (dozen10 == 0){
        return objNum[hund] + ' hundred ' + objNum[dozen];
      }
      if (dozen < 10){
        return objNum[hund] + ' hundred ' + objNum[dozen];
      }
      if (dozen < 20 && dozen > 10){
        return objNum[hund] + ' hundred ' + objNum[dozen];
      }
      if (dozen10 !== 0){
        dozen -=dozen10;
        return objNum[hund] + ' hundred ' + objNum[dozen] + ' ' + objNum[dozen10];
      }
 }
    if (str.length == 1) {
      return objNum[number];
    }
    if (number < 20 && str.length == 2) {
      return objNum[number];
    }
    if (number % 10 == 0) {
      return objNum[number];
    }
    if (str.length == 2 && number % 10 !== 0) {
      number = number - digit;
      return objNum[number] + ' ' + objNum[digit]; 
    }
  
}
