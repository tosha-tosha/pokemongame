import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import bgImage2 from './assets/bg2.jpg';
import bgImage3 from "./assets/bg3.jpg";




const App = () => {
    return (
        <>
            <Header
                title="Первый сайт на React.js"
                descr="домашняя работа"
            />
            <Layout
                id={1}

                title="Абрикосы"
                descr="что-то из фруктов"
                bgImage={bgImage2}

            />
            <Layout
                id={2}
                title="Персики"
                descr="что-то из других фруктов"
                colorBg="pink"
            />
            <Layout
                id={3}
                title="Третий layout"
                descr="передать картинку"
                bgImage={bgImage3}
            />
            <Footer/>
        </>
    );
}


export default App;