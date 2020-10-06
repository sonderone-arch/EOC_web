crnd = Math.floor(Math.random()*6+1);
cookie_data = '';
switch(crnd) {
	case 1:
		cookie_data = 'plane_cookie';
	break;
	case 2:
		cookie_data = 'chocolate_cookie';
	break;
	case 3:
		cookie_data = 'butter_cookie';
	break;
	case 4:
		cookie_data = 'cinnamon_donuts';
	break;
	case 5:
		cookie_data = 'pop_tarts';
	break;
	case 6:
		cookie_data = 'silver_vine_cookie';
	break;
	default:
	cookie_data = ':3';
}
document.cookie = 'cookie=' + encodeURIComponent('piece_of_'+cookie_data );
console.log('cat bitted a '+cookie_data+'.');

if(('sessionStorage' in window) && (window.sessionStorage !== null)) {
    // ok
	sessionStorage.setItem('dust', "cat_hair");
} else {
    // ^._.^
}
if(('localStorage' in window) && (window.localStorage !== null)) {
    // ok
	localStorage.setItem('dust', "cat_hair");
} else {
    // ^._.^
}