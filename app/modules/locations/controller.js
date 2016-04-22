class LocationsController {
  constructor($state, LocationsService) {
    this._$state = $state;
    this._LocationsService = LocationsService;

    this._LocationsService
    .isLoggedIn()
    .then((response) => {
      this.user = response;
      console.log(this.user);
    })
    .catch((error) => {
      this._$state.go("login");
    });
  }





}

export default LocationsController;
