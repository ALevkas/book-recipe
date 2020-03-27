const categoriesTitle = document.querySelector('.categories-header__title');
const categories = document.location.search;
const dataRecipe = JSON.parse(window.sessionStorage.getItem('data'));
const body = document.querySelector('.categories-body');

let needCategoriesList;

const setCategoriesTitle = (name) => {
    let nameCategories;
    switch (name) {
        case '?categories=potato':
            nameCategories = 'Картофель';
            needCategoriesList = dataRecipe.potato;
            break;
        case '?categories=pasta':
            nameCategories = 'Макароны';
            needCategoriesList = dataRecipe.pasta;
            break;
        case '?categories=porridge':
            nameCategories = 'Каши';
            needCategoriesList = dataRecipe.porridge;
            break;
        case '?categories=Soups':
            nameCategories = 'Супы';
            needCategoriesList = dataRecipe.Soups;
            break;
        case '?categories=Salads':
            nameCategories = 'Салаты';
            needCategoriesList = dataRecipe.Salads;
            break;
        default:
            nameCategories = 'Упс..';
            break;
    }
    categoriesTitle.innerHTML = '<h1>' + nameCategories + '</h1>';
}

const setCategoriesItem = (needCategoriesList) => {
    let data = needCategoriesList;
    console.log(data);

    for (let el in data) {
        let item = document.createElement('div');
        let image = document.createElement('div');
        let name = document.createElement('div');
        let author = document.createElement('div');
        let rating = document.createElement('div');
        let link = document.createElement('a');
        author.classList.add('categories-body-item-link__author');
        item.classList.add('categories-body-item');
        image.classList.add('categories-body-item-link__image');
        link.classList.add('categories-body-item-link');
        link.href = '#';
        name.classList.add('categories-body-item-link__name');
        rating.classList.add('categories-body-item-link__rating');

        name.innerText = el;
        author.innerText = `by ${data[el].author}`;
        rating.innerText = `${data[el].rating} / 10`;

        link.appendChild(image);
        link.appendChild(name);
        link.appendChild(author);
        link.appendChild(rating);
        item.appendChild(link);
        body.appendChild(item);

        console.log(el, data[el].author);
    }
}

setCategoriesTitle(categories);
setCategoriesItem(needCategoriesList);