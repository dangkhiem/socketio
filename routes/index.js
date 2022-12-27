import authRouter from "./auth.js";

const initializeRoutes = (app) => {
    app.use('/auth', authRouter);
}

export default initializeRoutes;