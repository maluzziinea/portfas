function redirect(buttonID = 0, redirectPage = "www.google.com") {
  let button = document.getElementById(buttonID);
  button.addEventListener("click", function () {
    window.location.href = redirectPage;
  });
}

redirect('genshin', 'https://genshin-impact-gamma.vercel.app')

redirect('pong', 'https://pong-beta-tan.vercel.app')

redirect('vaquinha', 'https://jogo-da-vaquinha.vercel.app')