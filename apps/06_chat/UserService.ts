@Injectable()
export class UserService {
    currentUser: Rx.Subject<User> = new Rx.BehaviourSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.onNext(newUser);
    }
}