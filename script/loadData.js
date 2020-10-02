import {getData} from './getData.js'

const cartList = [
    {
        id: 'idd098',
        count: 3
    },
    {
        id: 'idd555',
        count: 1
    },
    {
        id: 'idd876',
        count: 2
    },
]
// проверка всего что и где находитсяч через location в консоле
export const loadData = () => {



    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data))
    }
    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data))
    }
    //getData.catalog((data) => console.log(data))
    // getData.subCatalog(value,(data) => console.log(data))
}