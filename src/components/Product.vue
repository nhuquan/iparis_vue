<template>
  <div class="container">
    <div class="card-panel row">
      <div class="col l8 m8 s12">
        <p class="flow-text">{{activeProduct.message}}</p>
      </div>
      <div class="col l4 m4 s12">
        <img class="responsive-img" :src="activeProduct.full_picture">
      </div>
    </div>

    <ul v-if="activeProduct.attachments.data[0].subattachments">
      <li v-for="image in activeProduct.attachments.data[0].subattachments.data">
        <div class="center"><img class="responsive-img" :src="image.media.image.src"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    activeProduct: 'activeProduct'
  }),
}
</script>
