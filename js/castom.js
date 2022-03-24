"use strict";

let audioTon = document.getElementById("audioTon");

let popup = document.getElementById('popup');
let closeBtn = document.getElementById("closeBtn");

let inputName = document.getElementById("inputName");
let nameSubmit = document.getElementById("nameSubmit");

let nameOutpur = document.getElementById("NameOutpur");
let profileImages = document.getElementById("profileImages");
let inputProfileImages = document.getElementById("inputProfileImages");

let messageBar = document.getElementById("messageBar");
let inputMessage = document.getElementById("inputMessage");
let messageSend = document.getElementById("messageSend");

let vidImgPhoto = document.getElementById("vidImgPhoto");


let nameStore = "Mehedi";


closeBtn.addEventListener("click", function() {
	popup.style.display = "none";
})

nameSubmit.addEventListener("click", function() {

	if (inputName.value !== "") {
		nameStore = inputName.value;
		nameOutpur.innerText = nameStore;
		popup.style.display = "none";
	}

	if (nameStore.length >= 8) {
		let sliceName = nameStore.slice(0,8);
		nameOutpur.innerText = sliceName + ".";
	}

	inputName.value = "";
})

inputProfileImages.addEventListener("input", function() {
	let url = URL.createObjectURL(this.files[0]);
	let uploadVlu = inputProfileImages.value.slice(-3, inputProfileImages.value.length);
	if (uploadVlu == "jpg" || uploadVlu == "png") {
		profileImages.src = url;
	}
})



function createTextMe(text,time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageMe";
	let blankDiv = document.createElement("div");
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let spanText = document.createElement("span");
	spanText.innerText = text;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(blankDiv);
	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(spanText);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}

function curentTime() {
	let amPM = "";
	let LTime = new Date();
	let hour = LTime.getHours();
	let minite = LTime.getMinutes();
	
	if (hour < 12) {
		amPM = "AM";
	} else {
		amPM = "PM";
	}

	switch (hour) {
		case 13 :
			hour = 1;
			break;
		case 14:
			hour = 2;
			break;
		case 15: 
			hour = 3;
			break;
		case 16:
			hour = 4;
			break;
		case 17:
			hour = 5;
			break;
		case 18:
			hour = 6;
			break;
		case 19: 
			hour = 7;
			break;
		case 20:
			hour = 8;
			break;
		case 21:
			hour = 9;
			break;
		case 22:
			hour = 10;
			break;
		case 23:
			hour = 11;
			break;
		case 0:
			hour = 12;
			break;
	}

	switch(minite) {
		case 0:
			minite = "00";
			break;
		case 1:
			minite = "01";
			break;
		case 2:
			minite = "02";
			break;
		case 3:
			minite = "03"
			break;
		case 5:
			minite = "05";
			break;
		case 6:
			minite = "06";
			break;
		case 7:
			minite = "07";
			break;
		case 8:
			minite = "08"
			break;
		case 9:
			minite = "09";
	}


	let timeShow =  hour + ":" + minite + " " + amPM;
	return timeShow;
}


messageSend.addEventListener("click", function() {

	condation(inputMessage.value);

	if (inputMessage.value !== "") {
		let output = createTextMe(inputMessage.value,curentTime());
		messageBar.appendChild(output);
		inputMessage.value = "";
	}
	
})



function createImages(imagesVlu, time) {
	let messageYou = document.createElement("div");
	messageYou.className =  "messageMe";
	let blankDiv = document.createElement("div");
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let images = document.createElement("img");
	images.src = imagesVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messageYou.appendChild(blankDiv);
	messageYou.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(images);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messageYou;
}


function createVideo(videoVlu, time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageMe";
	let blankDiv = document.createElement("div");
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let video = document.createElement("video");
	video.controls = true;
	video.src = videoVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(blankDiv);
	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(video);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}

function createAudio(audioVlu, time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageMe";
	let blankDiv = document.createElement("div");
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let audio = document.createElement("audio");
	audio.controls = true;
	audio.src = audioVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(blankDiv);
	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(audio);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}


vidImgPhoto.addEventListener("input", function() {
	let url = URL.createObjectURL(this.files[0]);
	let value = vidImgPhoto.value.slice(-3, vidImgPhoto.value.length);

	if (value == "jpg" || value == "png") {
		messageBar.appendChild(createImages(url, curentTime()));

		setTimeout(function() {
			messageBar.appendChild(createTextYou("Nice...", curentTime()));
			audioTon.play();
		}, 1500);
	} else if(value == "mp4") {
		messageBar.appendChild(createVideo(url, curentTime()));

		setTimeout(function() {
			messageBar.appendChild(createTextYou("Wow", curentTime()));
			audioTon.play();
		}, 1500);
	} else if (value == "mp3") {
		messageBar.appendChild(createAudio(url, curentTime()));

		setTimeout(function() {
			messageBar.appendChild(createTextYou("Vlo.", curentTime()));
			audioTon.play();
		}, 1500);
	}

})




function createImagesYou(imagesVlu, time) {
	let messageYou = document.createElement("div");
	messageYou.className =  "messageYou";
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let images = document.createElement("img");
	images.src = imagesVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messageYou.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(images);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messageYou;
}



function createVideoYou(videoVlu, time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageYou";
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let video = document.createElement("video");
	video.controls = true;
	video.src = videoVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(video);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}



function createAudioYou(audioVlu, time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageYou";
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let audio = document.createElement("audio");
	audio.controls = true;
	audio.src = audioVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(audio);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}


function createTextYou(audioVlu, time) {
	let messMe = document.createElement("div");
	messMe.className =  "messageYou";
	let messTex = document.createElement("div");
	messTex.className = "messTex";
	let inDiv = document.createElement("div");
	inDiv.className = "InDiv";
	let span = document.createElement("span");
	span.innerText = audioVlu;
	let timeS = document.createElement("div");
	timeS.className = "timeS";
	let timeSpan = document.createElement("span");
	timeSpan.innerText = time;
	let iconShowpost  = document.createElement("i");
	iconShowpost.className = "fa-solid fa-check";

	messMe.appendChild(messTex);
	messTex.appendChild(inDiv);
	inDiv.appendChild(span);
	inDiv.appendChild(timeS);
	timeS.appendChild(timeSpan);
	timeS.appendChild(iconShowpost);

	return messMe;
}







function condation(vlu) {
	if (vlu == "hi" || vlu == "Hi") {
		setTimeout(function() {
			messageBar.appendChild(createTextYou("Hi...", curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "Hello" || vlu == "hello" || vlu == "hellow" || vlu == "Hellow") {
		setTimeout(function() {
			messageBar.appendChild(createTextYou("Hello...", curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "How are you" || vlu == "how are you" || vlu == "How Are You") {
		setTimeout(function() {
			messageBar.appendChild(createTextYou("I am fine", curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "ছবি দাও" || vlu == "তমার একটা ছবি দও" || vlu == "তামার ছবি দাও" || vlu == "send photo" || vlu == "send image" || vlu == "send your images" || vlu == "send your photo") {
		setTimeout(function() {
			let images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGOPSFmnbQwJEklaSKkrxj5hX15oGNFs8FGXQpdhkFLZ4PlH3v7ziZj3xk_7yLo5Yvz4&usqp=CAU";
			messageBar.appendChild(createImagesYou(images, curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "একটা ভিডিও দাও" || vlu == "ভিডিও দাও" || vlu == "video" || vlu == "send video") {
		setTimeout(function() {
			let video = "video/1.mp4";
			messageBar.appendChild(createVideoYou(video, curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "একটা অডিও দাও" || vlu == "অডিও দাও" || vlu == "audio" || vlu == "send audio") {
		setTimeout(function() {
			let audio = "audio/ton.mp3";
			messageBar.appendChild(createAudioYou(audio, curentTime()));
			audioTon.play();
		}, 1500);
	} else if (vlu == "nice" || vlu == "Nice" || vlu == "good" || vlu == "Good") {
		setTimeout(function() {
			messageBar.appendChild(createTextYou("Thak You...", curentTime()));
			audioTon.play();
		}, 1500);
	}
	 else if (vlu == "তোমার নাম কী"|| vlu == "your name" || vlu == "your Name" || vlu == "Your Name" || vlu == "Your Name Plz" || vlu == "your name plz") {
		setTimeout(function() {
			let name = "My Name is " + nameStore;
			messageBar.appendChild(createTextYou(name, curentTime()));
			audioTon.play();
		}, 1500);
	}
}


