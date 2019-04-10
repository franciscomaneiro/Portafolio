const IMG_COHEM = {
  'url1': 'img/Banner.png',
  'url2': 'img/Lastnews.png',
  'url3': 'img/Login.png'
}
const IMG_RADRSERVA = {
  'url1': 'img/loginradreserva.png',
  'url2': 'img/imagenrecortada.png',
  'url3': 'img/imagen2.png'
}

var globalProyecto;


function fotosModal(obj) {
  document.getElementById('main_img').src = obj.url1
  document.getElementById('img_1').src = obj.url1
  document.getElementById('img_2').src = obj.url2
  document.getElementById('img_3').src = obj.url3
}




function showModal(proyecto) {
  switch (proyecto) {
    case 'Cohem':
        fotosModal(IMG_COHEM);
        globalProyecto = IMG_COHEM
      break;
    case 'Radreserva':
        fotosModal(IMG_RADRSERVA);
        globalProyecto = IMG_RADRSERVA
    default:

  }
  document.getElementById('Modal').style.display = 'block'
}

function changeImg(changeurl) {
  let defineurl

  switch (changeurl) {
    case 'url1':
    defineurl = globalProyecto.url1;
    break;
    case 'url2':
    defineurl = globalProyecto.url2;
    break;
    case 'url2':
    defineurl = globalProyecto.url3;
    break;
    }

  document.getElementById('main_img').src = defineurl;
}


function closeModal() {
  document.getElementById('Modal').style.display = 'none'
}
