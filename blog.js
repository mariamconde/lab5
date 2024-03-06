"use strict";

const blogs = [
  {title: 'HTML Semantic Tags',
   date: new Date(2023, 7, 31),
   content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate sint ullam fugiat fugit magni, aliquam quae voluptate, quo eos minima numquam repellendus rerum ipsa ea est. Maxime, dicta delectus eum a minus iure optio eveniet culpa, ipsum iste repellendus laudantium eos deserunt commodi animi distinctio ex hic? At amet dolore nemo accusamus nisi quae, ratione nam. Totam harum expedita temporibus dolore unde sed id debitis suscipit odio voluptates doloremque rem nobis aperiam quasi assumenda doloribus ad vero repellat, alias adipisci tenetur aspernatur vel. Culpa inventore architecto aspernatur dolor natus labore. Consectetur dolorem atque deserunt saepe voluptatem temporibus magnam, nihil rerum veritatis neque libero, impedit dolore dolor distinctio perspiciatis corrupti vero assumenda doloribus hic dignissimos optio, quidem illo consequatur. Maiores.'},
  {title: 'CSS Selectors',
  date: new Date(2023, 8, 9),
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolore? Eveniet numquam quam qui quae laboriosam maxime deleniti aperiam quasi culpa veniam, voluptatibus molestias soluta error ratione assumenda sunt. Sapiente doloribus, nulla a tempora assumenda nostrum est enim corporis fugit quasi ipsam eveniet distinctio impedit dolorum eum dolor. Distinctio, reiciendis!'},

  {title: 'Cascading',
  date: new Date(2023, 8, 12),
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum architecto provident exercitationem modi inventore obcaecati, fuga, fugiat vero quo iusto vitae minima perspiciatis dolorum incidunt ea dolorem laboriosam illo. Cupiditate est enim aut magni, doloribus animi, fuga inventore eveniet quaerat similique voluptate debitis ad possimus totam repellendus harum voluptatem sit adipisci velit quisquam praesentium sed corporis temporibus facere! Labore architecto deleniti deserunt voluptates velit, maxime ea nisi placeat, eius in reiciendis, saepe alias quidem dignissimos debitis quos tenetur natus. Voluptas tempore placeat nam adipisci cupiditate voluptates doloremque odio fugiat suscipit reiciendis quidem culpa provident explicabo unde animi aut consequatur dolorem, deleniti ullam itaque labore soluta. Quis architecto dicta recusandae quaerat commodi sapiente, rerum ab illum reprehenderit alias culpa dolore optio. Harum labore aspernatur, non perferendis exercitationem, libero aperiam dignissimos, quisquam quia nostrum magni veritatis pariatur explicabo? Velit nisi reprehenderit, vel odit, omnis unde porro eum sint, nobis voluptatem voluptatum neque!'}
]


blogs.forEach(blog=>{
  addEntry(blog);
});

/**
 * This function creates a DOM elment with information from the blog object, and adds the element into the DOM.
 * @param {*} blog - a blog element
 */
function addEntry(blog) {
  // Create an article element
  const article = document.createElement('article');
  
  // Add 'post' class to the article element
  article.classList.add('post');

  // Create an h3 element for the title
  const title = document.createElement('h3');
  title.classList.add('blog-header'); // Add blog-header class
  title.textContent = blog.title;

  // Create a button element for deleting the article
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn'); // Add delete-btn class
  deleteButton.textContent = '[x]';
  
  // Append the button element to the h3 element
  title.appendChild(deleteButton);

  // Append the h3 element to the article element
  article.appendChild(title);

  // Create a p element for the date
  const date = document.createElement('p');
  
  // Add 'date' class to the p element
  date.classList.add('date');
  
  // Set the content of the p element to the date property of the blog argument
  date.textContent = blog.date.toLocaleDateString();

  // Append the p element to the article element
  article.appendChild(date);

  // Create another p element for the content
  const content = document.createElement('p');
  
  // Set the content of the p element to the content property of the blog argument
  content.textContent = blog.content;

  // Append the content p element to the article element
  article.appendChild(content);

  // Append the article element to the .posts container
  document.querySelector('.posts').appendChild(article);
}
