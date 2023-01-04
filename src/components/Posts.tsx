import { FunctionComponent } from "react";
import useFetch from "../hooks/useFetch";
import Post from "../interfaces/Post";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  let [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  // show posts in table
  return (
    <>
      <h1>Posts</h1>
      {posts.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>userId</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
};

export default Posts;
