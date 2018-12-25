var gsrp5 = {
	el: '#inspire',
    data: () => ({
      drawer: false,
    }),
    props: {
      source: String
    },
}
var app = new Vue(gsrp5);

app.$mount("#inspire");
