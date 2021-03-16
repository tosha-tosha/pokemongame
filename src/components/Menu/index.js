import s from './style.module.css';
import cn from 'classnames';

const Menu = ({isActive}) => {
    return (
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
                </ul>
            </div>
        </div>
    );
};

export default Menu;