import React,{ useRef } from 'react'
import { Image, View } from 'react-native'
import Carousel,{ Pagination } from 'react-native-snap-carousel'
import { CarouselData } from '../../helpers/CarouselData'
import { CarouselItem } from './CarouselItem';

export const CarouselHome = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = React.useState(0);
  const data = CarouselData();
  return (
    <View>
            <Image
      source={require('../../../assets/images/GrimmLogo.png')}
      resizeMethod='scale'
      resizeMode='contain'
      style={{maxWidth:330,padding:0,margin:0,alignItems:'center',display:'flex',justifyContent:'center'}}
      />
        <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        sliderWidth={600}
        itemWidth={605}
        />
      <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          tappableDots={true}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
      />
    </View>
  )
}

// 30 Horas
// 30,000 Pesos
