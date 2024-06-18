import express from "express";

const app = express();

//add json handling 
app.use(json());

//add cors
app.listen(cors())

let games = {
    [asdf]:
        id: “asdf”,
    board: [],
    currentPlayer: “X”,
    winState: { outcome: null, winner: null }
    Player1: { token: “X”, id: “” },
    Player2: { token: “O”, id: “” },
}


//get a game
app.get("/game/:id") => {
    const id = req.params.id;
    const ggame = games.[id];
}

//get the old board, set the board to the current player, then toggle player
app.post("/game/:id/move", (req, res) => {
    const id = req.params.id;
    const game = games.[id];

    const { index } = req.body;

    //if no game is found, return 404
    if (!game) {
        return res.status(404).send("game not found");
    }

    const newBoard = game.board;
    const player = game.currentPlayer;
    newBoard[index] = player;
    game.board = newBoard;
    games.currentPlayer = player === "X" ? "O" : "X";

    req.json({ game })
})

app.get("/", (req, res) => {

})

app.listen(30000, () => {
    console.log("listening on port" + PORT)
})