

//this is the transition from the landing page to the home page // 

setTimeout(() => {
      document.body.classList.add("fade-out");

setTimeout(() => {
        window.location.href = "main.html";
      }, 1000); 
    }, 5000); //ammount of time spent on landing page //



