import React from "react";

// normal function to fetch data from an API

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return posts;
// };

// Try catch block for error handling

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return await res.json();
//   } catch (err) {
//     throw new Error("Failed to fetch posts");
//   }
// };

// Using NextJS 13 cache function to cache the data for 60 seconds

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");\
//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }
//   return await res.json();
// };

// Parallel data fetching using Promise.all to fetch posts and users data simultaneously

const getPosts = async () => {
  const [postsRes, usersRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);
  if (!postsRes.ok || !usersRes.ok) {
    throw new Error("Failed to fetch posts or users");
  }
  const posts = await postsRes.json();
  const users = await usersRes.json();
  return { posts, users };
};

const PostsPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  // const posts = await getPosts();
  // console.log(posts);

  const { posts, users } = await getPosts(); // Destructuring the posts and users data from the getPosts function

  return (
    <div>
      <div className="container mx-auto px-4">
        <h1>Total post: {posts.length}</h1>
        <h1>Total users: {users.length}</h1>
      </div>
    </div>
  );
};

export default PostsPage;
