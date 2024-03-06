// let name = 'muslima'

// console.log(`hello $ `)

const wrapper = document.querySelector('.wrapper')

console.log(wrapper);

const food = [
    {
        img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F68352497-3ec8-45c9-94fd-2e8258ed916c&w=3840&q=75',
        title: 'Макси BOX Традиция',
        recipe: 'Сэндвич Original, картофель-фри, coca cola (400 мл)',
        price: '40 000 сум'
    },

    {
        img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F05323470-5019-497a-b82c-62028a52acae&w=3840&q=75',
        title: 'Макси BOX Популярный',
        recipe: 'Сэндвич Original, картофель-фри, coca cola (400 мл)',
        price: '40 000 сум'
    },

    {
        img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd667c0e2-86e8-4274-92f8-4362d668b862&w=3840&q=75',
        title: 'Макси BOX Традиция',
        recipe: 'Сэндвич Original, картофель-фри, coca cola (400 мл)',
        price: '40 000 сум'
    },

    {
        img: 'https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4e5b7657-631b-48b8-8e20-82fc5ee155f4&w=3840&q=75',
        title: 'Макси BOX Традиция',
        recipe: 'Сэндвич Original, картофель-фри, coca cola (400 мл)',
        price: '40 000 сум'
    },
    
]

food.map((card)=> {
    wrapper.innerHTML +=`
    <div class="card">
        <img src=${card.img} alt="">
        <div class="box">
        <h3>${card.title}</h3>
        <p>${card.recipe}</p>
        <b>${card.price}</b>
        <button>add</button>
    </div>
    `
})
