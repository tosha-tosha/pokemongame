import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import cn from 'classnames';

import s from './style.module.css';
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import NotFoundPage from './routes/NotFound';


const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
      <FireBaseContext.Provider value={new Firebase()}>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route>
            <>
              <MenuHeader bgActive={!isPadding}/>
              <div className={cn(s.wrap, {[s.isHomePage]: isPadding})}>
                <Switch>
                  <Route path="/" exact
                         render={() => (<Redirect to="/home" />)}
                  />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/game" component={GamePage} />
                  <Route path="/home" component={HomePage} />

                  <Route render={() => (
                      <Redirect to="/404" />
                  )} />
                </Switch>
              </div>
              <Footer/>
            </>
          </Route>
        </Switch>
      </FireBaseContext.Provider>
  )
}

export default App;