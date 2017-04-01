<template>
    <div class="section">
     <div class="row">
       <div v-if="product.message" class="col s6 m4 l2"
       v-for="(product, index) in products.data">
          <div class="card hoverable sticky-action" style="overflow: hidden">
            <div class="card-image waves-effect waves-block waves-light"
              @click="setActiveProduct(product)">
               <a href="#modal1">
                  <img style="height: 200px;" :src="product.full_picture">
                </a>
             </div>
            <div class="card-content">
              <p class="center" @click="setActiveProduct(product)"><a href="#modal1" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">info_outline</i></a>
                <span class="dark-text">{{product.created_time | localDate}}</span>
              </p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{{product.story}}<i class="material-icons right">close</i></span>
              <p>{{product.message}}</p>
            </div>
          </div>
       </div>
     </div>
     <div class="card-panel center-align ">
       <a class="btn waves-effect waves-light orange" @click="previous()"><i class="material-icons right">fast_rewind</i></a>
       <a class="btn waves-effect waves-light orange" @click="next()"><i class="material-icons right">fast_forward</i></a>
    </div>

    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div v-if="activeProduct.attachments" class="modal-content">
        <div class="row">
          <div class="col l8 m8 s12">
            <p class="flow-text">{{activeProduct.message}}</p>
          </div>
          <div class="col l4 m4 s12">
            <img class="responsive-img" :src="activeProduct.full_picture">
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <a href="javascript:void(0);" @click="toProductPage()" class="modal-action orange waves-effect waves-green btn-flat "><i class="material-icons">play_arrow</i></a>
        <a href="javascript:void(0);">&nbsp;&nbsp;&nbsp;</a>
        <a href="javascript:void(0);" class="modal-action modal-close waves-effect waves-green btn-flat "><i class="material-icons">not_interested</i></a>
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
  filters: {
    localDate: function (date) {
      console.log(typeof date);
      return date.slice(0,10);
    }
  },
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
    toProductPage: function() {
      console.log('going to product');
      console.log($('#modal1'));
      $('#modal1').modal('close');
      this.$router.push({ path: 'product' });

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
