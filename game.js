var height = 0
var width = 0
var hearts = 1
var time = 30

var crtmosquitotime = 2000

var level = window.location.search
level = level.replace('?','')

if(level === 'Normal') {
	crtmosquitotime = 1000
}else if(level === 'Hard'){
	crtmosquitotime = 850
}else if(level === ' Chuck Norris'){
	crtmosquitotime = 900
}


function adjustSize(){

height = window.innerHeight
width = window.innerWidth
console.log(width,height)
}


var stopwatch = setInterval(function(){
	
	time -=1

	if (time<0) {
		clearInterval(stopwatch)
		clearInterval(createMosquito)
		window.location.href = 'victory.html'
	}else{

	document.getElementById('stopwatch').innerHTML = time
	}
},1000)

adjustSize()

function randomizer(){

	//remove previous mosquito(if it exists)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//Heart removal
		if(hearts >= 3){
			window.location.href = 'game_over.html'
		}
		document.getElementById('h' + hearts).src='imagens/empty_heart.png'
		hearts++
	}

var coord_X = Math.floor(Math.random() * width) - 90
var coord_Y = Math.floor(Math.random() * height) - 90

coord_X = coord_X < 0 ? 0 : coord_X
coord_Y = coord_Y < 0 ? 0 : coord_Y

console.log(coord_X,coord_Y)


//creates html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = sizeRandomizer() + ' ' + sideRandomizer()
mosquito.style.left = coord_X + 'px'
mosquito.style.top = coord_Y + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
}

document.body.appendChild(mosquito)
}

function sizeRandomizer(){
	var rclass = Math.floor(Math.random() * 3)

	switch(rclass){
		case 0:
		return 'mosquito1'
		case 1:
		return 'mosquito2'
		case 2:
		return 'mosquito3'
	}

}

function sideRandomizer(){
var rclass2 = Math.floor(Math.random() * 2)

	switch(rclass2){
		case 0:
		return 'sideA'
		case 1:
		return 'sideB'
	}

}
