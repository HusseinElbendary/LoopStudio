const Zones=document.getElementsByClassName("Zone");
const ZoneNames=document.getElementsByClassName("ZoneText");
const ZoneImgs=document.getElementsByClassName("ZoneImg");

const navList=document.getElementsByClassName("NavLinks")[0];
const HeaderImage=document.getElementById("headerId");
const DisImg=document.getElementsByClassName("DisImg")[0];
var currentScreen="desktop";

// const hamburger=document.getElementById("hamburger");

// var CurrentNav="hidden";

WindowSize();//check which size we are working with



//hover effect on the grid
function hoverEnter(e){
	for(let i=0;i<Zones.length;i++)
	{
		if(this===Zones[i])
		{
			ZoneImgs[i].style.opacity="0.45";
			Zones[i].style.boxShadow="none";
			ZoneNames[i].style.color="black";
			break;
		}
	}
}
function hoverLeave(e){
	for(let i=0;i<Zones.length;i++)
	{
		if(this===Zones[i])
		{
			ZoneImgs[i].style.opacity="1";
			Zones[i].style.boxShadow="inset 0px 0px 75px black";
			ZoneNames[i].style.color="white";
			break;
		}
	}

}
for(let i=0;i<Zones.length;i++)
{
	Zones[i].addEventListener("mouseenter",hoverEnter);
	Zones[i].addEventListener("mouseleave",hoverLeave);
}
//end of hover effect

//changing images when the size gets too small
function WindowSize()
{
	console.log(window.innerWidth);
	if(window.innerWidth >767 && currentScreen==="mobile")
	{
		// navList.style.visibility = "visible"
		HeaderImage.style.backgroundImage="url(images/desktop/image-hero.jpg)"
		DisImg.src="images/desktop/image-interactive.jpg"
		for(var i=0;i<Zones.length;i++)
		{

			ZoneImgs[i].src=ZoneImgs[i].src.substr(0,ZoneImgs[i].src.indexOf("mobile"))+"desktop"+ZoneImgs[i].src.substr(ZoneImgs[i].src.lastIndexOf("image-")-1 );

		}
		currentScreen="desktop";
	}
	else if(window.innerWidth <=767 && currentScreen==="desktop")
	{
		// navList.style.visibility = "hidden"
		HeaderImage.style.backgroundImage="url(images/mobile/image-hero.jpg)"
		DisImg.src="images/mobile/image-interactive.jpg"
		for(var i=0;i<Zones.length;i++)
		{
			
			ZoneImgs[i].src=ZoneImgs[i].src.substr(0,ZoneImgs[i].src.indexOf("desktop"))+"mobile"+ZoneImgs[i].src.substr(ZoneImgs[i].src.lastIndexOf("image-")-1);
		}
		currentScreen="mobile";
	}
}

// function ShowNav(){
// 	if(CurrentNav==="hidden")
// 	{
// 		navList.style.display="flex";
// 		navList.style.flexDirection="column";
// 		navList.style.visibility="visible";
// 		CurrentNav="shown";
// 	}
// 	else{

// 		navList.style.visibility="hidden";
// 		navList.style.flexDirection="row";
// 		CurrentNav="hidden";
// 	}
// }

window.addEventListener('resize', WindowSize);
// hamburger.addEventListener('click', ShowNav);