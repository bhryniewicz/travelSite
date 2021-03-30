// document
//       .querySelector('.content__header-button')
//       .addEventListener('click', e => {
//         document.querySelector('.about__content').scrollIntoView({ block: "end", behavior: "smooth" })
//       })

const image = document.querySelector('.image__animation');
const downloadDiv = document.querySelector('.boxes')
image.addEventListener('click', e => {
    downloadDiv.scrollIntoView({
        block: "end",
        behavior: "smooth"
    })
})