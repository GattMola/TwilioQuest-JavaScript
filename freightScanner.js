function scan(freightItems) {
    let contrabandCount = 0;
    freightItems.forEach(function(freightItem) {
        if (freightItem == 'contraband') {
            contrabandCount++;
        }
    });
    return contrabandCount;
}

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 
'contraband']);
console.log('Number of "contraband": ' + numItems)