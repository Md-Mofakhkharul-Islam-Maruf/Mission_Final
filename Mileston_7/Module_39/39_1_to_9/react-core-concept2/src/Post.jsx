export default function Post({post}){
    const {title} = post
    return(
        <>
            <p>Post: {title}</p>
        </>
    )
}