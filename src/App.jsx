// src/App.jsx
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="main">
      {/* RouterProvider 会让下面的 AnimatedOutlet（含 NavigationBar、BottomBar、Outlet）共享同一个路由上下文 */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
