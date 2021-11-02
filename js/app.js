Vue.config.devtools = true;

const app = new Vue({
  el: "#app",

  data: {
    toDoList: ["Fare la spesa", "Andare in banca", "Comprare il pane"]
  },

  methods: {
    deleteTask: function (i) {
      this.toDoList.splice(i, 1)
    }

  }
})