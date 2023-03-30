import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { add, remove } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Order.css';

const Order: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pesanan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          {/* <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader> */}
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Itemdddddddddddddddddddddddddddddddddddddddddddddddddd</IonLabel>
                <IonGrid className='ion-align-items-center gap-2'>
                  <IonButton color="light" className="button-minplus">
                    <IonIcon icon={remove} size="12" />
                  </IonButton>
                  <IonCol className="ion-text-center text-md">1</IonCol>
                  <IonButton color="light" className="button-minplus">
                    <IonIcon icon={add} size="12" />
                  </IonButton>
                </IonGrid>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
            </IonList>

            <IonButton expand="block" color="primary" className="button-order">
              <IonLabel className="ion-text-center" color="light">Pesan</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Silahkan pesan pesanan untuk melihat daftar pesanan" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Order;
