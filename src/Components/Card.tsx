export default function Card({ card, index, handleClick }) {
    return (
        <>
            <div className="card" onClick={() => handleClick(index)} />
            <img src={card.img} alt={card.name} />
        </>
    );
}

