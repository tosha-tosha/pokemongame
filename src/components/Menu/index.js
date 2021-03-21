import s from './style.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const MENU = [{
    title: 'HOME',
    to: ''
},
    {
        title: 'GAME',
        to: "game"
    },
    {
        title: 'ABOUT',
        to: "about"
    },
    {
        title: 'CONTACT',
        to: "contact"
    }]

const Menu = ({ isOpen, onClickHamburg }) => {
    return (
<<<<<<< HEAD
            <div className={cn(s.menuContainer, {
                [s.active]: isOpen === true,
                [s.deactive]: isOpen === false
            })}>
                <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        {
                            MENU.map(({ title, to }, index) => (
                                <li key={index}>
                                    <Link to={to} onClick={onClickHamburg}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
=======
        <div className={cn(s.menuContainer, isActive ? s.active : s.deactive)}>
            <div className={s.overlay}/>
            <div className={s.menuItems}/>
            <div>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
>>>>>>> 5a0f7070e3255ce417412db28ad6917c7d23bc19
                </ul>
            </div>
        </div>
    );
};

export default Menu;