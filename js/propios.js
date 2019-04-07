const IMG_COHEM = {
  url1: 'img/Banner.png',
  url2: 'img/Lastnews.png',
  url3: 'img/Login.png'
}




function fotosCohem(obj) {
  document.getElementById('main_img').src = obj.url1
  document.getElementById('img_1').src = obj.url1
  document.getElementById('img_2').src = obj.url2
  document.getElementById('img_3').src = obj.url3
}


function showModal(proyecto) {
  switch (proyecto) {
    case 'Cohem':
        fotosCohem(IMG_COHEM)
      break;
    default:

  }
  document.getElementById('Modal').style.display = 'block'
}



function closeModal() {
  document.getElementById('Modal').style.display = 'none'
}
