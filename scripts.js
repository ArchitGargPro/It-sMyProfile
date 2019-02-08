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
	fox.style.transform="translateX(-400px)";
	window.setTimeout(bringFox, 8000);
	bubble.style.visibility = "hidden";
	tree = document.getElementById('SocialTree');
	// Car = document.getElementById('Car');
	// back = document.getElementById('back');
	// back.style.visibility = "hidden";
	// Car.addEventListener("click", return, false);
	// Car.style.transform="translateX(400px)";
}
function downloadNow()
{
	//Download the Resume
	moveAhead();
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
	// window.setTimeout(bringCar, 7000);
	tree.style.transform = "translateX(0px)";
	tree.style.transition = "transform 5s";
}
// function bringCar()
// {
// 	Car.style.transform = "translateX(0px)";
// 	Car.style.transition = "transform 5s";
// 	back.style.visibility = "visible";
// }
// function CarReset()
// {
// 	Car.style.transform="translateX(400px)";
// }
// function return()
// {
// 	Car.style.transform = "translateX(-1000px)";
// 	Car.style.transition = "transform 10s";
// 	back.style.visibility = "hidden"
// 	window.setTimeout(CarReset, 10000);
// 	optionClouds.style.transform = "translateX(100%)";
// 	optionClouds.style.transition = "transform 10s";
// 	tree.style.transform = "translateX(500px)";
// 	tree.style.transition = "transform 5s";
// }
window.onload=first;