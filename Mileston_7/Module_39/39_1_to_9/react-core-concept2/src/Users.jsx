import { use } from "react"

export default function Users({fetchUsers }){
    const useFetchuser = use(fetchUsers)
    return(
        <>
            <p>Users Name: {useFetchuser.length}</p>
        </>
    )
}