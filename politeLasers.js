function getLaserSetting(magicWord) {
    if (magicWord === 'please') {
        return 'OFF';
    } else {
        return 'ON';
    }
}

const currentSetting = getLaserSetting('OFF, please');
console.log('The current laser setting is: ' + currentSetting);