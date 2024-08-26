import { store } from "../store/store";

class AppServer {
  constructor() {
    this.baseUrl = "https://movie-match-backend.onrender.com";
    this.baseImageUrl = "https://image.tmdb.org/t/p/w500";
    this.store = store.getState();
  }

  async registerUser(user) {
    const response = await fetch(`${this.baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.getUid(),
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }

  async getMovies(page = 1) {
    const response = await fetch(
      `${this.baseUrl}/swipe/movies/next?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...this.getUid(),
        },
      }
    );
    const data = await response.json();
    return data;
  }

  async like(id) {
    const response = await fetch(`${this.baseUrl}/swipe/like`, {
      method: "POST",
      body: JSON.stringify({
        likedBy: this.store.pairingKey.value.currentUser,
        otherUser: this.store.pairingKey.value.otherUser,
        itemId: id,
      }),
      headers: {
        "Content-Type": "application/json",
        ...this.getUid(),
      },
    });
    const data = await response.json();
    return data;
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...this.getUid(),
      },
    });
    const data = await response.json();
    return data;
  }

  getUid() {
    return {
      uid: this.store.loggedIn.value.uid,
    };
  }
}

export default AppServer;
