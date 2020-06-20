import axios from 'axios';

const fetchApiTodosSource = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchApiAxiosTodosSource = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      console.log('response form axios', response);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export default fetchApiTodosSource;