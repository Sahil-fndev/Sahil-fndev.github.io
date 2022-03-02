//  get current year
    let date = new Date();
    year = date.getFullYear();
    document.getElementById('year').innerText = year;



    // for button
    let btn = document.getElementById("btntotop");

    //  show button when scroll
    window.onscroll = function() {
        scrollfunction()
    }

    function scrollfunction() {
        if (document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
          } else {
            btn.style.display = "none";
          }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0;
}