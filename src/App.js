
import TasksPage from "./features/tasks/TasksPage"
import TaskPage from "./features/tasks/TaskPage"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/author/AuthorPage"
import { StyledNavLink } from "./styled"

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">o Autorze</StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter >
) 