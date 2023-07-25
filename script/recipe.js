
function display(){ // this si to display partcular meal img name and description for that partciular recipee
    try{
        let ele = document.getElementById('mealData'); // we gather the info stored in localstorage and create html element to display that details dynamically for individual recipee
        // let generatedHTML = "";
        ele.innerHTML=
        `
        <div>
            <img src="${localStorage.mealImg}" alt="" srcset="">
        </div>
        <div>
            <h1>${localStorage.mealName}</h1>
            <p>${localStorage.mealInst}</p>
        </div>
        `
    }
    catch(e){
        console.log('could not create',e)
    }   
}

setTimeout(function(){
    display()
},500)//calling display function after 500ms
