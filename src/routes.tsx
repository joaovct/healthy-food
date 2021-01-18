import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={Home}/>
                <Route exact path="/register" render={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes