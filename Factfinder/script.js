document.querySelector('#nav').a.addEventListener("click",f1);
function f1(){
	document.querySelector('section').innerHTML = "<div> More than 10 people a year are killed by a vending machine. <img src='images/vending.jpg' width= '500px' height= '350px' alt='scary vending machines'> </div>";
}

document.getElementById('nav').b.addEventListener("click",f2);
function f2(){
	document.querySelector('section').innerHTML = "<div> The most children born to one woman was 69, she was a peasant who lived a 40 year life, in which she had 16 twins, 7 triplets, and 4 quadruplets.<img src='images/kiddo.jpg' width= 'auto' height= '350px' alt='kiddo'> </div>";
}

document.getElementById('nav').c.addEventListener("click",f3);
function f3(){
	document.querySelector('section').innerHTML = " <div> It takes 492 seconds for sunlight to reach the Earth. <img src='images/earthandsun.jpg' width= 'auto' height= '350px' alt='earth and sun'> </div>";
}

document.getElementById('nav').d.addEventListener("click",f4);
function f4(){
	document.querySelector('section').innerHTML = "<div> Cats produce the purring noise by using the vocal folds and/or the muscles of the larynx to alternately dilate and constrict the glottis rapidly, causing air vibrations during inhalation and exhalation.<img src='images/cat.jpg' width= 'auto' height= '350px' alt='cute cat'> </div>";
}

document.getElementById('nav').e.addEventListener("click",f5);
function f5(){
	document.querySelector('section').innerHTML = "<div> Gummy bears were originally called dancing bears. <img src='images/gummy.jpg' width= 'auto' height= '350px' alt='gummy bear'> </div>";
}

function goDark() {
	document.querySelector('section').style.backgroundColor = "#6E6362";
	
	var subs = document.getElementsByTagName('section');
	for(var i = 0;i < subs.length;i++) {
		subs[i].style.color = "#FFFFFF";
	}
	
	var button = document.getElementsByTagName('input');
	for (var i = 0;i < 8;i++) {
		if (i < 5) {
		button[i].style.backgroundColor= "#4E4A59";
		button[i].style.color= "#FFFFFF";
		}//if
		else {
		button[i].style.backgroundColor= "#394053";
		button[i].style.color= "#FFFFFF";
		}//else
	}//for
	
	document.querySelector('html').style.backgroundColor = "#101218";
}

function goFire() {
	document.querySelector('section').style.backgroundColor = "#D45113";
	document.querySelector('section').style.borderColor= "#813405";
	
	var sect = document.getElementsByTagName('section');
	for(var i = 0;i < sect.length;i++) {
		sect[i].style.color = "#F8DDA4";
	}
	
	var btn = document.getElementsByTagName('input');
	for (var i = 0;i < 8;i++) {
		if (i < 5) {
		btn[i].style.backgroundColor= "#F8DDA4";
		btn[i].style.color= "#D45113";
		} //if
		else {
		btn[i].style.backgroundColor= "#DDF9C1";
		btn[i].style.color= "#D45113";
		}//else
	}//for
	
	document.querySelector('html').style.backgroundColor = "#F9A03F";
}

function goBubblegum() {
	document.querySelector('section').style.backgroundColor = "#FBC6D9";
	document.querySelector('section').style.borderColor= "#764248";
	
	var sect = document.getElementsByTagName('section');
	for(var i = 0;i < sect.length;i++) {
		sect[i].style.color = "#764248";
	}
	
	var btn = document.getElementsByTagName('input');
	for (var i = 0;i < 8;i++) {
		if (i < 5) {
		btn[i].style.backgroundColor= "#FFADC6";
		btn[i].style.color= "#764248";
		} //if
		else {
		btn[i].style.backgroundColor= "#DDA3B2";
		btn[i].style.color= "#764248";
		}//else
	}//for
	
	document.querySelector('html').style.backgroundColor = "#BEC2DA";
}