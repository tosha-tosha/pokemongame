import {useState, useEffect} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout'
import database from "../../service/firebase";
import bg1 from "../../assets/bg1.jpg"
import s from './style.module.css';



const GamePage = () => {



    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const onCardClick = (id) => {
        const newBase = Object.entries(pokemons).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === id) {
                pokemon.active = !pokemon.active;
            };
            acc[item[0]] = pokemon;
            return acc;
        }, {});
        database.ref('pokemons/').set({...newBase}).then(() => setPokemons(newBase) );

        setPokemons(newBase);
    };

    const handleAddPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const newPokemons = Object.entries(pokemons).reduce((acc, item) => {
            const pokemon = {...item[1]};
            if (pokemon.id === 25) {
                database.ref('pokemons/' + newKey).set(pokemon).then(() => setPokemons(newPokemons) );
                acc[newKey] = pokemon;
            }
            acc[item[0]] = pokemon;
            return acc;
        }, {})

        setPokemons(newPokemons);
    }

    return (
        <>
            <Layout title="Game"
                    id="game"
                    urlBg={bg1}>
                <div className={s.flex}>
                    <button className={s.button} onClick={handleAddPokemon} >
                        Add new Pokemon
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {type, img, name, id, values, active}]) => <PokemonCard
                            key={key}
                            type={type}
                            img={img}
                            name={name}
                            id={id}
                            values={values}
                            onCardClick={onCardClick}
                            isActive={active}
                        />)
                    }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;