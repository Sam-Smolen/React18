import { useEffect } from "react";

const Post = ({item}) => {


    useEffect(()=> {
        console.log('Post created')

        return(()=> {
            console.log('component exit')
        })

    }, [])

    return (
        <div>
        <div>{item.name}</div>
        <div>{item.body}</div>
        <hr/>
        </div>
    )
}

export default Post;