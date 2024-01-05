const atiku = document.querySelector('.atikuOne')
const obi = document.querySelector('.obiOne')
const tinubu = document.querySelector('.tinubuOne')



document.querySelector('#peterObi').addEventListener('click', peterShow)
document.querySelector('#bolaTinubu').addEventListener('click',bolaShow)
document.querySelector('#atikuTwo').addEventListener('click',atikuShow)


function peterShow(){
  atiku.classList.add('hidden')
  obi.classList.toggle('hidden')
  tinubu.classList.add('hidden')
}

function bolaShow(){
  atiku.classList.add('hidden')
  obi.classList.add('hidden')
  tinubu.classList.toggle('hidden')
}

function atikuShow(){
  atiku.classList.toggle('hidden')
  obi.classList.add('hidden')
  tinubu.classList.add('hidden')
}