// code your solution here

function superbowlWin(array) {
    const firstWinObj = array.find(obj => obj.result == "W");
    if(firstWinObj != undefined) return firstWinObj.year;

    return firstWinObj;
}