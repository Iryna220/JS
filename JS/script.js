// console.log("welcom, everybody");



// Slug Split Join
// const titel = "Welcom JavaScript";
// const normalizedTitle = titel.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");
// console.log(words);

// const slug = words.join("-");
// console.log(slug);

// Slug Split Join || другий варіант
// const slug1 = titel.toLowerCase().split(" ").join("-");
// console.log(slug1);


// Concat
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);


// Splice / картки Trello

// const cards = ["картка-1", "картка-2", "картка-3", "картка-4", "картка-5"];
// console.table(cards);

// Видалення
// const cardToRemove = "картка-3";
// const index = cards.indexOf(cardToRemove);
// console.log(index);
 
// cards.splice(index, 1);
// console.table(cards);

// Додавання
//  const cardToInsert = "картка-6";
//  const index = 3;
 
//  cards.splice(3, 0, 5, 10, 20,);
//  console.table(cards);
  
// Поновлення (за індексом)
// const cardToUpdate = "картка-4";
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
 
// cards.splice(index, 1, "поновленна картка-4");
// console.table(cards);


// Задачка модуль"2"
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + '...';
//   }
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); 
// console.log(formatMessage("Curabitur ligula sapien", 23)); 
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


// РАННЄ ПОВЕРНЕННЯ
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
  
//   return "Access denied, wrong password!";
// }
