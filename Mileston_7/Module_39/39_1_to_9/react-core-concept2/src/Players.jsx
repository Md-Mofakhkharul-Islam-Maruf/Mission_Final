import { useEffect, useState } from "react"

export default function Players() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <>
            <h4>Players: {players.length}</h4>
            <ol>
                {
                    players.map(player => <li>{player.title}</li>)
                }
            </ol>
        </>
    )
}