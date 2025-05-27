import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bank from "./pages/use-reducer/bank";
import Home from "./pages/home";
import AttendanceRegister from "./pages/use-reducer/attendance-register";
import HardCalculation from "./pages/use-memo/hard-calculation";
import ObjectMemo from "./pages/use-memo/object-memo";
import SomeFunction from "./pages/use-callback/some-function";
import BoxStyle from "./pages/use-callback/box-style";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/use-reducer",
    element: <Bank />,
  },
  {
    path: "/use-reducer-2",
    element: <AttendanceRegister />,
  },
  {
    path: "/hard-calculation",
    element: <HardCalculation />,
  },
  {
    path: "/object-memo",
    element: <ObjectMemo />,
  },
  {
    path: "/some-function",
    element: <SomeFunction />,
  },
  {
    path: "/box-style",
    element: <BoxStyle />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
