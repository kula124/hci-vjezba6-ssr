import axios from 'axios';
// https://my-json-server.typicode.com/kula124/json-placeholder

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kula124/json-placeholder',
});

export const getPosts = () =>
    instance.get('/posts').then((response) => response.data);

export const getPostBySlug = (slug) =>
    instance.get(`/posts/?slug=${slug}`).then((response) => response.data[0]);
