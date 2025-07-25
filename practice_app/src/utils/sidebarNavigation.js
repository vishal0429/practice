import { routers } from "../router/Router";

const sidebarNavigation = Object.values(routers.privateRoutes)
  .filter((x) => x.sidebar.show)
  .map((item, index) => ({
    id: index + 1,
    path: item.path,
    pageName: item.pageName,
  }));


  export default sidebarNavigation;