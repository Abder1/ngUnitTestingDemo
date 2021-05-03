import { MessageService } from "./message.service"

describe('MessageServices', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    })
    it('should have no message to start', () => {
        expect(service.messages.length).toBe(0);
    }),

    it('should have no message to start', () => {
        service.add('message1');
        expect(service.messages.length).toBe(1);
    })
})