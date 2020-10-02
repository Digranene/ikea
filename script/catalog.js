import {getData} from './getData.js'
import generateSubCatalog from './generateSubCatalog.js'

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog()
    // ищем класс и присваеваем ему переменную
    const btnBurger = document.querySelector(".btn-burger")
    const catalog = document.querySelector(".catalog")
    const subCatalog = document.querySelector('.subcatalog')
    const overlay = document.createElement('div')
    
    overlay.classList.add('overlay')
    document.body.append(overlay)

//добавили класс для открытия меню
    const openMenu = () => {
        catalog.classList.add('open')
        overlay.classList.add('active')
    }
//добавили класс для закрытия меню
    const closeMenu = () => {
        closeSubMenu() 
        catalog.classList.remove('open')
        overlay.classList.remove('active')
    }
// preventDefault запретили переход по ссылкам привязаным,closest-при клике переходим не по ссылке а по Лишке
    const handlerCatalog = (event) => {
        event.preventDefault()
      
        const itemList = event.target.closest('.catalog-list__item>a')
        if (itemList) {
            getData.subCatalog(itemList.textContent, (data) => {
                updateSubCatalog(itemList.textContent, data)
                subCatalog.classList.add('subopen')
            })
        }
        if (event.target.closest('.btn-close')) {
            closeMenu()
        }
    }

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen')
    }
//слассу присваеваем евент закрытия или открытия
    btnBurger.addEventListener('click', openMenu)
    overlay.addEventListener('click', closeMenu)
    catalog.addEventListener('click', handlerCatalog)
    subCatalog.addEventListener('click',event => {
        const btnReturn = event.target.closest('btn-return')
        if (btnReturn) closeSubMenu()
    })


//закрытие меню при нажатии на ESCAPE
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            closeMenu()
        }
    })
}

