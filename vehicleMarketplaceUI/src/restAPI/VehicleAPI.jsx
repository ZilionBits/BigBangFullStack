import axios from "axios";

export const vehicleApi = {
  authenticate,
};

function authenticate(username, password) {
  return axios.post(
    "http://localhost:8080/auth/authenticate",
    { username, password },
    {
      headers: { "Content-type": "application/json" },
    }
  );
}

// function signup(user) {
//   return axios.post("/auth/signup", user, {
//     headers: { "Content-type": "application/json" },
//   });
// }

// function getAllAds(userToken) {
//   return axios.get("http://localhost:8080/api/v1/books", {
//     headers: {
//       Authorization: `Bearer ${userToken}`,
//     },
//   });
// }

// function addNewBook(data, userToken) {
//   return instance.post(`http://localhost:8080/api/v1/books`, data, {
//     headers: { 
//       Authorization: `Bearer ${userToken}`,
//      },
//   });
// }

// function updateBook(bookId, data, userToken) {
//   return instance.put(`http://localhost:8080/api/v1/books/${bookId}`, data, {
//     headers: { 
//       Authorization: `Bearer ${userToken}`,
//      },
//   });
// }

// function updateBookReservation(bookId, exactBook, userToken) {
//   return instance.put(`http://localhost:8080/api/v1/books/${bookId}`, {
//         title: exactBook.title,
//         author: exactBook.author,
//         category: exactBook.category,
//         price: exactBook.price,
//         cover: exactBook.cover,
//         reserved: !exactBook.reserved,
//       }, {
//     headers: { 
//       Authorization: `Bearer ${userToken}`,
//      },
//   });
// }

// function deleteBook(bookId, userToken){
//   return instance.delete(`http://localhost:8080/api/v1/books/${bookId}`, {
//     headers: {
//       Authorization: `Bearer ${userToken}`,
//     },
//   });
// }

// function numberOfUsers() {
//   return instance.get("/public/numberOfUsers");
// }

// function numberOfOrders() {
//   return instance.get("/public/numberOfOrders");
// }

// function getUsers(user, username) {
//   const url = username ? `/api/users/${username}` : "/api/users";
//   return instance.get(url, {
//     headers: { Authorization: bearerAuth(user) },
//   });
// }

// function deleteUser(user, username) {
//   return instance.delete(`/api/users/${username}`, {
//     headers: { Authorization: bearerAuth(user) },
//   });
// }

// function getOrders(user, text) {
//   const url = text ? `/api/orders?text=${text}` : "/api/orders";
//   return instance.get(url, {
//     headers: { Authorization: bearerAuth(user) },
//   });
// }

// function deleteOrder(user, orderId) {
//   return instance.delete(`/api/orders/${orderId}`, {
//     headers: { Authorization: bearerAuth(user) },
//   });
// }

// function createOrder(user, order) {
//   return instance.post("/api/orders", order, {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: bearerAuth(user),
//     },
//   });
// }

// function getUserMe(user) {
//   return instance.get("/api/users/me", {
//     headers: { Authorization: bearerAuth(user) },
//   });
// }

// -- Helper functions

// function bearerAuth(user) {
//   return `Bearer ${user.accessToken}`;
// }