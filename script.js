
        //contact form start
        const scriptURL = 'https://script.google.com/macros/s/'
        const form = document.forms['submit-to-google-sheet']
        const msg= document.getElementById('msg')

        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message Sent Successfully"
            msg.classList.add('show')    // Add animation class
                setTimeout(() => {
                    msg.innerHTML = ""
                    msg.classList.remove('show')
                }, 5000)
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
  })
        //contact form end
        
        //Mouse Cursor 
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

// Disable mouse cursor effect on mobile devices
if (!("ontouchstart" in window)) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        // Update the position of the cursor dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Animate the cursor
        cursorOutline.animate(
            {
                left: `${posX}px`,
                top: `${posY}px`
            },
            { duration: 500, fill: "forwards" }
        );
    });
} else {
    // Hide the custom cursor on mobile
    if (cursorDot) cursorDot.style.display = "none";
    if (cursorOutline) cursorOutline.style.display = "none";
}
        //Mouse Cursor End

        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");

        function opentab(tabname)
        {
            for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu() 
        {
        sidemenu.classList.add("active"); 
        }

        function closemenu() 
        {
        sidemenu.classList.remove("active"); 
        }

        document.addEventListener("DOMContentLoaded", () => {
        const texts = document.querySelectorAll(".animated-text span");
        let currentIndex = 0;

        function animateText() {
            // Hide all text
            texts.forEach((text, index) => {
                text.style.opacity = index === currentIndex ? "1" : "0";
            });

            // Move to the next text
            currentIndex = (currentIndex + 1) % texts.length;

            // Schedule the next animation
            setTimeout(animateText, 2000); // Change every 2 seconds
        }

        // Start the animation
        animateText();
    });
    