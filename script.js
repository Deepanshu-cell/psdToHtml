let btn = document.getElementsByClassName('.label-icon-btn')

let handleClick=(btn)=>{
    let parentLi = btn.parentElement.parentElement; 
    let parentUl = btn.parentElement.parentElement.parentElement; 
    let liArray = parentUl.getElementsByClassName("accordion-li");
    let checkBtn = parentLi.getElementsByTagName("input")[0];

    for(let i=0;i<liArray.length;i++){
        let tempBtn = liArray[i].getElementsByTagName("input")[0];
        let spanIcon = tempBtn.parentElement.getElementsByClassName("label-icon")[0];
        if(tempBtn.id !== checkBtn.id){
            tempBtn.checked = false;
            spanIcon.innerHTML = "add";
        }else{
            tempBtn.checked = true;
            spanIcon.innerHTML = 'remove';
        }
    }

}