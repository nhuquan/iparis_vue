<template>
  <div id="App">
    <div class="navbar-fixed">
      <nav class="amber darken-1">
          <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
          <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">I Pazi Shop</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="https://www.facebook.com/ipazishop/"><i class="material-icons">shopping_cart</i></a></li>
          </ul>
          </div>
      </nav>
    </div>

    <div class="slider slider-main">
      <ul class="slides">
        <li>
          <img src="/static/1.jpg"> <!-- random image -->
        </li>
        <li>
          <img src="/static/2.jpg"> <!-- random image -->
        </li>
        <li>
          <img src="/static/3.jpg"> <!-- random image -->
        </li>
        <li>
          <img src="/static/4.jpg"> <!-- random image -->
        </li>
        <li>
          <img src="/static/5.jpg">
          <!-- <div class="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div> -->
        </li>
      </ul>
    </div>

    <router-view></router-view>

    <footer class="page-footer grey">
      <div class="footer-copyright">
        <div class="container">
        Made by <a class="orange-text text-lighten-3"
        href="javascript:void(0);">Nhu Quan DANG</a>
        </div>
      </div>
    </footer>

    <ul id="slide-out" class="side-nav">
      <li><div class="userView">
        <a href="https://www.facebook.com/ipazishop/">Shop</a>
      </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function(){
    console.log("mounted");
    $('.slider-main').slider();
    $('.button-collapse').sideNav();
  }
}
</script>
<style>
#App {
 background-image: url('/static/bg6.jpg');
}
.slider-main {
  border-bottom: 2px orange !important
}
</style>
