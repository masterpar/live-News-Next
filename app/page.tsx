// import fetchnewsGql from "../services/fetchnewsGql";
import {categories} from "../constants";


import {getNews} from "../services/getNews";
import NewsList from "./news/NewsList";

async function homePage() {
    // fecht the news data
    // const news: NewsResponse = await fetchnewsGql(categories.join(","));
    const news: NewsResponse = await getNews(categories.join(","));

    return (
        <div>
            {/*NewList  news*/}
            <NewsList news={news}  />
        </div>
    )
}

//
export default homePage;
