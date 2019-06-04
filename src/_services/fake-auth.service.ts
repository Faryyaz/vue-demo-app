export default class FakeAuthService {

    init() {
        let users = [{ id: 1, merchantID: 'admin', password: 'admin'}];
        let realFetch = window.fetch;
        window.fetch = function (url: RequestInfo, opts: RequestInit) {
            return new Promise((resolve, reject) => {
                // wrap in timeout to simulate server api call
                setTimeout(() => {

                    // authenticate
                    if (url === '/users/authenticate' && opts.method === 'POST') {
                        // get parameters from post request
                        let params = JSON.parse(opts.body as any);
    
                        // find if any user matches login credentials
                        let filteredUsers = users.filter(user => {
                            return user.merchantID === params.merchantID && user.password === params.password;
                        });
    
                        if (filteredUsers.length) {
                            // if login details are valid return user details
                            let user = filteredUsers[0];
                            let responseJson = {
                                id: user.id,
                                merchantID: user.merchantID
                            };
                            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) } as any);
                        } else {
                            // else return error
                            reject('merchantID or password is incorrect');
                        }
    
                        return;
                    }
    
                    // get users
                    if (url === ('/users') && opts.method === 'GET') {
                        // check for fake auth token in header and return users if valid, this security 
                        // is implemented server side in a real application
                        if (opts.headers && opts.headers.entries === `Basic ${window.btoa('admin:admin')}`) {
                            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) } as any);
                        } else {
                            // return 401 not authorised if token is null or invalid
                            reject('Unauthorised');
                        }
    
                        return;
                    }
    
                    // pass through any requests not handled above
                    realFetch(url, opts).then(response => resolve(response));
    
                }, 2000);
            });
        }
    }

}