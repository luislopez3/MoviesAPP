import React, { useState, useEffect } from "react";
import "./App.css";
import Cars from './Cars';

const postUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState();
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(usersUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUsers(data);
    })
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMovies(data);
    })
  }, []);

  const getPosts = (id) => {
    fetch(`${postUrl}${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUserId(id);
      setPosts(data);
    })
  }

  return (
    <>
    {users.map((user) => {
      return (
        <ul>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.address.city}</li>
          <button onClick={() => getPosts(user.id)}>Show User's Post</button>
          {userId === user.id ? posts.map((post) => {
            return post.title;
          }) : null}
        </ul>
      )
    })}
    {movies.map((movie) => {
      return <div>
        {movie.title}
      </div>
    })}
    <Cars />
    </>
  )

}

export default App;
