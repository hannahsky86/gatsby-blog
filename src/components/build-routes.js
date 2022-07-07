// import React from "react";
// import {Route, Routes} from "react-router-dom";
import routes from "./routes"
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
// import {Tag} from "../../.cache/page-ssr";
// import pages from "../markdown/pages.json"

const getRouteArray = (routes, tag_dict) => {
    let routes_array = []

    routes.forEach(route => {
        const RouteElement = route.element;
        if (!route.category) {

            if(route.path === `/tags/:tagId?`){
                
                if(!tag_dict) 
                    return 
                
                Object.entries(tag_dict).map((post) => {
                    routes_array.push(
                        <Route key={`route-${route.key}-${post[0]}`} path={`/tags/${post[0]}`} 
                               element={<RouteElement route={route} post={post[1]} />} />
                    )
                })
            }
            else {
                routes_array.push(
                    <Route key={`route-${route.key}`} path={route.path} element={<RouteElement route={route} />} />
                )
            }
        }

        if (route.routes) {
            routes_array = routes_array.concat(getRouteArray(route.routes));
        }
    })

    return routes_array;
}

export function BuildRoutes({tag_dict}) {
    console.log("tag_dict1", tag_dict)
    return(
        <div className="routes">
            <Routes> {getRouteArray(routes, tag_dict)} </Routes>
        </div>
    );
}