<template>
<section class="dessin">
    <div class="row container-fluid m-0">
        <div class="col-1"></div>
        <div class="col-6 justify-content-center py-4">
            <img :src=dessin.img alt="" class="py-3">
            <img :src=dessin.gal1 alt="" class="py-3">
            <img :src=dessin.gal2 alt="" class="py-3">
            <img :src=dessin.gal3 alt="" class="py-3">
            <img :src=dessin.gal4 alt="" class="py-3">
            <img :src=dessin.gal5 alt="" class="py-3">
            <img :src=dessin.gal6 alt="" class="py-3">
            <img :src=dessin.gal7 alt="" class="py-3">
            <img :src=dessin.gal8 alt="" class="py-3">
            <img :src=dessin.gal9 alt="" class="py-3">
        </div>
        <div class="col-5 pr-5 py-4">
            <h1>{{dessin.name}}</h1>
            <p>{{ dessin.description }}</p>
            <a :href="dessin.link" target="blank">{{ dessin.link }}</a>
        </div>
</div>
</section>
</template>
<script>
import sourceData from '../data.json'
export default {
 computed:{
    dessinId(){
        return parseInt(this.$route.params.id)
    },
    dessin(){
        return sourceData.dessins.find(dessin => dessin.id === this.dessinId)
    }
 }
}
</script>