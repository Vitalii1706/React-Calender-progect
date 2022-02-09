/* eslint-disable consistent-return */
const baseUrl = 'https://61f5229a62f1e300173c400c.mockapi.io/api/v1/events';

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(alert('Faild to display event'));
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

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error(alert('Faild to create event'));
    }
  });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error(alert('Faild to delete event'));
    }
  });
