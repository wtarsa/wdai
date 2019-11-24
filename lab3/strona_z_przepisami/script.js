var new_photo_id = 4;
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
p1.addEventListener('click', showRecipe);
p2.addEventListener('click', showRecipe);
p3.addEventListener('click', showRecipe);
document.getElementById('p1c').addEventListener('click', hideAllRecipes);
document.getElementById('p2c').addEventListener('click', hideAllRecipes);
document.getElementById('p3c').addEventListener('click', hideAllRecipes);

var emptyDiv = document.getElementById("rec");

var recipe_form = document.getElementById('recipe_form');
var add_recipe_button = document.getElementById('add-recipe-button');
var recipe_submit_button = document.querySelector('.submit-form')
var add_attachment_button = document.querySelector('.add-attachment')

add_recipe_button.addEventListener('click', showAddRecipeForm);
document.addEventListener('click', hideAddRecipeForm);
var fileInput = document.querySelector('input[type="file"]')


recipe_form.addEventListener('click', function(e){e.stopPropagation()});
recipe_submit_button.addEventListener('click', function(e){
    console.log('submit');
    var recipeName = document.querySelector('.recipe-name').value;
    var inredients = document.querySelector('.ingredients').value;
    var preparationSteps = document.querySelector('.preparation-steps').value;
	console.log(recipeName);
	console.log(inredients);
	console.log(preparationSteps);
	hideAddRecipeForm();
			
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
	rec.scrollIntoView();
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
            recipesBox = document.getElementsByClassName('recipe-box-recipes')[0];
            // document.getElementsByClassName('recipe-box-headers')[0].appendChild(img)
            // <img src=​"recipes_logo.png">​
           
            /*miniatura z listy*/
            var img = document.createElement("img");
            img.setAttribute('class', 'photo');
            img.setAttribute('src', e.target.result);
            var pid = parseInt(document.querySelectorAll('[photo_id]').length)+1;
            img.setAttribute('id', 'p'+pid);
            img.setAttribute('photo_id', pid);
            img.addEventListener('click', showRecipe);
            recipeHeadersContainer.appendChild(img);
            img.addEventListener('click', function(){console.log('triggered')}) // dev
            /*zdjęcie w wyświetlaniu*/
            var img2 = document.createElement("img");
            img2.setAttribute('src', e.target.result);
            img2.setAttribute('id', 'p'+pid+'c');
            img2.setAttribute('class', 'photo d-none');
            recipesBox.appendChild(img2);
            img2.addEventListener('click', hideAllRecipes);
            /*skladniki*/
   			var ingr = document.createElement("div");
           	ingr.setAttribute('class', 'ingr d-none');
            ingr.setAttribute('id', 'i'+pid);
            var s = document.createElement("h3");
            s.innerHTML = "Składniki:";
            ingr.appendChild(s);
            var p1 = document.createElement('p');
            var inredients = document.querySelector('.ingredients').value;
            p1.innerHTML = inredients;
            ingr.appendChild(p1);
    		recipesBox.appendChild(ingr);
            /*wykonanie*/
            var make = document.createElement("div");
            make.setAttribute('class', 'make d-none');
            make.setAttribute('id', 'm'+pid);
            var m = document.createElement("h3");
            m.innerHTML = "Metoda wykonania:";
            make.appendChild(m);
            var p2 = document.createElement('p');
            var preparationSteps = document.querySelector('.preparation-steps').value;
            p2.innerHTML = preparationSteps;
            make.appendChild(p2);
      
            recipesBox.appendChild(make);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

fileInput.addEventListener('change', function(){
	console.log('change')
    readURL(this);
});

