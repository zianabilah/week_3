function tentukanDeretGeometri(arr) {
  var hasilbagi = arr[1] / arr[0];
  var isDeretGeometri = true;

  for(var i = 1; i < arr.length -1; i++) {
   
    var bagisementara = arr[i+1]/arr[i];
    if(bagisementara !== hasilbagi) {
      isDeretGeometri = false;
    }
  }
  return isDeretGeometri;
}