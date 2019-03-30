<template>
  <div>
    <b-nav class="row">
      <b-nav-item href="#">
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
      <p class="paragraph">
        Hey Jane, bitte hinterlege hier deine Arbeitsdienste sowie private
        Abwesenheiten. Nur so wissen wir, wann du verfugbar bist und konnen
        dir Auftrage vermitteln. Klicke dazu auf das ,,Plus-Zeichen" an einem
        Tag!
      </p>
      <b-row>
        <b-col lg="11">
          <h1>February</h1>
        </b-col>
        <b-col lg="1" class="set">
          <i class="fas fa-angle-up"></i>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col lg="1">
          14
          mo
        </b-col>
        <b-col lg="3" class="set">Available</b-col>
        <b-col lg="7"></b-col>
        <b-col lg="1">
          <i class="fas fa-plus"></i>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col lg="1">
          15
          mo
        </b-col>
        <b-col lg="3" class="set">Available</b-col>
        <b-col lg="7"></b-col>
        <b-col lg="1">
          <i class="fas fa-plus"></i>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col lg="1">
          16
          mo
        </b-col>
        <b-col lg="3" class="set">Available</b-col>
        <b-col lg="7"></b-col>
        <b-col lg="1">
          <i class="fas fa-plus"></i>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col lg="1">
          17
          mo
        </b-col>
        <b-col lg="3" class="set">Available</b-col>
        <b-col lg="7"></b-col>
        <b-col lg="1">
          <i class="fas fa-plus"></i>
        </b-col>
      </b-row>
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
.set {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
