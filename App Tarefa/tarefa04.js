new Vue({
  el: "#app",
  data: {
    tasks: []
  },
  methods: {
    addTask: function() {
      this.tasks.push({
        title: "",
        text: "",
        editing: true
      });
    },
    editTask: function(index) {
      this.tasks[index].editing = true;
    },
    saveTask: function(index) {
      this.tasks[index].editing = false;
    },
    cancelTask: function(index) {
      this.tasks.splice(index, 1);
    },
    deleteTask: function(index) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks.splice(index, 1);
      }
    }
  }
});
