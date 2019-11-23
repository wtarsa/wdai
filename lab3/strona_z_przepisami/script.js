var new_photo_id = 4;
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
p1.addEventListener('click', showRecipe);
p2.addEventListener('click', showRecipe);
p3.addEventListener('click', showRecipe);

var recipe_form = document.getElementById('recipe_form');
var add_recipe_button = document.getElementById('add-recipe-button');
var recipe_submit_button = document.querySelector('.submit-form')
var add_attachment_button = document.querySelector('.add-attachment')

add_recipe_button.addEventListener('click', showAddRecipeForm);
document.addEventListener('click', hideAddRecipeForm);
var fileInput = document.querySelector('input[type="file"]')


recipe_form.addEventListener('click', function(e){e.stopPropagation()});
recipe_submit_button.addEventListener('click', function(e){
    console.log('submit')
    var recipeName = document.querySelector('.recipe-name').value
    var inredients = document.querySelector('.ingredients').value
    var preparationSteps = document.querySelector('.preparation-steps').value
	console.log(recipeName)
	console.log(inredients)
	console.log(preparationSteps)
});

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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            recipeHeadersContainer = document.getElementsByClassName('recipe-box-headers')[0]
            // document.getElementsByClassName('recipe-box-headers')[0].appendChild(img)
            // <img src=​"recipes_logo.png">​
            var img = document.createElement("img");
            img.setAttribute('src', e.target.result);
            recipeHeadersContainer.appendChild(img);

            // img.addEventListener('click', showRecipe)
            img.addEventListener('click', function(){console.log('triggered')})
        }

        reader.readAsDataURL(input.files[0]);
    }
}

fileInput.addEventListener('change', function(){
	console.log('change')
    readURL(this);
});
