import React from "react";
import { withRouter } from "react-router-dom";
import "./item-list-view.sass"

const ItemListView = ({ itemList, history, currentPage }) =>
{
    const contentList = itemList.map(( item ) =>
    {
        return (
            <li key={ item.name }
                className={"list-group-item item-list-view"}
                onClick={ () => { history.push( `/${currentPage }/${ item.id }`)}}
            >{ item.name }</li>
        );
    });

    return (
        <ul className="list-group item-list">
            { contentList }
        </ul>
    );
}
export default withRouter( ItemListView );