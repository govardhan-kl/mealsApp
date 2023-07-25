
const serachForm = document.querySelector('form'); // this gets the form
const searchResultDiv = document.querySelector('.search-result'); //used to get search results
const container = document.querySelector('.container'); //for to acess container div
const nextPage = document.querySelector('view-button'); //to view the recipe details
let storeMealsList = []; // to temprarily store the search results data


function takeValue(){ //onimput event listener, tries to take data evertirm we enter datta
    let txt = document.getElementById("taketext").value;
    console.log(txt);
    if(txt == ""){
        return
    }
    fetchAPI(txt) //sends entered data to API call to fetch results
}


async function fetchAPI(txt){ //here we collected user enetered data and send to api and search absed on that
    try{
        const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${txt}`
        const response = await fetch(baseURL);
        const data = await response.json();
        // console.log(data);
        createHTML(data.meals); //when we get the response from the API we send the datat to display the results on UI
    }
    catch(error){ //if error occur while fetching data this executes
        console.log(error) 
    }
}


function createHTML(results){ // craeteing HTMl for every single input, similiar to suggestions in google
    let generatedHTML = "";
    storeMealsList = [];
    if(results){
        results.map(result => { // we push each result object to map function where html is created for each object
            storeMealsList.push(result)
            generatedHTML +=
            `
            <div class="item">
                <img class="img" src="${result.strMealThumb}/preview" alt="">
                <div class="flex-container">
                    <div>
                        <h1 class="title">${result.strMeal}</h1>
                        <a class="view-button" id=${result.idMeal} href="./recipiedetails.html" target="_blank" >view recipe</a>
                    </div>
                    <div class="favDiv">
                        <img src="./css/assets/icons8-love-24.png" class="fav" data-id="${result.idMeal}" alt="">
                    </div>
                </div>
            </div>
            `
        })
        searchResultDiv.innerHTML = generatedHTML //appending whatever created html to our UI/DOM
    }
    // console.log("meals list is",storeMealsList);
}

function displayRecipe(id){ // this is to view the meal details of the particular object
    console.log("inside display")
    for(let i of storeMealsList){ // we are using id and creating local storage for that particulal id itself so that i can view the meal details for that partcicular meal every instance
        if(i.idMeal == id){
            localStorage.setItem('mealImg',i.strMealThumb);
            localStorage.setItem('mealName',i.strMeal);
            localStorage.setItem('mealInst',i.strInstructions);
        }
    }   
}


function checkLiked(id){ // this is for checking fav, if we have already marked as fav or not
    let val = JSON.parse(localStorage.getItem('likedList'));
    for (let j of val){
        if (j.idMeal == id){ //if fav already present return true or else false
            return true
        }
    }
    return false
}



function markAsFav(id){ // this is to mark a fav 
    for(let i of storeMealsList){
        if(i.idMeal == id){
            let value = checkLiked(i.idMeal) //checks if meal is marked fav or not
            console.log(value)

            if(value){ //if meal is marked fav we removw it from fav
                let list = JSON.parse(localStorage.getItem('likedList'));
                const newTask = list.filter(function(task){ // we filter out the one already marked and put remaining in local storage
                    return task.idMeal !== id;
                })
                localStorage.setItem('likedList',JSON.stringify(newTask))
                console.log('need to remove')
                alert('removed from fav')
            }
            else{ //if not marked fav we will add to fav
                let list = JSON.parse(localStorage.getItem('likedList'));
                list.push(i)
                localStorage.setItem('likedList',JSON.stringify(list))
                console.log("marked as fav ")
                alert("marked as fav")
            }
        }
    }
}



function handleClickListener(e){ // tis is a click handler to view recipe details and mark favs
    const target = e.target;
    // console.log(target);
    if (target.className === 'view-button'){
        displayRecipe((target.id));
        return;
    }
    else if (target.className === 'fav'){
        console.log('inside',target);
        markAsFav(target.dataset.id)
        return;
    }
}

document.addEventListener('click',handleClickListener);

function setUpLocal(){ // this is to setup localstorage whenevver project is freshly started 
    let check = JSON.parse(localStorage.getItem('likedList'));
    if (check == null){
        localStorage.setItem('likedList',JSON.stringify([]))//{local:"local"}
        return;
    } 
}

setUpLocal()//calling localstorage