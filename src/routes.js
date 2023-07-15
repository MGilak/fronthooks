import MainPage from "./pages/mainPage/MainPage";
import Courses from "./pages/courses/Courses";
import Hired from "./pages/hired/Hired";
import Profile from "./pages/profile/Profile";
import Payments from "./pages/payments/Payments";
import MyCourses from "./pages/myCourses/MyCourses";
import Cart from "./pages/cart/Cart";
import Course from "./pages/course/Course";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/courses", element: <Courses /> },
  { path: "/hired", element: <Hired /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/payments", element: <Payments /> },
  { path: "/profile/courses", element: <MyCourses /> },
  { path: "/cart", element: <Cart /> },
  { path: "/courses/:id", element: <Course /> },
];

export default routes;
