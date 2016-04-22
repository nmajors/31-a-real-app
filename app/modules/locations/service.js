class LocationsService  {
   constructor($q, $firebaseAuth) {
    this._$q = $q;

    /* STEP 1 - ADD YOUR URL HERE */
    this.ref = new Firebase("https://nms-profile.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
  }

  isLoggedIn() {
    return this.auth.$requireAuth();
  }
}

export default LocationsService;
