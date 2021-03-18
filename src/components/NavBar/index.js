import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({ isOpen, bgActive , onClickHamburg }) => {

    return (
        <nav className={cn(s.navbar, {
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    POKEMONGAME
                </p>
<<<<<<< HEAD
                <div className={cn(s.menuButton, {
                    [s.active]: isOpen === true,
                    [s.deactive]: isOpen === false
                })} onClick={onClickHamburg}>
                    <span />
            </div>
=======
                <a
                    className={cn(s.menuButton, {[s.active]: isMenuActive})}
                    onClick={handleMenuButtonClick}>
                    <span/>
                </a>
>>>>>>> 5a0f7070e3255ce417412db28ad6917c7d23bc19
            </div>
        </nav>
    );
};

export default Navbar;