/**
* A Javascript music player app.
*
*/

(function(context){

	var currentSong = {};
	var nextSong = {};
	var prevSong = {};


	var defaultSong = {	title: "Uyire - Uyire",	artist: "A.R Rahman",	duration: 60 };
	var playList = [
		{title: "Uyire - Uyire",	artist: "A.R Rahman",	duration: 60 },
		{title: "Newyork Nagaram",	artist: "A.R Rahman",	duration: 50 },
	];

	function playSong(song){
		this.currentSong = song || this.defaultSong;
		console.log(currentSong.title + ' is playing.');
		setTimeout(function(){
			console.log("Next song is ");
		},currentSong.duration*1000)

		return this;
	}

	function displaySong(){
		console.log(this.currentSong);
	}
	
	var M = M$ = function(){
		return new 
	}
})(window)

