import { Server } from 'socket.io';

const PORT = 3012;

// Criar servidor HTTP (sem HTTPS explícito)
const io = new Server({
    cors: {
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST'] // Métodos permitidos
    }
});

// Definir interface para o corpo da mensagem
interface IMessengerServiceBody {
    body: Object;
    cronTimer: number;
}

// Evento de conexão WebSocket
io.on("connection", socket => {
    console.log("a user connected [ID ]-> ", socket.id);

    // Listener para desconectar o socket
    socket.on("disconnect", () => {
        console.log("user disconnected [ID] -> ", socket.id);
    });
});

// Função para enviar mensagens através do WebSocket
const serverSendMessage = (messageType: string, data: IMessengerServiceBody) => {
    console.log("mensagen recebida --> ", messageType)
    try {
        // Emitir mensagem para todos os sockets conectados
        io.emit(messageType, {
            data
        });
    } catch (error: any) {
        console.error("Error sending message:", error);
    }
};

// Iniciar o servidor WebSocket na porta especificada
io.listen(PORT);
console.log(`[ Socket.io Server ] running on PORT: ${PORT}`);

// Exportar as funções e interfaces necessárias
export { serverSendMessage, IMessengerServiceBody };
