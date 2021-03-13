module.exports = function reverse (n) {
    str="";
  if(n<0) n*=-1;
  str+=n%10;
  str+=Math.floor((n%100)/10);
  str+=Math.floor(n/100);
  return str;
}
