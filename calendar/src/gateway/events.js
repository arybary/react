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
      throw new Error(alert("Internal Server Error. Can't display events"));
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

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((respone) => {
    if (!respone.ok) {
      throw new Error(alert("Internal Server Error. Can't display events"));
    }
  });
};
