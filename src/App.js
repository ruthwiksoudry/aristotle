import React, { useEffect, useState } from 'react';
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

function App(props) {

  const [isFirstSec, setIsFirstSec] = useState(false);
  const [isSecondSec, setIsSecondSec] = useState(false);
  const [isThirdSec, setIsThirdSec] = useState(false);
  const [isFourthSec, setIsFourthSec] = useState(false);
  const [isFifthSec, setIsFifthSec] = useState(false);
  const [isFooter, setIsFooter] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    if (isInterSectionObserverSupported) {
      firstSectionObserver()
      secondSectionObserver()
      thirdSectionObserver()
      fourthSectionObserver()
      fifthSectionObserver()
      footerSectionObserver()
    }
  }, [])

  const firstSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("first-section-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsFirstSec(true)
        } else {
          setIsFirstSec(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }

  const secondSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("second-section-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsSecondSec(true)
        } else {
          setIsSecondSec(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }

  const thirdSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("third-section-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsThirdSec(true)
        } else {
          setIsThirdSec(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }

  const fourthSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("fourth-section-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsFourthSec(true)
        } else {
          setIsFourthSec(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }

  const fifthSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("fifth-section-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsFifthSec(true)
        } else {
          setIsFifthSec(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }

  const footerSectionObserver = () => {
    let targetOne;
    targetOne = document.getElementById("footer-container");
    if (!targetOne) {
      return;
    }

    const observerTwo = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsFooter(true)
        } else {
          setIsFooter(false)
        }
      },
      {
        threshold: 0.1
      }
    );
    observerTwo.observe(targetOne);
  }



  return (
    <div className="App">
      <MenuBar />
      <div className="page-content-wrapper container">
        <div className="row">
          <FirstSection isFirstSec={isFirstSec} isSecondSec={isSecondSec} />
          <SecondSection isFirstSec={isFirstSec} isSecondSec={isSecondSec} isThirdSec={isThirdSec} />
          <ThirdSection isSecondSec={isSecondSec} isThirdSec={isThirdSec} isFourthSec={isFourthSec} />
          <FourthSection isThirdSec={isThirdSec} isFourthSec={isFourthSec} isFifthSec={isFifthSec} />
          <FifthSection isFourthSec={isFourthSec} isFifthSec={isFifthSec} isFooter={isFooter} />
          <Footer isFifthSec={isFifthSec} isFooter={isFooter} />
          <div className="bottom-div container" />
        </div>
      </div>
    </div>
  );
}

export default App;
