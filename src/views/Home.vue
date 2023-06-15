<template>

<div class="home">
    <div class="filtres row container-fluid d-flex flex-column justify-content-center align-items-center p-0">
        <div class="col-8 row m-0 p-0 container-fluid">
            <div class="col-1"></div>
            <div class="col-2 hasimage p-0"
            v-on:mouseover="hovertout()"
            v-on:mouseleave="toutleave()"
            v-on:click="toutclick()">
                <img :src="tout" alt="">
            </div>
            <div class="col-2 hasimage p-0"
            v-on:mouseover="hoverbd()"
            v-on:mouseleave="bdleave()"
            v-on:click="bdclick()">
                <img :src="bd" alt="">
            </div>
            <div class="col-2 hasimage p-0" 
            v-on:mouseover="hoverillu()"
            v-on:mouseleave="illuleave()"
            v-on:click="illuclick()">
                <img :src="illu" alt="">
            </div>
            <div class="col-2 hasimage p-0"
            v-on:mouseover="hovergraph()"
            v-on:mouseleave="graphleave()"
            v-on:click="graphclick()">
                <img :src="graph" alt="">
            </div>
            <div class="col-2 hasimage p-0"
            v-on:mouseover="hoveratel()"
            v-on:mouseleave="atelleave()">
            <a href="/images/AteliersCreatifsPecot2023.pdf" target="blank">
                <img :src="atel" alt="">
            </a>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    <div class="row container-fluid m-0 p-0" v-if="toutint">
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}"> 
                <div v-if="dessin.tout1" class="my-2 position-relative">
                    <img :src="dessin.tout1">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
                <div v-if="dessin.tout2" class="my-2 position-relative">
                    <img :src="dessin.tout2">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.tout3" class="my-2 position-relative">
                    <img :src="dessin.tout3">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <div class="row container-fluid m-0 p-0" v-if="illuint">
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.illu1" class="my-2 position-relative">
                    <img :src="dessin.illu1">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.illu2" class="my-2 position-relative">
                    <img :src="dessin.illu2">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.illu3" class="my-2 position-relative">
                    <img :src="dessin.illu3">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <div class="row container-fluid m-0 p-0" v-if="bdint">
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.bd1" class="my-2 position-relative">
                    <img :src="dessin.bd1">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.bd2" class="my-2 position-relative">
                    <img :src="dessin.bd2">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.bd3" class="my-2 position-relative">
                    <img :src="dessin.bd3">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <div class="row container-fluid m-0 p-0" v-if="graphint">
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.graph1" class="my-2 position-relative">
                    <img :src="dessin.graph1">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.graph2" class="my-2 position-relative">
                    <img :src="dessin.graph2">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-4">
            <router-link v-for="dessin in dessins" 
            :key="dessin.id"
            :to="{name: 'dessin.show', params:{id: dessin.id}}">
            <div v-if="dessin.graph3" class="my-2 position-relative">
                    <img :src="dessin.graph3">
                    <div class="cache">
                        <h2 class="nomgal">{{ dessin.name }}</h2>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import sourceData from '../data.json'
export default {
    data(){
        return {
            dessins: sourceData.dessins,
            carte:new URL(`/images/pages/carte.png`, import.meta.url),
            tout: new URL(`/images/TITRES/toutO.png`, import.meta.url),
            bd: new URL(`/images/TITRES/bdN.png`, import.meta.url),
            illu: new URL(`/images/TITRES/illustrationN.png`, import.meta.url),
            graph: new URL(`/images/TITRES/graphismeN.png`, import.meta.url),
            atel: new URL(`/images/TITRES/ateliersN.png`, import.meta.url),
            toutint: true,
            illuint:false,
            bdint:false,
            graphint:false,
            atelint:false
        }
    },
    methods: {
    hoverillu() {
      var that = this;
      if (that.illuint == false) {
        that.illu= new URL(`/images/TITRES/illustrationO.png`, import.meta.url);
      }
    },
    illuleave() {
        var that = this;
        if (that.illuint == false) {
        that.illu= new URL(`/images/TITRES/illustrationN.png`, import.meta.url);
        }
    },
    illuclick() {
        var that = this;
        if (that.illuint == false) {
        that.illu= new URL(`/images/TITRES/illustrationO.png`, import.meta.url);
        that.illuint=true;
        that.toutint=false;
        that.bdint=false;
        that.graphint=false;
        that.atelint=false;
        that.tout= new URL(`/images/TITRES/toutN.png`, import.meta.url);
        that.bd= new URL(`/images/TITRES/bdN.png`, import.meta.url);
        that.graph= new URL(`/images/TITRES/graphismeN.png`, import.meta.url);
        that.atel= new URL(`/images/TITRES/ateliersN.png`, import.meta.url);
        }
    },
    hovertout() {
      var that = this;
      if (that.toutint == false) {
        that.tout= new URL(`/images/TITRES/toutO.png`, import.meta.url);
      }
    },
    toutleave() {
        var that = this;
        if (that.toutint == false) {
        that.tout= new URL(`/images/TITRES/toutN.png`, import.meta.url);
        }
    },
    toutclick() {
        var that = this;
        if (that.toutint == false) {
        that.tout= new URL(`/images/TITRES/toutO.png`, import.meta.url);
        that.toutint=true;
        that.bdint=false;
        that.illuint=false;
        that.graphint=false;
        that.atelint=false;
        that.bd= new URL(`/images/TITRES/bdN.png`, import.meta.url);
        that.illu= new URL(`/images/TITRES/illustrationN.png`, import.meta.url);
        that.graph= new URL(`/images/TITRES/graphismeN.png`, import.meta.url);
        that.atel= new URL(`/images/TITRES/ateliersN.png`, import.meta.url);
        }
    },
    hoverbd() {
      var that = this;
      if (that.bdint == false) {
        that.bd= new URL(`/images/TITRES/bdO.png`, import.meta.url);
      }
    },
    bdleave() {
        var that = this;
        if (that.bdint == false) {
        that.bd= new URL(`/images/TITRES/bdN.png`, import.meta.url);
        }
    },
    bdclick() {
        var that = this;
        if (that.bdint == false) {
        that.bd= new URL(`/images/TITRES/bdO.png`, import.meta.url);
        that.bdint=true;
        that.toutint=false;
        that.illuint=false;
        that.graphint=false;
        that.atelint=false;
        that.tout= new URL(`/images/TITRES/toutN.png`, import.meta.url);
        that.illu= new URL(`/images/TITRES/illustrationN.png`, import.meta.url);
        that.graph= new URL(`/images/TITRES/graphismeN.png`, import.meta.url);
        that.atel= new URL(`/images/TITRES/ateliersN.png`, import.meta.url);
        }
    },
    hovergraph() {
      var that = this;
      if (that.graphint == false) {
        that.graph= new URL(`/images/TITRES/graphismeO.png`, import.meta.url);
      }
    },
    graphleave() {
        var that = this;
        if (that.graphint == false) {
        that.graph= new URL(`/images/TITRES/graphismeN.png`, import.meta.url);
        }
    },
    graphclick() {
        var that = this;
        if (that.graphint == false) {
        that.graph= new URL(`/images/TITRES/graphismeO.png`, import.meta.url);
        that.graphint=true;
        that.toutint=false;
        that.illuint=false;
        that.bdint=false;
        that.atelint=false;
        that.tout= new URL(`/images/TITRES/toutN.png`, import.meta.url);
        that.illu= new URL(`/images/TITRES/illustrationN.png`, import.meta.url);
        that.bd= new URL(`/images/TITRES/bdN.png`, import.meta.url);
        that.atel= new URL(`/images/TITRES/ateliersN.png`, import.meta.url);
        }
    },
    hoveratel() {
      var that = this;
      if (that.atelint == false) {
        that.atel= new URL(`/images/TITRES/ateliersO.png`, import.meta.url);
      }
    },
    atelleave() {
        var that = this;
        if (that.atelint == false) {
        that.atel= new URL(`/images/TITRES/ateliersN.png`, import.meta.url);
        }
    },
    atelclick() {
        var that = this;
        if (that.atelint == false) {
        that.atel= new URL(`/images/TITRES/ateliersO.png`, import.meta.url);
        that.atelint=true;
        that.toutint=false;
        that.illuint=false;
        that.graphint=false;
        that.bdint=false;
        that.tout= new URL(`/images/TITRES/toutN.png`, import.meta.url);
        that.illu= new URL(`/images/TITRES/illustrationN.png`, import.meta.url);
        that.graph= new URL(`/images/TITRES/graphismeN.png`, import.meta.url);
        that.bd= new URL(`/images/TITRES/bdN.png`, import.meta.url);
        }
    },
}
}
</script>