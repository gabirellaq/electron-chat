<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div id="body">
      <SlideComponent></SlideComponent>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent';
  import SlideComponent from './components/SlideComponent';
  export default {
    name: 'ele',
    components: {
      HeaderComponent,
      SlideComponent
    },
  }
</script>

<style lang="sass">
@import "~@/assets/css/reset.scss";
</style>
