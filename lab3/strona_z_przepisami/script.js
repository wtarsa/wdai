var new_photo_id = 4;
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
p1.addEventListener('click', showRecipe);
p2.addEventListener('click', showRecipe);
p3.addEventListener('click', showRecipe);

var recipe_form = document.getElementById('recipe_form');
var add_recipe_button = document.getElementById('add-recipe-button');

add_recipe_button.addEventListener('click', showAddRecipeForm);
document.addEventListener('click', hideAddRecipeForm);

function hideAllRecipes(){
	var b = document.querySelectorAll("[photo_id]");
	for(var i = 0; i < b.length; i++){
		var id = (b[i].getAttribute('photo_id'));
		document.getElementById("p" + id + "c").setAttribute("class", "d-none");
		document.getElementById("i" + id).setAttribute("class", "d-none");
		document.getElementById("m" + id).setAttribute("class", "d-none");
	}
}

function showRecipe(event){
	hideAllRecipes();
	var a = event.target.getAttribute('photo_id')
	document.getElementById("p" + a + "c").setAttribute("class", "photo");
	document.getElementById("i" + a).setAttribute("class", "ingr");
	document.getElementById("m" + a).setAttribute("class", "make");
}

function showAddRecipeForm(event){
	event.stopPropagation();
	recipe_form.setAttribute("class", "add-recipe");
}

function hideAddRecipeForm(event){
	recipe_form.setAttribute("class", "d-none");	
}