import {HeaderView} from "../header-view/header-view";
import React, {useContext} from "react";
import {RandomPerson, RandomPlanet, RandomStarship} from "../../containers/randoms-containers";
import {PeoplesPage, PlanetsPage, StarshipsPage} from "../../containers/item-pages-containers";
import { Route, Switch } from "react-router-dom";
import {NotFoundView} from "../not-found-view/not-found-view";
import {Context} from "../../utils/context";
import "./app-view.sass"

export const AppView = () =>
{
    const { pages } = useContext( Context );

    return (
        <div className={"app"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={"app-gird"}>
                            <HeaderView/>
                            <Switch>
                                <Route path={"/" + pages[0] + "/:id?"}
                                       render={()=>
                                           <React.Fragment>
                                               <RandomPerson/>
                                               <PeoplesPage/>
                                           </React.Fragment>}
                                />
                                <Route path={"/" + pages[1] + "/:id?"}
                                       render={()=>
                                           <React.Fragment>
                                               <RandomPlanet/>
                                               <PlanetsPage/>
                                           </React.Fragment>}
                                />
                                <Route path={"/" + pages[2] + "/:id?"}
                                       render={()=>
                                           <React.Fragment>
                                               <RandomStarship/>
                                               <StarshipsPage/>
                                           </React.Fragment>}
                                />
                                <Route path={"/"} exact
                                       render={()=>
                                           <React.Fragment>

                                           </React.Fragment>}
                                />

                                <Route render={()=> <NotFoundView/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}