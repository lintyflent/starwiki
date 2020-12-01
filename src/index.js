import { Service } from "./services/service"
import React from "react";
import ReactDOM from "react-dom"
import { RegisterError } from "./containers/error-container/error-container";
import { Provider as ProviderService } from "./utils/context";
import { BrowserRouter as Router } from "react-router-dom";
import {AppView} from "./components/app-view/app-view";

const service = new Service();
ReactDOM.render(
    <RegisterError>
        <ProviderService value={ service }>
            <Router>
                <AppView/>
            </Router>
        </ProviderService>
    </RegisterError>
    , document.getElementById( "root" ));