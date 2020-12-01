import {RandomItemContainer} from "../containers/random-item-container/random-item-container";
import React, {useContext} from "react";
import { Context } from "../utils/context"
import {SetRecord} from "../components/record-view/record-view";

export const RandomPerson = () =>
{
    const {GetPerson, GetImgPersonUrl2, namesHeader} = useContext(Context);
    return <RandomItemContainer sourceImg={GetImgPersonUrl2}
                       sourceData={GetPerson}
                       maxItem={80}
                       namesHeader={namesHeader[0]}
    >
        {SetRecord("eyeColor", "Eye color")}
        {SetRecord("birthYear", "Birth year")}
        {SetRecord("gender", "Gender")}
        {SetRecord("mass", "Mass", "kg")}
        {SetRecord("height", "Height", "sm")}
    </RandomItemContainer>
}
export const RandomPlanet = () =>
{
    const {GetPlanet, GetImgPlanetUrl2, namesHeader} = useContext(Context);
    return <RandomItemContainer sourceImg={GetImgPlanetUrl2}
                       sourceData={GetPlanet}
                       maxItem={60}
                       namesHeader={namesHeader[1]}
    >
        {SetRecord("population", "Population", "")}
        {SetRecord("surfaceWater", "surface water", "%")}
        {SetRecord("terrain", "Terrain")}
        {SetRecord("rotationPeriod", "Rotation period", "day")}
        {SetRecord("diameter", "Diameter", "km")}
    </RandomItemContainer>
}
export const RandomStarship = () =>
{
    const {GetStarship, GetImgStarshipUrl2, namesHeader} = useContext(Context);
    return <RandomItemContainer sourceImg={GetImgStarshipUrl2}
                       sourceData={GetStarship}
                       maxItem={15}
                       namesHeader={namesHeader[2]}
    >
        {SetRecord("starshipClass", "Class")}
        {SetRecord("length", "Length", "m")}
        {SetRecord("maxAtmospheringSpeed", "Max speed", "")}
        {SetRecord("crew", "Crew")}
        {SetRecord("passengers", "passengers")}
    </RandomItemContainer>
}