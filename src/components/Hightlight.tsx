import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonLabel } from '@ionic/react'
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { disheshType } from '../data'
import DishCard from './DishCard'
import './Hightlight.css'

type Props = {
  title: string
  description?: string
  category?: string
  data: disheshType[]
}

const Hightlight = ({ title, description, category, data }: Props) => {

  return (
    <Fragment>
      <IonCard style={{ boxShadow: "none" }}>
        <IonCardHeader>
          <IonGrid className='flex'>
            <IonCardTitle>{title}</IonCardTitle>
            <IonButton color="primary" size="small" href={`dish?category=${category}`}>
              <IonLabel className="ion-text-center" color="light">Lihat</IonLabel>
            </IonButton>
          </IonGrid>
          {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
        </IonCardHeader>
        <Swiper slidesPerView={1.5} loop={true}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <DishCard name={item.name} thumbnail={item.thumbnail} id={item.id} price={item.price} />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonCard>
    </Fragment>
  )
}

export default Hightlight