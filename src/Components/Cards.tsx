import { useState } from "react";
import Card from "./Card";

export default function Cards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'Donatello', status: '', img: '/images/donatello.jpeg' },
        { id: 0, name: 'Donatello', status: '', img: '/images/donatello.jpeg' },
        { id: 1, name: 'Leonardo', status: '', img: '/images/leonardo.jpeg' },
        { id: 1, name: 'Leonardo', status: '', img: '/images/leonardo.jpeg' },
        { id: 2, name: 'Michelangelo', status: '', img: '/images/Michelangelo.jpeg' },
        { id: 2, name: 'Michelangelo', status: '', img: '/images/Michelangelo.jpeg' },
        { id: 3, name: 'Raphael', status: '', img: '/images/raphael.jpeg' },
        { id: 3, name: 'Raphael', status: '', img: '/images/raphael.jpeg' },
    ].sort(() => Math.random() - 0.5))

    const handleClick = (index) => {
        alert(index)
    }

    return (
        <div className="container"  >
            {cards.map((card, index) => {
                return <Card card={card} key={index} index={index} handleClick={handleClick} />
            })}
        </div>
    );
}