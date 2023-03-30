import { IonBackButton, IonButtons, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import DishCard from '../components/DishCard'
import { useQuery } from '../utils/useQuery';

type Props = {}

const Dish: React.FC = (props: Props) => {
  const query = useQuery()
  let nameDish = query.get('category')
  let title

  switch (nameDish) {
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
    <IonPage style={{ backgroundColor: "white" }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Daftar {title || "Hidangan"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
          <IonCol size="6" size-md="4" size-lg="2">
            <DishCard name="Nasi Goreng" />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  )
}

export default Dish