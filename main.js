window.addEventListener("DOMContentLoaded", () => {
	const WHATSAPP_GROUP_LINK = "https://bit.ly/mill_comm";
	const claimBtn = document.querySelector(".claim-btn");
	const shareBtn = document.querySelector(".share-btn");
	const infoElement = document.querySelector(".info");
	const timerElement = document.querySelector(".timer");

	const clickedShareBtn = sessionStorage.getItem("clickedShareBtn") || false;
    const waitedTillCountdownEnded = sessionStorage.getItem("waitedTillCountdownEnded") || false;

    const countdownTime = 5 * 60 // 5 mins in seconds

    const startCountdown = (countdownTime, countdownDisplay) => {
        const updateCountdown = () => {
            const min = Math.floor(countdownTime / 60)
            const sec = countdownTime % 60

            countdownDisplay.textContent = `0${min}m ${sec < 10? '0' : ''}${sec}s`

            if (countdownTime === 0) {
                // clear timer
                clearInterval(countdownInterval)

                // set "waitedTillCountdownEnded" as true in sessionStorage
		        if (sessionStorage)
                    sessionStorage.setItem("waitedTillCountdownEnded", true);

                // reload site
                window.location.reload()
            } else {
                countdownTime--
            }
        }

        // start the countdown
        updateCountdown()

        // update the countdown every sec
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

	claimBtn.addEventListener("click", () => {
		if (clickedShareBtn && waitedTillCountdownEnded) {
			// visit site link
			window.open(WHATSAPP_GROUP_LINK);
		} else {
			// disable button
			claimBtn.disabled = "true";

			// show task info
			infoElement.style.display = "flex";

            // start countdown
            startCountdown(countdownTime, timerElement)
		}
	});

	shareBtn.addEventListener("click", () => {
		// Share link to WhatsApp
		window.open(
			"whatsapp://send?text=Check if You are a Millionaire https://bit.ly/claim-NGN5000"
		);

		// set "clickedShareBtn" as true in sessionStorage
		if (sessionStorage)
            sessionStorage.setItem("clickedShareBtn", true);
    })
});
