import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import VueLocalStorage from 'vue-localstorage'
import 'element-ui/lib/theme-default/index.css'
import ProductList from '@/components/ProductList';
import Product from '@/components/Product';
import CreateProduct from '@/components/CreateProduct';

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(VueLocalStorage);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All Product',
      component: ProductList,
      alias:'/home'
    },
    {
      path: '/product',
      name: 'View Product',
      component: Product,
      props: true,
    },
    {
      path: '/new',
      name: 'Create Product',
      component: CreateProduct,
    },
    {
      path: '/edit/:id',
      name: 'Edit Product',
      component: CreateProduct,
      props: true,
    },
  ],
});
