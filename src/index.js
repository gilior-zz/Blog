import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'


//axios base url
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json';

//axios intercept request
var request_interceptor =axios.interceptors.request.use((request) => {
    console.log('[axios.interceptors.request]', request);
    return request;
},
    err => {
        console.log('[axios.interceptors.request]', err);
        return Promise.reject(err);
    }
)


//axios intercept response
var response_interceptor =axios.interceptors.response.use((response) => {
    console.log('[axios.interceptors.response]', response);
    return response;
},
    err => {
        console.log('[axios.interceptors.response]', err);
        return Promise.reject(err);
    }
)
// axios.interceptors.request.eject(request_interceptor);
// axios.interceptors.response.eject(response_interceptor);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
