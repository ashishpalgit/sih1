const navcon=document.getElementById("navcontainer");
const sideham=document.getElementById("sideprofile");
const sidepro=document.getElementById("sideprofileham");
const sidepro1=document.getElementById("sideprofileham1");
const plantcon=document.getElementById("plantcon");
const mobmenu=document.getElementById("mobmenu");
const addcon=document.getElementById("addcon");
const navh=navcon.offsetHeight;
sideham.style.height=`calc(100vh - ${navh}px)`;
sideham.style.top=`${navh}px`;
addcon.style.height=`calc(100vh - ${navh}px)`;
window.addEventListener("resize",function()
{
    const navh=navcon.offsetHeight;
    sideham.style.height=`calc(100vh - ${navh}px)`;
    sideham.style.top=`${navh}px`;
    addcon.style.height=`calc(100vh - ${navh}px)`;
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
const addform=document.getElementById("addform");
const form=document.getElementById("addform").querySelector('form');
const descriptionbox=document.querySelector("#addcon #description");
const charcount=document.getElementById("charcount");
descriptionbox.addEventListener("keyup",function()
{
    charcount.innerText=`${descriptionbox.value.length}/100`;
})
function showform()
{
const computedStyle = window.getComputedStyle(addform);

const zIndexValue = computedStyle.getPropertyValue('z-index');


    if(zIndexValue!=1)
    {
        addform.style.zIndex="1";
        for(let i=1;i<=4;i++)
        {
            document.getElementById(`lab${i}`).style.background=`url(../resources/imguplogo.png)`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
    }
    
}
function cancelfun()
{
    addform.style.zIndex="-1";
    for(let i=1;i<=4;i++)
{
    document.getElementById(`lab${i}`).style.background=`url(../resources/imguplogo.png)`;
    document.getElementById(`lab${i}`).style.backgroundSize="60%";
    document.getElementById(`lab${i}`).style.backgroundPosition="center";
    document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
}
}
function donefun()
{
    let children=form.querySelectorAll("input:not(input[type='file']),textarea");
    let f=1;
    for(let i=0;i<children.length;i++)
    {
        let val=children[i].value;
        let val2=val.replace(/\s/g, "");//or trim()
        if(val2==='')
        {
            children[i].value="";
            f=0;
            
        }
    }
    if(f==0)
    return false;
    for(let i=1;i<=4;i++)
    {
        if(document.getElementById(`img${i}`).files.length===0)
        {
            document.getElementById("imgwarn").style.display='block';
            return false;
        }
    }
    document.getElementById("imgwarn").style.display='none';
    setTimeout(() => {
        form.reset();
        for(let i=1;i<=4;i++)
{
    document.getElementById(`lab${i}`).style.background=`url(../resources/imguplogo.png)`;
    document.getElementById(`lab${i}`).style.backgroundSize="60%";
    document.getElementById(`lab${i}`).style.backgroundPosition="center";
    document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
}
        addform.style.zIndex="-1";
    }, 0);
}
for(let i=1;i<=4;i++)
{
    document.getElementById(`img${i}`).addEventListener("change",function(){
        let k=1;
        for(let j=1;j<=4;j++)
        {
            if(document.getElementById(`img${j}`).files.length===0)
        {
            k=0;
            break;
        }
        }
        if(k)
        {
            document.getElementById("imgwarn").style.display='none';
        }
        let img=this.files[0];
        console.log(img);
        const reader=new FileReader();
        reader.onload=()=>{
            const imgUrl=reader.result;
            document.getElementById(`lab${i}`).style.background=`url(${imgUrl})`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
        reader.readAsDataURL(img);
    });
}