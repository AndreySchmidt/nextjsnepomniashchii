"use client";

import useSWR from "swr";
import Link from "next/link";
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
// import { useEffect } from "react";
// import { shallow } from "zustand/shallow";

const Posts = () => {
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  const {data: posts, isLoading} = useSWR('posts', getAllPosts);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
