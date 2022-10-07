import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import {BrowserRouter, Router} from "react-router-dom";
import {createStore} from "./store/createStore";
import {Provider} from "react-redux";
import history from "./utils/history";
import ScrollToTop from "./components/common/scroll/scrollToTop";

const store = createStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/*<Router history={history}>*/}
                    <ScrollToTop/>
                    <App/>
                {/*</Router>*/}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
