function pasanganTerbesar(num) {
  var besar = 0
  mynum = String(num)
  for (var i = 0 ; i < mynum.length-1 ; i++){
    var besar1 = mynum[i] + mynum[i+1]
    if (besar1 > besar){
      besar = besar1
      
    }

  }
  return besar
  // you can only write your code here!
}