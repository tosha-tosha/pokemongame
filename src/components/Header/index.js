import s from './style.module.css';

const Header = ({ title, descr }) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                {/* Выводим пропсы title и descr с проверкой на пустоту */}
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
            </div>

        </header>
    );
};

export default Header;

