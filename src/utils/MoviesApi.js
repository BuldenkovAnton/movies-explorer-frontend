class MovieApi {

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (response) => {
    if (response.ok)
        return response.json();
      return Promise.reject(response.status);
  }

  getAllMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    })
    .then(response => this._checkResponse(response))
  }

}

const movieApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default movieApi;
