function scan(freightItems) {
    let contrabandIndexes = [];
    freightItems.forEach(function(freightItem, idx) {
        if (freightItem === 'contraband') {
            contrabandIndexes.push(idx);
        }
    });
    return contrabandIndexes;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);