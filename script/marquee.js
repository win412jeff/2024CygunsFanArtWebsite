const imgList1 = [
  './images/message/Marquee/f033_cover.webp',
  './images/message/mes045.webp',
  './images/message/Marquee/f041_cover.webp',
  './images/message/mes049.webp',
  './images/message/Marquee/f028_cover.webp',
  './images/message/mes071.webp',
  './images/message/Marquee/f031_cover.webp',
  './images/message/mes030.webp',
  './images/message/Marquee/f037_cover.webp',
  './images/message/mes056.webp',
  './images/message/Marquee/f043_cover.webp',
  './images/message/mes024.webp',
  './images/message/Marquee/f075_cover.webp',
  './images/message/mes023.webp',
  './images/message/Marquee/f080_cover.webp',
  './images/message/mes053.webp',
  './images/message/Marquee/f081_cover.webp',
  './images/message/mes044.webp',
  './images/message/Marquee/f082_cover.webp',
  './images/message/mes08.webp',
  './images/message/Marquee/f083_cover.webp',
  './images/message/mes03.webp',
  './images/message/Marquee/f084_cover.webp',
  './images/message/mes035.webp',
  './images/message/Marquee/f085_cover.webp',
  './images/message/mes051.webp',
  './images/message/Marquee/f097_cover.webp',
]

const imgList2 = [
  './images/message/Marquee/f042_cover.webp',
  './images/message/mes093.webp',
  './images/message/Marquee/f096_cover.webp',
  './images/message/mes094.webp',
  './images/message/Marquee/f052_cover.webp',
  './images/message/mes032.webp',
  './images/message/Marquee/f058_cover.webp',
  './images/message/mes050.webp',
  './images/message/Marquee/f067_cover.webp',
  './images/message/mes072.webp',
  './images/message/Marquee/f074_cover.webp',
  './images/message/mes070.webp',
  './images/message/Marquee/f086_cover.webp',
  './images/message/mes077.webp',
  './images/message/Marquee/f087_cover.webp',
  './images/message/mes040.webp',
  './images/message/Marquee/f088_cover.webp',
  './images/message/mes039.webp',
  './images/message/Marquee/f089_cover.webp',
  './images/message/mes078.webp',
  './images/message/Marquee/f090_cover.webp',
  './images/message/mes068.webp',
  './images/message/Marquee/f091_cover.webp',
  './images/message/mes064.webp',
  './images/message/Marquee/f092_cover.webp',
]

const getElementTemplate = (src) => /* html */ `<li><img src="${src}" alt=""></li>`
const getContainerTemplate = (srcList) => {
  const elementTemplates = srcList
    .map(getElementTemplate)
    .join('\n')
    .repeat(2)
  return /* html */ `
    <ul>
      ${elementTemplates}
    </ul>
  `
}

const fanmessageElement = document.querySelector('#fanmessage')
const marqueeUpElement = fanmessageElement.querySelector('.up')
const marqueeDownElement = fanmessageElement.querySelector('.down')

marqueeUpElement.innerHTML = getContainerTemplate(imgList1)
marqueeDownElement.innerHTML = getContainerTemplate(imgList2)

// 滑鼠 hover 時暫停動畫
const upUlElement = marqueeUpElement.querySelector('ul')
const downUlElement = marqueeDownElement.querySelector('ul')

upUlElement.addEventListener('mouseover', () => upUlElement.style.animationPlayState = 'paused')
upUlElement.addEventListener('mouseleave', () => upUlElement.style.animationPlayState = 'running')

downUlElement.addEventListener('mouseover', () => downUlElement.style.animationPlayState = 'paused')
downUlElement.addEventListener('mouseleave', () => downUlElement.style.animationPlayState = 'running')
