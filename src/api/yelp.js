import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KB4R4i6eOcnjNjyF25KS7xmJB2Cyfqs4sYV0yc7tGDzi1zd7ZOQmVJSLCuCChiigh9ZDLJT3MIon0sn9R15wZRjFj2DDePk30MqOLVg51PqCalnahjKmpFF5wk9IX3Yx",
  },
});
