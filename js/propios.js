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
const GIT = 'img/gitgithub_diploma.png';
const JS = 'img/jsdiploma.png'

var globalProyecto;


function fotosModal(obj) {
  document.getElementById('main_img').src = obj.url1
  document.getElementById('img_1').src = obj.url1
  document.getElementById('img_2').src = obj.url2
  document.getElementById('img_3').src = obj.url3
}




function modalDiploma(diploma){
  document.getElementById('modalname').innerText = 'Diploma'
  document.getElementById('Modal').style.display = 'block'
  
}

function showModal(proyecto) {
  switch (proyecto) {
    case 'Cohem':
    fotosModal(IMG_COHEM);
        globalProyecto = IMG_COHEM
        document.getElementById('Modal').style.display = 'block'
      break;
    case 'Radreserva':
        fotosModal(IMG_RADRSERVA);
        globalProyecto = IMG_RADRSERVA
        document.getElementById('Modal').style.display = 'block'
      break;
    case 'js':
        modalDiploma(JS);
        // document.getElementById('Modal-diploma').style.display = 'block'
        // document.getElementById('img-diploma').src = JS
        // console.log('JS')
      break;
    case 'git':
        modalDiploma(GIT);
        // document.getElementById('Modal-diploma').style.display = 'block'
      break;
  }
  
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
    case 'url3':
    defineurl = globalProyecto.url3;
    break;
    }

  document.getElementById('main_img').src = defineurl;
}

function closeModal() {
  document.getElementById('Modal').style.display = 'none';
  document.getElementById('modalsito2').style.display = 'none';
}
