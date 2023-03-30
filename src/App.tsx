import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bag, homeSharp } from 'ionicons/icons';
import Home from './pages/Home';
import Order from './pages/Order';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Dish from './pages/Dish';
import DetailDish from './pages/DetailDish';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/dish">
            <Dish />
          </Route>
          <Route exact path="/dish/:id">
            <DetailDish />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <IonNav root={() => <Home />}></IonNav>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeSharp} />
            <IonLabel>Beranda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="order" href="/order">
            <IonIcon aria-hidden="true" icon={bag} />
            <IonLabel>Pesanan</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
