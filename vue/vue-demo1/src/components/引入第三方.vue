<template>
    <div id="box1">
        <swiper :modules="modules" :pagination="{ clickable: true}">
            <swiper-slide><img src="../assets/13.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/13.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/13.jpg" alt=""></swiper-slide>
        </swiper>
    </div>
</template> 

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules:[ Pagination ]
        };
    },
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>