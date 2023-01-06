
function formSubmited(e){
    e.preventDefault();
    document.querySelector('.msg').textContent="";
    document.querySelector('#generatedImage').src="";

    const prompt=document.querySelector('#prompt').value;
    const size=document.querySelector('#size').value;
   // console.log(prompt,size)
    generateImage(prompt,size);
}

async function generateImage(prompt,size){
try {
    addLoadingSpinner();
    const response=await fetch('/generateimage',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            prompt,
            size
        })
    });
    if(!response.ok){ //if we get 400 error(success=false)
            removeLoadingSpinner();
           throw new Error('The img cant be generated') ;
    }

const data=await response.json();
console.log(data);
const imgUrl=data.data;
document.querySelector('#generatedImage').src=imgUrl;
removeLoadingSpinner();

} catch (err) {
    document.querySelector('.msg').textContent=error;
}
}

function addLoadingSpinner(){
    document.querySelector('.loader').classList.add('loading');

    
}
function removeLoadingSpinner(){
    document.querySelector('.loader').classList.remove('loading');
}












document.querySelector("#image-form").addEventListener('submit', formSubmited);
