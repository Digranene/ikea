

export const catalog = () => {
    // ищем класс и присваеваем ему переменную
    const btnBurger = document.querySelector(".btn-burger")
    const catalog = document.querySelector(".catalog")
    const btnClose = document.querySelector('.btn-close')
    const subCatalog = document.querySelector('.subcatalog')
    const subCatalogHeader = document.querySelector('.subcatalog-header')
    const bntReturn = document.querySelector('.btn-return')

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
        catalog.classList.remove('open')
        overlay.classList.remove('active')
        closeSubMenu()
    }
// preventDefault запретили переход по ссылкам привязаным,closest-при клике переходим не по ссылке а по Лишке
    const openSubMenu = (event) => {
        event.preventDefault()
        const itemList = event.target.closest('.catalog-list__item')
        if (itemList) {
            subCatalogHeader.innerHTML = itemList.innerHTML
            subCatalog.classList.add('subopen')
        }
    }

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen')
    }
//слассу присваеваем евент закрытия или открытия
    btnBurger.addEventListener('click', openMenu)
    btnClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu)
    catalog.addEventListener('click', openSubMenu)
    bntReturn.addEventListener('click', closeSubMenu)



//закрытие меню при нажатии на ESCAPE
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            closeMenu()
        }
    })
}

