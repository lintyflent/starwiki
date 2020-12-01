import React from "react";
import "./random-item-view.sass"
import { Context } from "../../utils/context"
const { useContext } = require( "react" );

export const RandomItemView  = ({ item: { id, name }, sourceImg, record, namesHeader }) =>
{
    const { GetNewUrlImg } = useContext( Context );
    return (
        <section className="alert alert-dark random-item">
            <h1 className="random-item-header">Random { namesHeader }</h1>
            <img className="rounded random-item-img"
                 src={ sourceImg( id )}
                 alt={ name }
                 onError={() => GetNewUrlImg( ".random-item-img" )}
            />
            <h2 className="random-item-name">{ name }</h2>
            <ul className="random-item-ul list-group">
                { record }
            </ul>
        </section>
    );
}