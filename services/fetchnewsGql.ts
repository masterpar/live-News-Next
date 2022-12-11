 import { gql } from 'graphql-request';
// import sortNewsByImage from "./sortNewsByImage";
//
//  const fetchnewsGql = async (
//     category?: Category | string,
//     keywords?: string,
//     isDynamic?: boolean
// ) => {
//     //  GranQL quey
//   const query = gql`
//    query MyQuery(
//     $access_key: String!
//     $categories: String!
//     $keywords: String
//    )   {
//     myQuery(
//      access_key: "5c20d762e1a6536c91bb3aa5903f454e"
//      categories: $categories
//      countries: "us"
//      sort: "published_desc"
//      keywords: $keywords
//     ) {
//      data {
//       author
//       category
//       country
//       description
//       image
//       language
//       published_at
//       source
//       title
//       url
//      }
//      pagination {
//       count
//       limit
//       total
//       offset
//      }
//     }
//    }
//   `;
//     // Fetch function with next 13 13 caching...
//   const res = await fetch('https://coaraci.stepzen.net/api/nonplussed-snake/__graphql',{
//    method: "POST",
//    cache: isDynamic ? "no-cache" : "default",
//    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
//    headers: {
//     "Content-Type": "application/json",
//     Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
//    },
//    body: JSON.stringify({
//     query,
//     variables: {
//      access_key: process.env.MEDIASTACK_API_KEY,
//      categories: category,
//      keywords: keywords
//     }
//    })
//   })
//
//   const newsResponse = await res.json()
//   console.log('>>>>>>>> RESPONSEEEE >>>' + JSON.stringify(newsResponse))
//
//     //  sort fuction by images vs not images present
//   const newsData = sortNewsByImage(newsResponse.data.myQuery)
//
//     //  return res
//   return newsData
//
// }
//
// export default fetchnewsGql