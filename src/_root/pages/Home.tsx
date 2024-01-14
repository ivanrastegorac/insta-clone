import Loader from "@/components/shared/Loader";
import { useGetRecentsPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const {data: posts, isPending: isPostLoading, isError: isErrorPosts} = useGetRecentsPosts;

  return (
  <div className="flex flex-1">
    <div className="home-container">
      <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
      {isPostLoading && !posts ? (<Loader/>) : (<ul className="flex flex-col flex-1 gap-9 w-full">
        {posts?.documents.map((post: Models.Document) => (<li>{post.caption}</li>))}
      </ul>)}
    </div>
    </div>
  );
};

export default Home;
