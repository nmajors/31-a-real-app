class LocationsService  {
   constructor($q, $firebaseAuth, $firebaseArray) {
    this._$q = $q;
    this._$firebaseArray = $firebaseArray;

    /* STEP 1 - ADD YOUR URL HERE */
    this.ref = new Firebase("https://nms-profile.firebaseio.com/");
    // this.locations = $firebaseArray(this.ref);
  }

  getLocation(user) {
    this.locations = this._$firebaseArray(this.ref.child('users').child(user.uid).child('locations'));
    return this.locations;
  }

  new() {
    return {
      address: "",
      city: "",
      state:""
      }
    }

  createLocation(location){
    this.locations.$add(location);
  }
}
export default LocationsService;
