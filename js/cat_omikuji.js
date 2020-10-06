$(function(){
    ornd = Math.floor(Math.random()*7);
	switch(ornd) {
		case 0:
		console.log('大凶');
		break;
		case 1:
		console.log('凶');
		break;
		case 2:
		console.log('末吉');
		break;
		case 3:
		console.log('吉');
		break;
		case 4:
		console.log('小吉');
		break;
		case 5:
		console.log('中吉');
		break;
		case 6:
		console.log('大吉');
		break;
		default:
		console.log('ネコ');
	}
});