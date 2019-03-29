<template>
  <div>
    <b-nav class="row">
      <b-nav-item href="#">
        <i class="fas fa-calendar-day"></i>
        Calender
      </b-nav-item>
      <b-nav-item href="#">
        <i class="fas fa-envelope-open-text"></i>
        Inquiries
      </b-nav-item>
      <b-nav-item href="#">
        <i class="fas fa-signal-3"></i>
        Invoices
      </b-nav-item>
      <b-nav-item href="#">
        <i class="fas fa-user"></i>
        Profile
      </b-nav-item>
    </b-nav>
    <b-container>
        <p>
            Hey Jane, bitte hinterlege hier deine Arbeitsdienste sowie private 
            Abwesenheiten. Nur so wissen wir, wann du verfugbar bist und konnen
            dir Auftrage vermitteln. Klicke dazu auf das ,,Plus-Zeichen" an einem
            Tag!
        </p>
        
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Calender"
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
}
.nav {
  padding-left: 5% !important;
}
.nav-link {
  padding: 0.5rem 3rem !important;
}
.container {
  width: 50% !important;
  margin-top: 10%;
  background-color: white !important;
  padding: 4% !important;
}
/* .background {
  background-color: #ffffb3 !important;
  border: none !important;
  border-bottom: 2px solid #ced4da !important;
  border-radius: 0 !important;
}
button {
  width: 100% !important;
  background-color: #00e6e6 !important;
  margin-top: 2% !important;
}

a {
  text-decoration: underline !important;
}
p {
  margin-top: 2% !important;
}
center {
  margin-top: 2%;
}
 */
</style>
