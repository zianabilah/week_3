// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.




function groupAnimals(animals) {
  // you can only write your code here!
  var result = []

  for(var i = 0; i < animals.length; i++){
    var isGroup = true
    var group = []

    for(var j = 0; j < result.length; j++){
      if(result[j][0][0] === animals[i][0]){
        result[j].push(animals[i])
        isGroup = false
      }
    }

    if(isGroup){
      group.push(animals[i])
      result.push(group)
     
    }
  }

  return result.sort(function(a, b){return a >b});

}
 

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]