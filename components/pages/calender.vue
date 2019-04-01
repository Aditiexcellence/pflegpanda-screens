<template>
  <div>
    <b-nav class="row">
      <b-nav-item href="#">
        <i class="fas fa-calendar-day"></i>
        Calender
      </b-nav-item>
      <b-nav-item @click="inquiry">
        <i class="fas fa-envelope-open-text"></i>
        Inquiries
      </b-nav-item>
      <b-nav-item @click="invoice">
        <i class="fas fa-signal-3"></i>
        Invoices
      </b-nav-item>
      <b-nav-item @click="profile">
        <i class="fas fa-user"></i>
        Profile
      </b-nav-item>
    </b-nav>
    <b-container>
      <p class="paragraph">
        Hey Jane, bitte hinterlege hier deine Arbeitsdienste sowie private
        Abwesenheiten. Nur so wissen wir, wann du verfugbar bist und konnen
        dir Auftrage vermitteln. Klicke dazu auf das ,,Plus-Zeichen" an einem
        Tag!
      </p>
      <h1>February</h1>
      <hr>
      <b-row>14 Available</b-row>
      <hr>
      <b-row>15 Available</b-row>
      <hr>
      <b-row>16 Available</b-row>
      <hr>
      <b-row>17 Available</b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Calender",
  methods: {
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
.row {
  background-color: white !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 0% !important;
}
.nav {
  padding-left: 5% !important;
}
.nav-link {
  padding: 0.5rem 3rem !important;
}
.container {
  width: 50% !important;
  margin-top: 1% !important;
  background-color: white !important;
  padding: 4% !important;
}
.paragraph {
  background-color: #00e6e6;
}
</style>
