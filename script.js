function moveButton() {
    var noButton = document.getElementById('noButton');
    var buttonContainer = document.querySelector('.button-container');
    
    var maxX = window.innerWidth - noButton.clientWidth;
    var maxY = window.innerHeight - noButton.clientHeight;
    
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;
    
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
  }
  
  function redirect(isYesClicked) {
    if (isYesClicked) {
      window.location.href = 'confirmation.html';
    }
  }
  