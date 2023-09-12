window.addEventListener("DOMContentLoaded", () => {
    const SITE_LINK = 'https://bit.ly/claim-NGN5000'

    const WHATSAPP_GROUP_LINK = 'https://bit.ly/mill_comm'

    const claimBtn = document.querySelector('.claim-btn')

    const shareBtn = document.querySelector('.share-btn')

    const infoElement = document.querySelector('.info')



    const clickedShareBtn = localStorage.getItem('clickedShareBtn') || false



    claimBtn.addEventListener("click", () => {

        if (clickedShareBtn) {

            // visit site link

            window.open(WHATSAPP_GROUP_LINK)

        } else {

            // disable button

            claimBtn.disabled = "true"

            // show task info

            infoElement.style.display = "flex"

        }

    })



    shareBtn.addEventListener("click", () => {
        // Share link to WhatsApp
        window.open(`whatsapp://send?text=Check if You are a Millionaire ${SITE_LINK}`)

        // Wait for 30secs

        setTimeout(() => {

            // set "clicked share button" as true in localStorage

            if (localStorage)

                localStorage.setItem('clickedShareBtn', true)



            // reload site

            window.location.reload()

        }, 30000)



    })

})
