 // Gift box animation
 const giftBox = document.getElementById("giftBox");
 const message = document.getElementById("message");


 giftBox.addEventListener('click', () => {
   gsap.to(giftBox, {
     scale: 0,
     duration: 0.8,
     ease: 'back.in',
     onComplete: () => {
       giftBox.style.display = 'none';
       message.style.display = 'block';
       gsap.fromTo(
         message,
         {opacity: 0},
         {opacity: 1, duration: 1}
       );
     },
   });
 });

 // Snowfall effect
 function createSnowflakes() {
    const count = 100;
    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';
      snowflake.style.animationDuration = Math.random() * 5 + 10 + 's';
      snowflake.style.opacity = Math.random();
      document.body.appendChild(snowflake);
      setTimeout(() => snowflake.remove(), 15000);
    }
  }
  setInterval(createSnowflakes, 500);

  // Navigate to surprise page
  function navigateToSurprise() {
    window.location.href = 'surprise.html';
  }