function balikString(mystring){
  var str=""
  for(var i = mystring.length-1 ; i >=0 ; i--){
  str+=mystring[i];
  }
  console.log(str)
} 


balikString('selmat siang')