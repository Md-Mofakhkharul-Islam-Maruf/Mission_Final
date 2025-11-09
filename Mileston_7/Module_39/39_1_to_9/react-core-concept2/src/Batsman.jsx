import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0)
    const [sixs, setSixs] = useState(0)
    const [fours, setFours] = useState(0)

    const handleSingle = () => {
        setRuns(runs + 1)
    }

      const handleFour = () => {
        setRuns(runs + 4)
        setFours(fours+1)
    } 
    
    const handleSix = () => {
        setRuns(runs + 6)
        setSixs(sixs+1)
    }

    return (
        <div>
            <h3>Player: Bengali</h3>
            <p>Total Fours: {fours} and Total sixes: {sixs}</p>
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}