function dispTime() {
  let date = new Date()
  let hr = date.getHours() //0-23
  let min = date.getMinutes() //0-59
  let sec = date.getSeconds() //0-59
let session = "Hrs"

      if (hr === 0) {
        hr = 24;
      }
      if (hr > 24) {
        hr = hr - 24
        session = "Hrs"
      }
      if (hr < 10){
        hr = "0" + hr
      }
      if (min < 10 ) {
        min = "0" + min
      }
      if (sec < 10 ) {
       sec = "0" + sec
      }
let time = hr + " : " + min + " : " + sec + " "+ session
      document.getElementById("myClock").innerText = time
      document.getElementById("myClock").textContent = time


setTimeout(dispTime, 1000)

}
dispTime()

// function dispDate() {
//   let date = new Date()
//   document.getElementById("date").innerText = date
// }
// dispDate()
// function getTime() {
//   let date = new Date()
// }