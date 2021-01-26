document.onreadystatechange = function() { 
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
    }
};


let modal = document.getElementById('myModal');
let span = document.querySelector('.close');

window.onload = function() {
    modal.style.display = 'block'
}
span.addEventListener('click', function() {
    modal.style.display = 'none'}    
);
