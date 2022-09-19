const COLOR_INIT = '#FFFFFF';
const CONTENTS_ID = 'contents';
const COLOR_PICKER_ID = 'color-picker';
const FULL_SCREEN_BUTTON_ID = 'full-screen-button';
const BLACK_BUTTON_ID = 'black-button';
const RED_BUTTON_ID = 'red-button';
const GREEN_BUTTON_ID = 'green-button';
const BLUE_BUTTON_ID = 'blue-button';
const YELLOW_BUTTON_ID = 'yellow-button';
const CYAN_BUTTON_ID = 'cyan-button';
const MAGENTA_BUTTON_ID = 'magenta-button';
const WHITE_BUTTON_ID = 'white-button';
const BLACK = '#000000';
const RED = '#FF0000';
const GREEN = '#00FF00';
const BLUE = '#0000FF';
const YELLOW = '#FFFF00';
const CYAN = '#00FFFF';
const MAGENTA = '#FF00FF';
const WHITE = '#FFFFFF';

window.onload = () => {
    document.body.style.backgroundColor = COLOR_INIT;
    document.getElementById(COLOR_PICKER_ID).value = COLOR_INIT;
}

document.getElementById(COLOR_PICKER_ID).addEventListener('change', (event) => {
    changeColor(event.target.value);
});

document.getElementById(FULL_SCREEN_BUTTON_ID).addEventListener('click', () => {
    if (isFullScreen()) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
});

document.body.addEventListener('click', (event) => {
    if (event['path'].length == 4){
        var c = document.getElementById(CONTENTS_ID);
        if (c.style.display == 'none') c.style.display = '';
        else c.style.display = 'none';
    }
});

document.getElementById(BLACK_BUTTON_ID).addEventListener('click', () => changeColor(BLACK));
document.getElementById(RED_BUTTON_ID).addEventListener('click', () => changeColor(RED));
document.getElementById(GREEN_BUTTON_ID).addEventListener('click', () => changeColor(GREEN));
document.getElementById(BLUE_BUTTON_ID).addEventListener('click', () => changeColor(BLUE));
document.getElementById(YELLOW_BUTTON_ID).addEventListener('click', () => changeColor(YELLOW));
document.getElementById(CYAN_BUTTON_ID).addEventListener('click', () => changeColor(CYAN));
document.getElementById(MAGENTA_BUTTON_ID).addEventListener('click', () => changeColor(MAGENTA));
document.getElementById(WHITE_BUTTON_ID).addEventListener('click', () => changeColor(WHITE));

const isFullScreen = () => 
    (document.fullscreenElement !== undefined && document.fullscreenElement !== null) || // HTML5
    (document.mozFullScreenElement !== undefined && document.mozFullScreenElement !== null) || // Firefox
    (document.webkitFullscreenElement !== undefined && document.webkitFullscreenElement !== null) || // Chrome Safari
    (document.webkitCurrentFullScreenElement !== undefined && document.webkitCurrentFullScreenElement !== null) || // Chrome Safari (Old)
    (document.msFullscreenElement !== undefined && document.msFullscreenElement !== null); // IE EdgeLegacy

const changeColor = (value) => {
    document.getElementById(COLOR_PICKER_ID).value = value;
    document.body.style.backgroundColor = value;
}