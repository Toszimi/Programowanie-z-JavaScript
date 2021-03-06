document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);

let recordStartTime;
const recordedSounds = [];

function onKeyPress(ev) {
    let soundName;
    switch (ev.code) {
    case 'KeyA':
        soundName = 'boom';
        break;
    case 'KeyS':
        soundName = 'clap';
        break;
    case 'KeyD':
        soundName = 'hihat';
        break;
    case 'KeyF':
        soundName = 'kick';
        break;
    case 'KeyZ':
        soundName = 'openhat';
        break;
    case 'KeyX':
        soundName = 'ride';
        break;
    case 'KeyC':
        soundName = 'snare';
        break;
    case 'KeyV':
        soundName = 'tink';
        break;
    case 'KeyB':
        soundName = 'tom';
        break;
    }
    if (soundName) {
        const soundTime = Date.now() - recordStartTime;
        const soundObj = {
            id: soundName, 
            time: soundTime
        };
        recordedSounds.push(soundObj);
        playSound(soundName);
    }
}

function onRecordBtnClick() {
    recordStartTime = Date.now();
}
function onPlayBtnClick() {
    for (let index = 0; index < recordedSounds.length; index++) {
        const soundObj = recordedSounds[index];
        setTimeout(
            () => {
                playSound(soundObj.id);
            },
            soundObj.time
        );
        
    }
}

function playSound(id) {
    const sound = document.querySelector('#' + id);
    sound.currentTime = 0;
    sound.play();
}