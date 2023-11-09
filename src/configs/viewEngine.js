import express from "express";
import expressLayouts from "express-ejs-layouts";
/**
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
    app.use(expressLayouts);
    app.use(express.static('./public'));
    app.set("view engine", "ejs");
    app.set('layout', './layout/main');
    app.set("views", "./src/views");
}

export default configViewEngine;