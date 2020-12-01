import React from "react";
import "./not-found-view.sass"

export const NotFoundView = () =>
{
    return (
        <div className="not-found-view">
            <h2>Page not found!<br/></h2>
            <span>Unfortunately, there is no such page :(<br/></span>
        </div>
    );
}