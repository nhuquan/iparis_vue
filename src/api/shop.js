import axios from 'axios'

const token="1807850402870629|RG1qZf7asvkdXTA3yzb-4WGgxuU"
const origin_url="https://graph.facebook.com/v2.8/ipazishop/posts?access_token=" + token
  + "&method=get"
  + "&fields=['message', 'full_picture', 'icon', 'attachments', 'story']"

export default {
  getProducts ( cb) {
    axios.get(origin_url)
      .then(function(response){
        console.log('callback data', response)
        cb(response.data)
      })
  },
  updateProducts(neUurl){
    axios.get(newurl)
      .then(function(response){
        console.log('callback data', response)
        cb(response.data)
      })
  }
}