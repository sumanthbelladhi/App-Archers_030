document.addEventListener('DOMContentLoaded', function () {
   const hamburger = document.getElementById('hamburger');
   const links = document.getElementById('links');
   let isMenuVisible = false;

   hamburger.addEventListener('click', function () {
       if (isMenuVisible) {
           hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
           links.classList.add('remove');
           links.classList.remove('show');
           isMenuVisible = false;
       } else {
           hamburger.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
           links.classList.remove('remove');
           links.classList.add('show');
           isMenuVisible = true;
       }
   });
});
