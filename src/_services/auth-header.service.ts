export class AuthHeaderService {
    user: any;

    public init() {
        // return authorization header with basic auth credentials
        this.user = JSON.parse(localStorage.getItem('user') || '{}');

        if (this.user && this.user.authdata) {
            return [{ 'Authorization': 'Basic ' + this.user.authdata }];
        } else {
            return {};
        }
    }

}