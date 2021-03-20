/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/* Variable to store the number of items to select at any given time */

const perPage = 9;
let linkList = document.querySelector('.link-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   let startIndex = (page * perPage) - perPage;
   let endIndex = (page * perPage);

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

      for (let i = 0; i < list.length; i ++) {
         if (i >= startIndex && i < endIndex) {
            let html = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src= ${data[i].picture.large} alt="Profile Picture">
                     <h3>${data[i].name.first} ${data[i].name.last}</h3>
                     <span class="email">${data[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">${data[i].registered.date}</span>
                  </div>
               </li>
             `;
            studentList.insertAdjacentHTML('beforeend', html);
         }
      }
};

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   let pagination = Math.ceil((list.length/perPage));

   //console.log(pagination);

   
   linkList.innerHTML = '';

      for (let i = 1; i < pagination; i++) {
         let html = `
            <li>
               <button type="button">${i}</button>
            </li>
         `;
         linkList.insertAdjacentHTML('beforeend', html);
      };

      let btn = document.querySelector('button');

      if (btn.ClassName !== 'active') {
         btn.className = 'active';
      };

      linkList.addEventListener('click', (event) => {
         if(event.target === btn) {
            document.querySelector('button').className('');
         }
      showPage(data, 9);
   });
};



// Call functions

addPagination(data);