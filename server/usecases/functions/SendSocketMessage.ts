import { IMessengerServiceBody, serverSendMessage } from "../../app/webSocket"
import { ISocketResponse } from "../IMainUsecases"


function SendSocketMessage(data: IMessengerServiceBody, message_type: string): Promise<ISocketResponse> {

    return new Promise((resolve, reject) => {
        if (!message_type || !data) {
            reject({
                status_code: 400,
                body: "Missing messageType or data"
            })
        }

        serverSendMessage(message_type, data)

        resolve({
            status_code: 200,
            body: "Message sent successfully"
        })

    })

}

export { SendSocketMessage }