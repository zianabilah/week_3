function tentukanDeretAritmatika(arr) {
  var selisihDeret = arr[1] - arr[0];
  var isDeretAritmatika = true;
  //console.log(selisihDeret);
  for(var i = 1; i < arr.length -1; i++) {
    //console.log(arr[i+1]-arr[i]);
    var selisihSementara = arr[i+1]-arr[i];
    if(selisihSementara !== selisihDeret) {
      isDeretAritmatika = false;
    }
  }
  return isDeretAritmatika;
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
