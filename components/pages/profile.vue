<template>
  <div>
    <b-nav class="row">
      <b-nav-item @click="calender">
        <center>
          <i class="fas fa-calendar-day"></i>
        </center>Calender
      </b-nav-item>
      <b-nav-item @click="inquiry">
        <center>
          <i class="fas fa-envelope-open-text"></i>
        </center>Inquiries
      </b-nav-item>
      <b-nav-item @click="invoice">
        <center>
       <i class="fas fa-signal"></i>
        </center>Invoices
      </b-nav-item>
      <b-nav-item @click="profile">
        <center>
          <i class="fas fa-user"></i>
        </center>Profile
      </b-nav-item>
    </b-nav>
    <b-container>
      <h1>asd asd</h1>
      <b-row>My Website</b-row>
      <hr>
      <b-row>
        <a @click="aboutme" class="atag">About me</a>
      </b-row>
      <hr>
      <b-row>
        <a @click="signalment" class="atag">Signalment</a>
      </b-row>
      <hr>
      <b-row>
        <a @click="cv" class="atag">My CV</a>
      </b-row>
      <hr>
      <b-row>Payment</b-row>
      <hr>
      <b-row>Verification</b-row>
      <hr>
      <b-row>Valuations</b-row>
      <hr>
      <b-row>Logout</b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    calender: function() {
      this.$router.push("/calender");
    },
    profile: function() {
      this.$router.push("/profile");
    },
    inquiry: function() {
      this.$router.push("/inquiries");
    },
    invoice: function() {
      this.$router.push("/invoices");
    },
    aboutme: function() {
      this.$router.push("/about");
    },
    signalment: function() {
      this.$router.push("/signalment");
    },
    cv: function() {
      this.$router.push("/cv");
    }
  }
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.container {
  width: 50% !important;
  margin-top: 4%;
  background-color: white !important;
  padding: 3% !important;
}
.h1 {
  margin-bottom: 6% !important;
}
.row {
  margin-top: 7%;
}
.atag {
  text-decoration: none !important;
  color: black !important;
}
</style>