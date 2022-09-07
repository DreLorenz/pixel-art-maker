function makePixel() {
    let body = document.getElementsByTagName('body');
    let newPixel = document.createElement('div');
  
    newPixel.style.width = '2%';
    newPixel.style.paddingBottom = '2%';
    newPixel.style.cssFloat = 'left';
    newPixel.style.border = '1px solid lightGrey';
    newPixel.className = 'squarePixel'
    pixelBoard.append(newPixel);
  
    newPixel.addEventListener('dblclick', () => {
      newPixel.style.backgroundColor = 'white';
      newPixel.style.borderColor = 'lightGrey';
    })
  
  }
  
  for (i = 0; i < 1125; i++) {
    makePixel();
  }
  
  let squarePixel = document.getElementsByClassName('squarePixel')
  for (let i = 0; i < squarePixel.length; i++) {
    squarePixel[i].addEventListener('mousedown', (e) => {
      e.target.style.backgroundColor = colorChoice;
      e.target.style.borderColor = colorChoice;
    })
    squarePixel[i].addEventListener('mouseenter', (e) => {
      if (e.buttons === 1) {
        e.target.style.backgroundColor = colorChoice;
        e.target.style.borderColor = colorChoice;
      }
    })
  }
  
  let colorChoice;
  
  chooseButton.addEventListener('click', () => {
    colorChoice = colorPicker.value;
  })


var saveName = document.getElementsByClassName('saveName');

// localStorage.setItem("name", colorArr)

// var load = localStorage.getItem()

var colorArr = [];

for (i = 0; i < squarePixel.length; i++) {
    colorArr.push(squarePixel[i])
  }


