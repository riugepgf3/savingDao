<template>
  <mainheader></mainheader>
   <div class="intro">
         <div class="container">
           <div class="one">
             <div class="flex">
               <div class="flex_item">Eco Product</div>
               <dl>
                 <dt>Saving <span>Dao.</span></dt>
                 <dd>
                   Connect, Collab, Create:
                   <div>Bridge to Web 3</div>
                 </dd>
               </dl>
             </div>
           </div>
           <div class="three flex">
             <div class="flex_item">
               <p>
              The ecosystem of SavingDAO is a diverse platform designed to provide comprehensive support and services to SavingDAO and its users. 
              It encompasses cutting-edge technologies and innovative solutions, catering to all users involved in the Web3 domain. 
              These ecosystem products are not only intended to meet the needs of SavingDAO but also to serve the entire Web3 community. 
              The revenue generated not only supports the sustainable development of the SavingDAO ecosystem but also creates opportunities for all members to share profits, fostering collaboration and communication among ecosystem members.
               </p>
             </div>
             <img src="../assets/images/banner-pc.svg" />
           </div>
           <div class="four fire">
             <div class="title2">Platform Features</div>
             <div class="bd tabbox">
				 
				 
               <div class="swiper mySwiper1">
                 <div class="swiper-wrapper">
               								 
                   <div  v-for="(item, index) in Guild" :key="index" class="swiper-slide">
               								  
                     <div class="flex">
                       <div class="img"><img :src="item.image" /></div>
                       <div class="flex_item">
                         <h4>{{item.title}}</h4>
                         <p>
                           {{item.desc}}
                         </p>
                       </div>
               								 
                     </div>
               								   
                   </div>
               							   
               							   
               							   
               							   
                 </div>
                 <div @click="toNext" class="swiper-button-next"></div>
                 <div @click="toPrew" class="swiper-button-prev"></div>
               </div>
			   
			   
			   
			   
             </div>
           </div>
         </div>
       </div>
  <mainfooter></mainfooter>
</template>
<script>
 import mainheader from '/@/components/header.vue'	
 import mainfooter from '/@/components/footer.vue'	
  import Eco from '/@/assets/js/Eco'
 import Swiper from 'swiper';

export default {
	components: {
		mainheader,
		mainfooter
	},
  name: 'EcoProduct',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  Guild:Eco,
	  swiper1:null,
    }
  },
  methods: {
  	 toNext(){
  		 this.swiper1.slideNext();
  	 },
  	 toPrev(){
  	 	 this.swiper1.slidePrev();	 
  	 },
  },
  mounted(){
    document.title = "Ecology";
	this.swiper1 = new Swiper(".mySwiper1", {
	        spaceBetween: 0,
	        loop: true,
	        navigation: {
	          nextEl: ".mySwiper1 .swiper-button-next",
	          prevEl: ".mySwiper1 .swiper-button-prev",
			  clickable: true,
	        },
	      });
  }
}

</script>
<style scoped>
.three{
	margin-bottom: 0.5rem;
}
.title2{
	padding-bottom: 0.2rem;
}
</style>
