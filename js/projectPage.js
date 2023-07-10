/*
const homeButton = document.getElementById('home_btn')
let homeButtonInterval
const min = 1
const max = 8
let homeButtonImgIndex = Math.floor(min + Math.random()*(max - min + 1))

homeButton.src = `../../assets/home_icons/home_00${homeButtonImgIndex}.png`

homeButton.addEventListener("mouseover", function (event) {
	homeButtonInterval = setInterval(() => {
		homeButtonImgIndex++

		if (homeButtonImgIndex === 8) {
			homeButtonImgIndex = 1
		}

		homeButton.src = `../../assets/home_icons/home_00${homeButtonImgIndex}.png`
	}, 200)
}, false);

homeButton.addEventListener("mouseleave", function (event) {
	clearInterval(homeButtonInterval)
}, false); 
*/