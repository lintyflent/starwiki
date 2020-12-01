import {SetRecord} from "../components/record-view/record-view";
import React, {useContext, useState} from "react";
import { Context } from "../utils/context"
import {ItemListContainer} from "../containers/item-list-container/item-list-container";
import ItemDetalisContainer from "../containers/item-detalis-container/item-detalis-container";

export const PeoplesPage = () =>
{
    const [selectedItem, SetSelectedItem] = useState(null);
    const {GetAllPeople, GetPerson, GetImgPersonUrl, pages, namesHeader} = useContext(Context);
    return (
        <React.Fragment>
            <ItemListContainer onLoadItemDetalis={(id) => {SetSelectedItem(id)}}
                               onGetAlldata={GetAllPeople}
                               currentPage={pages[0]}
            />
            <ItemDetalisContainer itemId={selectedItem}
                             onGetData={GetPerson}
                             getImgUrl={GetImgPersonUrl}
                             namesHeader={namesHeader[0]}
            >
                {SetRecord("eyeColor", "Eye color")}
                {SetRecord("birthYear", "Birth year")}
                {SetRecord("gender", "Gender")}
                {SetRecord("mass", "Mass", "kg")}
                {SetRecord("height", "Height", "sm")}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}
export const PlanetsPage = () =>
{
    const [selectedItem, SetSelectedItem] = useState(null);
    const {GetImgPlanetUrl, GetPlanet, GetAllPlanets, pages, namesHeader} = useContext(Context);
    return (
        <React.Fragment>
            <ItemListContainer onLoadItemDetalis={(id) => {SetSelectedItem(id)}}
                               onGetAlldata={GetAllPlanets}
                               currentPage={pages[1]}
            />
            <ItemDetalisContainer itemId={selectedItem}
                                  onGetData={GetPlanet}
                                  getImgUrl={GetImgPlanetUrl}
                                  namesHeader={namesHeader[1]}
            >
                {SetRecord("population", "Population", "")}
                {SetRecord("surfaceWater", "surface water", "%")}
                {SetRecord("terrain", "Terrain")}
                {SetRecord("rotationPeriod", "Rotation period", "day")}
                {SetRecord("diameter", "Diameter", "km")}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}
export const StarshipsPage = () =>
{
    const [selectedItem, SetSelectedItem] = useState(null);
    const {GetImgStarshipUrl, GetStarship, GetAllStarships, pages, namesHeader} = useContext(Context);
    return (
        <React.Fragment>
            <ItemListContainer onLoadItemDetalis={(id) => {SetSelectedItem(id)}}
                               onGetAlldata={GetAllStarships}
                               currentPage={pages[2]}
            />
            <ItemDetalisContainer itemId={selectedItem}
                                  onGetData={GetStarship}
                                  getImgUrl={GetImgStarshipUrl}
                                  namesHeader={namesHeader[2]}
            >
                {SetRecord("starshipClass", "Class")}
                {SetRecord("length", "Length", "m")}
                {SetRecord("MGLT", "MGLT", "In h")}
                {SetRecord("crew", "Crew")}
                {SetRecord("passengers", "passengers")}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}