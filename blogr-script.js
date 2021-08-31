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

//menu icon
let changeIcon=true;
const menuIconDom=document.querySelector('.menu_bar_icon');
const menuIcon=document.querySelector('.menu_bar_icon i');
menuIcon.addEventListener('click',()=>{
    if(changeIcon){
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        changeIcon=false;
    }else{
       menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        changeIcon=true;
    }
});