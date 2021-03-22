import cn from 'classnames';

import s from  './style.module.css';


const PokemonCard = ({
                         id, name, img, type,
                         values, isActive, isSelected,
                         onClickCard, minimize, className}) => {

    console.log(minimize, className);

    const onClick = () => {
        onClickCard && onClickCard(id);
    };

    if(id && name && img && type && values) {
        return (
            <div className={cn(s.root)} onClick={onClick}>
                <div className={cn([className], s.pokemonCard, {[s.active]: isActive}, {[s.pokemonCard]: isSelected}, {[s.selected]: isSelected})}>
                    <div className={s.cardFront}>
                        <div className={cn(s.wrap, s.front)}>
                            <div className={cn(s.pokemon, s[type])}>
                                <div className={s.values}>
                                    <div className={cn(s.count, s.top)}>{values.top}</div>
                                    <div className={cn(s.count, s.right)}>{values.right}</div>
                                    <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                    <div className={cn(s.count, s.left)}>{values.left}</div>
                                </div>
                                <div className={s.imgContainer}>
                                    <img src={img} alt={name} />
                                </div>
                                { !minimize && (<div className={s.info}>
                                    <span className={s.number}>#{id}</span>
                                    <h3 className={s.name}>
                                        {name}
                                    </h3>
                                    <small className={s.type}>
                                        Type: <span>{type}</span>
                                    </small>
                                </div>) }
                            </div>
                        </div>
                    </div>

                    <div className={s.cardBack}>
                        <div className={cn(s.wrap, s.back)} />
                    </div>

                </div>
            </div>
        );
    } else {
        return(<></>);
    }
};

export default PokemonCard;