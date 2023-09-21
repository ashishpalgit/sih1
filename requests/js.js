const navcon=document.getElementById("navcontainer");
const sideham=document.getElementById("sideprofile");
const sidepro=document.getElementById("sideprofileham");
const sidepro1=document.getElementById("sideprofileham1");
const concards=document.getElementById("concards");
const plantcon=document.getElementById("plantcon");
const mobmenu=document.getElementById("mobmenu");
const navh=navcon.offsetHeight;
sideham.style.height=`calc(100vh - ${navh}px)`;
concards.style.height=`calc(100vh - ${navh}px)`;
sideham.style.top=`${navh}px`;
window.addEventListener("resize",function()
{
    const navh=navcon.offsetHeight;
    sideham.style.height=`calc(100vh - ${navh}px)`;
    sideham.style.top=`${navh}px`;
    concards.style.height=`calc(100vh - ${navh}px)`;
})
sidepro.addEventListener("click",function()
{
    if(this.classList.contains('opened'))
    {
        document.getElementById("side2").style.opacity="0";
        document.getElementById("side1").style.opacity="1";
        this.classList.remove("opened");
        sideham.style.transform="translateX(-100%)";
    }
    else
    {
        
        document.getElementById("side2").style.opacity="1";
        document.getElementById("side1").style.opacity="0";
        this.classList.add("opened");
        sideham.style.transform="translateX(0%)";
    }
});
plantcon.addEventListener("click",function()
{
    if(this.classList.contains('opened'))
    {
        
        this.classList.remove("opened");
        mobmenu.style.height="0%";
        mobmenu.style.padding="0px";
    }
    else
    {
        
        this.classList.add("opened");
        mobmenu.style.height="192px";
        mobmenu.style.padding="7px";
    }
});
sidepro1.addEventListener("click",function()
{
    if(this.classList.contains('opened'))
    {
        document.getElementById("side12").style.opacity="0";
        document.getElementById("side11").style.opacity="1";
        this.classList.remove("opened");
        sideham.style.transform="translateX(-100%)";
    }
    else
    {
        
        document.getElementById("side12").style.opacity="1";
        document.getElementById("side11").style.opacity="0";
        this.classList.add("opened");
        sideham.style.transform="translateX(0%)";
    }
});
// let noofcads=0;
function nocard()
{
    ///////////////////////////////change it to 0///////////////
    let i=1;
    if(i==0)
    {
        document.getElementById("nocard").style.zIndex="5";
        document.getElementById("nocard").style.opacity="1";
    }
}
nocard();


const pairs = document.querySelectorAll('.sellcard');
pairs.forEach(pair => {

    const firstElement = pair.querySelector('.popdes');
    const secondElement = pair.querySelector('.arrowdes');

    // Add a mouseover event listener to the first element
    secondElement.addEventListener('mouseover', () => {
        // Show the second element
        firstElement.style.opacity = '1';
    });

    // Add a mouseout event listener to hide the second element when the mouse leaves
    pair.addEventListener('mouseout', () => {
        // Hide the second element
        firstElement.style.opacity = '0';
    });
});
