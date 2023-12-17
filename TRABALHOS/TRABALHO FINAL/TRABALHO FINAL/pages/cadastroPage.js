const inputFile = document.querySelector('#picture_input')
const pictureImage = document.querySelector('.picture_image')
const pictureImageTxt = 'Import an image';

inputFile.addEventListener('change', (e) =>{
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if(file){
    const reader = new FileReader();

    reader.addEventListener('load', function(e) {
      const thisReader = e.target;

      const img = document.createElement('img');
      img.src = thisReader.result
      img.classList.add('picture_img');

      pictureImage.innerHTML = ''
      pictureImage.appendChild(img);
    })

    reader.readAsDataURL(file);

  } else{
    pictureImage.innerHTML = pictureImageTxt
  }
})

const sendRegisterInput = document.getElementById('register')

sendRegisterInput.addEventListener('click', () =>{
  window.location.href = 'https://fonts.google.com/';
})