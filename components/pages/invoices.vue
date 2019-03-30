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
      <h1>Soon</h1>
      <p>
        Wir entwickeln die Pflegepanda App stetig weiter. Bald wirst du hier
        automatisch deine Rechnungen erstellen und deine Verdienste
        nachvollziehen konnen.
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Invoices",
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
  padding: 4% !important;
}
p {
  margin-top: 3% !important;
}
</style>