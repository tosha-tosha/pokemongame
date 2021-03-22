import { useState, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard';
import bgImage1 from "../../assets/bg1.jpg"
import database from '../../service/firebase';
import s from './style.module.css';
import Layout from "../../components/Layout";

const data = {
    abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
    stats: {
        hp: 63,
        attack: 60,
        defense: 55,
        'special-attack': 50,
        'special-defense': 50,
        speed: 71,
    },
    type: 'flying',
    img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    name: 'pidgeotto',
    base_experience: 122,
    height: 11,
    id: 107,
    values: {
        top: 'A',
        right: 2,
        bottom: 7,
        left: 5,
    },
};

const GamePage = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, []);

    const addNewCard = () => {
        const newKey = database.ref().child('pokemons').push().key;

        database.ref('pokemons/' + newKey).set(data).then(() => setPokemons((prevState) => ({...prevState, [newKey]: data,})),
            );

        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    };

    const handleClickCard = (id) => {
        setPokemons((prevState) => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };

                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    database.ref('pokemons/' + item[0]).set(pokemon).then(() => {setPokemons((prevState) => {
                                return { ...prevState, [item[0]]: pokemon };
                            });
                        });
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    return (
        <>
           <Layout title="Game"
                   id="game"
                   urlBg={bgImage1}
           >
               <div className={s.flex}>
            <button className={s.button} onClick={addNewCard}>
                Add New Pokemon
            </button>
               </div>
            <div className={s.flex}>
                {Object.entries(pokemons).map(([key, item]) => (
                    <PokemonCard
                        isActive={item.active}
                        onCardClick={handleClickCard}
                        key={key}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        img={item.img}
                        values={item.values}
                    />

                ))}
            </div>
           </Layout>
        </>
    );
};

export default GamePage;