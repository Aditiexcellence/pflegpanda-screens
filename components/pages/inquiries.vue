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
        <b-nav-item @click="inquiry" class="actives">
          <a target="_self" href="#" class="nav-linkactive">
            <center>
              <i class="fas fa-envelope-open-text"></i>
            </center>
            <center>Inquiries</center>
          </a>
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
        <b-nav-item @click="profile">
          <center>
            <i class="fas fa-user"></i>
          </center>
          <center>Profile</center>
        </b-nav-item>
      </b-col>
      <b-col lg="4"></b-col>
    </b-nav>
    <b-container class="inquiry">
      <h1>Soon</h1>
      <p>
        Heir findest du bald deine personlichen Buchungsanfragen von neuen
        Auftraggebern. Sobald sich ausreichend Freiberufler us deiner
        Gegend angemeldet haben, schalten wir diese Funktion frei(es fehlen
        nicht mehr viele!).Am besten empfiehlst du uns deinen freiberuflichen
        Pfleger-Freunden, damit ihr alle schon bald heimatnahe
        Auftragsanfragen erhaltet!
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Inquiries",
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
  margin-top: 10%;
  background-color: white !important;
}
p {
  margin-top: 3% !important;
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
.inquiry {
  padding: 5% !important;
}
</style>
