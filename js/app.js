Vue.config.devtools = true;

const app = new Vue({
  el: "#app",

  data: {
    toDoList: ["Fare la spesa", "Andare in banca", "Comprare il pane"],
    newTask: ""
  },

  methods: {
    deleteTask: function (i) {
      this.toDoList.splice(i, 1);
    },

    addTask: function () {
      const task = this.newTask.trim();

      if (task === "")
        return;

      const isTaskEqual = this.toDoList.some((element) => {
        return task.toLowerCase() === element.toLowerCase()
      })

      if (isTaskEqual)
        return;


      this.toDoList.push(task);

      this.newTask = "";
    }

  }
})