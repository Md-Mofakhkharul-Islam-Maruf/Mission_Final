export default function Friend({friend}){
    const {name, email, phone}= friend
    return(
        <>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </>
    )
}