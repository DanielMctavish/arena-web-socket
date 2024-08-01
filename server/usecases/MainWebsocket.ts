import { IMessengerServiceBody } from "../app/webSocket";
import { SendSocketMessage } from "./functions/SendSocketMessage";
import { IMainUsecases, ISocketResponse } from "./IMainUsecases";



class MainWebsocket implements IMainUsecases {
    sendSocketMessage(data: IMessengerServiceBody, param: any): Promise<ISocketResponse> {
        return SendSocketMessage(data, param.message_type);
    }
}

export default MainWebsocket;