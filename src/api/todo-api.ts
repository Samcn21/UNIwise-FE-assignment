// types
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { TodoResponse } from '../types/db';

// api
import { fetchApi } from './fetch';

const todoApi = {
    getTodos(instance: AxiosInstance) {
        return fetchApi<TodoResponse>(() => instance.get(''));
    },
    getTodo(instance: AxiosInstance, id: string) {
        return fetchApi<TodoResponse>(() => instance.get(`/${id}`));
    },    
     addTodo(instance: AxiosInstance, config: AxiosRequestConfig) {
      return fetchApi<any>(()=> instance.post('', config))
    },
    updateTodo(instance: AxiosInstance, id: string, config: AxiosRequestConfig) {
      return fetchApi<TodoResponse>(() => instance.put(`/${id}`, config));
    },   
    deleteTodo(instance: AxiosInstance, id: string) {
      return fetchApi<TodoResponse>(() => instance.delete(`/${id}`));
    },       
};

export default todoApi;
