import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React from 'react'

type Props = {
  name?: string,
  thumbnail?: string
  id?: number
  price?: number
}

const DishCard = ({ name, thumbnail, id, price }: Props) => {
  return (
    <>
      <IonCard href={`/dish/${id || 0}`}>
        <div style={{ width: "100%" }}>
          <img alt="Silhouette of mountains" src={thumbnail ? thumbnail : "https://ionicframework.com/docs/img/demos/card-media.png"} style={{ maxHeight: "200px", minHeight: "200px", width: "100%", objectFit: "cover" }} />
        </div>
        <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
          <IonCardSubtitle>Rp. {price || 0}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>

        </IonCardContent>
      </IonCard>
    </>
  )
}

export default DishCard