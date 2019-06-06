import { AuthHeaderService } from './auth-header.service';


export default class UserService {
    authHeaderService: any;

    constructor() {
      this.authHeaderService = new AuthHeaderService();
    }

    login(merchantID: string, password: string) {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ merchantID, password })
        };
      
        return fetch(`/users/authenticate`, requestOptions)
          .then(this.handleResponse)
          .then(user => {
            // login successful if there's a user in the response
            if (user) {
              // store user details and basic auth credentials in local storage
              // to keep user logged in between page refreshes
              user.authdata = window.btoa(merchantID + ":" + password);
              localStorage.setItem("user", JSON.stringify(user));
            }
      
            return user;
          });
      }
      
      logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("user");
      }
      
      getAll() {
        const requestOptions: RequestInit = {
          method: "GET",
          headers: this.authHeaderService.init()
        };
      
        return fetch(`/users`, requestOptions).then(this.handleResponse);
      }
      
      handleResponse(response: Response) {
        return response.text().then( (text: any) => {
          const data = text && JSON.parse(text);
          if (!response.ok) {
            if (response.status === 401) {
              // auto logout if 401 response returned from api
              this.logout();
              window.location.reload(true);
            }
      
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
      
          return data;
        });
      }


}