import React, { useState } from 'react';
import './App.css';
import Stickbar from './components/Stickbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import BlogPage from './pages/Blog';
import NotFoundPage from './pages/NotFoundPage';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SinglePost from './components/SinglePost';
import Bloglist from './components/Bloglist';
import { Credit } from './pages/Credit';
import ContactMap from './components/ContactMap';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Stickbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Bloglist} />
        <Route path="/post/:postId" component={SinglePost}></Route>
        <Route path="/bloglist" component={BlogPage}></Route>
        <Route path="/Credit" component={Credit}></Route>
        <Route path="/ContactMap" component={ContactMap}></Route>
        <Route path="*" component={NotFoundPage} />
      </Switch>

      {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch> */}
    </Router>
  );
}

export default App;
