var isActive = 1;
var lastClicked = 0;

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
displayCounters();

var blok1 = document.getElementById('blok1')
var blok2 = document.getElementById('blok2')
var blok3 = document.getElementById('blok3')

function add1(){			
	alert('Nacisnąłeś niebieski o wartości 1');
	counter1++;
	displayCounters();
}

function add2(){
	if(counter1+counter2+counter3 < 30){
		alert('Nacisnąłeś czerwony o wartości 2');
		counter2++;
	}
}

function add3(){
	if(counter1+counter2+counter3 < 50){
		alert('Nacisnąłeś żółty o wartości 5');
		counter3++;
	}
}

function stopStratControl(){
	if(isActive == 1){
		blok1.removeEventListener("click", add1);
		isActive = 0;
	}
	else{
		blok1.addEventListener("click", add1);
		isActive = 1;
	}
}

function removeListenerControl(){
	event.currentTarget.removeEventListener('click', add2);
}

blok1.addEventListener("click", add1);
blok2.addEventListener("click", add2);
blok3.addEventListener("click", add3);
	
var sspButton = document.getElementById('ssp');
sspButton.addEventListener('click', stopStratControl);

var rmButton = document.getElementById('rm');
rmButton.addEventListener('click', removeListenerControl);

function myFunction() {
 	document.getElementById("myDropdown").classList.toggle("show");
}

function displayCounters() {
	document.getElementById("c1").innerHTML = counter1;
	document.getElementById("c2").innerHTML = counter2;
	document.getElementById("c3").innerHTML = counter3;
}
