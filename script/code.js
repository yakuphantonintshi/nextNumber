let index = 0

document.querySelector('.enter').addEventListener('click', () =>{
    let data = document.querySelector('#numb').value
    let listedNumb = data.split('')
    // console.log(listedNumb[index]);
    let output = document.querySelector('#results')
    output.textContent = listedNumb[index]
    if (index < listedNumb.length){
        index++
    }else{
        output.innerText = ('No number found')
    }
  
})