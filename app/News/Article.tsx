type Props = {
    article: Article
}

function Article({ article}: Props) {
    return (
        <article
            className="article"
        >
            { article.image && (
                <img
                    src={article.image}
                    alt={article.image}
                    className="h-56 w-full object-cover rounded-t-lg shadow-md"
                    />
            )}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex flex-col p-5">
                    <h2 className="font-bold font-serif"> { article.title }</h2>
                        <section className="mt-2 flex-1">
                            <p className="text-xs line-clamp-2">{ article.description }</p>
                        </section>

                    <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                        <p>{article.source}</p>
                        <p>{article.published_at}</p>
                    </footer>
                </div>

                {/*readMoreButton*/}

            </div>
        </article>


    )
}

export default Article;
