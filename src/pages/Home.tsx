import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Hightlight from '../components/Hightlight';
import { dishes } from '../data';

import './Home.css';
import './Order.css';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  const appetizer = dishes.filter(dish => dish.category === 'appetizer');
  const mainCourse = dishes.filter(dish => dish.category === 'main-course');
  const drink = dishes.filter(dish => dish.category === 'drink');
  const dessert = dishes.filter(dish => dish.category === 'dessert');
  const soupAndSalad = dishes.filter(dish => dish.category === 'soup-and-salad');
  const breadAndJam = dishes.filter(dish => dish.category === 'bread-and-jam');
  const others = dishes.filter(dish => dish.category === 'others');

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
        <Hightlight title="Appetizer" data={appetizer} category="appetizer" />

        {/* Main Course */}
        <Hightlight title="Main Course" data={mainCourse} category="main-course" />

        {/* Drink */}
        <Hightlight title="Minuman" data={drink} category="drink" />

        {/* Dessert */}
        <Hightlight title="Dessert" data={dessert} category="dessert" />

        {/* Soup and Salad */}
        <Hightlight title="Sup dan Salad" data={soupAndSalad} category="soup-and-salad" />

        {/* Bread and Jam */}
        <Hightlight title="Roti dan Selai" data={breadAndJam} category="bread-and-jam" />

        {/* Others */}
        <Hightlight title="Lainnya" data={others} category="others" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
