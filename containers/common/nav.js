import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { MENUITEMS } from '../../constant/menu';
import {Container,Row} from 'reactstrap'
const Nav = () => {
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [sidebar, setSidebar] = useState(false);

    function closeSidebar() {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.remove('openSidebar')
    }

    useEffect(() => {
        const currentUrl = location.pathname;
        mainmenu.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })

    }, [])

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })

    }

    // Click Toggle menu
    const toggletNavActive = (item) => {

        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    return (
        <div className={`navbar`} id="togglebtn">
            <div className="responsive-btn">
                <a className="btn-back" onClick={closeSidebar}>
                    <h5>back</h5>
                </a>
            </div>
            <ul className="main-menu">
                {
                    MENUITEMS.map((menuItem, i) => {
                        return (
                            <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
                           
                                {(menuItem.type === 'sub') ?
                                    <Link href={menuItem.link}><a  onClick={() => toggletNavActive(menuItem)}>
                                        <span>{menuItem.title}</span>
                                    </a></Link> 
                                    : ''}
                                                            
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="main-menu">
                {
                    MENUITEMS.slice(3, 7).map((menuItem, i) => {
                        return (
                            <li key={i} className={` ${menuItem.megaMenu ? 'mega-menu' : ''}`}>
                              
                                {(menuItem.sidebartitle) ?
                                    <div className="dropdown">{menuItem.sidebartitle}</div>
                                    : ''}
                               
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
