const c = {value : 0};
function myfunc(event, c) {
    c.value++;
    const id = event.target.id;
    const ele = document.getElementById(id);
    if (ele.innerHTML === "") {
        if (c.value % 2 === 0) {
            ele.innerHTML = "X";
        } else {
            ele.innerHTML = "O";
        }
    }
    if ((document.getElementById('1').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && document.getElementById('3').innerHTML === 'X') ||  (document.getElementById('4').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('6').innerHTML === 'X') || (document.getElementById('7').innerHTML === 'X' && document.getElementById('8').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') || (document.getElementById('1').innerHTML === 'X' && document.getElementById('4').innerHTML === 'X' && document.getElementById('7').innerHTML === 'X') || (document.getElementById('2').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('8').innerHTML === 'X') || (document.getElementById('3').innerHTML === 'X' && document.getElementById('6').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') || (document.getElementById('1').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') || (document.getElementById('3').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('7').innerHTML === 'X')) {
        window.alert("X Wins...");
        return;
    } else if ((document.getElementById('1').innerHTML === 'O' && document.getElementById('2').innerHTML === 'O' && document.getElementById('3').innerHTML === 'O') ||  (document.getElementById('4').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('6').innerHTML === 'O') || (document.getElementById('7').innerHTML === 'O' && document.getElementById('8').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') || (document.getElementById('1').innerHTML === 'O' && document.getElementById('4').innerHTML === 'O' && document.getElementById('7').innerHTML === 'O') || (document.getElementById('2').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('8').innerHTML === 'O') || (document.getElementById('3').innerHTML === 'O' && document.getElementById('6').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') || (document.getElementById('1').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') || (document.getElementById('3').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('7').innerHTML === 'O')) {
        window.alert("O Wins...");
    } else if (c.value===9) {
        window.alert("DRAW MATCH!!");
    }
}
