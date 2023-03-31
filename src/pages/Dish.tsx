import { IonBackButton, IonButtons, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import DishCard from '../components/DishCard'
import { dishes } from '../data';
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

  const theDishes = dishes.filter((item) => item.category === nameDish) || []

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
          {theDishes.map((item, index) => (
            <IonCol key={index} size="6" size-md="4" size-lg="2">
              <DishCard name={item.name} thumbnail={item.thumbnail} id={item.id} price={item.price} />
            </IonCol>))}
        </IonRow>
      </IonGrid>
    </IonPage>
  )
}

export default Dish