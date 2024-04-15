// external
import Axios from 'axios';

// api
import todoApi from './todo-api';
import ApiSettings from './api-settings';

// types
import type { AxiosInstance } from 'axios';

// functions
function _getConfig() {
    return {
        baseURL: ApiSettings.todoApi,
        headers: {
            'Content-Type': 'application/json',
        }
    }
}

function TodoApi(instance: AxiosInstance) {
    return {
        getTodos: (): any => todoApi.getTodos(instance),
        getTodo: (id: string): any => todoApi.getTodo(instance, id),
        addTodo: (body: any): any => todoApi.addTodo(instance, body),
        updateTodo: (id: string, body: any): any => todoApi.updateTodo(instance, id, body),
        deleteTodo: (id: string): any => todoApi.deleteTodo(instance, id)
    };
}


const payloadInstance: AxiosInstance = Axios.create(_getConfig());

const api = {
    payload: TodoApi(payloadInstance)
}

export default api;
