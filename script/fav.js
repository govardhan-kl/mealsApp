
var list = document.getElementById('list1') // this si to append fav data on UI
 
function displayFav(){ // displaying whatever fav we marked on DOM
    list.innerHTML = "";
    let favList = JSON.parse(localStorage.getItem('likedList'));
    for (let i of favList){
        renderList(i) // rendering it on UI
    }
}


function renderList(ele){ // we carete each li element and add that to  'ul' tag
    const li = document.createElement('li');
    li.innerHTML = 
    `
    <div>
        <h2 class="title">${ele.strMeal}</h2>
    </div>
    <div class="favDiv">
        <img src="./css/assets/icons8-love-24.png" class="fav" data-id="${ele.idMeal}" alt="">
    </div>
    `
    list.append(li)
}

function removeFav(id){ // this is to  mremove fav by getting the data-set id of whatever we clicked
    let list = JSON.parse(localStorage.getItem('likedList'));
    const newTask = list.filter(function(task){ //we remove the unfav object and add remaing fav back to local storage
        return task.idMeal !== id;
    })
    localStorage.setItem('likedList',JSON.stringify(newTask))
    console.log('need to remove')
    displayFav()
    alert('removed from fav') // we would have deletd some so need to display it again
    // console.log(typeof(id),id)
}



function handleClickListeners(e){ //a click handler fot removing favs
    const target = e.target;
    if (target.className === 'fav'){
        console.log('inside',target);
        removeFav(target.dataset.id) // we gather hte particular id fo the lement and  semd to removeFav function
        return;
    }
}

document.addEventListener('click',handleClickListeners); //event handler
displayFav()
