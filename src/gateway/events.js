/*const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 1, 21, 7, 15),
    dateTo: new Date(2022, 1, 21, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2022, 1, 22, 10, 15),
    dateTo: new Date(2022, 1, 22, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2022, 1, 23, 10, 30),
    dateTo: new Date(2022, 1, 23, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2022, 1, 25, 4, 30),
    dateTo: new Date(2022, 1, 25, 11, 0),
  },
]; 

export default events;*/

const baseUrl = 'https://61f5229a62f1e300173c400c.mockapi.io/api/v1/events';

export const fetchEventsList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

/*
export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;utc-8',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to ceate task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to ceate task');
    }
  });
*/
