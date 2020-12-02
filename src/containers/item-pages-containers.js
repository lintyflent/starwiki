import { SetRecord } from "../components/record-view/record-view";
import React, { useContext, useState } from "react";
import { Context } from "../utils/context"
import { ItemListContainer } from "./item-list-container/item-list-container";
import ItemDetalisContainer from "./item-detalis-container/item-detalis-container";

export const PeoplesPage = () =>
{
    const [ selectedItem, SetSelectedItem ] = useState(null);
    const { GetAllPeople, GetPerson, GetImgPersonUrl, pages, namesHeader } = useContext( Context );

    const DataCharacteristics =
    [
        {field: "eyeColor", label: "Eye color", reduction: ""},
        {field: "birthYear", label: "Birth year", reduction: ""},
        {field: "gender", label: "Gender", reduction: ""},
        {field: "mass", label: "Mass", reduction: "kg"},
        {field: "height", label: "Height", reduction: "sm"},
    ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

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
                {JsxCharacteristics}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}
export const PlanetsPage = () =>
{
    const [selectedItem, SetSelectedItem] = useState(null);
    const {GetImgPlanetUrl, GetPlanet, GetAllPlanets, pages, namesHeader} = useContext(Context);

    const DataCharacteristics =
        [
            {field: "population", label: "Population", reduction: ""},
            {field: "surfaceWater", label: "Surface water", reduction: "%"},
            {field: "terrain", label: "Terrain", reduction: ""},
            {field: "rotationPeriod", label: "Rotation period", reduction: "day"},
            {field: "diameter", label: "Diameter", reduction: "km"},
        ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

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
                {JsxCharacteristics}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}
export const StarshipsPage = () =>
{
    const [selectedItem, SetSelectedItem] = useState(null);
    const {GetImgStarshipUrl, GetStarship, GetAllStarships, pages, namesHeader} = useContext(Context);

    const DataCharacteristics =
        [
            {field: "starshipClass", label: "Class", reduction: ""},
            {field: "length", label: "Length", reduction: "m"},
            {field: "MGLT", label: "MGLT", reduction: "In h"},
            {field: "crew", label: "Crew", reduction: ""},
            {field: "passengers", label: "Passengers", reduction: ""},
        ];
    const JsxCharacteristics = DataCharacteristics.map((item)=> SetRecord(item.field, item.label, item.reduction));

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
                {JsxCharacteristics}
            </ItemDetalisContainer>
        </React.Fragment>
    );
}