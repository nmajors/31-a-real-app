class UserService {
  constructor($q, $firebaseAuth) {
    this._$q = $q;

    /* STEP 1 - ADD YOUR URL HERE */
    this.ref = new Firebase("https://nms-profile.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
  }

  isLoggedIn() {
    return this.auth.$requireAuth();
  }

  /* STEP 2 - There's a promise below. Inside of it,
    use $authWithPassword (FIREBASE DOCS!) to attempt
    to login the provided user. That returns a promise.
    If that promise succeeds, set this.user to its response,
    and resolve this.user. If it fails, catch the error, and
    reject with the error.
  */
//   authObj.$authWithPassword({
//   email: "my@email.com",
//   password: "mypassword"
// }).then(function(authData) {
//   console.log("Logged in as:", authData.uid);
// }).catch(function(error) {
//   console.error("Authentication failed:", error);
// });
  login(user) {
    return new this._$q((resolve, reject) => {
      this.auth.$authWithPassword(user)
      .then((response) => {
        this.user = response;
        resolve(this.user);
      })
      .catch((error) => {
        console.error("Error " + error);
        reject(error);
      });
    });
  }

  /* STEP 3 - Unauthorize the user. Firebase API docs! */
  logout() {
    return this.auth.$unauth();
  }

  /* STEP 4 - Return an object representing a "new" user with
    a blanK email and password */
  new() {
    return {
      email: "",
      password: ""
      }
    }

  /* STEP 5 - Below is a promise. Inside of it, use $createUser
    (FIREBASE DOCS!) to create the user with the information
    we've been provided. Respond to the promise, and call
    $authWithPassword on the user's information to log them in.
    Return this new promise, and respond to it with another .then.
    Store the response from this as this.user, then resolve this.user.
    If it fails for any reason, catch the error and reject with the
    error as the message. This is almost line for line done in the
    Firebase documentation for $createUser.
  */
  create(user) {
    return new this._$q((resolve, reject) => {
      console.log("creating");
      this.auth.$createUser(user)
      .then((response) => {
        console.log("in response 1");
        return this.auth.$authWithPassword(user);
      })
      .then((response) => {
        console.log("in response 2");
        this.user = response;
        resolve(this.user);
        console.log(this.user);
      })
      .catch((error) => {
        console.error("Error " + error);
        reject(error);
      });
    })
  }
}
//   $scope.authObj.$createUser({
//     email: "my@email.com",
//     password: "mypassword"
//   }).then(function(userData) {
//     console.log("User " + userData.uid + " created successfully!");
//
//     return $scope.authObj.$authWithPassword({
//       email: "my@email.com",
//       password: "mypassword"
//     });
//   }).then(function(authData) {
//     console.log("Logged in as:", authData.uid);
//   }).catch(function(error) {
//     console.error("Error: ", error);
//   });
// }

export default UserService;
