window.addEventListener("DOMContentLoaded", () => {

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
