import homeRouter from './HomeRouters'
import userRouter from './UserRouters'

/**
 * 
 * @param {*} app: express app
 */
const initWebRoutes = (app) =>{
    app.use("/home",homeRouter);
    app.use("/user",userRouter);

}

export default initWebRoutes;