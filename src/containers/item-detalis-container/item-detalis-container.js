import React, { useCallback, useEffect, useState } from "react";
import { LoadView } from "../../components/load-view/load-view";
import { ItemDetalisView } from "../../components/item-detalis-view/item-detalis-view";
import { withRouter } from "react-router-dom";

const ItemDetalisContainer = ({ onGetData, getImgUrl, children, match, namesHeader }) =>
{
    const { id } = match.params;
    const [ dataItem, SetItem ] = useState({ item: null, img: null });
    const [ status, SetStatus ] = useState({ loading: true, error: false });

    const updateDataItem = useCallback(() =>
    {
        if ( id !== null && id !== undefined )
        {
            SetStatus(() => { return { ...status, loading: true, error: true }; });
            onGetData( id )
                .then(( item )=>
                {
                    SetItem(() => { return { item: item, img: getImgUrl(item )}; })
                    SetStatus(() => { return { ...status, loading: false }; })
                })
        }
    }, [ getImgUrl, id, onGetData ])
    useEffect(()=>{ updateDataItem() }, [ id, updateDataItem ]);

    let content;
    const { item } = dataItem;
    if( status.loading )
    {
        if( item === null || item === undefined )
        {
            content = <div>Character selection pending ...</div>
        }
        else
        {
            content = <LoadView/>
        }
    }
    else
    {
        return (
            <ItemDetalisView  item={ item }
                              img={ dataItem.img }
                              record={ React.Children.map( children, ( child ) =>
                              {
                                  return React.cloneElement( child, { item });
                              })}
                              namesHeader={ namesHeader }
            />
        );
    }
    return (
        <section className="item-detalis alert alert-dark">
            { content }
        </section>
    )
}

export default withRouter(ItemDetalisContainer);