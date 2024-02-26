const loadCategoriesData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoriesData = data.data;
    categoriesButton(categoriesData);
}

const categoriesButton = (categories) => {

    const categorySection = document.getElementById('categories-head');
    categories.forEach(categori => {
        const categoriButton = document.createElement('div');
        categoriButton.innerHTML = `
        <button onclick="handleShowCategoriesResult(${categori.category_id})" class= "btn  btn-success w-20 border-none ">${categori.category}</button>
        `
        categorySection.appendChild(categoriButton);

    })
}

const handleShowCategoriesResult = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const categoriesBasedData = data.data;
    categoriesBasedDataLoad(categoriesBasedData);
}


const categoriesBasedDataLoad = (categories_data) => {
    const allCardBody = document.getElementById('categories_data_card');

    console.log(categories_data);
    allCardBody.textContent = '';
    categories_data.forEach(categ_data => {
        let timeString = categ_data.others.posted_date;
        let time = parseInt(timeString);
        let hours = Math.floor(time / 3600);
        time = time - (hours * 3600);
        let mins = Math.floor(time / 60);

        const singleCard = document.createElement('div');
        singleCard.classList = `card card-compact w-72 bg-base-100 shadow-xl`;
        singleCard.innerHTML = `
        <figure class="rounded-lg static">
        <img  src="${categ_data.thumbnail}" alt="Shoes"  />
        <div id="timeShow" class="hidden absolute right-4 bottom-56 rounded p-1 bg-slate-900 ">
        <h1>${hours}hrs ${mins}mins ago</h1>
        </div>
        </figure>
        <div class="card-body grid grid-cols-2">
            <div class="w-12">
                <img class="w-10 rounded-full" src="${categ_data.authors[0].profile_picture}" alt="">
            </div>
            <div class="ms-[-50px] text-white">
                
                    <h1 class="me-2 text-lg  font-bold">${categ_data.title}</h1>
                    
                
                <div class="flex mb-4">
                <p class="mb-4 mt-2">${categ_data.authors[0].profile_name}</p>
                <i id="verification" class="mt-3 fa-solid fa-certificate hidden text-blue-700 pe-[70px]"></i>
                </div>
                <p>${categ_data.others.views} views</p>

            </div>
        </div>
        `

        allCardBody.appendChild(singleCard);
        const verificationIcon = singleCard.querySelector('#verification');
        if (categ_data.authors[0].verified == true) {
            verificationIcon.classList.remove('hidden')
        }
        else {
            verificationIcon.classList.add('hidden');
        }

        const timeShowed = singleCard.querySelector('#timeShow');
        if (categ_data.others.posted_date) {
            timeShowed.classList.remove('hidden');
        }
        else {
            timeShowed.classList.add('hidden');
        }

    })
}

loadCategoriesData();