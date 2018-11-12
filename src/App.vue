<template>
  <div id="app" class="container-fluid">
    <div id="awesome-text">
      OMG WOW
      SO GOOD
      AMAZING
      BEST EVER
      GOOD JOB
      SIMON SAY
      SUPER
      WEBSITE
    </div>
    <img class="simon-border" src="./assets/simon-border.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#awesome-text {
  position: fixed;
  font-size: 16vw;
  text-justify: inter-word;
}

.simon-border {
    position: fixed;
    top: calc(50% - 50vh);
    left: calc(50% - 20vh);
    max-height: 100vh;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
