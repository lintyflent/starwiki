import React, { Component } from "react";
import {ErrorView} from "../../components/error-view/error-view";

export class RegisterError extends Component
{
    state = { error: false }
    componentDidCatch() { this.setState({ error: true } )}

    render()
    {
        if (this.state.error)
        {
            return <ErrorView/>
        }
        else
        {
            return this.props.children;
        }
    }
}