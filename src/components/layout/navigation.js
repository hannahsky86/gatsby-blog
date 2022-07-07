import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import TagsPage from "../../pages/tags-page";
// import pages from "../markdown/pages.json";
// import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
// import {MOBILE_WIN} from "./constants";

const Navigation = ({tag_dict, setSelectedTag}) => {
   
   
    // if(tag_dict)
    //     Object.entries(tag_dict).map((post) => console.log("POST1", post))
    
    
    return (
        <header className={`header`}>
            <div id="nav-links" className="navigation">
                    <ul>
                        {/*<li className="category">*/}
                        {/*    <Link className="category" to="/">HOME</Link>*/}
                        {/*</li>*/}
                        {/*<li className="category">*/}
                        {/*    <Link to="#">BLOG</Link>*/}
                        {/*</li>*/}
                        <BlogTagsDropdown tag_dict={tag_dict}/>
                        {/*<li className="category">*/}
                        {/*    <Link to="/contact-me">CONTACT ME</Link>*/}
                        {/*</li>*/}
                    </ul>
            </div>
        </header>
    );
}

function BlogTagsDropdown ({tag_dict, setSelectedTag}) {
    return (
        Object.entries(tag_dict).map((item) =>
            <li className="tags" key={`dropdown-tag-${item}`}>
                <button onClick={() => setSelectedTag(item[0])}>
                    {/*<TagsPage item={item[0]}>*/}
                        {item[0]}
                    {/*</TagsPage>*/}
                </button>
                { item[1].map((v) =>
                    <li className="blog-post" key={`tag-list-${v.node.frontmatter.slug}`}>
                        <Link to={v.node.frontmatter.slug}>
                            {v.node.frontmatter.title}
                        </Link>
                    </li>
                )}
            </li>
        )
    )
}

export default Navigation;