import {getNews} from "../../../services/getNews";
import NewsList from "../NewsList";
import {categories} from "../../../constants";

type Props = {
    params: { category: Category}
}

async function NewsCategoryPage({ params: { category }}: Props) {

    const news : NewsResponse = await getNews(category)
    return (
        <div>
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategoryPage;

export async function generateStaticParams(){
    return categories.map((category) => ({
        category: category
    }))
}
