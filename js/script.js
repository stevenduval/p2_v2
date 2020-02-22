/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

// GLOBAL VARIABLES - You'll use these below
const studentContainer = document.querySelector('.student-list');
const linkContainer = document.querySelector('.link-list');
const searchContainer = document.querySelector('.header');

const dataList = data.results;
const perPage = 10;


// 1. THE SHOW PAGE FUNCTION

// Create your showPage function, passing it two parameters - list, page
// The showPage function should:
const showPage = (list, page) => {
   // Empty the studentContainer element of all its children - quickly accomplished by setting its innerHTML to ''
   studentContainer.innerHTML = '';
   // Loop over the list parameter with a standard for loop
   for(let i = 0; i < dataList.length; i++) {
      // If (i >= (page * perPage) - perPage && i < page * perPage)
      if ( i >= (page * perPage) - perPage && i < page * perPage) {
         // Use the studentTemplate below to add students to studentContainer
         // You can concatenate the template to the innerHTML with +=
         // Or you can use the handy insertAdjacentHTML() method

         // HTML template to add student to the DOM
         const studentTemplate = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${formatDate(list[i].registered.date)}</span>
               </div>
            </li>
         `;
         studentContainer.innerHTML += studentTemplate;
      }
   }
}

// After the showPage function definition,
// Call show the showPage() function passing in the dataList variable and 1 to display the first page

showPage(dataList, 1);


// 2. THE APPEND PAGE LINKS FUNCTION

// Create your appendPageLinks function, passing it one parameter - list
// The appendPageLinks function should:
const appendPageLinks = (list) => {
   // Empty the linkContainer element of all its children - quickly accomplished by setting its innerHTML to ''
   linkContainer.innerHTML = '';
   // Create a linkCount variable set to Math.ceil(list.length / perPage); 
   const linkCount = Math.ceil(list.length / perPage);
   // Loop once for every link - (let i = 0; i < linkCount; i++) 
   for (let i = 0; i < linkCount; i++) {
      // Use the LinkTemplate below to add links to studentContainer
      // You can concatenate the template to the innerHTML with +=
      // Or you can use the handy insertAdjacentHTML() method
      const linkTemplate = `<li><a href="#">${i + 1}</a></li>`
      // HTML template to add link to the DOM
      linkContainer.innerHTML += linkTemplate;
   }
   // Set the className of the linkContainer.firstElementChild.firstElementChild to 'active'
   linkContainer.firstElementChild.firstElementChild.className = 'active';
   // Add click handler to linkContainer
   linkContainer.addEventListener('click', (e)=> {
      // If event.target.tagName === 'A'
      if (event.target.tagName === 'A'){
         // Create a links variable to target the pagination links - document.querySelectorAll('.link-list a')
         const links = document.querySelectorAll('.link-list a')
         // Loop over links and set their className to ''
         for(let i = 0; i < links.length; i++) {
            links[i].className = '';
         }
         // After loop, set the className of the event.target to 'active'
         event.target.className = 'active';
         // Call showPage passing in the list parameter and event.target.innerHTML for the page number   
         showPage(list, event.target.innerHTML)
      }
   });
}
// After the appendPageLinks function definition,
// Call show the appendPageLinks() function passing in the dataList variable
appendPageLinks(dataList);

// Feel free to try out adding the search feature and pagination search results
