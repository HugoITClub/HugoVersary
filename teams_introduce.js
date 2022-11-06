
function imgAnimation(pics, picImgs) {
   pics.forEach((pic, index) => {
      dataIndex = pic.dataset.index;
      pic.style.transform = `rotate(calc(45deg + ${dataIndex} * 90deg))`;
      if (dataIndex % 4 === 1 || dataIndex % 4 === -3) {
         picImgs[index].style.transform = `rotate(calc(-45deg - ${dataIndex} * 90deg)) scale(2.1)`;
      } else {
         picImgs[index].style.transform = `rotate(calc(-45deg - ${dataIndex} * 90deg)) scale(1)`;
      }
   });
}

function textAnimation(texts, textElement) {
   texts.forEach((text, index) => {
      dataIndex = text.dataset.index;
      text.style.display = 'inline-block';
      if (dataIndex % 4 === 1 || dataIndex % 4 === -3) {
         textElement[index].style.display = 'inline-block';
      } else {
         texts[index].style.display = 'none';
         textElement[index].style.display = 'none';
      }
   });
}

const pics = document.querySelectorAll('.team-icon');
const picImgs = document.querySelectorAll('.teams-icon-img');
imgAnimation(pics, picImgs);
const texts = document.querySelectorAll('.team-all');
const textElement = document.querySelectorAll('.team-text');
textAnimation(texts, textElement);

const btnUp = document.querySelectorAll('.btn-rotate-up');
const btnDown = document.querySelectorAll('.btn-rotate-down');

const handlePreviousButtonClicked = () => {
   pics.forEach(pic => {
      pic.dataset.index++;
   });
   texts.forEach(text => {
      text.dataset.index++;
   })
   imgAnimation(pics, picImgs);
   textAnimation(texts, textElement);
   
};
const handleNextButtonClicked = () => {
   pics.forEach(pic => {
      pic.dataset.index--;
   });
   texts.forEach(text => {
      text.dataset.index--;
   })
   imgAnimation(pics, picImgs);
   textAnimation(texts, textElement);
};   


btnUp.forEach(btn => btn.onclick = handlePreviousButtonClicked)
btnDown.forEach(btn => btn.onclick = handleNextButtonClicked)