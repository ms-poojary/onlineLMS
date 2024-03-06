// im script
const popup=document.querySelectorAll('.popup');
const start=document.querySelector('#start');


for(let i=0;i<popup.length;i++){
popup[i].style.display='none';
}

function show(popupId) {
    var popup = document.getElementById(popupId);
    
const close=document.querySelectorAll('.close');
    if (popup) {
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        } else {
            popup.style.display = 'block';
        }
    }
    close.forEach(element => {
        close.addEventListener('click',()=>{
            console.log("close is clicked")
            popup.style.display='none'
        })
    });
   
}



