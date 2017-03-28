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
              <p class="center" @click="setActiveProduct(product)"><a href="#modal1" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">info_outline</i></a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{{product.story}}<i class="material-icons right">close</i></span>
              <p>{{product.message}}</p>
            </div>
          </div>
       </div>
     </div>
     <div class="card-panel purple lighten-5 center-align ">
       <a class="btn waves-effect waves-light orange" @click="previous()"><i class="material-icons right">fast_rewind</i></a>
       <a class="btn waves-effect waves-light orange" @click="next()"><i class="material-icons right">fast_forward</i></a>
    </div>

    <!-- Modal Structure -->
    <div  id="modal1" class="modal modal-fixed-footer">
      <div v-if="activeProduct.attachments" class="modal-content">
        <img class="response-img" style="max-height: 100px;" :src="activeProduct.full_picture">

        <p class="flow-text">{{activeProduct.message}}</p>
        <hr/>

        <ul v-if="activeProduct.attachments.data[0].subattachments">
         <li v-for="image in activeProduct.attachments.data[0].subattachments.data">
           <div class="center"><img class="response-img" :src="image.media.image.src"/>
           </div>
         </li>
        </ul>
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
    },
    previous: function() {
      console.log('previous');
      this.$store.dispatch('previousProducts');
    },
    next: function() {
      console.log('next');
      this.$store.dispatch('nextProducts')
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

<style>
.modal.modal-fixed-footer {
   height: 85%;
}
.modal {
  width: 80%;
}
</style>
