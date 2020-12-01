import { LoadView } from "../../components/load-view/load-view";
import React, { useEffect, useState } from "react";
import { RandomItemView } from "../../components/random-item-view/random-item-view";
import { randomInteger } from "../../utils/random-integer";

export const RandomItemContainer = ({ maxItem, sourceData, sourceImg, namesHeader, children }) =>
{
    const [ item, SetItem ] = useState({});
    const [ status, SetStatus ] = useState({ loading: true, error: false });

    const onLoadedItem = ( item ) =>
    {
        SetItem( item );
        SetStatus({ ...status, loading: false })
    };

    const updateItem = () =>
    {
        SetStatus({ ...status, loading: true })
        let id = randomInteger( 1, maxItem );
        if ( id !== null )
        {
            sourceData( id )
                .then( onLoadedItem )
                .catch(( error ) =>
                {
                    updateItem( maxItem );
                });
        }
    }

    let interval;
    useEffect(()=>
    {
        updateItem( maxItem );
        interval = setInterval(() => updateItem( maxItem ), 60000 );
        return () => clearInterval( interval );
    }, [])

    const { loading } = status;
    if( loading )
    {
        return (
            <section className="list-group random-item">
                <LoadView/>
            </section>
        );
    }
    else
    {
        return (
            <RandomItemView item={ item }
                      sourceImg={ sourceImg }
                      record={ React.Children.map( children, ( child ) =>
                      {
                          return React.cloneElement( child, { item });
                      })}
                      namesHeader={ namesHeader }
            />
        );
    }
}