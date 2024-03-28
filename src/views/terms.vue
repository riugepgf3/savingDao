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
                        Welcome to Saving Dao ("us," "we," or "our"). Please read these
                        Terms of Service ("Terms") carefully before using our cryptocurrency
                        platform and related services. By accessing or using Saving Dao, you
                        agree to comply with and be bound by these Terms. If you do not
                        agree with any part of the Terms, please do not use our services.
                      </p>
                      <br />
                      <h4>1. User Eligibility</h4>
                      <p>
                        To use Saving Dao, you must be at least 18 years old and have the
                        legal capacity to enter into agreements.
                      </p>
                      <h4>2. Account Registration</h4>
                      <p>
                        When creating an account with Saving Dao, you agree to provide
                        accurate and up-to-date information. You are responsible for
                        maintaining the confidentiality of your account credentials.
                      </p>
                      <h4>3. Acceptable Use</h4>
                      <p>
                        You agree not to engage in any of the following activities:
                        <br />● Violating any applicable laws or regulations. <br />● Using
                        the platform for illegal or fraudulent purposes. <br />
                        ● Attempting togain unauthorized access to accounts or systems.
                        <br />
                        ● Interferingwith the proper functioning of Saving Dao.
                      </p>
                      <h4>4. Cryptocurrency Transactions</h4>
                      <p>
                        All transactions conducted on Saving Dao are subject to the terms
                        outlined in our Privacy Policy. You agree to abide by the rules and
                        policies governing cryptocurrency transactions on our platform.
                      </p>
                      <h4>5. Intellectual Property</h4>
                      <p>
                        All content and materials on Saving Dao, including but not limited
                        to logos, trademarks, and software, are the property of Saving Dao
                        and protected by intellectual property laws. You may not use,
                        reproduce, or distribute our intellectual property without our
                        express written consent.
                      </p>
                      <h4>6. Disclaimer of Warranties</h4>
                      <p>
                        Saving Dao is provided "as is" without warranties of any kind,
                        either expressed or implied. We do not guarantee the accuracy,
                        completeness, or reliability of any information on our platform.
                      </p>
                      <h4>7. Limitation of Liability</h4>
                      <p>
                        To the fullest extent permitted by law, Saving Dao shall not be
                        liable for any indirect, incidental, special, consequential, or
                        punitive damages arising out of or in connection with the use of our
                        services.
                      </p>
                      <h4>8. Changes to Terms</h4>
                      <p>
                        We may update these Terms from time to time. Any changes will be
                        posted on this page, and your continued use of Saving Dao after such
                        changes will constitute your acceptance of the revised Terms.
                      </p>
                      <h4>9. Termination</h4>
                      <p>
                        We reserve the right to terminate or suspend your account and access
                        to Saving Dao for violation of these Terms or any other reason
                        deemed appropriate.
                      </p>
                      <h4>10. Governing Law</h4>
                      <p>
                        These Terms are governed by and construed in accordance with the
                        laws of [Your Jurisdiction], without regard to its conflict of law
                        principles.
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
  name: 'privacy',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    document.title = "Terms Of Use";
  }
}

</script>
<style scoped>

</style>
