//nav bar 
const btn=document.querySelectorAll('.menu_section_link_one');
const dropdowns=document.querySelectorAll('.dropdown_menu');
btn.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        let ele=e.target.nextElementSibling;
        if(ele===null){
            ele=e.target.previousElementSibling;
        }else{
            ele=e.target.nextElementSibling;
        }
        dropdowns.forEach((e)=>{
            e.style.visibility="hidden";
        });
        ele.style.visibility="visible";
    });
});
//nab bar

//menu icon and work
let changeIcon=true;
const menuDom=document.querySelector('.menu_mobile');
const menuIcon=document.querySelector('.menu_bar_icon i');
menuIcon.addEventListener('click',()=>{
    if(changeIcon){
        menuIcon.classList.remove('fa-bars');
        menuDom.style.visibility="visible";
        menuIcon.classList.add('fa-times');
        changeIcon=false;
    }else{
       menuIcon.classList.remove('fa-times');
       menuDom.style.visibility="hidden";
        menuIcon.classList.add('fa-bars');
        changeIcon=true;
    }
});
//menu icon and work

//menu list options
const optionOne=document.querySelector('.menu_mobile_one_text');
const optionsOneIcon=document.querySelector('#mb_icon_one');
let optionOneResultStatus=true;
const optionTwo =document.querySelector('.menu_mobile_two_text');
const optionsTwoIcon=document.querySelector('#mb_icon_two');
let optionTwoResultStatus=true;
const optionThree =document.querySelector('.menu_mobile_three_text');
const optionsThreeIcon=document.querySelector('#mb_icon_three');
let optionThreeResultStatus=true;
const optionOneResult=document.querySelector('.menu_mobile_one_options');
const optionTwoResult=document.querySelector('.menu_mobile_two_options');
const optionThreeResult=document.querySelector('.menu_mobile_three_options');
optionOne.addEventListener('click',()=>{
    optionOneResultStatus ? optionOneResult.style.display="block":optionOneResult.style.display="none";
    optionOneResultStatus ? optionsOneIcon.style.transform="rotate(180deg)":optionsOneIcon.style.transform="rotate(0deg)";
    optionOneResultStatus ? optionOneResultStatus=false:optionOneResultStatus=true;
});
optionTwo.addEventListener('click',()=>{
    optionTwoResultStatus ? optionTwoResult.style.display="block":optionTwoResult.style.display="none";
    optionTwoResultStatus ? optionsTwoIcon.style.transform="rotate(180deg)":optionsTwoIcon.style.transform="rotate(0deg)";
    optionTwoResultStatus ? optionTwoResultStatus=false:optionTwoResultStatus=true;
});
optionThree.addEventListener('click',()=>{
    optionThreeResultStatus ? optionThreeResult.style.display="block":optionThreeResult.style.display="none";
    optionThreeResultStatus ? optionsThreeIcon.style.transform="rotate(180deg)":optionsThreeIcon.style.transform="rotate(0deg)";
    optionThreeResultStatus ? optionThreeResultStatus=false:optionThreeResultStatus=true;
});
//menu list options