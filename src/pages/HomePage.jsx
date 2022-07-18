import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [posts, setPosts] = useState([]);
  let post_limit = 10;
  let post_skip = 0;
  // const skip_amount = 5;
  
  const BASE_URL = "https://mandarin.api.weniv.co.kr";
  const REQ_PATH = `/post/feed/?limit=${post_limit}&skip=${post_skip}`;
  const TOKEN = window.localStorage.getItem("token");

  useEffect(() => {
    async function getPostDatas() {
      try {
        const response = fetch(BASE_URL + REQ_PATH, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-type": "application/json",
          },
        });
        const result = await response.json();
        setPosts(result);
        console.dir(posts);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPostDatas();
  }, []);


  return (
    <div>
      어쩌구...
    </div>
  )
}

export default HomePage
