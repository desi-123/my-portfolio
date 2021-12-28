import React from 'react'
import ReactDom from 'react-dom'
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import '../styles/styles.css'
import 'lazysizes'
import MainApp from './modules/MainApp'
import { AppProvider } from './modules/Context'

ReactDom.render(
    <AppProvider>
        <MainApp />
    </AppProvider>,
    document.getElementById("app"))

if (module.hot) {
    module.hot.accept()
}