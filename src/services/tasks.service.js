const tasks = [];

async function addTask({ title, description, tags }) {
  const task = { id: tasks.length + 1, title, description, tags, done: false };
  tasks.push(task);
  return task;
}

async function getTasks() {
  return tasks.filter(task => !task.done);
}

async function getCompletedTasks() {
  return tasks.filter(task => task.done);
}

async function getTaskById(id) {
  return tasks.find(task => task.id === parseInt(id));
}

async function findTasksByTags(tags) {
  return tasks.filter(task => tags.every(tag => task.tags.includes(tag)));
}

async function updateTask(id, { title, description, tags, done }) {
  const task = tasks.find(task => task.id === parseInt(id));
  if (!task) throw new Error('Task not found');
  task.title = title;
  task.description = description;
  task.tags = tags;
  task.done = done;
  return task;
}

async function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index === -1) throw new Error('Task not found');
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  addTask,
  getTasks,
  getCompletedTasks,
  getTaskById,
  findTasksByTags,
  updateTask,
  deleteTask,
};