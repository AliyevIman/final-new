"use strict"



// $(".accordion .accordion-item button").click(function(){






//     $(this).next().stop().toggle(500);







// })

var btn = document.querySelectorAll(".accordion button")
var p = document.querySelectorAll(".accordion ul")

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        // for (let j = 0; j < p.length; j++) {
        //     p[j].classList.remove("active")
        // }
        this.nextElementSibling.classList.toggle("active")
    }

}