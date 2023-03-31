import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTextarea, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { add, fastFoodOutline, golfOutline, remove, sendOutline } from 'ionicons/icons';
import { useContext } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { OrderStateContext } from '../contexts/OrderStateContext';


const Order: React.FC = () => {
  const { order } = useContext(OrderStateContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pesanan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard color="primary" style={{ color: "white" }} className="ion-padding">
          <IonTitle>Alur Pemesanan</IonTitle>
          <IonCardContent>
            <IonGrid className="ion-items-end flex-order">
              <IonCol className="ion-text-center text-md">
                <IonIcon icon={fastFoodOutline} size="12" />
                <br />
                <IonLabel color="light">Pilih Menu</IonLabel>
              </IonCol>
              <IonCol className="ion-text-center text-md">
                <IonIcon icon={golfOutline} size="12" />
                <br />
                <IonLabel color="light">Pilih Meja</IonLabel>
              </IonCol>
              <IonCol className="ion-text-center text-md">
                <IonIcon icon={sendOutline} size="12" />
                <br />
                <IonLabel color="light">Pesan</IonLabel>
              </IonCol>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        {/* {order && order.length > 0 ? ( */}
        <IonCard>
          <IonCardContent>
            <IonGrid className="ion-items-end flex-order">
              <IonButton color="light" className="button-minplus">
                <IonLabel className="ion-text-center" color="dark">Hapus Semua</IonLabel>
              </IonButton>
            </IonGrid>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
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

            <IonItem><IonInput label="Nomor Meja" placeholder="10"></IonInput></IonItem>

            <IonItem><IonTextarea label="Catatan" placeholder="Tidak ada"></IonTextarea></IonItem>

            <IonButton expand="block" color="primary" className="button-order">
              <IonLabel className="ion-text-center" color="light">Pesan</IonLabel>
            </IonButton>
          </IonCardContent>
        </IonCard>
        {/* ) : (
          <>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large"></IonTitle>
              </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Silahkan pesan pesanan untuk melihat daftar pesanan" />
          </>
        )} */}

        {/* <IonCard>
          <IonCardContent>
            <IonTitle style={{ padding: 0 }}>Tunggu pesananmu ya...</IonTitle>
            <IonText>Gak selama menunggu mantan kok</IonText>
          </IonCardContent>
        </IonCard> */}
      </IonContent>
    </IonPage>
  );
};

export default Order;
