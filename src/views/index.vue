<template>
  <mainheader></mainheader>
    <div class="homepage">
        <div class="banner">
          <div class="container">
            <div class="flex">
              <div class="flex_item">
                <div class="bd">
                  <h2>Saving DAO</h2>
                  <p>
                    connect, collab, create:<br />
                    Bridge to Web3.
                  </p>
                  <div class="group">
                <!--    <a href="#"><span>Polaxe</span><i></i></a>   -->
                    <a href="https://savings.gitbook.io/saving-dao"><span>Whitepaper </span><i></i></a>
                  </div>
                </div>
              </div>
              <img src="../assets/images/home14.png" class="img" />
            </div>
          </div>
        </div>
        <div class="one">
          <div class="container">
            <div class="bd">
              <ul>
                <li>
                  <div class="box">
                    <img src="../assets/images/Group28.svg" />
                    <dl>
                      <dt>100k+</dt>
                      <dd>Influence</dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <img src="../assets/images/Group25.svg" />
                    <dl>
                      <dt>30k+</dt>
                      <dd>Member</dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <img src="../assets/images/Group1410098503.svg" />
                    <dl>
                      <dt>30+</dt>
                      <dd>Core Builder</dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <div class="box">
                    <img src="../assets/images/Maskgroup.svg" />
                    <dl>
                      <dt>10+</dt>
                      <dd>Coo products</dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="two">
          <div class="container">
            <div class="flex">
              <div class="side"><img src="../assets/images/Group1533208656.svg" /></div>
              <div class="flex_item">
                <h4>Why Saving DAO</h4>
                <p>SavingDAO is a platform dedicated to connecting Web2 and Web3, aiming to allow more individuals, businesses and institutions to participate in the construction of WEB3. Our vision is to become a bridge to WEB3.  </p>
               <p>For individual, SavingDAO provides a platform to learn, make friends, and get real rewards. At SavingDAO, they can improve their skills, make like-minded friends, and gain real benefits by participating in different projects. </p>
                <p>For enterprise users, SavingDAO provides the optimal WEB3 solution. Whether they are small startups or large enterprises, we can provide them with customized services to help them achieve digital transformation and succeed in the blockchain field.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="three">
          <div class="container">
            <div class="title">Guild</div>
            <div class="bd">
              <div class="swiper mySwiper1">
                <div class="swiper-wrapper">
                  <div v-for="(item, index) in Community" :key="index" class="swiper-slide">
                    <a :href="item.link">
                      <img :src="item.image" />
                      <p>{{item.title}}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="three">
          <div class="container">
            <div class="title">Ecosystem</div>
            <div class="bd  ">
              <div class="swiper mySwiper2">
                <div class="swiper-wrapper">
                  <div v-for="(item, index) in Product" :key="index" class="swiper-slide">
                    <a :href="item.link">
                      <div class="product-image"><img :src="item.image" /></div>
                       <p class="product-title">{{item.title}}</p>
                    </a>
                  </div>
                  
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
 import Community from '/@/assets/js/Community'
  import Product from '/@/assets/js/Product'
 import Swiper from 'swiper';

export default {
	components: {
		mainheader,
		mainfooter
	},
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  Community:Community,
	   Product:Product,
    }
  },
  methods: {
	 toNext(){
		 
	 },
	 toPrev(){
	 		 
	 },
  },
  mounted(){
	  document.title = "Saving DAO";
    var swiper = new Swiper(".three .mySwiper1", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
          });
          var swiper2 = new Swiper(".three .mySwiper2", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
          });
  }
}

</script>
<style scoped>
.mySwiper2 .swiper-wrapper{
	justify-content: center;
}
.product-image img {
  width: 100%; /* 确保图像填充其容器 */
  height: auto; /* 保持宽高比 */
  object-fit: cover; /* 保持宽高比并覆盖容器 */
}
.product-title {
  background-color: white; /* 设置标题背景颜色为白色 */
}
</style>
