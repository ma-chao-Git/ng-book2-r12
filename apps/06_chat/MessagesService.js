var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var initialMessages = [];
var MessagesService = (function () {
    function MessagesService() {
        // a stream that publishes new messages only once
        this.newMessages = new Rx.Subject();
        // receives operations to be applied to messages stream
        // a way to perform changes on all messages, currently stored in messages
        this.updates = new Rx.Subject();
        // action streams
        this.create = new Rx.Subject();
        this.markThreadAsRead = new Rx.Subject();
        this.messages = this.updates
            .scan(initialMessages, function (messages, operation) {
            return operation(messages);
        })
            .shareReplay(1);
        this.create
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
        this.newMessages
            .subscribe(this.create);
        this.markThreadAsRead
            .map(function (thread) {
            return function (messages) {
                return messages.map(function (message) {
                    if (message.thread.id === thread.id) {
                        message.isRead = true;
                    }
                });
            };
        })
            .subscribe(this.updates);
    }
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.onNext(message);
    };
    MessagesService.prototype.messagesForThreadUser = function (thread, user) {
        return this.newMessages
            .filter(function (message) {
            return;
            (message.thread.id === thread.id) &&
                (message.author.id !== user.id);
        });
    };
    MessagesService = __decorate([
        Injectable()
    ], MessagesService);
    return MessagesService;
})();
exports.MessagesService = MessagesService;
//# sourceMappingURL=MessagesService.js.map