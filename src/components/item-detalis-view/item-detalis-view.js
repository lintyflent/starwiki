import React, { useContext } from "react";
import { Context } from "../../utils/context"
import "./item-detalis-view.sass"

export const ItemDetalisView = ({ item, img, record, namesHeader }) => {
    const { name } = item;
    const { GetNewUrlImg } = useContext( Context );

    return (
        <section className="item-detalis alert alert-dark">
            <h2 className="item-detalis-header">Selected { namesHeader }</h2>
            <img className="rounded item-detalis-img"
                 src={ img }
                 alt={ name }
                 onError={ () => GetNewUrlImg( ".item-detalis-img" ) }
            />
            <h3 className={ "item-detalis-name" }>{ name }</h3>
            <ul className={ "list-group item-detalis-ul" }>
                { record }
            </ul>
        </section>
    );
}