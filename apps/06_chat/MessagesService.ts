let initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
    // a stream that publishes new messages only once
    newMessages: Rx.Subject<Message> = new Rx.Subject<Message>();

    // a stream that emits an array of the most recent messages
    messages: Rx.Observable<Message[]>;

    // receives operations to be applied to messages stream
    // a way to perform changes on all messages, currently stored in messages
    updates: Rx.Subject<any> = new Rx.Subject<any>();

    // action streams
    create: Rx.Sbject<Message> = new Rx.Subject<Message>();
    markThreadAsRead: Rx.Subject<any> = new Rx.Subject<any>();

    constructor(){
        this.messages = this.updates
            .scan(initialMessages, (messages: Message[], operation: IMessagesOperation) => {
                return operation(messages);
            })
            //share the most recent list of messages across all subscribers
            //and cache the last known list of messages
            .shareReplay(1);

        this.create
            .map(function(message: Message[]): IMessagesOperation {
                return (messages: Message[]) => {
                    return messages.concat(message);
                };
            })
            .subscribe(this.updates)
        ;

        this.newMessages
            .subscribe(this.create)
        ;

        this.markThreadAsRead
            .map( (thread: Thread) => {
                return (messages: Message[]) => {
                    return messages.map( (message: Message) => {
                        if (message.thread.id === thread.id) {
                            message.isRead = true;
                        }
                    })
                }
            })
            .subscribe(this.updates)
        ;
    }

    addMessage(message: Message): void {
        this.newMessages.onNext(message);
    }

    messagesForThreadUser(thread: Thread, user: User): Rx.Observable<Message> {
        return this.newMessages
            .filter(
                (message: Message) => {
                    return
                        (message.thread.id === thread.id) &&
                        (message.author.id !== user.id);
                }
            );
    }
}