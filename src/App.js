import React from 'react';
import './App.css';
import MenuBar from "./MenuBar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from './FifthSection';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    })
  }


  render() {
    return (
      <div className="App">
        <MenuBar />
        <div className="page-content-wrapper">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
