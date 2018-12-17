document.body.innerHTML = localStorage.getItem('key');

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13 ) {
    	localStorage.setItem('key', document.body.innerHTML);
    	}
	});
