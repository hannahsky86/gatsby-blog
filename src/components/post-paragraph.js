import React from "react"

const PostParagraph = ({ post }) => (
    <div className="post-paragraph">
        <p>
            {post.excerpt}
        </p>
    </div>
)

export default PostParagraph