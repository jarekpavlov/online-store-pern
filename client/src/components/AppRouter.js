import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = true;
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component})=>(
                <Route key = {path} path = {path} component = {Component} exact/>
            ))}
            {publicRoutes.map(({path, Component})=>(
                <Route key = {path} path = {path} component = {Component} exact/>
            ))}
            <Redirect to = {SHOP_ROTE} />
        </Switch>

    );
};

export default AppRouter;