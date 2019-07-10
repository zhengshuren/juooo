import React, { Fragment, Component } from "react";

import Newshead from "./newshead.jsx"
import Nwesmain from "./newsmain.jsx"

export default class extends Component {
    constructor () {
        super();
        this.state = {
            name:''
        }
    }
    
    render () {
        return (
            <Fragment>
                <Newshead />
                <Nwesmain />
            </Fragment>
        )
    }
}

  