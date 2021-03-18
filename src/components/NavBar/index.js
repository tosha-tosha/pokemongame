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
                <div className={cn(s.menuButton, {
                    [s.active]: isOpen === true,
                    [s.deactive]: isOpen === false
                })} onClick={onClickHamburg}>
                    <span />
            </div>
            </div>
        </nav>
    );
};

export default Navbar;