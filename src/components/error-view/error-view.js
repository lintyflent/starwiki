import React from "react";
import './error-view.sass'

export const ErrorView = () =>
{
    return (
        <div className="error">
            <h2>Oops!<br/></h2>
            <span>Something clearly went wrong..<br/></span>
            <span>Everything will work soon, don't worry :) <br/></span>
        </div>
    );
}