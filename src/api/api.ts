const BASE_URL = 'https://opentdb.com/api.php';

const request = (
  count = '',
) => fetch(`${BASE_URL}${count}`)
  .then(response => {
    if (!response.ok) {
      return new Error(`${response.status} -- ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => data.results);

export const getQuestions = (count: number) => request(`?amount=${count}`);
