import React from "react"
import TagsPage from "../pages/tags-page";
// import {Router} from "@reach/router";
import {Route} from "react-router-dom";
import {Link} from "gatsby";


const Tags = ({ tag_dict }) => {

    return (
        <div className="tags">
            {Object.keys(tag_dict).map((item, idx) =>
                <Link to={`/tags/${item}`} key={`${idx}-tag`}>
                    {item}
                </Link>
                // <Link name="tag-item" to={"/tags-page"}/>
                // <Route  path={`/tags-page`} element={<TagsPage tag_dict={item}  />} />
                // <Router exact path="/tags-page" component={<TagsPage tag_dict={tag_dict}/>}/>
            )}
        </div>
    )   
}

export default Tags