import { createBrowserRouter } from 'react-router';
import App from '../../App';
import HomeOne from '../../pages/home-one/HomeOne';
import HomeTwo from '../../pages/home-two/HomeTwo';
import HomeThree from '../../pages/home-three/HomeThree';
import InnerLayout from '../../pages/inner-layout/InnerLayout';
import About from '../../pages/about/About';
import Service from '../../pages/service/Service';
import Drivers from '../../pages/drivers/Drivers';
import DriverDetails from '../../pages/driver-details/DriverDetails';
import Testimonials from '../../pages/testimonials/Testimonials';
import Pricing from '../../pages/pricing/Pricing';
import Faq from '../../pages/faq/Faq';
import ErrorPage from '../../pages/error/ErrorPage';
import Cars from '../../pages/cars/Cars';
import CarListVOne from '../../pages/car-list-v-one/CarListVOne';
import CarListVTwo from '../../pages/cat-list-v-two/CarListVTwo';
import CarListVThree from '../../pages/car-list-v-three/CarListVThree';
import CarListingSingle from '../../pages/listing-single/CarListingSingle';
import Products from '../../pages/products/Products';
import ProductDetails from '../../pages/product-details/ProductDetails';
import Cart from '../../pages/cart/Cart';
import CheckOut from '../../pages/checkout/CheckOut';
import Wishlist from '../../pages/wishlist/Wishlist';
import SignUp from '../../pages/authentication/SignUp';
import Login from '../../pages/authentication/Login';
import Blog from '../../pages/blog/Blog';
import BlogStandard from '../../pages/blog-standard/BlogStandard';
import BlogLeftSidebar from '../../pages/blog-left-sidebar/BlogLeftSidebar';
import BlogRightSidebar from '../../pages/blog-right-sidebar/BlogRightSidebar';
import BlogDetails from '../../pages/blog-details/BlogDetails';
import Contact from '../../pages/contact/Contact';
import HomeOneSinglePage from '../../pages/index-one-page/HomeOneSinglePage';
import HomeTwoOnePage from '../../pages/index-two-one-page/HomeTwoOnePage';
import HomeThreeOnePage from '../../pages/index-three-one-page/HomeThreeOnePage';

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeOne />
      },
      {
        path: "index-one-page",
        element: <HomeOneSinglePage />
      },
      {
        path: "index-two",
        element: <HomeTwo />
      },
      {
        path: "index-two-one-page",
        element: <HomeTwoOnePage />
      },
      {
        path: "index-three",
        element: <HomeThree />
      },
      {
        path: "index-three-one-page",
        element: <HomeThreeOnePage />
      },
      {
        path: "inner",
        element: <InnerLayout />,
        children: [
          {
            path: "about",
            element: <About />
          },
          {
            path: "services",
            element: <Service />
          },
          {
            path: "drivers",
            element: <Drivers />
          },
          {
            path: "driver-details",
            element: <DriverDetails />
          },
          {
            path: "testimonials",
            element: <Testimonials />
          },
          {
            path: "pricing",
            element: <Pricing />
          },
          {
            path: "faq",
            element: <Faq />
          },
          {
            path: "cars",
            element: <Cars />
          },
          {
            path: "car-list-v-1",
            element: <CarListVOne />
          },
          {
            path: "car-list-v-2",
            element: <CarListVTwo />
          },
          {
            path: "car-list-v-3",
            element: <CarListVThree />
          },
          {
            path: "listing-single",
            element: <CarListingSingle />
          },
          {
            path: "products",
            element: <Products />
          },
          {
            path: "product-details",
            element: <ProductDetails />
          },
          {
            path: "cart",
            element: <Cart />
          },
          {
            path: "checkout",
            element: <CheckOut />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          },
          {
            path: "sign-up",
            element: <SignUp />
          },
          {
            path: "login",
            element: <Login />
          },
          {
            path: "blog",
            element: <Blog />
          },
          {
            path: "blog-standard",
            element: <BlogStandard />
          },
          {
            path: "blog-left-sidebar",
            element: <BlogLeftSidebar />
          },
          {
            path: "blog-right-sidebar",
            element: <BlogRightSidebar />
          },
          {
            path: "blog-details",
            element: <BlogDetails />
          },
          {
            path: "contact",
            element: <Contact />
          }
        ]
      }
    ]
  },
]);

export default ROUTER;