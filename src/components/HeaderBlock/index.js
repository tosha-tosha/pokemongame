import s from './style.module.css';

import logo from '../../assets/logo.svg';


const HeaderBlock = ({title, hideBackground=false,descr}) =>{
    const styleRoot= hideBackground ? {backgroundImage:'none'} :{};
    return(
        <div className={s.root} style={styleRoot}>
            <div className={s.container}>
                <img src={logo} alt="logo"/>
                { title && ( <h1 className={s.header}>This is Pokemon Card Game</h1>)}
                {title}
                {descr && <p className={s.paragraph}>{descr}</p>}
            </div>

        </div>
    )

}
export default HeaderBlock

