# A MEAL SEARCH APP


### General steps to follow when creating a project

- Thinking about the UI
- Functionality
	- Take a Value from entering etxt dynamically
	- using API call fetch the result for that inputa and collect the data
	- Display Each data on UI
	- Add a page to view recipe details
    - Add a Favourites
- Data
	- storeMealsList - an array
	- mealdata - {...all details fetched from API}
- Functions (in code)
	- takeValue ->onimput event listener, tries to take data evertirm we enter datta
	- fetchAPI ->here we collected user enetered data and send to api and search absed on tthat and recivve data
	- createHTML -> craeteing HTMl for every single input, similiar to suggestions in google
	- displayRecipe ->this is to view the meal details of the particular object
	- checkLiked ->  this is for checking fav, if we have already marked as fav or not
    - markAsFav -> this is to mark a fav 
    - handleClickListener ->tis is a click handler to view recipe details and mark favs
    - setUpLocal 

    - display()->this si to display partcular meal img name and description for that partciular recipee
    
    - removeFav ->  this is to  mremove fav by getting the data-set id of whatever we clicked
    - displayFav -> displaying whatever fav we marked on DOM
    - renderList -> we carete each li element and add that to  'ul' tag
