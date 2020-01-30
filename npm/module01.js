//var solarLunar = require('solarLunar');
var toChineseNumber = require("chinese-finance-number");

//var solar2lunarData = solarLunar.solar2lunar(2020, 1, 30); // 输入的日子为公历
//var lunar2solarData = solarLunar.lunar2solar(2015, 8, 26); // 输入的日子为农历

var result = toChineseNumber(123456789.0);
console.log(result);