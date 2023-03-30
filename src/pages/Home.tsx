import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Hightlight from '../components/Hightlight';

import './Home.css';
import './Order.css';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <IonText color="primary">
          <h1 className="font-bold">Hai, Selamat Datang di Resto App</h1>
          <h3 className="font-bold">Hidangan itu bisa menaikkan mood loh kak, ayo order sekarang...</h3>
        </IonText>

        <br />
        <br />
        {/* Appetizer */}
        <Hightlight title="Appetizer" category="appetizer" />

        {/* Main Course */}
        <Hightlight title="Main Course" category="main-course" />

        {/* Drink */}
        <Hightlight title="Minuman" category="drink" />

        {/* Dessert */}
        <Hightlight title="Dessert" category="dessert" />

        {/* Soup and Salad */}
        <Hightlight title="Sup dan Salad" category="soup-and-salad" />

        {/* Bread and Jam */}
        <Hightlight title="Roti dan Salad" category="bread-and-jam" />

        {/* Others */}
        <Hightlight title="Lainnya" category="others" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
