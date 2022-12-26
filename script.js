

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})




if (window.innerWidth > 768) {
    sidebar.classList.add('hide');
}


const searchForm = document.querySelector('#content nav form');
const searchButtonIcon = document.querySelector('#content form .form-input button .bx');
const searchButton = document.querySelector('#content form .form-input button');
searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        console.log('djjdj')
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
}
    
})


