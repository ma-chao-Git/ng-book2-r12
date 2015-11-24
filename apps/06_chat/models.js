/// <reference path="typings/ng2.d.ts" />
var User = (function () {
    function User(name, avatarSrc) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.id = uuid();
    }
    return User;
})();
exports.User = User;
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
})();
exports.Thread = Thread;
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || uuid();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
})();
exports.Message = Message;
//# sourceMappingURL=models.js.map