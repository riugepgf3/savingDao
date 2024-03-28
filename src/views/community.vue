<template>
  <mainheader></mainheader>
   <div class="intro">
         <div class="container">
           <div class="one">
             <div class="flex">
               <div class="flex_item">Guild</div>
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
                 The guild module of SavingDAO is dedicated to serving our vision and providing a hub for the community. 
				 Guilds enjoy autonomy and receive funding and resources from SavingDAO. 
				 Members benefit from increased rewards and privileges. Within guilds, they can learn, network, expand influence, and earn profits. 
				 Guilds are dynamic communities offering individuals and businesses endless possibilities and opportunities.
               </p>
             </div>
             <img src="../assets/images/Community1.svg" />
           </div>
           <div class="fire">
             
			 <ul class="tabtitle flex">
			             <li @click="tabindex = 0" :class="tabindex == 0?'on':''">Talents</li>
			             <li @click="tabindex = 1" :class="tabindex == 1?'on':''">Beginners</li>
			           </ul>
			           <div class="tabcontent">
			             <div :class="tabindex == 0?'tabbox':'tabbox hidden'">
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
			                 <div @click="toPrev" class="swiper-button-prev"></div>
			               </div>
			             </div>
			             <div :class="tabindex == 1?'tabbox':'tabbox hidden'">
			               <div class="swiper mySwiper2">
			                 <div class="swiper-wrapper">
			                   <div  v-for="(item, index) in Department" :key="index" class="swiper-slide">
			                   								  
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
			                 <div @click="toNext2" class="swiper-button-next"></div>
			                 <div @click="toPrev2" class="swiper-button-prev"></div>
			               </div>
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
 import Guild from '/@/assets/js/Guild'
 import Department from '/@/assets/js/Department'
 import Swiper from 'swiper';

export default {
	components: {
		mainheader,
		mainfooter
	},
  name: 'community',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  swiper1:null,
	  swiper2:null,
	  tabindex:0,
	  Guild:Guild,
	  Department:Department,
    }
  },
  methods: {
  	 toNext(){
  		 this.swiper1.slideNext();
  	 },
  	 toPrev(){
  	 	 this.swiper1.slidePrev();	 
  	 },
	 toNext2(){
	   		 this.swiper2.slideNext();
	 },
	 toPrev2(){
	 	 this.swiper2.slidePrev();	 
	 },
  },
  mounted(){
	  document.title = "Guild";
    this.swiper1 = new Swiper(".mySwiper1", {
            spaceBetween: 0,
            loop: true,
            navigation: {
              nextEl: ".mySwiper1 .swiper-button-next",
              prevEl: ".mySwiper1 .swiper-button-prev",
			  clickable: true,
            },
          });
          this.swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 0,
            loop: true,
            navigation: {
              nextEl: ".mySwiper2 .swiper-button-next",
              prevEl: ".mySwiper2 .swiper-button-prev",
			  clickable: true,
            },
          });
  }
}

</script>
<style scoped>

</style>
