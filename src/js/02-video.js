import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const saveTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(saveTime);
console.log(localStorage);
setTime();

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)

);

function setTime() {
    if (localStorage.length === 0) {
      console.log('start')
      player.setCurrentTime(0);
      return;
    } else {
      console.log('continue')
      player.setCurrentTime(saveTime);
    return;
   }
};
  
