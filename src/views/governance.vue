<template>
  <mainheader></mainheader>
     <div class="intro">
          <div class="container">
            <div class="one">
              <div class="flex">
                <div class="flex_item">Governance</div>
                <dl>
                  <dt>Saving <span>Dao.</span></dt>
                  <dd>
                    Connect, Collab, Create:
                    <div>Bridge to Web 3</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="six">
              <ul>
                <li>
                  <div class="flex_item">
                    Our mission is to create a diverse platform, offering end-to-end
                    transformation solutions for individuals and businesses
                    venturing into the Web3 space.
                  </div>
                  <img src="../assets/images/Governance3.svg" class="img1" />
                </li>
                <li>
                  <div class="flex_item">
                    We do not want short-term market fluctuations to hold our
                    development. While ensuring token-based decentralized
                    governance, we have introduced soul-bound reputation tokens.
                    Through this dual-token model, weighted calculations are
                    performed to offset market fluctuations caused by financial
                    activities, thereby reducing builders' willingness to
                    participate.
                  </div>
                  <img src="../assets/images/4.svg" class="img2" />
                </li>
                <li>
                  <div class="flex_item">
                    Also considering the development process from Web2 to Web3, the
                    governance model established by the initial team will leave room
                    for emerging community participation and will rapidly adapt to
                    market and technological developments. This ensures the
                    development speed of the ecosystem and also the influence of
                    members within the ecosystem.
                  </div>
                  <img src="../assets/images/Governance1.svg" class="img3" />
                </li>
              </ul>
            </div>
          </div>
        </div>
  <mainfooter></mainfooter>
</template>
<script>
 import mainheader from '/@/components/header.vue'	
 import mainfooter from '/@/components/footer.vue'	

export default {
	components: {
		mainheader,
		mainfooter
	},
  name: 'Governance',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    document.title = "Governance";
  }
}

</script>
<style scoped>

</style>
