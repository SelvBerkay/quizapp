function Soru(sorumetni, cevaplar, dogrucevap) {
  this.sorumetni = sorumetni
  this.cevaplar = cevaplar
  this.dogrucevap = dogrucevap
}

const sorular = [new Soru("1-Hangisi ülkemizin başkentidir?", {"a" : "İstanbul", "b" : "Ankara", "c" : "Denizli", "d" : "Isparta"}, "b"), new Soru("2-Hangisi akdeniz bölgesindedir?", {a : "İstanbul", b : "Antalya", c : "Diyarbakır", d : "Trabzon"}, "b"), new Soru("3-Hangisi metropoldür?", {a : "İstanbul", b : "Ankara", c : "Denizli", d : "İzmir"}, "a")]


Soru.prototype.cevabiKontrolEt = function(cevap) {
  return cevap === this.dogrucevap;
}
