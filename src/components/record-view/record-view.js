import React from "react";
import './record-view.sass'

export const RecordView = ({ item, field, label, reduction = "" }) =>
{
    return (
        <li className="list-group-item item-detalis-li">{ label } { item[ field ]} { reduction }</li>
    )
}

export const SetRecord = ( field, label, reduction = "" ) =>
{
    return <RecordView field={ field } label={ label + ":" } reduction={ reduction }/>;
}

