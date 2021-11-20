

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
        imageUrl: 'somewhere',
        testimony: 'I have a testimony to share'
    },
    {
        id: 2,
        name: 'Morenike',
        imageUrl: 'somewhere',
        testimony: 'John finally opened door for me o'
    },
    {
        id: 3,
        name: 'Mark',
        imageUrl: 'somewhere',
        testimony: 'Glory, interns did not murder me durning HNGi8'
    },
    {
        id: 4,
        name: 'John Doe',
        imageUrl: 'somewhere',
        testimony: 'Someone remembers me for no reason'
    },

    {
        id: 5,
        name: 'SeunBayo',
        imageUrl: 'somewhere',
        testimony: 'I survived all the spiritual attacks'
    }
]


const handleBtn = (testimony) => {
   document.getElementById('testimony').innerText = testimony
}


for (let i=0; i<data.length; i++){
    
        // 
    
        const testimonies = data[i];

    document.getElementById('left').innerHTML += `
    <button 
        id=${data[i].id}
        onclick='handleBtn(${JSON.stringify(testimonies.testimony)})'
    >
        ${data[i].name}
    </button>`
}