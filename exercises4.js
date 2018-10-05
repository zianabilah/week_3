var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(biodata){
  biodata.splice(2,1,'provinsi Bandar Lampung')
  biodata.push('Pria', 'SMA Internasional Metro')
  console.log(biodata);

  var tanggal=biodata[3].split("/")
  // console.log(tanggal)
  // console.log(tanggal[1])
  switch(tanggal[1]){
    case '01' : console.log('Januari'); break;
    case '02' : console.log('Februari'); break;
    case '03' : console.log('Maret'); break;
    case '04' : console.log('April'); break;
    case '05' : console.log('Mei'); break;
    case '06' : console.log('Juni'); break;
    case '07' : console.log('Juli'); break;
    case '08' : console.log('Agustus'); break;
    case '09' : console.log('September'); break;
    case '10' : console.log('Oktober'); break;
    case '11' : console.log('November'); break;
    case '12' : console.log('Desember'); break;
  }
  
 
  var tanggalBaru = tanggal.slice()
  tanggalBaru.sort(function(a, b){return b-a});
  console.log(tanggalBaru)

  tanggal=tanggal.join("-")
console.log(tanggal)

var nama=biodata[1].slice(0,15)
console.log(nama);






}
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */