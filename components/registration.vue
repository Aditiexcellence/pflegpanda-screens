<template>
  <div>
    <b-container>
      <b-form>
        <h1>Finish Registration</h1>
        <b-row>
          <b-col lg="6">
            Email Address*
            <b-form-input type="email" required class="background"></b-form-input>
          </b-col>
          <b-col lg="6">
            Password*
            <b-form-input type="password" required class="background"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            First Name
            <b-form-input type="text" required class="background"></b-form-input>
          </b-col>
          <b-col lg="6">
            lastname
            <b-form-input type="text" required class="background"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            Mobile Phone Number
            <b-form-input type="text" required class="background"></b-form-input>
          </b-col>
        </b-row>
        <p>
          <b>Important Note:</b>
          We will never publish your phone number - we just use it,when we
          receive specific booking requests for you. By clicking the save
          button, you accept our general terms and our data protection regulations.
        </p>
        <b-button>Save now and start for free</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Registration",
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.background {
  background-color: #ffffb3 !important;
  border: none !important;
  border-bottom: 2px solid #ced4da !important;
  border-radius: 0 !important;
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
  padding: 3% !important;
}
h1 {
  margin-bottom: 0px !important;
}
.row {
  margin-top: 7%;
}
</style>