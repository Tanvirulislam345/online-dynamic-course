import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllCourse from './components/AllCourse/AllCourse';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import TopCourses from './components/TopCourses/TopCourses';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <TopCourses></TopCourses>
          </Route>
          <Route path="/home">
            <Banner></Banner>
            <TopCourses></TopCourses>
          </Route>
          <Route path="/topCourses">
            <TopCourses></TopCourses>
          </Route>
          <Route path="/allCourse">
            <AllCourse></AllCourse>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/contact">
            <About></About>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
