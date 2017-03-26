import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  activeProduct: {}
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
    console.log("action set product called", product);
    commit(types.SET_ACTIVE_PRODUCT, { product });
  }
}

// mutations
const mutations = {
  RECEIVE_PRODUCTS (state, { products }) {
    state.all = products
  },

  SET_ACTIVE_PRODUCT (state, { product }) {
    console.log("muation", product)
    state.activeProduct = product
  },
  //
  // [types.ADD_TO_CART] (state, { id }) {
  //   state.all.find(p => p.id === id).inventory--
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
