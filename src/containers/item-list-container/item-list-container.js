import { LoadView } from "../../components/load-view/load-view";
import React, { useEffect, useState } from "react";
import ItemListView from "../../components/item-list-view/item-list-view";

export const ItemListContainer = ({ onGetAlldata, onLoadItemDetalis, currentPage }) =>
{
    const [ itemList, SetItemList ] = useState( null );
    const [ status, SetStatus ] = useState({ loading: true, error: false });
    useEffect(()=>
    {
        onGetAlldata()
            .then(( itemList ) =>
            {
                SetItemList( itemList );
                SetStatus({ ...status ,loading: false });
            })
            .catch(( error ) => SetStatus({ loading: false, error: true }))
    }, []);

    const { loading } = status;
    if(loading)
    {
        return (
            <ul className="list-group item-list">
                <LoadView/>
            </ul>
        )
    }
    else
    {
        return (
            <ItemListView itemList={ itemList }
                          onLoadItemDetalis={( id ) => { onLoadItemDetalis( id ) }}
                          currentPage={ currentPage }
            />
        );
    }
}
