import NewsListItem from "./news-list-item";

const NewsList = (props) => {


    const news = props.news.map((item) => (
        < NewsListItem key={item.id} item={item}/>
    ))
    
    return (
        <>
            { news }
        </>
    );
};

export default NewsList;