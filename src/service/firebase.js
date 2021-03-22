import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDndrpCN-Cr_CGStLXuVV8ap3Xi2T2pZwo",
    authDomain: "pokemongame-96bb1.firebaseapp.com",
    databaseURL: "https://pokemongame-96bb1-default-rtdb.firebaseio.com",
    projectId: "pokemongame-96bb1",
    storageBucket: "pokemongame-96bb1.appspot.com",
    messagingSenderId: "862336763116",
    appId: "1:862336763116:web:9d768535eb09e8616011c9"
};
firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    // Получение/обновление данных по сокету (при любом изменении данных)
    getPokemonsSoket = (cb) => {
        this.database.ref('pokemons')
            .on('value' , (snapshot) => {
                cb(snapshot.val());
            })
    }

    offPokemonsSoket = () => {
        this.database.ref('pokemons').off();
    }

    // Единоразовый запрос данных
    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons')
            .once('value')
            .then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (new_card) => {
        const newKey = this.database.ref().child('pokemons').push().key;

        this.database.ref(`pokemons/${newKey}`)
            .set(new_card)
    }
}

export default Firebase;
