/* Obtain all elements with class name .soundboard-object */
var soundboardObjects = document.querySelectorAll(".soundboard-object");

/* Keep track of current audio playing */
var currentAudio = null;

/* Add click event listener to all .soundboard-object elements */
for (var i = 0; i < soundboardObjects.length; i++) {

    const soundboardObjectId = soundboardObjects[i].getAttribute('id'); // Obtain ID of current soundboard object
    const soundboardObject = document.getElementById(soundboardObjectId); // Obtain soundboard object using its id

    soundboardObject.addEventListener("click", function () {

        // pause the currently playing audio, if any
        if (currentAudio !== null) {
            currentAudio.pause();
        }

        switch (soundboardObjectId) {
            case "banjo-kazooie":
                var audio = new Audio("./sounds/banjo-kazooie-guh-huh.wav");
                audio.play();
                currentAudio = audio;
            break;

            case "pizza-song":
                var audio = new Audio("./sounds/pizza-song.mp3");
                audio.play();
                currentAudio = audio;
            break;

            case "bear":
                var audio = new Audio("./sounds/bear.mp3");
                audio.play();
                currentAudio = audio;
            break;
        }

    });
}