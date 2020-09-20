import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";

declare const module: any;
console.log(module);
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App userName="Developer" lang="TypeScript"/>,
    document.getElementById("output")
);
