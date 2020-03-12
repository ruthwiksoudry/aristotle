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
import { isInterSectionObserverSupported } from "./RouteFunction";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isFooterVisible: false
    }
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
    })
    this.logoObserver()
  }

  logoObserver = () => {
    const isobserverSupport = isInterSectionObserverSupported();
    if (!isobserverSupport) {
      return;
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };
    let target;
    target = document.getElementById("footer-contanier");

    if (!target) {
      this.setState({ logoIsVisble: true });
      return;
    }
    const observer = new IntersectionObserver((entries, observers) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setState({ isFooterVisible: true })
        } else {
          this.setState({ isFooterVisible: false })
        }
      }, options);
    });
    observer.observe(target);
  };


  render() {
    return (
      <div className="App">
        <MenuBar />
        <div className="page-content-wrapper container">
          <div className="row">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <Footer />
            {!this.state.isFooterVisible && <div className="bottom-div" />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
