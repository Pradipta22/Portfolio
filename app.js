$(function() {
    $('.chart').easyPieChart({
      size: 160,
      barColor: "#ffa500",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#525151",
      lineCap: "circle",
      animate: 2000,
    });
  });
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz6r2Mh1Mr-Z4gomSLROPGKCz_XNtBkje6jYVCQ9jQZ2g2jTJJm5QSP3sMsK_LAsnC6/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
 ;
 var sidemenu = document.getElementById("sidemenu");
 
 function openmenu(){
  sidemenu.style.left = "0";
 }
 function closemenu(){
  sidemenu.style.left = "-200px";
 }
//  const bgchange = (id) =>{
  
//   document.body.style.background = document.getElementById(id).innerHTML
  
 
//  }
 
var dots = [];
                for(var i = 0; i<28; i++) {
                var node = document.createElement("div");
                node.className = "trail";
                document.body.appendChild(node);
                dots.push(node);
                
                }
                
                var currentDot = 0;
                addEventListener("mousemove", function(event) {
                    var dot = dots[currentDot];
                    dot.style.left = (event.pageX - 3) + "px";
                    dot.style.top = (event.pageY - 3) + "px";
                    currentDot = (currentDot + 1) % dots.length;
                   
                });