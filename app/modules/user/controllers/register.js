class RegisterController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;
    this.newUser = this._UserService.new();

    /* STEP 1 - Create a variable newUser and set it to
      our empty user object from the UserService */
  }

  /* STEP 2 - Call create on UserService and pass in your
    newUser variable. This returns a promise. In your
    .then, use $state.go to send them to the profile page
  */

  register() {
    this._UserService.create(this.newUser)
      .then((response) =>{
        console.log(response);
        this._$state.go('profile');
      })
  }
}

export default RegisterController;
