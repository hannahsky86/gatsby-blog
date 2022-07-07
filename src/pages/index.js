import React, {useState} from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import SiteHeader from "../components/layout/site-header";
import PostParagraph from "../components/post-paragraph";
import Tags from "../components/tags";
import {BuildRoutes} from "../components/build-routes";
import Navigation from "../components/layout/navigation";
import {
    BrowserRouter as Router,
} from "react-router-dom";

const IndexPage = ({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                   }) => {
    const Posts = edges.filter(edge => !!edge.node.frontmatter.date);
    const [selectedTag, setSelectedTag] = useState();
    
    
    let tag_dict = {}
    Posts.forEach((post) => {
        post.node.frontmatter.tags.forEach((item) => {
            if(tag_dict[item]===undefined) {
                tag_dict[item] = []
            }
            tag_dict[item].push(post);
        })
    })
    

    return (
        <div id="index">
            <SiteHeader/>
            {
                Posts.map((edge, idx) =>
                    <div key={idx} className="post-box">
                        <PostLink key={`${idx}-link`} post={edge.node} />
                        <PostParagraph key={`${idx}-paragraph`} post={edge.node}/>
                    </div>
                )
            }
            <Router>
                <Navigation tag_dict={tag_dict} setSelectedTag={setSelectedTag}/>
                <BuildRoutes tag_dict={tag_dict}/>
            </Router>
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`