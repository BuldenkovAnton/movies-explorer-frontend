class Api {

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = (response) => {
    if (response.ok)
        return response.json();
      return Promise.reject(response.status);
  }

  checkMe() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
    .then(response => this._checkResponse(response))
    .then(response => response.data);
  }

  register(name, email, password) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({name, email, password })
    })
    .then(response => this._checkResponse(response))
    .then(response => response.data);
  }

  authorize(email, password) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({email, password})
    })
    .then(response => this._checkResponse(response))
    .then(response => response.data);
  }

  setUserInfo(name, email){
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
    .then((res) => this._checkResponse(res))
    .then(response => response.data);
  }

  logout() {
    return fetch(this._baseUrl + '/signout', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    })
    .then(response => this._checkResponse(response))
    .then(response => response.data);
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res))
    .then(response => response.data);
  }

  saveMovie(movie){
    return fetch(this._baseUrl + '/movies', {
       method: 'POST',
       credentials: 'include',
       headers: this._headers,
       body: JSON.stringify({
         ...movie
       })
     })
     .then((res) => this._checkResponse(res))
     .then(response => response.data);
   }

   deleteMovie(movieId) {
    return fetch(this._baseUrl + '/movies/' + movieId, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        _id: movieId
      })
    })
    .then((res) => this._checkResponse(res))
    .then(response => response.data);
  }
}

const api = new Api({
  baseUrl: 'https://api.diplom.buldenkov.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
