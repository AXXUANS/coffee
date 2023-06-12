const getElement = str => document.querySelector(str)

const getElementAll = str => document.querySelectorAll(str)

const jump = active => {
	document.querySelector(".active").classList.remove("active")
	active.classList.add("active")
}

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

} else {
	getElement(".barrier").style.display = "flex"
	getElement(".barrierDialog").style.display = "flex"
}
// const page = getElementAll(".page")
// let h = document.body.clientHeight
// for (let i = 0; i < page.length; i++) {
// 	page[i].style.height = h + "px"
// }

const next = getElement("#next")
next.addEventListener("click", function() {
	let newPage = getElement("#select")
	jump(newPage)
})

const selectBtn = getElementAll("#select .btn")
for (let i = 0; i < selectBtn.length; i++) {
	selectBtn[i].addEventListener("click", function() {
		let newPage = getElement("#scene")
		jump(newPage)
	})
}

const sceneBtn = getElementAll("#scene .btn")
for (let i = 0; i < sceneBtn.length; i++) {
	sceneBtn[i].addEventListener("click", function() {
		let newPage = getElement("#music")
		jump(newPage)
	})
}

const musicBtn = getElementAll("#music .btn")
for (let i = 0; i < sceneBtn.length; i++) {
	musicBtn[i].addEventListener("click", function() {
		switch (musicBtn[i].dataset.id) {
			case "1":
			audio.src = "static/music/qy.mp3"
				break;
			case "2":
			audio.src = "static/music/sh.mp3"
				break;
			case "3":
			audio.src = "static/music/jq.mp3"
				break;
		}
		let newPage = getElement("#coffee")
		jump(newPage)
	})
}



const nextRule = getElement("#coffee .btn")
nextRule.addEventListener("click", function() {
	let newPage = getElement("#rule")
	jump(newPage)
})
