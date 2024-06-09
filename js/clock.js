function getClock() {
	const date = new Date();
    const hours = String(date.getHours()).padstart(2."0");
    const minutes = String(date.getHours()).padstart(2."0");
    const seconds = String(date.getHours()).padstart(2."0");
    clock.innerText = '${hours}:${minutes}:${seconds}';
    }
    
    getClock();
    setInterval(getClock, 1000);
