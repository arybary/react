const events = [
  {
    id: 1,
    title: "Go to the gym",
    description: "some text here",
    dateFrom: new Date(2022, 0, 4, 10, 15),
    dateTo: new Date(2022, 0, 4, 15, 0),
  },
  {
    id: 2,
    title: "Go to the school",
    description: "hello, 2 am",
    dateFrom: new Date(2022, 0, 6, 10, 15),
    dateTo: new Date(2022, 0, 6, 11, 0),
  },
  {
    id: 3,
    title: "Lunch",
    description: "",
    dateFrom: new Date(2022, 0, 7, 10, 30),
    dateTo: new Date(2022, 0, 7, 11, 30),
  },
  {
    id: 4,
    title: "Meet friend",
    description: "at the cafe",
    dateFrom: new Date(2022, 0, 8, 10, 30),
    dateTo: new Date(2022, 0, 8, 11, 0),
  },
];
const baseUrl = "https://61cdc8267067f600179c5c46.mockapi.io/calendar";

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((respone) => {
    if (!respone.ok) {
      throw new Error("HEXYSI");
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${+taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((respone) => {
    if (!respone.ok) {
      throw new Error("HEXYSI update");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((respone) => {
    if (!respone.ok) {
      throw new Error("HEXYSI update");
    }
  });
};

export default events;
