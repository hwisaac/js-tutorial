
function getTime() {
    
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDate());
    const hour = String(date.getHours());
    const min = String(date.getMinutes());
    const sec = String(date.getSeconds());

    
    clock1.innerText = ` ${year}. ${month}. ${day}.`;
    clock2.innerText = ` ( ${hour.padStart(2, "0")} : ${min.padStart(2,"0")} )`;
  }
  
  getTime();
  setInterval(getTime, 1000);