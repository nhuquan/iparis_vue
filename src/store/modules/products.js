import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  activeProduct: {},
}

// getters
const getters = {
  allProducts: state => state.all,
  activeProduct: state => state.activeProduct,
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
  setActiveProduct({ commit }, {product}) {
    commit(types.SET_ACTIVE_PRODUCT, { product });
  },
  previousProducts({ commit }) {
    shop.updateProducts(state.all.paging.previous, function(products) {
      if (products && products.data && products.data.length > 0)
        commit(types.RECEIVE_PRODUCTS, {products});
      else {
        console.log('empty data recevied, do nothing', products)
      }
    });
  },
  nextProducts({commit}) {
    shop.updateProducts(state.all.paging.next, function(products) {
      if (products && products.data && products.data.length > 0)
        commit(types.RECEIVE_PRODUCTS, { products });
      else {
        console.log('empty data recevied, do nothing', products)
      }
    });
  }
}

// mutations
const mutations = {
  RECEIVE_PRODUCTS (state, { products }) {
    state.all = products
  },

  SET_ACTIVE_PRODUCT (state, { product }) {
    state.activeProduct = product
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
