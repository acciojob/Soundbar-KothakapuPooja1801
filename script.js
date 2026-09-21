//your JS code here. If required.
//your JS code here. If required.
let sounds = ['applause','boo','gasp','tada','victory','wrong','stop']
let btns = document.getElementById('buttons')
sounds.forEach((sound)=>{
	let button = document.createElement("button")
	button.className = "btn"
	button.textContent = sound
	button.addEventListener("click",()=>{
		let audio = new Audio("./sounds/" + sound + ".mp3")
		audio.play()
	})
	buttons.appendChild(button)
})
let stopBtn = document.createElement('button')
stopBtn.className = "stop"
stopBtn.textContent = "Stop"
stopBtn.addEventListener("click",()=>{
	location.reload()
})
buttons.appendChild(stopBtn)