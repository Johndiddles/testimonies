

// const handleBtnTwo = () =>{
//     document.getElementById('testimony').innerText = "This is Morenike's testimony"
// }

// const handleBtnThree = () =>{
//     document.getElementById('testimony').innerText = "This is John's testimony"
// }

const data = [
    {
        id: 1,
        name: 'John',
        imageUrl: './images/gee.png',
        testimony: 'I have a testimony to share'
    },
    {
        id: 2,
        name: 'Morenike',
        imageUrl: './images/she.png',
        testimony: 'John finally opened door for me o'
    },
    {
        id: 3,
        name: 'Mark',
        imageUrl: './images/nuel.png',
        testimony: 'Glory, interns did not murder me durning HNGi8'
    },
    {
        id: 4,
        name: 'John Doe',
        imageUrl: './images/gee.png',
        testimony: 'Someone remembers me for no reason'
    },

    {
        id: 5,
        name: 'SeunBayo',
        imageUrl: './images/nuel.png',
        testimony: 'I survived all the spiritual attacks'
    }
]


const handleBtn = (testimony, name) => {
   document.getElementById('testimony').innerText = testimony;
   document.getElementById('author').innerText = name;
   console.log(name)
}


for (let i=0; i<data.length; i++){
    
        // 
    
        const testimonies = data[i];

    document.getElementById('left').innerHTML += `
    <img src=${JSON.stringify(testimonies.imageUrl)}
        id=${data[i].id}
        onclick='handleBtn(${JSON.stringify(testimonies.testimony)}, ${JSON.stringify(testimonies.name)})'
        alt=${data[i].name}
    >`
}