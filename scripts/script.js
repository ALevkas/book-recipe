const URL = "https://recipe-6ae45.firebaseio.com/categories.json";

//Получить JSON с рецептами
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL, false);
    xhr.send();
    if (xhr.status != 200) {
        // выводить о проблемах с соеденением
    } else {
        window.sessionStorage.setItem('data', xhr.responseText);
        countAllRecipe();
    }
}

//Посчитать количество рецептов
function countAllRecipe() {
    let data = JSON.parse(window.sessionStorage.getItem('data'));
    let countRecipe = Object.keys(data.potato).length + Object.keys(data.pasta).length;
    document.querySelector('#countRecipe').innerHTML = countRecipe;
    document.querySelector('#recipeTitle').innerHTML = declOfNum(countRecipe, ['рецепт', 'рецепта', 'рецептов']);

}

//Посчитать какое окончание подставить
function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}

getData();