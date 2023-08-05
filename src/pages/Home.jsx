import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsFillEnvelopeFill,
  BsArrowDown,
  BsArrowUp,
} from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import {
  mainAboutImg,
  aboutImg2,
  delivery,
  ontime,
  payments,
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  icon7,
  icon8,
  icon9,
} from '../assets';
import call from '../assets/icons/call.svg';
import location from '../assets/icons/location.svg';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const hero = useRef(null);
  const about = useRef(null);
  const services = useRef(null);

  const handleScroll = (section) => {
    const targetElement = section;
    targetElement.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main aria-label="homepage" className="relative overflow-x-clip font-lato">
      <aside
        className={` ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full  '
        } h-full bg-lightAsh  tablet:hidden fixed w-full z-50 flex flex-col transition ease-in-out duration-300 delay-150 p-5`}>
        <button
          className="mr-5 sm:mr-1 mt-6 self-end"
          onClick={() => setShowSidebar(false)}>
          <GrClose className="w-7 h-7" />
        </button>
        <ul className="space-y-6 text-center flex flex-col items-center justify-center p-8">
          <li
            className="border-b pb-2 hover:border-black"
            onClick={() => {
              handleScroll(hero);
              setShowSidebar(false);
            }}>
            Home
          </li>
          <li
            className="border-b pb-2 hover:border-black"
            onClick={() => {
              handleScroll(about);
              setShowSidebar(false);
            }}>
            About
          </li>
          <li
            className="border-b pb-2 hover:border-black"
            onClick={() => {
              handleScroll(services);
              setShowSidebar(false);
            }}>
            Services
          </li>
          <Link to="/login">
            <li
              className="hover:text-hover"
              onClick={() => setShowSidebar(false)}>
              Login
            </li>
          </Link>
          <Link to="/signup">
            <li
              className="bg-primary py-3 px-8 laptop:py-5 laptop:px-14 text-white  rounded-full hover:bg-hover"
              onClick={() => setShowSidebar(false)}>
              Signup
            </li>
          </Link>
        </ul>
      </aside>
      <nav
        className={`${
          window.scrollY < 300
            ? 'bg-white '
            : window.scrollY > 60
            ? 'bg-primary '
            : null
        }  w-full sticky transition-all duration-150 ease-in-out  top-0 z-40 px-5 tablet:px-11 flex justify-between  h-14 tablet:h-20 laptop:h-24 desktop:h-28 items-center`}>
        <h1
          className={` ${
            window.scrollY < 300
              ? 'text-primary '
              : window.scrollY > 60
              ? 'text-white '
              : null
          }  text-5xl font-extrabold  font-play`}>
          AD
        </h1>
        <button
          className="block tablet:hidden"
          onClick={() => setShowSidebar(true)}>
          <GoThreeBars className="w-7 h-7" />
        </button>
        <ul
          className={` ${
            window.scrollY < 300
              ? 'text-black '
              : window.scrollY > 60
              ? 'text-white '
              : null
          }  items-center space-x-6 laptop:space-x-10 text-lg laptop:text-xl desktop:text-2xl hidden tablet:flex`}>
          <li
            className=" py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(hero)}>
            Home
          </li>
          <li
            className=" py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(about)}>
            About
          </li>
          <li
            className=" py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(services)}>
            Services
          </li>
          <Link to="/login">
            <li
              className={`  ${
                window.scrollY < 300
                  ? 'hover:text-hover'
                  : window.scrollY > 60
                  ? 'hover:text-black'
                  : null
              }  `}>
              Login
            </li>
          </Link>
          <Link to="/signup">
            <li
              className={`  ${
                window.scrollY < 300
                  ? 'bg-primary text-white  '
                  : window.scrollY > 60
                  ? 'bg-white text-black hover:text-white '
                  : null
              }  py-3 px-8 tablet:py-1 tablet:px-5 laptop:py-3 laptop:px-8 desktop:py-5 desktop:px-14  rounded-full hover:bg-hover`}>
              Signup
            </li>
          </Link>
        </ul>
      </nav>
      <section>
        <div
          ref={hero}
          id="hero"
          className="bg-hero-bg h-screen bg-no-repeat bg-center bg-cover text-white flex flex-col justify-evenly items-center px-5 tablet:px-11 pt-10 tablet:pt-10 pb-11 space-y-2">
          <div className="flex flex-col justify-between items-center ">
            <h1 className="text-6xl  laptop:text-8xl desktop:text-9xl  font-extrabold font-play text-center w-full tablet:w-11/12">
              The water source you trust the most and rely on.
            </h1>
            <h3 className=" w-full tablet:w-9/12 laptop:w-[37rem] desktop:w-[47rem] text-center mt-2 mb-8 text-sm tablet:text-2xl laptop:text-2xl desktop:text-4xl">
              Water is the softest thing, yet it can penetrate mountains and
              earth. This shows clearly the principle of softness overcoming
              hardness.
            </h3>
            <Link to="/login">
              <button className="bg-primary py-3 px-8 tablet:py-1 tablet:px-5 laptop:py-3 laptop:px-8 desktop:py-5 desktop:px-14 text-white  rounded-full hover:bg-hover">
                Order Now
              </button>
            </Link>
          </div>
          <p className="flex items-center text-lg">
            Scroll down <BsArrowDown className="w-6 h-6 ml-2" />
          </p>
        </div>
        <div
          ref={about}
          id="about"
          className="flex justify-center items-center flex-col">
          <h4 className="font-play text-5xl  tablet:text-6xl font-bold text-primary mt-6  laptop:mt-10">
            About Us
          </h4>
          <div className=" p-5 tablet:p-11 bg-white flex flex-col laptop:flex-row justify-between items-center">
            <div className="image-div relative mt-2 tablet:mt-6 self-center laptop:mt-0">
              <img
                src={mainAboutImg}
                alt="about us"
                className="w-auto sm:w-[80%] tablet:w-auto laptop:w-4/5 destop:w-auto"
              />
              <img
                src={aboutImg2}
                alt="about AD"
                className="absolute hidden tablet:block top-24 tablet:top-36 laptop:top-24  left-56 tablet:left-80 laptop:left-60  h-44 tablet:h-auto laptop:h-52 desktop:h-auto rounded-l-2xl"
              />
            </div>
            <div className="text-div w-full laptop:w-1/2 flex flex-col">
              <div className="flex flex-col justify-evenly items-center text-justify text-base space-y-2 tablet:space-y-4 tablet:text-2xl h-60 mt-8">
                <p>
                  Here at Aguadash we give our customers the best services they
                  need, which makes us a reliable company to work with.
                </p>
                <p>
                  About 60% of the human body is made up of water, and it plays
                  a vital role in various bodily functions such as digestion,
                  absorption, and transportation of nutrients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={services}
          id="services"
          className="bg-lightAsh p-5 tablet:p-11 flex flex-col justify-center items-center">
          <h4 className="font-play text-5xl font-bold text-primary">
            Services
          </h4>
          <div className=" grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3  gap-4 tablet:gap-8 laptop:gap-12 desktop:gap-14">
            <div className="card flex flex-col justify-center items-center relative bg-white  tablet:w-[21rem]  px-5 tablet:px-10  pt-16 pb-6 mt-20 rounded-3xl">
              <img
                src={delivery}
                alt="worldwide delivery"
                className="bg-skyBlue rounded-full border-8  border-white absolute  -top-12 w-24 h-24 "
              />
              <h4 className="font-play font-bold text-xl tablet:text-2xl">
                Worldwide Delivery
              </h4>
              <h6 className="text-center text-sm tablet:text-lg mt-4  mb-6 tablet:mb-12">
                We offer fast and reliable delivery services to customers' homes
                and offices. You can place an order online or over the phone,
                and we will promptly deliver the desired quantity of water.
              </h6>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-hover tablet:w-[21rem]  px-5 tablet:px-10 pt-16 pb-6 mt-20 rounded-3xl text-white">
              <img
                src={payments}
                alt="payments"
                className="bg-skyBlue rounded-full border-8  border-white absolute   -top-12 w-24 h-24 "
              />
              <h4 className="font-play font-bold text-xl tablet:text-2xl">
                Seamless payment
              </h4>
              <h6 className="text-center  text-sm tablet:text-lg mt-4  mb-6 tablet:mb-12">
                We offer a seamless payment system that allows customers to pay
                for their water deliveries quickly and easily. You can choose to
                pay online using your preferred payment methods.
              </h6>
            </div>
            <div className="card col-start-auto col-end-auto mx-0   tablet:col-start-1  tablet:col-end-3 tablet:mx-auto desktop:col-start-auto desktop:col-end-auto desktop:mx-0 flex flex-col justify-center items-center relative bg-white tablet:w-[21rem] px-5 tablet:px-10  pt-16 pb-6 mt-20 rounded-3xl">
              <img
                src={ontime}
                alt="ontime"
                className="bg-skyBlue rounded-full border-8  border-white absolute   -top-12 w-24 h-24  "
              />
              <h4 className="font-play font-bold text-xl tablet:text-2xl">
                On-time delivery
              </h4>
              <h6 className="text-center  text-sm tablet:text-lg mt-4 mb-6 tablet:mb-12">
                We take pride in delivering water to you on time, every time. In
                the event of unexpected delays or changes, we will inform
                customers promptly.
              </h6>
            </div>
          </div>
        </div>
        <div className="bg-primary  p-5 tablet:p-11 flex flex-col justify-center items-center">
          <h4 className="font-play text-[40px] font-bold text-white">
            How it works
          </h4>
          <div className=" grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3  desktop:grid-cols-4 gap-6 tablet:gap-8 laptop:gap-12 desktop:gap-14 mt-6 laptop:mt-16">
            <div className="card flex flex-col justify-between items-center relative bg-white py-2 px-2  rounded-3xl ">
              <img
                src={stepOne}
                alt="step one"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 1.</h4>
                <p className="font-semibold text-center w-64">
                  User signs up with email and password.
                </p>
              </div>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white py-2 px-0  rounded-3xl ">
              <img
                src={stepTwo}
                alt="step 2"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 2.</h4>
                <p className="font-semibold text-center w-72">
                  Fill out order form.
                </p>
              </div>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white py-2 px-0  rounded-3xl ">
              <img
                src={stepThree}
                alt="step 3"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 3.</h4>
                <p className="font-semibold text-center  w-72">
                  Make payment via card or transfer.
                </p>
              </div>
            </div>
            <div className="card col-start-auto laptop:col-start-2 desktop:col-start-auto flex flex-col justify-center items-center relative bg-white py-2 px-0  rounded-3xl ">
              <img
                src={stepFour}
                alt="step4"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 4.</h4>
                <p className="font-semibold text-center  w-72">
                  Recieve your order promptly
                </p>
              </div>
            </div>
          </div>
          <Link to="/login">
            <button className="bg-white py-5 px-14 text-black mb-9 mt-6 laptop:mt-16 rounded-full hover:bg-lightAsh  font-semibold">
              Order Now
            </button>
          </Link>
        </div>
      </section>
      <footer
        id="footer"
        className="bg-black text-white  px-5 tablet:px-11  flex flex-col items-center laptop:items-start laptop:flex-row justify-between  pb-14">
        <div className="company flex flex-col items-center laptop:items-start w-96 space-y-5 mt-9 ">
          <h4 className="font-play text-3xl tablet:text-6xl font-bold">
            AGUADASH
          </h4>
          <div className="space-y-2 tablet:space-y-4 flex flex-col items-center laptop:items-start">
            <h5 className="w-[80%] tablet:w-auto">
              Here at Aguadash we give our customers the best services they
              need, which makes us a reliable company to work with.
            </h5>
            <div className="flex space-x-2 items-center justify-start">
              <img src={icon9} alt="" />
              <img src={icon8} alt="" />
              <img src={icon7} alt="" />
            </div>
          </div>
        </div>
        <div className="links space-y-5 mt-9 ml-0 laptop:mt-14 flex flex-col items-center laptop:items-start ">
          <h6 className="text-3xl font-play font-bold">Links</h6>
          <ul className="text-xl text-center laptop:text-start">
            <li
              className=" hover:cursor-pointer"
              onClick={() => handleScroll(hero)}>
              Home
            </li>
            <li
              className=" hover:cursor-pointer"
              onClick={() => handleScroll(about)}>
              About
            </li>
            <li
              className=" hover:cursor-pointer"
              onClick={() => handleScroll(services)}>
              Serivces
            </li>
          </ul>
        </div>
        <div className="contactUs space-y-5  mt-9 ml-0 laptop:mt-14   flex flex-col items-center laptop:items-start">
          <h6 className="text-3xl font-play font-bold">Contact Us</h6>
          <div className="flex flex-col items-center laptop:items-start space-y-2">
            <h1 className="flex justify-center items-center">
              <img src={location} alt="" className="w-6 h-6" />
              <span className="ml-2">Lagos, Nigeria</span>
            </h1>
            <h1 className="flex justify-center items-center ">
              <img src={call} alt="" className="w-6 h-6" />
              <span className="ml-2">+(234) 903 3223 232</span>
            </h1>
          </div>
        </div>
      </footer>
      <div className="bg-lightAsh px-5 tablet:px-11 py-4 flex justify-center items-center text-xs sm:text-auto">
        <h6>© Copyright 2023 All Rights Reserved AguaDash</h6>
      </div>
      {show && (
        <button
          onClick={() => handleScroll(hero)}
          className=" bg-primary border border-transparent hover:border-white rounded-full p-4 fixed z-40 bottom-14 right-14 sm:right-10 laptop:right-14 hover:bg-hover hover:text-white">
          <BsArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
};

export default Home;
