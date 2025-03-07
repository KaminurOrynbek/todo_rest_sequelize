const TasksService = require('./services/tasks.service');

const resolvers = {
  Query: {
    getTodoTasks: async () => {
      return await TasksService.getTasks();
    },
    getDoneTasks: async () => {
      return await TasksService.getCompletedTasks();
    },
    getTask: async (_, { id }) => {
      return await TasksService.getTaskById(id);
    },
    findTasks: async (_, { tags }) => {
      return await TasksService.findTasksByTags(tags);
    },
  },
  Mutation: {
    createTask: async (_, { task }) => {
      return await TasksService.addTask(task);
    },
    updateTask: async (_, { id, task }) => {
      return await TasksService.updateTask(id, task);
    },
    deleteTask: async (_, { id }) => {
      return await TasksService.deleteTask(id);
    },
  },
};

module.exports = resolvers;