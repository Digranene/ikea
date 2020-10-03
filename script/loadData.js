import {getData} from './getData.js'


// проверка всего что и где находитсяч через location в консоле
export const loadData = () => {




    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data))
    }
    //getData.catalog((data) => console.log(data))
    // getData.subCatalog(value,(data) => console.log(data))
}