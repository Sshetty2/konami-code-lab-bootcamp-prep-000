const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];




function init() {
let index = 0
  document.addEventListener('keydown', (event) => {
  const keyName = event.which;
  
  if (keyName === codes[index] ) {
    index++;
    
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
    index = 0;
    }
  } );

}