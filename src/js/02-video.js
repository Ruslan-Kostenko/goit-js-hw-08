import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    src: "https://player.vimeo.com/video/236203659",
    width: 640
});

const timeUpdater = data => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};

const throttleTimeUpdater = throttle(timeUpdater, 1000);
player.on('timeupdate', throttleTimeUpdater);

const timeOfStart = JSON.parse(localStorage.getItem('videoplayer-current-time')) ?? 0;

player.setCurrentTime(timeOfStart);