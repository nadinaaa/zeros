module.exports = function getZerosCount(number) {
  let k=0,l=0,p=0,i=0;
  for(i=1;i<=number;i++)
{
  p=i;
  l=0;
  while(p%5==0){
    l++;
    p/=5;
  }
  k+=l;
}
return k;
}
