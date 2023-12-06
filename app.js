const ui = new UI()

ui.startBtn.addEventListener("click", () => {
  ui.startBtn.classList.remove("active")
  ui.card.classList.add("active")
  SoruGöster(quiz.soruGetir())
  soruSayısı(quiz.soruIndex + 1, quiz.sorular.length)
  startTimer(10)
  startTimerLine()
})

ui.nextBtn.addEventListener("click", () => {
  if (quiz.soruIndex + 1 != quiz.sorular.length) {
    quiz.soruIndex += 1;
    clearInterval(counter)
    clearInterval(counterLine)
    startTimer(10)
    startTimerLine()
    SoruGöster(quiz.soruGetir())
    soruSayısı(quiz.soruIndex + 1, quiz.sorular.length)
  } else {
    BitisEkranı(quiz.sorular.length, quiz.dogrusayisi)
  }
})

function soruSayısı(sorusırası, toplamsoru) {
  ui.sorusayisiDiv.innerHTML = `
  <div class="sorusayisi">${sorusırası} / ${toplamsoru}</div>
  `
}

function BitisEkranı(sorusayisi, dogrusayisi) {
  ui.skorDiv.classList.add("active")
  ui.card.classList.remove("active")
  let text = document.querySelector(".toplamskor") 
  text.innerHTML = `<div class="toplamskor">Toplam ${sorusayisi} sorudan ${dogrusayisi} tanesini doğru bildiniz.</div>`
}

ui.restartBtn.addEventListener("click", () => {
  quiz.dogrusayisi = 0;
  quiz.soruIndex = 0;
  ui.skorDiv.classList.remove("active")
  ui.startBtn.click()
})

ui.quitBtn.addEventListener("click", () => {
  window.location.reload()
})

let counter;
function startTimer(time) {
  ui.time.textContent = time
  ui.timeText.textContent = "Kalan Süre"
  counter = setInterval(() => {
    if(time > 0) {
      time--;
      ui.time.textContent = time
    } else {
      clearInterval(counter)
      ui.timeText.textContent = "Süre Bitti"
      for(let opt of ui.cevaplarDiv.children) {
        opt.classList.add("disabled")
        let dogrucevapdiv = opt.querySelector("span small").innerText
        if(quiz.soruGetir().cevabiKontrolEt(dogrucevapdiv)) {
          opt.classList.add("correct")
          opt.insertAdjacentHTML("beforeend", correctIcon)
        }
      }
    }
  }, 1000);
}


let counterLine;

function startTimerLine() {
  let linewidth = 0
  counterLine = setInterval(() => {
    linewidth += 0.2;
    ui.timerline.style.width = `${linewidth}%`;
    
    if(ui.timerline.style.width == "100%") {
      clearInterval(counterLine)
    }
  }, 20);
}