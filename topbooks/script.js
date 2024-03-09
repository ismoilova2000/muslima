const wrapper = document.querySelector('.wrapper')


const tovars = [
    {
      "name": "The Great Gatsby",
      "price": 10.99,
      "img": "https://m.media-amazon.com/images/I/61dRoDRubtL._AC_UF1000,1000_QL80_.jpg",
      "year": 1925
    },
    {
      "name": "To Kill a Mockingbird",
      "price": 12.5,
      "img": "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
      "year": 1960
    },
    {
      "name": "1984",
      "price": 9.99,
      "img": "https://m.media-amazon.com/images/I/7180qjGSgDL._AC_UF1000,1000_QL80_.jpg",
      "year": 1949
    },
    {
      "name": "The Catcher in the Rye",
      "price": 8.75,
      "img": "https://media.npr.org/assets/artslife/books/2009/10/catcher_custom-853c2f7a4f9f9acaa8647dfdc7b9796555ad54a2-s1100-c50.jpg",
      "year": 1951
    },
    {
      "name": "Pride and Prejudice",
      "price": 7.95,
      "img": "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      "year": 1813
    },
    {
      "name": "The Hobbit",
      "price": 11.25,
      "img": "https://m.media-amazon.com/images/I/A11+Gq4ebyL._AC_UF1000,1000_QL80_.jpg",
      "year": 1937
    },
    {
      "name": "To the Lighthouse",
      "price": 9.5,
      "img": "https://m.media-amazon.com/images/I/81uGyLbPszL._AC_UF894,1000_QL80_.jpg",
      "year": 1927
    },
    {
      "name": "Moby-Dick",
      "price": 13.99,
      "img": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681778488/moby-dick-9781681778488_hr.jpg",
      "year": 1851
    },
    {
      "name": "The Lord of the Rings",
      "price": 19.99,
      "img": "https://cdn.img.gen.in/saradhi-books/64565/portfolio.jpg?height=200&biz=2596&meta=true",
      "year": 1954
    },
    {
      "name": "Jane Eyre",
      "price": 7.25,
      "img": "https://m.media-amazon.com/images/I/91zU70Aw9IS._AC_UF1000,1000_QL80_.jpg",
      "year": 1847
    }
  ]

tovars.map ((item) => {
    wrapper.innerHTML += `
    <div class="card">
        <img src=${item.img} alt="">
        <p>Год издания:${item.year}<p>
        <h2>${item.name}</h2>
        <b>${item.price} $</b>
        <button>Купить<button>
    </div>
    `
})