function Quiz(sorular) {
  this.sorular = sorular
  this.soruIndex = 0;
  this.dogrusayisi = 0;
}




Quiz.prototype.soruGetir = function() {
  return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular)
const correctIcon = '<div class="cevapikon"><i class="fa-solid fa-check"></i></div>'
const incorrectIcon = '<div class="cevapikon"><i class="fa-solid fa-times"></i></div>'
function SoruGöster(soru) {
  ui.cevaplarDiv.innerHTML = ""
  let tag;
  let soruMetni = soru.sorumetni
  for(let opt in soru.cevaplar) {
    tag = `
    <div onclick="dogruCevapMi(this)" class="cevap">
    <span><small>${opt}</small> : ${soru.cevaplar[opt]}</span>
    `
    ui.cevaplarDiv.insertAdjacentHTML("beforeend", tag)
  }
  ui.sorumetniH1.innerText = soruMetni;
}

function dogruCevapMi(secenek) {
  clearInterval(counter)
  clearInterval(counterLine)
  let cevap = secenek.querySelector("span small").innerText
  console.log(cevap)
  if(quiz.soruGetir().cevabiKontrolEt(cevap)) {
    secenek.classList.add("correct")
    quiz.dogrusayisi += 1;
    secenek.insertAdjacentHTML("beforeend", correctIcon)
  } else {
    secenek.classList.add("incorrect")
    secenek.insertAdjacentHTML("beforeend", incorrectIcon)
  }
  for(let opt of ui.cevaplarDiv.children) {
    opt.classList.add("disabled")
    let dogrucevapdiv = opt.querySelector("span small").innerText
    if(quiz.soruGetir().cevabiKontrolEt(dogrucevapdiv) && !quiz.soruGetir().cevabiKontrolEt(cevap)) {
      opt.classList.add("correct")
      opt.insertAdjacentHTML("beforeend", correctIcon)
    }
  }
}