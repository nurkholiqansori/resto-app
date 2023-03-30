import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle } from '@ionic/react'
import React, { Fragment } from 'react'
import './Hightlight.css'

type Props = {
  title: string
  description?: string
}

const Hightlight = ({ title, description }: Props) => {
  return (
    <Fragment>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </Fragment>
  )
}

export default Hightlight