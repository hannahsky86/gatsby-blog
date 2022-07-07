import Home from "../pages/home"
import Blog from "../pages/blog";
import ContactMe from "../pages/contact-me";
import BlogDetails from "../pages/blog-details";
import Tags from "./tags";
import TagDetails from "../pages/tag-details";
import TagsPage from "../pages/tags-page";

export default [
    {
        path: "/",
        name: "Home",
        key: "home",
        exact: true,
        element: Home
    },
    {
        path: "/blog",
        name: "Blog",
        key:"blog",
        element: Blog,
        routes:
            [
                {
                    path: "/blog/:blogId?",
                    name: "Blog",
                    key:"blog-pages",
                    element: BlogDetails,
                }
            ]
    },
    {
        path: "/tags",
        name: "TagsPage",
        key:"tags-page",
        element: TagsPage,
        routes:
            [
                {
                    path: "/tags/:tagId?",
                    name: "Tags",
                    key:"tag-pages",
                    element: TagDetails,
                }
            ]
    },
    {
        path: "/contact-me",
        name: "Contact Me",
        key:"contact-me",
        element: ContactMe
    }
];
