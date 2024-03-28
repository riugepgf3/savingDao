<template>

    <div :class="mopen?'ws-wap-menu on':'ws-wap-menu'">
         <div class="header">
           <div @click="mopen = !mopen" class="m_nav cross"><i></i><i></i><i></i></div>
           <div class="flex">
             <a href="/" class="logo"><img src="../assets/images/logo.svg" /></a>
           </div>
         </div>
         <!--#menu-->
         <ul class="nav">
          
          <li @click="liopen = !liopen" :class="liopen?'on':''">
            <a href="javascript:;">Ecosystem</a><i></i>
            <ol class="dropdown">
              <li><a href="http://dev.polaxe.net/">POLAXE </a></li>
              <li><a href="https://decheck.cc/">DECHECK </a></li>
              <li><a href="https://gascoin.xyz/">GASCOIN </a></li>
              <li><a href="https://brcbridge.pro/">APEBRIDGE </a></li>
            </ol>
          </li>
          <li @click="liopen = !liopen" :class="liopen?'on':''">
            <a href="javascript:;">DAO</a><i></i>
            <ol class="dropdown">
              <li><a href="/#/">Overview </a></li>
              <li><a href="https://tally.so/r/mBkozR">Become a Saver </a></li>
              <li><a href="/#/governance">Governance </a></li>
              <li><a href="/#/">Code of Contract </a></li>
            </ol>
          </li>

          <li @click="liopen = !liopen" :class="liopen?'on':''">
            <a href="javascript:;">Economics</a><i></i>
            <ol class="dropdown">
              <li><a href="/#/">Saving Coin </a></li>
              <li><a href="/#/">Allocation </a></li>
              <li><a href="/#/">Incentive Plan </a></li>
              <li><a href="/#/">Vesting Schedule </a></li>
            </ol>
          </li>

          <li @click="liopen = !liopen" :class="liopen?'on':''">
            <a href="javascript:;">Resources</a><i></i>
            <ol class="dropdown">
              <li><a href="https://savings.gitbook.io/saving-dao">Whitepaper </a></li>
              <li><a href="/#/">FAQs </a></li>
              <li><a href="/#/">Docs </a></li>
              <li><a href="/#/">APIs </a></li>
            </ol>
          </li>

          <li @click="liopen = !liopen" :class="liopen?'on':''">
            <a href="javascript:;">Socials</a><i></i>
            <ol class="dropdown">
              <li><a href="https://twitter.com/Savingdao">Twitter </a></li>
              <li><a href="https://discord.com/invite/savingdao">Discord </a></li>
              <li><a href="https://t.me/Saving_Dao">Telegram </a></li>
            </ol>
          </li>

<!-- 
           <li @click="liopen = !liopen" :class="liopen?'on':''">
             <a href="javascript:;">About us</a><i></i>
             <ol class="dropdown">
               <li><a href="/#/guild">Guild </a></li>
               <li><a href="/#/ecology">Ecology </a></li>
               <li><a href="/#/intro">Intro </a></li>
             </ol>
           </li>
            <li @click="liopen2 = !liopen2" :class="liopen2?'on':''">
              <a href="javascript:;">Goverment</a><i></i>
              <ol class="dropdown">
                <li><a href="/#/governance">Governance </a></li>
              <li><a href="#">Nation </a></li>
              <li><a href="#">Forum </a></li>
              </ol>
            </li> -->
          
           <!-- <li><a href="https://discord.com/invite/savingdao"> Join us</a></li> -->
         </ul>
       </div>
       <div class="header">
         <div @click="mopen = !mopen" class="m_nav"><i></i><i></i><i></i></div>
         <div class="flex">
           <div class="flex_item">
             <a href="/" class="logo"><img src="../assets/images/logo.svg" /></a>
           </div>
           <ul class="nav">
            <!-- <li :class="index == 1?'on':''"> -->
              <li @click="toggleSubMenu('ecosystem')" :class="{'on': liopen === 'ecosystem'}">
              <a href="javascript:;">Ecosystem </a><i></i>
              <ol class="dropdown">
                <li><a href="http://dev.polaxe.net/">POLAXE </a></li>
                <li><a href="https://decheck.cc/">DECHECK </a></li>
                <li><a href="https://gascoin.xyz/">GASCOIN </a></li>
                <li><a href="https://brcbridge.pro/">APEBRIDGE </a></li>
                
              </ol>
            </li>

            <!-- <li :class="index == 2?'on':''"> -->
              <li @click="toggleSubMenu('dao')" :class="{'on': liopen === 'dao'}">
              <a href="javascript:;">DAO</a><i></i>
              <ol class="dropdown">
                <li><a href="/#/">Overview </a></li>
                <li><a href="https://tally.so/r/mBkozR">Become a Saver </a></li>
                <li><a href="/#/governance">Governance </a></li>
                <li><a href="/#/">Code of Contract </a></li>
                
              </ol>
            </li>
            
            <!-- <li :class="index == 3?'on':''"> -->
              <li @click="toggleSubMenu('economics')" :class="{'on': liopen === 'economics'}">
              <a href="javascript:;">Economics</a><i></i>
              <ol class="dropdown">
                <li><a href="/#/">Saving Coin </a></li>
                <li><a href="/#/">Allocation </a></li>
                <li><a href="/#/">Incentive Plan </a></li>
                <li><a href="/#/">Vesting Schedule </a></li>
                
              </ol>
            </li>

            <!-- <li :class="index == 4?'on':''"> -->
              <li @click="toggleSubMenu('resources')" :class="{'on': liopen === 'resources'}">
              <a href="javascript:;">Resources</a><i></i>
              <ol class="dropdown">
                <li><a href="https://savings.gitbook.io/saving-dao">Whitepaper </a></li>
                <li><a href="/#/">FAQs </a></li>
                <li><a href="/#/">Docs </a></li>
                <li><a href="/#/">APIs </a></li>
                
              </ol>
            </li>

            <!-- <li :class="index == 5?'on':''"> -->
              <li @click="toggleSubMenu('socials')" :class="{'on': liopen === 'socials'}">
              <a href="javascript:;">Socials </a><i></i>
              <ol class="dropdown">
                <li><a href="https://twitter.com/Savingdao">Twitter </a></li>
                <li><a href="https://discord.com/invite/savingdao">Discord </a></li>
                <li><a href="https://t.me/Saving_Dao">Telegram </a></li>
              </ol>
            </li>


             <!-- <li :class="index == 1?'on':''">
               <a href="javascript:;">Ecosystem</a><i></i>
               <ol class="dropdown">
                 <li><a href="/#/">Polaxe </a></li>
                 <li><a href="/#/">Ecology </a></li>
                 <li><a href="/#/">Intro </a></li>
                 
               </ol>
             </li> -->
            <!-- <li :class="index == 2?'on':''">
				     <a href="javascript:;">Governance </a>
			      <ol class="dropdown">
			  
			   <li><a href="/#/governance">Gover Intro </a></li>  
              <li><a href="https://www.notion.so/Saving-Dao-space-100df1a45d904fbeb2417c2e8cbc0b6d">Nation </a></li>
              <li><a href="https://metaforo.io/g/savingdao">Forum </a></li>
            </ol>
             </li>
             <li><a href="https://discord.com/invite/savingdao"> Join us</a></li> -->
           </ul>
         </div>
    </div>
</template>

<script>
    
    export default {
      name: 'mainheader',
      data () {
        return {
		  mopen:false,
		  liopen:false,
		  liopen2:false,
		  index:0,
      subMenuStates: {
            ecosystem: false,
            dao: false,
            // 添加其他菜单项的状态
            socials: false,
            resources: false,
            economics:false

          }
        }
      },
      methods: {
        toggleSubMenu(menu) {
          this.subMenuStates[menu] = !this.subMenuStates[menu];
          this.liopen = this.subMenuStates[menu] ? menu : null;
        }
      },
	  mounted(){
		 console.log(this.$route.name); 
		 if(this.$route.name == 'community' || this.$route.name == 'product' || this.$route.name == 'intro'){
			 this.index = 1;
		 }
		 if(this.$route.name == 'governance'){
		 			 this.index = 2;
		 }
     if(this.$route.name == 'a'){
		 			 this.index = 3;
		 }
     if(this.$route.name == 'b'){
		 			 this.index = 4;
		 }
     if(this.$route.name == 'c'){
		 			 this.index = 5;
		 }
     
	  }
    }
</script>

<style>
    
</style>
