if (localStorage.getItem('a').length > 1){
	document.body.innerHTML = localStorage.getItem('a');
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        localStorage.setItem('a', document.body.innerHTML);
    }
});


