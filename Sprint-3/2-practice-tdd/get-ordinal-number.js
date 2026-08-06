function getOrdinalNumber(num) {
  if (num%10==1 && num%100!=11) {
    num = num+"st";
  }
  else if (num%10==2 && num%100!=12) {
    num = num+"nd";
  }
  else if (num%10==3 && num%100!=13) {
    num = num+"rd";
  }
  else {
    num = num+"th";
  }
  
  return num;
}

module.exports = getOrdinalNumber;
