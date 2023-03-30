import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Hightlight from '../components/Hightlight';
import './Home.css';

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
        <Hightlight title="Appetizer" />

        {/* Main Course */}
        <Hightlight title="Main Course" />

        {/* Drink */}
        <Hightlight title="Drink" />

        {/* Dessert */}
        <Hightlight title="Dessert" />

        {/* Soup and Salad */}
        <Hightlight title="Soup and Salad" />

        {/* Bread and Jam */}
        <Hightlight title="Bread and Jam" />

        {/* Others */}
        <Hightlight title="Others" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
