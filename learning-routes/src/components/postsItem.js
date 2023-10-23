import { useParams, useLocation } from 'react-router-dom'

const PostItem = () => {
    let params = useParams();
    let location = useLocation();

    console.log(params);
    console.log(location);

    return (
        <>
        Posts ID XXX
        </>
    )
}

export default PostItem;