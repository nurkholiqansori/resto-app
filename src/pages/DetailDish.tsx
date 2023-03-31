import { IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonContent, IonText, IonGrid, IonCol, IonChip, IonButton, IonIcon, IonLabel } from '@ionic/react'
import { add, remove } from 'ionicons/icons'
import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { OrderStateContext } from '../contexts/OrderStateContext'
import { dishes, disheshType } from '../data'
import "./DetailDish.css"

type Props = {}

interface RouteParams {
  id: string;
}

const DetailDish: React.FC = (props: Props) => {
  const params = useParams<RouteParams>();
  const { order } = useContext(OrderStateContext);
  const theDish = dishes.find((item) => item.id === Number(params?.id)) || {} as disheshType;

  let title

  switch (theDish.category) {
    case "appetizer":
      title = "Appetizer"
      break;
    case "main-course":
      title = "Main Course"
      break;
    case "drink":
      title = "Minuman"
      break;
    case "dessert":
      title = "Dessert"
      break;
    case "soup-and-salad":
      title = "Sup dan Salad"
      break;
    case "bread-and-jam":
      title = "Roti dan Selai"
      break;
    case "others":
      title = "Lainnya"
      break;
    default:
      break;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Detail Hidangan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={theDish.thumbnail || "https://ionicframework.com/docs/img/demos/card-media.png"} />
        <IonGrid className="detail-box ion-padding">
          <IonCol size="12"><IonText color="primary" className='text-bold'>{theDish.name || ""}</IonText></IonCol>
          <IonCol size="12"><IonText color="primary">Rp. {theDish.price || 0}</IonText></IonCol>
          {/* <IonCol size="12"><IonText color="primary">Martabak adalah makanan khas Indonesia yang terbuat dari tepung terigu, telur, gula, dan santan. Martabak dibentuk menjadi bentuk bulat atau persegi panjang, kemudian digoreng. Martabak biasanya disajikan dengan berbagai macam topping, seperti keju, coklat, dan kacang.</IonText></IonCol> */}
          <IonCol size="12">
            <IonChip color="primary">{title || ""}</IonChip>
          </IonCol>
          {/* Divider */}
          <IonCol size="12" className="ion-padding">
            <hr />
          </IonCol>
          <IonCol size="12">
            <IonGrid className="ion-align-items-center gap-2">
              <IonCol><IonText>Jumlah pesanan</IonText></IonCol>
              <IonCol className="ion-align-items-center gap-2"><IonButton color="light" className="button-minplus">
                <IonIcon icon={remove} size="12" />
              </IonButton>
                <IonCol className="ion-text-center text-md">{order.length}</IonCol>
                <IonButton color="light" className="button-minplus">
                  <IonIcon icon={add} size="12" />
                </IonButton></IonCol>
            </IonGrid>
          </IonCol>
          <IonButton expand="block" color="primary">
            <IonLabel color="light">Tambah ke keranjang</IonLabel>
          </IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default DetailDish