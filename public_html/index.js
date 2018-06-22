"use strict"

Vue.use(VueMaterial.default);

var gsrp5 = {
  name: "GSRP5",
  data: function data() {
    return {
      menuVisible: false,
      mdFixed: true,
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
	}	
}

var app = new Vue(gsrp5);

app.$mount("#app");
