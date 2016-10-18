function onLoad() {
	document.getElementById('text').value = 'Hello, World!';
}

if (document.readyState !== 'loading') {
	onLoad();
} else {
	document.addEventListener('DOMContentLoaded', onLoad);
}
