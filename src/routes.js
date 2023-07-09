import MainPage from "./pages/mainPage/MainPage";
import Courses from "./pages/courses/Courses";

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/courses", element: <Courses /> },
];

export default routes;
