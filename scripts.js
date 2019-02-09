function first()
{
	sun = document.getElementById('resume_sun');
	sun.addEventListener('click', downloadNow, false);
	optionClouds = document.getElementById('option_clouds');
	iman = document.getElementById('ironMan');
	fox = document.getElementById('fox');
	fox.addEventListener("click", run, false);
	bubble = document.getElementById('clkMe');
	window.setTimeout(readyToRun, 10000);
	window.setTimeout(bringFox, 8000);
	tree = document.getElementById('SocialTree');
	car = document.getElementById('Car');
	back = document.getElementById('back');
	fb = document.getElementById('facebook');
	fb.addEventListener("click", facebook, false);
	tw = document.getElementById('twitter');
	tw.addEventListener("click", twitter, false);
	linn = document.getElementById('linkedin');
	linn.addEventListener("click", linkedin, false);
	gh = document.getElementById('gitHub');
	gh.addEventListener("click", gitHub, false);
}
function downloadNow()
{
	//Download the Resume
	var url= "https://drive.google.com/open?id=1nqqpeaTZJgobGPe9lIXwjs-kknlFUHWm";
	window.open(url);
	// moveAhead();
}
function moveclouds()
{
	optionClouds.style.transform = "translateX(-100%)";
	optionClouds.style.transition = "transform 10s";
}
function readyToRun()
{
	bubble.style.visibility = "visible"
}
function run()
{
	window.setTimeout(bringTree, 4000);
	moveclouds();
	fox.style.transform = "translateX(850px)";
	fox.style.transition = "transform 10s";
	bubble.style.visibility = "hidden";
}
function bringFox()
{
	fox.style.transform = "translateX(0px)";
	fox.style.transition = "transform 2s";
}
function bringTree()
{
	window.setTimeout(bringCar, 7000);
	tree.style.transform = "translateX(0px)";
	tree.style.transition = "transform 5s";
}
function readytoback()
{
	back.style.visibility = "visible";
	car.addEventListener("click", returning, false);
}
function bringCar()
{
	car.style.transform = "translateX(0px)";
	car.style.transition = "transform 5s";
	window.setTimeout(foxgo, 5000);
}
function foxgo()
{
	fox.style.transform = "translateX(1300px)";
	fox.style.transition = "transform 5s";
	readytoback();
}
function foxreset()
{
	fox.style.transform = "translateX(0px)";	
	fox.style.transition = "transform 0s";		
	bubble.style.visibility = "visible";
	back.style.visibility = "hidden";
}
function CarReset()
{
	car.style.transform="translateX(800px)";
	car.style.transition = "transform 0s";
}
function returning()
{
	car.style.transform = "translateX(-1000px)";
	car.style.transition = "transform 5s";
	back.style.visibility = "hidden";
	window.setTimeout(CarReset, 10000);
	optionClouds.style.transform = "translate(0%, -250%)";
	optionClouds.style.transition = "transform 5s";
	tree.style.transform = "translateX(500px)";
	tree.style.transition = "transform 3s";
	window.setTimeout(foxreset, 10000);
}
function facebook()
{
	// alert("Opening Facebook");
	fburl = "https://www.facebook.com/archit.garg.77"; //facebook profilelink
	window.open(fburl);
}
function twitter()
{
	twurl = "https://www.google.com"; //twitter profilelink -> https://twitter.com/Archit_Garg_AG
	window.open(twurl);
}
function linkedin()
{
	inurl = "https://www.linkedin.com/in/archit-garg-52677512a/"; //linkedin profilelink
	window.open(inurl);
}
function gitHub()
{
	ghurl = "https://github.com/ArchitGargPro"; //gitHub profilelink
	window.open(ghurl);
}
window.onload=first;