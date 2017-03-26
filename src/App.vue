<template>
  <div id="App">
    <div class="navbar-fixed">
      <nav class="orange lighten-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">I Pazi Shop</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="https://www.facebook.com/ipazishop/">Shop</a></li>
          </ul>

          <ul id="nav-mobile" class="side-nav">
            <li><a href="https://www.facebook.com/ipazishop/">Shop</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </div>

    <div class="carousel carousel-slider center" data-indicators="true">
      <a class="carousel-item" href="javascript:void(0);"><img src="/static/1.jpg"></a>
      <a class="carousel-item" href="javascript:void(0);"><img src="/static/2.jpg"></a>
      <a class="carousel-item" href="javascript:void(0);"><img src="/static/3.jpg"></a>
    </div>

    <router-view></router-view>

    <footer class="page-footer grey">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4"></p>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Made by <a class="orange-text text-lighten-3"
        href="javascript:void(0);">Nhu Quan DANG</a>
        </div>
      </div>
    </footer>



  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function(){
    console.log("mounted");
    $('.carousel').carousel({
      fullWidth: true,
      dist: 0,
    });
  }
}
</script>
