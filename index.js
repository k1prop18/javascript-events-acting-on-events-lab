// Your code here
const dodger = document.getElementById('dodger');

dodger.addEventListener('keydown', (event)=>{
    if (event.key === "ArrowLeft"){
        const leftNumbers = dodger.style.left.replace('px', "")
        const left = parseInt(leftNumbers, 10)

        dodger.style.left = `${left - 1}px`
    }
})
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  

  
  
    

}
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
    
    
    }
    

    
  


    
  



  


    