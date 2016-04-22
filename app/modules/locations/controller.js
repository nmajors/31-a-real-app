class LocationsController {
  constructor($state, UserService, LocationsService, $firebaseArray) {
    this._$state = $state;
    this._LocationsService = LocationsService;
    this._UserService = UserService;
    this.newLocation = this._LocationsService.new();
    // this.locations = this._LocationsService.getLocation()
    // this.locations = [];
    // this.locations = $firebaseArray(this.ref);
    // this.items = [];

    // this.user ={};

    this._UserService
    .isLoggedIn()
    .then((response) => {
      this.user = response;
      this.locations = this._LocationsService.getLocation(this.user);
    })
    .catch((error) => {
      this._$state.go("login");
    });
  }

  addLocation() {
    this._LocationsService.createLocation(this.newLocation);
  }



}

export default LocationsController;
