


  module.exports = function pretty(unformattedDate){
    let secondsInADay = 1000 * 60 * 60 * 24;
let time = day(day() - secondsInADay); //day = constructed new date
let year = time.getFullYear();
let date = time.getDate() + 1;
let month = time.getMonth() + 1;
let formattedDate = `${year}-${month
  .toString()
  .padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
    return result;
  }

  let today = pretty (new.date());
  console.log(today);