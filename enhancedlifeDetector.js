const argumentValue = process.argv[2];
const treelifeStatus = Number(argumentValue);

if (treelifeStatus === Number(0)) {
    console.log('alive');
} else if (treelifeStatus === Number(1)) {
    console.log('flowering');
} else if (treelifeStatus === Number(2)) {
    console.log('shedding');
} else if (treelifeStatus === Number(3)) {
    console.log('other')
}