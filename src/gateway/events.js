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
];*/

const baseUrl = 'https://61f5229a62f1e300173c400c.mockapi.io/api/v1/events';

export const fetchEventsList = async () => {
  return fetch(baseUrl)
    .then(result => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error(alert(" Internal Server Error. Can't display events "));
      }
    })
    .then(eventsList =>
      eventsList.map(({ dateFrom, dateTo, ...eventsList }) => ({
        ...eventsList,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
      })),
    );
};
export const deleteEvent = async id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error(alert(" Internal Server Error. Can't display events "));
    }
  });
};
export const createEvent = async eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(res => {
    if (!res.ok) {
      throw new Error(alert(" Internal Server Error. Can't display events "));
    }
  });
};
