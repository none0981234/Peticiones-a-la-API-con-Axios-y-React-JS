import { GetPost} from "./components/GetPost/GetPost";
import { CreatePost } from "./components/CreatePost/CreatePost";
import { UpdatePost } from "./components/UpdatePost/UpdatePost";
import { DeletePost } from "./components/DeletePost/DeletePost";
import { useState } from 'react';


type Action = "get" | "post" | "put" | "delete"

const App = () => {

  const [action, setAction] = useState<Action>("get")

  const showActionComponent = () => {
    switch (action) {
      case "get": return <GetPost />
      case "delete": return <DeletePost />
      case "put": return <UpdatePost />
      case "post": return <CreatePost />
    }
  }

  return (
    <div>
      <div className="grid-btn">
        <button onClick={() => setAction("get")}>Get</button>
        <button onClick={() => setAction("post")}>Post</button>
        <button onClick={() => setAction("delete")}>Delete</button>
        <button onClick={() => setAction("put")}>Update</button>
      </div>

      {showActionComponent()}
    </div>
  )
}
export default App;
