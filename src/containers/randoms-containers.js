import {RandomItemContainer} from "./random-item-container/random-item-container";
import React, {useContext} from "react";
import { Context } from "../utils/context"
import {SetRecord} from "../components/record-view/record-view";

export const RandomPerson = () =>
{
    const {GetPerson, GetImgPersonUrl2, namesHeader} = useContext(Context);

    const DataCharacteristics =
        [
            {field: "eyeColor", label: "Eye color", reduction: ""},
            {field: "birthYear", label: "Birth year", reduction: ""},
            {field: "gender", label: "Gender", reduction: ""},
            {field: "mass", label: "Mass", reduction: "kg"},
            {field: "height", label: "Height", reduction: "sm"},
        ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

    return <RandomItemContainer sourceImg={GetImgPersonUrl2}
                       sourceData={GetPerson}
                       maxItem={80}
                       namesHeader={namesHeader[0]}
    >
        {JsxCharacteristics}
    </RandomItemContainer>
}
export const RandomPlanet = () =>
{
    const {GetPlanet, GetImgPlanetUrl2, namesHeader} = useContext(Context);

    const DataCharacteristics =
        [
            {field: "population", label: "Population", reduction: ""},
            {field: "surfaceWater", label: "Surface water", reduction: "%"},
            {field: "terrain", label: "Terrain", reduction: ""},
            {field: "rotationPeriod", label: "Rotation period", reduction: "day"},
            {field: "diameter", label: "Diameter", reduction: "km"},
        ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

    return <RandomItemContainer sourceImg={GetImgPlanetUrl2}
                       sourceData={GetPlanet}
                       maxItem={60}
                       namesHeader={namesHeader[1]}
    >
        {JsxCharacteristics}
    </RandomItemContainer>
}
export const RandomStarship = () =>
{
    const {GetStarship, GetImgStarshipUrl2, namesHeader} = useContext(Context);

    const DataCharacteristics =
        [
            {field: "starshipClass", label: "Class", reduction: ""},
            {field: "length", label: "Length", reduction: "m"},
            {field: "MGLT", label: "MGLT", reduction: "In h"},
            {field: "crew", label: "Crew", reduction: ""},
            {field: "passengers", label: "Passengers", reduction: ""},
        ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

    return <RandomItemContainer sourceImg={GetImgStarshipUrl2}
                       sourceData={GetStarship}
                       maxItem={15}
                       namesHeader={namesHeader[2]}
    >
        {JsxCharacteristics}
    </RandomItemContainer>
}