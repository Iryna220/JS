// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

// const people1 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// }]

// const people2 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: ["Eva"],
// },
// {
//   name: 'Eva',
//   know: [],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]

// const people3 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
//     }]
// //home work 7, part 1
// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const galleryItems = document.querySelector(".gallery");
// const markup = galleryItems.map(({ preview, original, description }) => 
// `<li class="gallery__item">
//   <a class="gallery__link" href= ${original}>
//     <img
//       class="gallery__image"
//       src= ${preview}
//       data-source= ${original}
//       alt= ${description}
//     />
//   </a>
// </li>`
// )
// galleryItems.insertAdjacentHTML('beforeend', markup.join(" "));

// galleryItems.addEventListener('click', onClick);

// function onClick(evt) {
//     evt.preventDefault();


//     const { target } = evt;
//     if (!target.classList.contains('gallery__image')) {
//         return
//     }
//     const imgEl = target.dateset.source;
//     const instance = basicLightbox.create(`
//     <img src="${imgEl}" width="800" height="600">
// `)

//     instance.show()
// }


    