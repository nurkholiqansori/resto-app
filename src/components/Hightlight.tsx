import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonLabel } from '@ionic/react'
import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import DishCard from './DishCard'
import './Hightlight.css'

type Props = {
  title: string
  description?: string
  category?: string
}

const Hightlight = ({ title, description, category }: Props) => {

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
          <SwiperSlide>
            <DishCard name="Martabak" />
          </SwiperSlide>
          <SwiperSlide>
            <DishCard name="Cilok" />
          </SwiperSlide>
          <SwiperSlide>
            <DishCard name="Pisang Coklat" />
          </SwiperSlide>
        </Swiper>
      </IonCard>
    </Fragment>
  )
}

export default Hightlight