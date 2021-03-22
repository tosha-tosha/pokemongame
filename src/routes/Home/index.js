import Header from '../../components/Header';
import Layout from '../../components/Layout';
import bgImage1 from '../../assets/bg1.jpg';
import bgImage2 from '../../assets/bg2.jpg';
import bgImage3 from "../../assets/bg3.jpg";



const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) =>{

        onChangePage && onChangePage(page);

    }
    return (
        <>

            <Header
                title="Pokemon Game"
                descr="This is simple triple triad card game"
                onClickButton={handleClickButton}
            />
            <Layout
                title="Game"
                id="game"
                urlBg={bgImage2}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as 	"red" on a 3x3 grid.<br/> Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
            </Layout>
            <Layout
                title="About"
                id="about"
                urlBg={bgImage1}
                colorBg=""
            >

            </Layout>
            <Layout
                title="Contact"
                descr="Description Third Layout"
                id="contact"
                urlBg={bgImage3}
            >

            </Layout>
        </>
    );
}


export default HomePage;