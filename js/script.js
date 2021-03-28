/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/* Variable to store the number of items to select at any given time */
const perPage = 9;
/* Variable to select the list with the class link-list */
let linkList = document.querySelector( '.link-list' );
/* This function creates and inserts elements required to display a list of 9 students per page. */
function showPage( list, page ) {
	/* startIndex and endIndex variables for the number of strudents per page */
	let startIndex = ( page * perPage ) - perPage;
	let endIndex = ( page * perPage );
	/* Variable that looks up the list with the class student-list */
	let studentList = document.querySelector( '.student-list' );
	/* Clears the studentList contents */
	studentList.innerHTML = '';
	/* Iterates over and creates the list of students taking the data from the data.js file. */
	for ( let i = 0; i < list.length; i++ ) {
		if ( i >= startIndex && i < endIndex ) {
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
			studentList.insertAdjacentHTML( 'beforeend', html );
		}
	}
};
/* This function will create and insert/append the elements needed for the pagination buttons */
function addPagination( list ) {
	/* Calculates the amount of students per page and rounds the number to the nearest decimal place and then assigns the value to the variable pagination */
	let pagination = Math.ceil( ( list.length / perPage ) );
	/* Clears the contents of the linklist variable. */
	linkList.innerHTML = '';
	/* Loops over the pagination variable and creates the button elements then appends to the page. */
	for ( let i = 1; i <= pagination; i++ ) {
		let html = `
            <li>
               <button type="button">${i}</button>
            </li>
         `;
		linkList.insertAdjacentHTML( 'beforeend', html );
	};
	/* Selects the button elementso n the page and assigns them to the variable btn */
	let btn = document.querySelectorAll( 'button' );
	/* If the button as no className then the className of 'active' is assigned. */
	if ( btn.className !== 'active' ) {
		btn[ 0 ].className = 'active';
	};
	/* When the button is clicked loop over the button elements, remove any button's with the class of 'active' and then assign the class of 'active' to the clicked button. */
	linkList.addEventListener( 'click', ( event ) => {
		if ( event.target.type === 'button' ) {
			for ( let i = 0; i < btn.length; i++ ) {
				btn[ i ].classList.remove( 'active' );
				event.target = 'active';
			};
			let index = event.target.textContent;
			showPage( data, index );
		};
	} );
};
// Call functions
showPage( data, 1 );
addPagination( data );