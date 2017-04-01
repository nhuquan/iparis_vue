<template>
  <div class="container">
    <div class="card-panel">
      <p class="flow-text">{{activeProduct.message}}</p>
    </div>
    <ul v-if="activeProduct.attachments.data[0].subattachments">
      <li v-for="image in activeProduct.attachments.data[0].subattachments.data">
        <div class="center"><img class="response-img" :src="image.media.image.src"/>
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
