<template>
    <div class="section">
     <div class="row">
       <div class="col s12 m4 l2"
       v-for="(product, index) in products.data">
          <div class="card sticky-action" style="overflow: hidden">
            <div class="card-image waves-effect waves-block waves-light">
               <img  style="max-height: 200px;" :src="product.full_picture">
             </div>
            <div class="card-content">
              <!-- <span class="card-title activator grey-text text-darken-4">{{product.story}}<i class="material-icons right">more_vert</i></span>
               -->
              <p><a href="#" class="btn waves-effect waves-light light-blue">Order</a></p>
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
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
