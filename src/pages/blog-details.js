import React, { useState, useEffect }  from "react"
// // import Markdown from "markdown-to-jsx"
//

export default function BlogDetails() {
    return (
        <h1>TEST BLOG DETAILS</h1>
    )
}


// const BlogDetails = ({route, post=""}) => {
//
//     // const [postContent, setPostcontent] = useState('')
//     //
//     // useEffect(() => {
//     //     import(`../markdown/${md_file.path}`)
//     //         .then(res =>
//     //             fetch(res.default)
//     //                 .then(response => response.text())
//     //                 .then(response =>
//     //                 {
//     //                     (expanded.state && expanded.key === md_file.key) ? 
//     //                         setPostcontent(response) :  
//     //                         setPostcontent(response.substring(0,100).concat("..."))
//     //                 }    
//     //                 )
//     //                 .catch(err => console.log(err))
//     //         )
//     // }, [expanded])
//
//
//     // useEffect(() => {
//     //     import(`../markdown/${post.path}`)
//     //         .then(res =>
//     //             fetch(res.default)
//     //                 .then(response => response.text())
//     //                 .then(response => setPostcontent(response))
//     //                 .catch(err => console.log(err))
//     //         )
//     // }, [route, post])
//
//     return (
//         <div className="article-wrapper">
//             <p>Blog Details</p>
//             {/*<Markdown options={{ forceBlock: true }}>*/}
//             {/*    {postContent}*/}
//             {/*</Markdown>*/}
//         </div>
//     )
// }
//
// export default BlogDetails