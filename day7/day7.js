var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btn = document.querySelector('.remove-all')

var tags = ['Nodejs', 'Reactjs']

function render(){
    content.innerHTML=''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                            ${tag}
                            <i class="fa-solid fa-xmark" onclick="removetag(${i})"></i>`
    }
    content.appendChild(input)
    input.focus()
}

render()

function addtags(){
    
}

input.addEventListener('keydown', function (event) {
    if (!tags.includes(input.value.trim()) && input.value.trim() != "") {
        if (event.key == 'Enter') {
            tags.push(input.value.trim());
            input.value = '';
            render();
            console.log(tags);
        }
    } else {
        input.value = '';
    }
})

// input.addEventListener('keydown', e =>{
//     if(e.key == 'Enter'){
//         console.log(input.value)
//         tags.push(input.value.trim())
//         input.value =''
//         render()
//     }
// })
// removetag
function removetag(index){
    tags.splice(index, 1)
    render()
}

btn.addEventListener('click',function(){
    tags=[]
    render()
})