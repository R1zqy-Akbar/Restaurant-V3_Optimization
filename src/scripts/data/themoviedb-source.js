import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  // fetch for list of restaurant
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // fetch for detail of restaurant
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheMovieDbSource;
