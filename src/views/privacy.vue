<template>
  <mainheader></mainheader>
     <div class="intro">
          <div class="container">
            <div class="one">
              <div class="flex">
                <div class="flex_item">
                  <img src="../assets/images/Vector.png" class="img" />
                </div>
                <dl>
                  <dt>Saving <span>Dao.</span></dt>
                  <dd>
                    Connect, Collab, Create:
                    <div>Bridge to Web 3</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="rule">
                     <h4>Last updated: [16/01/2024]</h4>   
                     <p>
                       <br />Welcome to Saving Dao ("us," "we," or "our"). This Privacy
                       Policy outlines how we collect, use, disclose, and safeguard your
                       personal information when you use our cryptocurrency platform and
                       related services. <br />By accessing or using Saving Dao, you agree
                       to the terms of this Privacy Policy. If you do not agree with the
                       terms, please do not use our services.
                     </p>
                     <h3>Information We Collect</h3>
                     <h4>Personal Information</h4>
                     <p>
                       <b>● User-Provided Information:</b> When you register for an
                       account, participate in surveys, or contact us, we may collect
                       personal information such as your name, email address, and other
                       relevant details.
                     </p>
                     <p>
                       <b>● Transaction Information:</b> We collect information related to
                       your cryptocurrency transactions on the Saving Dao platform.
                     </p>
                     <h4>Non-Personal Information</h4>
                     <p>
                       <b>● Usage Data:</b> We may collect non-personal information about
                       how you interact with our platform, including your IP address,
                       browser type, and device information.
                     </p>
                     <h3>How We Use Your Information</h3>
           
                     <p>We use the collected information for the following purposes:</p>
                     <p>
                       <b>● Provide and Maintain Services:</b> To operate and maintain
                       Saving Dao and to provide you with the services you have requested.
                     </p>
                     <p>
                       <b>● Improve Services:</b> To analyze usage patterns, enhance user
                       experience, and improve our services.
                     </p>
                     <p>
                       <b>● Communication:</b> To communicate with you, respond to
                       inquiries, and send important notices.
                     </p>
                     <p>
                       <b>● Security:</b> To ensure the security and integrity of our
                       platform and protect against fraud and unauthorized access.
                     </p>
                     <h3>Disclosure of Your Information</h3>
                     <p>We may share your information with:</p>
                     <p>
                       <b>● Service Providers:</b> Third-party service providers who assist
                       us in operating our platform and providing services.
                     </p>
                     <p>
                       <b>● Legal Compliance:</b> When required by law or in response to
                       legal process, including court orders or government requests.
                     </p>
                     <h3>Your Choices</h3>
                     <p>
                       You have the following choices regarding your personal information:
                     </p>
                     <p>
                       <b>● Access and Correction: </b>You can access and update your
                       personal information through your account settings.
                     </p>
                     <p>
                       <b>● Opt-Out:</b> You can opt-out of certain communications or
                       withdraw consent where applicable.
                     </p>
                     <h3>Security</h3>
                     <p>
                       We implement industry-standard security measures to protect your
                       information. However, no method of transmission over the internet or
                       electronic storage is completely secure, and we cannot guarantee
                       absolute security.
                     </p>
                     <h3>Changes to This Privacy Policy</h3>
                     <p>
                       We may update this Privacy Policy from time to time, and any changes
                       will be posted on this page. Please review this Privacy Policy
                       periodically.
                     </p>
                     <h3>Contact Us</h3>
                     <p>
                       If you have any questions or concerns about this Privacy Policy,
                       please contact us via Discord. You may open a ticket and we will
                       attend to it ASAP.<!-- <a href="#">https://linktr.ee/saving_dao</a>   -->
                     </p>
                     <p>
                       By using Saving Dao, you agree to the terms outlined in this Privacy
                       Policy.
                     </p>
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
  name: 'terms',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    document.title = "Privacy Policy";
  }
}

</script>
<style scoped>

</style>
