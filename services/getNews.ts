
export const  getNews = async (
    category?: Category | string ,
    keywords?: string,
    isDynamic?: boolean
) => {

    const res = await
        fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&keywords=${keywords}&categories=${category}&languages=en,es,it`,{
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