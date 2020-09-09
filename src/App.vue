<template>
  <div id="app">
    <!-- header section -->
      <Head
        @toggle="toggleMenu"
        :toggleOn="toggleKey"
        ref="head"
        v-if="!plane"
      />
    <!-- /header section -->
    <!-- router view -->
      <router-view
          :key="$route.fullPath + loggedIn"
      ></router-view>
    <!-- /router view -->
    <!-- footer section -->
      <Footer
        v-if="!plane"
      />
    <!-- /footersection -->
    <!-- alert -->
    <Alert
      v-if="alertData"
      :data="alertData"
      @close="$store.dispatch('init/alert')"
    />
  </div>
</template>
<script>
// @ is an alias to /src
import Head from '@c/Header';
import Footer from '@c/Footer';
import Alert from '@c/alert';

import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data(){
    return {
      toggleKey:false,
      plane:false
    }
  },
  computed:{
    ...mapGetters({
      loggedIn:'auth/loggedIn',
      alertData:'init/alert',
      loadingProfile:'auth/loadingProfile'
    })
  },
  components:{
    Head,
    Footer,
    Alert
  },
  watch:{
    $route:{
      immediate:true,
      handler(to,from){
        // hide opened menus
        this.toggleKey = false;
        // hide footer and header if the page has to be plane
        if(to.meta && to.meta.plane){
          this.plane = true;
        }else{
          this.plane = false;
        }
        // scroll to top
        let stick = to.matched.some(r=> r.meta && r.meta.stickView );
        if(!stick){
          window.scrollTo(0,0);
        }
      }
    },
    // nav back to home page on logout
    loggedIn:{
      immediate:true,
      handler(to){
        const meta = this.$route.matched[0].meta;
        if(!to){
          if( meta && meta.user){
            this.$router.replace('/login');
          }
        }else{
          this.$store.dispatch('auth/getProfile')
          .then(()=>{
            if(meta && meta.visitor){
                let url = this.$store.getters['init/routeBackup'].url || '/';
                this.$router.push(url)
                .then(
                    ()=>this.$store.dispatch('init/backUpRoute',null)
                ).catch(e=>console.log('router error @ App.vue 177'));
            }
          });
        }
      }
    }
  }
}
</script>
