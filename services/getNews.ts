
export const  getNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {

    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=5c20d762e1a6536c91bb3aa5903f454e&languages=en`,{
        method: "GET",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-Type": "application/json",
        }
    })
    // console.log(res)
    return res.json()
}