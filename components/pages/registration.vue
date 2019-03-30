<template>
  <div>
    <b-container class="register">
      <b-form>
        <h1>Finish Registration</h1>
        <b-row>
          <b-col lg="6">
            <mdb-input type="email" label="E-mail Address*" required/>
          </b-col>
          <b-col lg="6">
            <mdb-input type="Password" label="Password*"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <mdb-input type="text" label="Firstname"/>
          </b-col>
          <b-col lg="6">
            <mdb-input type="text" label="Lastname"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <mdb-input type="text" label=" Mobile Phone Number"/>
          </b-col>
        </b-row>
        <p>
          <b>Important Note:</b>
          We will never publish your phone number - we just use it,when we
          receive specific booking requests for you. By clicking the save
          button, you accept our general terms and our data protection regulations.
        </p>
        <b-button @click="signup">Save now and start for free</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Registration",
  components: {
    mdbInput
  },
  methods: {
    signup: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
button {
  width: 100% !important;
  background-color: #00e6e6 !important;
  border: none !important;
  padding: 0.9rem 0.75rem !important;
}
.container {
  width: 50% !important;
  margin-top: 4%;
  background-color: white !important;
}
.register {
  padding: 3% !important;
}
.row {
  margin-top: 7%;
}
</style>