import {getData} from "./getData.js";

const wishList = ['idd023', 'idd026', 'idd022', 'idd021']

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header')
    const goodsList = document.querySelector('.goods-list')

    const generateCards = (data) => {
        goodsList.textContent = ''

        data.forEach(item => {
            goodsList.insertAdjacentElement('afterbegin', `<li>${item.name}</li>`)
        })
    }

    if (location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search) //распознание русс вместо англ
        const prop = search.split('=')[0].substring(1)  //разбитие строки по выбранному символу ( "=" ) и удалить лишний символ
        const value = search.split('=')[1]  //разбитие строки по выбранному символу ( "=" )

        if (prop === 's') {
            getData.search(value, generateCards)
            mainHeader.textContent = `Поиск: ${value}`
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, generateCards)
            mainHeader.textContent = `Список Желаний`
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, generateCards)
            mainHeader.textContent = value
        }
    }
}

export default generateGoodsPage