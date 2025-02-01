import { useState } from "react"

export default function LudoBoard() {

    let [move, setMoves] = useState({blue: 0, green: 0, yellow: 0, red: 0})

    let [arr, setArray] = useState(["Hasnain"])
    
    let updateArray = () => {
        setArray([...arr, " Khan"])
        }
    
    let updateBlue = () => {
        move.blue += 1;
        console.log(`Bluemove = ${move.blue}`)
        setMoves({...move})
    }
    let updateGreen = () => {
        move.green += 1;
        console.log(`Greenmove = ${move.green}`)
        setMoves({...move})
    }
    let updateYellow = () => {
        move.yellow += 1;
        console.log(`Yellowmove = ${move.yellow}`)
        setMoves({...move})
    }
    let updateRed = () => {
        move.red += 1;
        console.log(`Redmove = ${move.red}`)
        setMoves({...move})
    }

    return(
        <div>
            <h2>Game Begin!</h2>
            <p onClick={updateArray}>Array: {arr}</p>
            <div className="board">
                <p>Blue : {move.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue", color: "white"}}>+1</button>
                <p>Green :  {move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green", color: "white"}}>+1</button>
                <p>Yellow :  {move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Red :  {move.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red", color: "white"}}>+1</button>
            </div>
        </div>
    )
}