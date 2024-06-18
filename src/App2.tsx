

import { useEffect, useState } from "react"


const emptyBoard = ["", "", "", "", "", "", "", "", ""]

const serverPath = "http://localhost:4000"

const getGame = async (id: string) => {
    const response = await fetch(`${serverPath}/game/${id}`);
    const json = await response.json();
    console.log
    return json;
}

const makeaMove = async (id:...) => {

}

//when you are in the lobby- 

const gameId = "asdf"
const [game, setGame] = useState(null)
const [poller, setPoller] = useState(0)

return (
    useEffect(() => {
        const initializedGame = async () => {
            //go get the game
            const game = await getGame(gameId);

            //store the game in state 
            setGame(data.game);
        }

        //call the function 
        initializedGame();
    }, [])

    //polling - every second we want to update the game state 
    setTimeout(() => {
        setPoller(poller + 1);
    }, 1000); 
    }, [poller]);

type Card = {
    name: string;
    flipped: boolean;
    matched: boolean;
}

// this is a map which transforms a cards array that needs "checking"
// into a "resolved" cards array where the match is either confirmed or rejected

const initialCards = [{ id: 1, name: 'fish', flipped: false, matched: false }, { id: 2, name: 'cat', flipped: false, matched: false }, { id: 3, name: 'dog', flipped: false, matched: false }, { id: 4, name: 'bear', flipped: false, matched: false }, { id: 5, name: 'fish', flipped: false, matched: false }, { id: 6, name: 'dog', flipped: false, matched: false }, { id: 7, name: 'bear', flipped: false, matched: false }, { id: 8, name: 'cat', flipped: false, matched: false }]
function App2() {

    const [cards, setCards] = useState(initialCards)
    const [activeCards, setActiveCards] = useState<number[]>([])

    // keep activeCards up to date:
    useEffect(
        () => {
            const activeCardIds = cards.filter(card => card.flipped && !card.matched).map(card => card.id)
            setActiveCards(activeCardIds)
        },
        [cards])

    useEffect(
        () => {
            // anytime the app updates, check for matches and update the state of the app
            if (activeCards.length < 2) return

            const newCards = structuredClone(cards)
            const card1Index = newCards.findIndex(card => card.id == activeCards[0])
            const card2Index = newCards.findIndex(card => card.id == activeCards[1])

            if (newCards[card1Index].name == newCards[card2Index].name) {
                newCards[card1Index].matched = true
                newCards[card2Index].matched = true
            } else {
                newCards[card1Index].flipped = false
                newCards[card2Index].flipped = false
            }
            setCards(newCards)
        }, [activeCards, setCards, cards])


    function handleClick(idx: number) {
        if (cards[idx].matched) return
        const cardsCopy = structuredClone(cards)
        cardsCopy[idx].flipped = true
        setCards(cardsCopy)
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-wrap gap-1 w-48">
                {cards.map((card, idx) => <button key={idx} onClick={() => handleClick(idx)} className={`w-8 h-8 p-8 rounded-lg flex ${card.flipped ? 'bg-blue-200' : 'bg-red-200'} items-center text-center justify-center`}>{card.flipped ? card.name : ''}</button>)}
            </div>
        </div>
    )
}


export default App2;
