import MainPage from "./pages/mainPage/MainPage";
import Courses from "./pages/courses/Courses";
import Hired from "./pages/hired/Hired";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/courses", element: <Courses /> },
  { path: "/hired", element: <Hired /> },
];

export default routes;
