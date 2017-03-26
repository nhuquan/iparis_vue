<template>
    <div class="section">
     <div class="row">
       <div class="col s12 m4 l2"
       v-for="(product, index) in products.data">
          <div class="card hoverable sticky-action" style="overflow: hidden">
            <div class="card-image waves-effect waves-block waves-light"
              @click="setActiveProduct(product)">
               <a href="#modal1">
                  <img class="response-img" style="height: 200px;" :src="product.full_picture">
                </a>
             </div>
            <div class="card-content">
              <!-- <span class="card-title activator grey-text text-darken-4">{{product.story}}<i class="material-icons right">more_vert</i></span>
               -->
              <p><a href="#modal1" class="btn waves-effect waves-light light-blue">More</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{{product.story}}<i class="material-icons right">close</i></span>
              <p>{{product.message}}</p>
            </div>
          </div>
       </div>
     </div>
     <div class="center-align">
       <a class="btn waves-effect waves-light orange" @click="previous()">Previous</a>
       <a class="btn waves-effect waves-light orange" @click="next()">Next</a>
    </div>
    <a class="waves-effect waves-light btn" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>{{activeProduct.story}}</h4>
        <p>{{activeProduct.message}}</p>
      </div>
      <div class="modal-footer">
        <a href="javascript:void(0);" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
      </div>
    </div>

   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    products: 'allProducts',
    activeProduct: 'activeProduct'
  }),
  methods: {
    setActiveProduct: function (product) {
      console.log("selected", product);
      this.$store.dispatch('setActiveProduct', {
        product
      });
    }
  },
  mounted() {
    $('.modal').modal();
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
