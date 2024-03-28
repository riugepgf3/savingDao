<template>
  <mainheader></mainheader>
     <div class="intro">
         <div class="container">
           <div class="one">
             <div class="flex">
               <div class="flex_item">Intro</div>
               <dl>
                 <dt>Saving <span>Dao.</span></dt>
                 <dd>
                   Connect, Collab, Create:
                   <div>Bridge to Web 3</div>
                 </dd>
               </dl>
             </div>
           </div>
           <div class="two">
             <div class="hd flex">
               <div class="flex_item">
                 <p>
                   <b>Saving DAO</b> is an incubator focused on driving digital
                   transformation and seamlessly integrating individuals and Web2
                   enterprises into the Web3 wilderness. As we can witness the
                   general adoption of Web3 is ramping up day by day. Chinese
                   comedy super star Stephen Chow, Hollywood superstar Justin
                   Bieber, MAGA politician & billionaire Donald Trump and many
                   other prime example that we can extract, are all directing
                   towards the direction of setting up their foundation in such
                   dynamic industry. Having Traditional-Fi (TradFi) diving in to
                   have a cut of the pie is also showing a very telling sign in the
                   growing potential within the Web3 sector is ever-growing.
                 </p>
               </div>
               <ul>
                 <li>
                   <div class="pic"><img src="../assets/images/intro3.png" /></div>
                 </li>
                 <li>
                   <div class="pic"><img src="../assets/images/intro4.png" /></div>
                 </li>
                 <li>
                   <div class="pic"><img src="../assets/images/intro5.png" /></div>
                 </li>
               </ul>
             </div>
             <div class="bd flex">
               <img src="../assets/images/intro1.svg" />
               <div class="flex_item">
                 Saving DAO is committed to building a close-knit community that connects individuals and businesses, whether for common interests or career development opportunities. 
                 We deeply understand the challenges of building connections, from individuals to corporate groups, we are here to solve them for you. 
                 Our platform provides users with a comprehensive network to find like-minded peers, expand their professional circles, and gain access to career opportunities. 
                 For businesses, Saving DAO provides a platform for them to connect with potential partners, access talent resources, and explore cooperation opportunities. Powered by Saving DAO, individuals and businesses alike can thrive in a vibrant and supportive ecosystem, driving innovation and growth in the Web3 space.
               </div>
             </div>
             <div class="ft flex">
               <div class="flex_item">
                 <p>
                   In addition to this, we also attach great importance to the up-and-coming projects that are starting their engines in Web3. 
                   Maybe, as you read this article, you will be the next project we incubate, breathing new life into the Web3 world.
                 </p>
                 <p>
                   We also want to emphasize that joining the Saving DAO will bring unlimited potential to users and businesses. 
                   Because we are only in the beginning stages, we will continue to grow and develop in the future. 
                   Therefore, we sincerely invite individuals and enterprises to join our ecosystem, start a journey of cooperation together, and jointly explore the infinite possibilities of the Web3 world.
                 </p>
               </div>
               <img src="../assets/images/intro2.svg" />
             </div>
           </div>
         </div>
       </div>
  <mainfooter></mainfooter>
</template>
<script>
 import mainheader from '/@/components/header.vue'	
 import mainfooter from '/@/components/footer.vue'	
 import Swiper from 'swiper';

export default {
	components: {
		mainheader,
		mainfooter
	},
  name: 'intro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    document.title = "Intro";
  }
}

</script>
<style scoped>

</style>
