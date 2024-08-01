import { IMessengerServiceBody } from "../app/webSocket";


interface ISocketResponse {
    status_code: number;
    body: Object | any
}

interface IMainUsecases {
    sendSocketMessage(data: IMessengerServiceBody, param: any): Promise<ISocketResponse>
}

export { ISocketResponse, IMainUsecases }