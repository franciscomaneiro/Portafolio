const IMG_COHEM = {
  url1: 'img/Banner.png',
  url2: 'img/Lastnews.png',
  url3: 'img/Login.png'
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
    default:

  }
  document.getElementById('Modal').style.display = 'block'
}

function changeImg(changeurl) {
  let defineurl;

  switch (changeurl) {
    case 'url1':
    defineurl = url1;
    break;
    case 'url2':
    defineurl = url2;
    break;
    case 'url2':
    defineurl = url3;
    break;
  }
  console.log(globalProyecto, changeurl)

  document.getElementById('main_img').src = globalProyecto.defineurl;
}


function closeModal() {
  document.getElementById('Modal').style.display = 'none'
}
