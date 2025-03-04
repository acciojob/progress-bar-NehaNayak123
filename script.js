const progress=document.getElementById("progress")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const circles=document.querySelectorAll(".circle");

let curr=1;

next.addEventListener("click", ()=>{
    curr++;
    // console.log(curr)
    if(curr>circles.length){
        curr=circles.length
    }
    render()
})
prev.addEventListener("click", ()=>{
    curr--;
    console.log(curr)
    if(curr<1){
        curr=1;
    }
    render()
})
function render(){
    circles.forEach((circle, idx)=>{
        if(idx<curr){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    if(curr>1){
        prev.disabled=false;
    }
	// else{
        // prev.disabled=false;
    // }

    if(curr===circles.length){
        next.disabled=true;
    }else{
        next.disabled=false;
    }
}