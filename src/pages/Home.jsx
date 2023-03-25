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
} from '../assets';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const hero = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const top = useRef(null);

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
    <main className="relative">
      <aside
        className={` ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full  '
        } h-full bg-lightAsh  md:hidden fixed w-full z-50 flex flex-col transition ease-in-out duration-300 delay-150 p-5`}>
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
              className="bg-primary py-3 px-8 lg:py-5 lg:px-14 text-white  rounded-full hover:bg-hover"
              onClick={() => setShowSidebar(false)}>
              Signup
            </li>
          </Link>
        </ul>
      </aside>

      <div
        ref={top}
        className="bg-black  px-5 md:px-11 py-2 text-white flex justify-between  h-[29px] md:h-[49px] ">
        <div className="flex w-[451px]">
          <h1 className="flex justify-center items-center">
            <BsFillEnvelopeFill className="w-6 h-6" />{' '}
            <span className="ml-2 hidden md:inline">ad@gmail.com</span>
          </h1>
          <h1 className="flex justify-center items-center ml-[15px] md:ml-[32px]">
            <FiPhone className="w-6 h-6" />{' '}
            <span className="ml-2 hidden md:inline">+(234) 903 3223 232</span>
          </h1>
        </div>
        <div className="flex space-x-2 items-center w-[170px] justify-end">
          <BsFacebook className="w-6 h-6 hover:cursor-pointer" />{' '}
          <BsLinkedin className="w-6 h-6 hover:cursor-pointer" />{' '}
          <BsTwitter className="w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>
      <nav className=" px-5 md:px-11 flex justify-between bg-white  h-14 md:h-28 items-center">
        <h1 className="text-5xl font-extrabold text-primary font-play">AD</h1>
        <button
          className="block md:hidden"
          onClick={() => setShowSidebar(true)}>
          <GoThreeBars className="w-7 h-7" />
        </button>
        <ul className=" items-center space-x-6 lg:space-x-10 text-xl lg:text-2xl hidden md:flex">
          <li
            className="hover:text-hover py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(hero)}>
            Home
          </li>
          <li
            className="hover:text-hover py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(about)}>
            About
          </li>
          <li
            className="hover:text-hover py-6 hover:border-b hover:border-b-black hover:cursor-pointer"
            onClick={() => handleScroll(services)}>
            Serivces
          </li>
          <Link to="/login">
            <li className="hover:text-hover ">Login</li>
          </Link>
          <Link to="/signup">
            <li className="bg-primary py-3 px-12 lg:py-5 lg:px-14 text-white  rounded-full hover:bg-hover">
              Signup
            </li>
          </Link>
        </ul>
      </nav>
      <section>
        <div
          ref={hero}
          id="hero"
          className="bg-hero-bg h-screen bg-no-repeat bg-center bg-cover text-white flex flex-col justify-between items-center px-5 md:px-11 pt-4 md:pt-10 pb-11">
          <div className="flex flex-col justify-between items-center ">
            <h1 className="text-5xl  md:text-7xl lg:text-8xl font-extrabold font-play text-center w-[90%]">
              The water source you trust the most and rely on.
            </h1>
            <h3 className=" w-[100%] lg:w-[753px] text-center mt-2 mb-8 text-base md:text-2xl lg:text-4xl">
              Water is the softest thing, yet it can penetrate mountains and
              earth. This shows clearly the principle of softness overcoming
              hardness.
            </h3>
            <Link to="/login">
              <button className="bg-primary py-5 px-14 text-white  rounded-full hover:bg-hover">
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
          <h4 className="font-play text-5xl sm:text-[49px] md:text-[62px] font-bold text-primary  mt-[40px]">
            About Us
          </h4>
          <div className=" p-5 md:p-11 bg-white flex flex-col lg:flex-row justify-between items-center">
            <div className="image-div relative mt-[40px] md:mt-6 self-center lg:mt-0">
              <img
                src={mainAboutImg}
                alt="about us"
                className="w-auto sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto"
              />
              <img
                src={aboutImg2}
                alt="about AD"
                className="absolute hidden sm:block top-24 md:top-36 lg:top-24 xl:top-36 left-56 md:left-80 lg:left-60 xl:left-80 h-44 md:h-auto lg:h-52 xl:h-auto rounded-l-2xl"
              />
            </div>
            <div className="text-div w-[90%] lg:w-1/2">
              <div className="flex flex-col justify-between items-center text-lg space-y-4 md:text-2xl h-[240px] mt-[32px]">
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
              <button className="bg-primary py-5 px-14 text-white  rounded-full hover:bg-hover mt-[62px]">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          ref={services}
          id="services"
          className="bg-lightAsh p-5 md:p-11 flex flex-col justify-center items-center">
          <h4 className="font-play text-5xl sm:text-[62px] font-bold text-primary">
            Services
          </h4>
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14">
            <div className="card flex flex-col justify-center items-center relative bg-white w-[21rem]  sm:w-96 px-10 sm:px-12 pt-16 pb-6 mt-20 rounded-3xl">
              <img
                src={delivery}
                alt="worldwide delivery"
                className="bg-skyBlue rounded-full border-8  border-white absolute  -top-12 w-24 h-24 "
              />
              <h4 className="font-play font-bold text-2xl">
                Worldwide Delivery
              </h4>
              <h6 className="text-center text-lg mt-4 mb-12">
                We offer fast and reliable delivery services to customers' homes
                and offices. You can place an order online or over the phone,
                and we will promptly deliver the desired quantity of water...
              </h6>
              <button className="bg-lightAsh py-5 px-14 text-black border   rounded-full hover:bg-hover hover:text-white text-lg font-semibold ">
                Read More
              </button>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-hover  w-[21rem]  sm:w-96 px-10 sm:px-12 pt-16 pb-6 mt-20 rounded-3xl text-white">
              <img
                src={payments}
                alt="payments"
                className="bg-skyBlue rounded-full border-8  border-white absolute   -top-12 w-24 h-24 "
              />
              <h4 className="font-play font-bold text-2xl">Seamless payment</h4>
              <h6 className="text-center text-lg mt-4 mb-12">
                We offer a seamless payment system that allows customers to pay
                for their water deliveries quickly and easily. You can choose to
                pay online using your preferred payment methods...
              </h6>
              <button className="bg-lightAsh py-5 px-14 text-black hover:text-white  rounded-full hover:bg-primary text-lg font-semibold ">
                Read More
              </button>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white  w-[21rem]  sm:w-96 px-10 sm:px-12 pt-16 pb-6 mt-20 rounded-3xl">
              <img
                src={ontime}
                alt="ontime"
                className="bg-skyBlue rounded-full border-8  border-white absolute   -top-12 w-24 h-24  "
              />
              <h4 className="font-play font-bold text-2xl">On-time delivery</h4>
              <h6 className="text-center text-lg mt-4 mb-12">
                We take pride in delivering water to you on time, every time. In
                the event of unexpected delays or changes, we will inform
                customers promptly. The company's delivery personnel...
              </h6>
              <button className="bg-lightAsh py-5 px-14 text-black border hover:text-white  rounded-full hover:bg-hover text-lg font-semibold ">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-primary  p-5 md:p-11 flex flex-col justify-center items-center">
          <h4 className="font-play text-5xl sm:text-[62px] font-bold text-white">
            How it works
          </h4>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-14">
            <div className="card flex flex-col justify-between items-center relative bg-white py-2 px-2 mt-16 rounded-3xl ">
              <img
                src={stepOne}
                alt="step one"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 1.</h4>
                <p className="font-semibold text-center w-[280px]">
                  User signs up with email and password.
                </p>
              </div>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white py-2 px-0 mt-16 rounded-3xl ">
              <img
                src={stepTwo}
                alt="step 2"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 2.</h4>
                <p className="font-semibold text-center w-[289px]">
                  Fill out order form.
                </p>
              </div>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white py-2 px-0 mt-16 rounded-3xl ">
              <img
                src={stepThree}
                alt="step 3"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 3.</h4>
                <p className="font-semibold text-center  w-[289px]">
                  Make payment via card or transfer.
                </p>
              </div>
            </div>
            <div className="card flex flex-col justify-center items-center relative bg-white py-2 px-0 mt-16 rounded-3xl ">
              <img
                src={stepFour}
                alt="step4"
                className="bg-hover p-4 rounded-tr-[7rem] rounded-tl-2xl rounded-b-2xl"
              />
              <div className="flex flex-col justify-center items-center mt-6">
                <h4 className="font-play font-bold text-2xl">Step 4.</h4>
                <p className="font-semibold text-center  w-[289px]">
                  Recieve your order promptly
                </p>
              </div>
            </div>
          </div>
          <Link to="/login">
            <button className="bg-white py-5 px-14 text-black mb-[35px] mt-[64px] rounded-full hover:bg-lightAsh  font-semibold">
              Order Now
            </button>
          </Link>
        </div>
      </section>
      <footer
        id="footer"
        className="bg-black text-white  px-5 md:px-11  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 pb-14">
        <div className="company w-96 space-y-5 mt-9 ">
          <h4 className="font-play text-3xl md:text-6xl font-bold">AGUADASH</h4>
          <div className="space-y-2 md:space-y-4">
            <h5 className="w-[80%] md:w-auto">
              Here at Aguadash we give our customers the best services they
              need, which makes us a reliable company to work with.
            </h5>
            <div className="flex space-x-2 items-center justify-start">
              <BsFacebook className="w-6 h-6 hover:cursor-pointer" />{' '}
              <BsLinkedin className="w-6 h-6 hover:cursor-pointer" />{' '}
              <BsTwitter className="w-6 h-6 hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="links space-y-5 mt-9 ml-0 lg:mt-14 lg:ml-56">
          <h6 className="text-3xl font-play font-bold">Links</h6>
          <ul className="text-xl">
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
        <div className="contactUs space-y-5  mt-9 ml-0 lg:mt-14  xl:ml-56 flex flex-col justify-start items-start">
          <h6 className="text-3xl font-play font-bold">Contact Us</h6>
          <div className="flex flex-col justify-start items-start space-y-2">
            <h1 className="flex justify-center items-center">
              <BsFillEnvelopeFill className="w-6 h-6" />{' '}
              <span className="ml-2">ad@gmail.com</span>
            </h1>
            <h1 className="flex justify-center items-center ">
              <FiPhone className="w-6 h-6" />{' '}
              <span className="ml-2">+(234) 903 3223 232</span>
            </h1>
          </div>
        </div>
      </footer>
      <div className="bg-lightAsh px-5 md:px-11 py-4 flex justify-center items-center text-xs sm:text-auto">
        <h6>© Copyright 2023 All Rights Reserved AguaDash</h6>
      </div>
      {show && (
        <button
          onClick={() => handleScroll(top)}
          className=" bg-primary border border-transparent hover:border-white rounded-full p-4 fixed z-40 bottom-14 right-14 sm:right-10 lg:right-14 hover:bg-hover hover:text-white">
          <BsArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
};

export default Home;
