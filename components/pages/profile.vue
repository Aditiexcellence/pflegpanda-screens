<template>
  <div>
    <b-nav class="row">
      <b-col lg="2">
        <b-nav-item @click="calender">
          <center>
            <i class="fas fa-calendar-day"></i>
          </center>
          <center>Calender</center>
        </b-nav-item>
      </b-col>
      <b-col lg="2">
        <b-nav-item @click="inquiry">
          <center>
            <i class="fas fa-envelope-open-text"></i>
          </center>
          <center>Inquiries</center>
        </b-nav-item>
      </b-col>
      <b-col lg="2">
        <b-nav-item @click="invoice">
          <center>
            <i class="fas fa-signal"></i>
          </center>
          <center>Invoices</center>
        </b-nav-item>
      </b-col>
      <b-col lg="2">
        <b-nav-item @click="profile" class="actives">
          <a target="_self" href="#" class="nav-linkactive">
            <center>
              <i class="fas fa-user"></i>
            </center>
            <center>Profile</center>
          </a>
        </b-nav-item>
      </b-col>
      <b-col lg="4"></b-col>
    </b-nav>
    <b-container class="profilepadding">
      <b-row>
        <b-col lg="10">
          <h1 class="heading">asd asd</h1>
        </b-col>
        <b-col lg="2">
          <div class="icon">
            <center>
              <i class="fas fa-image"></i>
            </center>
          </div>
        </b-col>
      </b-row>
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
}
.h1 {
  margin-bottom: 6% !important;
}
.atag {
  text-decoration: none !important;
  color: black !important;
}
.nav-link {
  color: grey !important;
  text-decoration: none !important;
}
.nav-linkactive {
  color: #00e6e6 !important;
  text-decoration: none !important;
}
.actives {
  border-bottom: 2px solid #00e6e6;
}
.profilepadding {
  padding: 5% !important;
}
.heading {
  margin-bottom: 8%;
}
.icon {
  background-color: grey !important;
  border-radius: 43% !important;
  padding: 7%;
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>