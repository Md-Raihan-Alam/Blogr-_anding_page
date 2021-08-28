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
