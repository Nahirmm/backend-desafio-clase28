import express from "express"
import session from "express-session"
import 'dotenv/config'
import mongoose from "mongoose"
import { PORT } from "./src/utils/minimist.js"

const app = express()

import passport from "passport";
import { strategyLogin, strategySignup } from "./src/middlewares/passportLocal.js"

passport.use('login', strategyLogin);
passport.use('signup', strategySignup)

import routes from './src/routes/routes.js'
import randomRoutes from './src/routes/randomRoutes.js'

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: Number(process.env.TIEMPO_EXPIRACION)
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

app.use('/ecommerce', routes)
app.use('/api', randomRoutes)

mongoose.connect(process.env.MONGODB)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/ecommerce/`))