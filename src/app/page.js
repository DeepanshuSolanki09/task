"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ThreeD from "./Components/ThreeD";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Revealskew from "./Components/RevealSkew";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const container2 = useRef(null);

  // ALL ANIMATION LOGIC
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-story",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1.5,
      },
    });

    t1.from(".our-story1", {
      x: -150,
      opacity: 0,
      scale: 0.85,
      rotateY: 15,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        amount: 1.8,
        from: "start",
        ease: "power2.inOut",
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-events",
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1.5,
      },
    });

    t2.from(".our-events1", {
      y: 120,
      opacity: 0,
      scale: 0.9,
      filter: "blur(1px)",
      duration: 1.2,
      ease: "expo.out",
      stagger: {
        amount: 1.5,
        from: "start",
        ease: "power1.inOut",
      },
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-certificate",
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    t3.from(".our-certificate-img", {
      x: -150,
      opacity: 0,
      scale: 0.85,
      rotateY: 15,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "expo.out",
    }).from(
      ".our-certificate-text",
      {
        x: 150,
        opacity: 0,
        scale: 0.85,
        rotateY: -15,
        transformOrigin: "right center",
        duration: 1.2,
        ease: "expo.out",
      },
      "<0.3",
    ); 
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-team",
        start: "top 60%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    t4.from(".our-team-card", {
      y: 120,
      opacity: 0,
      scale: 0.9,
      filter: "blur(6px)",
      duration: 1.2,
      ease: "expo.out",
    }).from(
      ".our-team-img",
      {
        x: 150,
        opacity: 0,
        scale: 0.85,
        rotateY: -15,
        transformOrigin: "right center",
        duration: 1.2,
        ease: "expo.out",
      },
      "<0.3",
    );
    
  }, []);
  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-white text-black flex flex-col items-center">
        {/* NAVBAR */}
        <nav className="w-full max-w-6xl h-24 flex items-center justify-between px-6 md:px-12 border-b border-pink-200/40 backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-black tracking-wider text-black">
              SHE CAN FOUNDATION
            </span>
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              "Home",
              "Our Events",
              "Our Story",
              "Our Certificate",
              "Our Team",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-bold text-black/70 hover:text-pink-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-pink-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-black text-white hover:bg-pink-600 font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-black/10 text-sm cursor-pointer">
            Donate
          </button>
        </nav>
        
        {/* HEROSECTION */}
        <main
          className="w-full max-w-6xl flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-12 py-12 "
          id="home"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center md:self-start shadow-sm shadow-pink-200">
              Empowering Women & Girls
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.1]">
              Together We Can <br />
              <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                Change The World.
              </span>
            </h1>

            <p className="text-base md:text-lg text-black/80 font-medium leading-relaxed max-w-xl">
              We don't ask for much just lift them up with what you can share.
              Be it your
              <span className="text-pink-600 font-bold"> money</span>, your
              <span className="text-pink-600 font-bold"> unique skills</span>,
              or your
              <span className="text-pink-600 font-bold"> valuable time</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center md:justify-start">
              <button className="bg-pink-600 hover:bg-black text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-pink-200 hover:shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer">
                Donate Now
              </button>
              <button className="bg-white/80 border-2 border-black text-black font-bold px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 text-center backdrop-blur-sm cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="w-full relative p-2 bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-2xl shadow-pink-200/50 overflow-hidden">
              <ThreeD />
            </div>
          </div>
        </main>

        {/* OUR STORY */}
        <div
          className="w-full min-h-screen max-w-6xl flex-1 flex flex-col items-center justify-center gap-12 px-6 md:px-12 py-12"
          id="our-story"
        >
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.3] flex gap-2">
              Our
              <Revealskew word="Story" />
            </h1>
          </div>

          <div
            className="w-full h-full flex flex-wrap items-center justify-center relative gap-4"
            ref={container}
          >
            <div className="h-[450px] w-[300px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl p-4 our-story1">
              <div className="h-[200px] w-[250px] rounded-2xl bg-red-300 p-2 relative">
                <Image
                  src="/she-YlenJon1O7ieeEoa.avif"
                  alt="Our Story Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full w-full"
                />
              </div>
              <h1 className="mt-4 font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                Our Journey
              </h1>
              <p className="text-sm text-black/80 mt-2">
                She Can Foundation began with a powerful belief: no woman should
                be held back from her dreams. Our founders united to tackle the
                deep-rooted barriers that limit women worldwide. By building a
                network of solid support and actionable resources, we actively
                clear the path for women to overcome challenges, claim their
                space, and achieve lasting success.
              </p>
            </div>

            <div className="h-[450px] w-[300px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl p-4 our-story1">
              <div className="h-[200px] w-[250px] rounded-2xl bg-red-300 p-2 relative">
                <Image
                  src="/she-YlenJon1O7ieeEoa.avif"
                  alt="What is She Can Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full w-full"
                />
              </div>
              <h1 className="mt-4 font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent text-center text-lg">
                What is She Can?
              </h1>
              <p className="text-sm text-black/80 mt-2 leading-relaxed">
                She Can Foundation is a global non-profit dedicated to
                empowering women and creating a more equitable society. By
                providing critical resources, skills training, and local
                advocacy campaigns, we break down systemic barriers so every
                woman has a genuine opportunity to thrive.
              </p>
            </div>

            <div className="h-[450px] w-[300px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl p-4 our-story1">
              <div className="h-[200px] w-[250px] rounded-2xl bg-blue-300 p-2 relative">
                <Image
                  src="/images (1).jpg"
                  alt="Our Mission Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full w-full"
                />
              </div>
              <h1 className="mt-4 font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent text-lg">
                Our Mission?
              </h1>
              <p className="text-sm text-black/80 mt-2 leading-relaxed">
                To dismantle global barriers by deploying essential resources,
                targeted skills training, and local advocacy initiatives. We
                actively clear the path for women to overcome challenges and
                claim their space.
              </p>
            </div>

            <div className="h-[450px] w-[300px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl p-4 our-story1">
              <div className="h-[200px] w-[250px] rounded-2xl bg-purple-300 p-2 relative">
                <Image
                  src="/IMG_0758.jpg"
                  alt="Our Pillars Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full w-full"
                />
              </div>
              <h1 className="mt-4 font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent text-lg">
                How We Help?
              </h1>
              <p className="text-sm text-black/80 mt-2 leading-relaxed">
                We build a solid network of community support through
                educational workshops, financial literacy programs, mentorship
                drives, and raising deep social awareness through local campaign
                initiatives.
              </p>
            </div>

            <div className="h-[450px] w-[300px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl p-4 our-story1">
              <div className="h-[200px] w-[250px] rounded-2xl bg-amber-300 p-2 relative">
                <Image
                  src="/nck-slider.jpg"
                  alt="Our Impact Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl h-full w-full"
                />
              </div>
              <h1 className="mt-4 font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent text-center text-lg">
                Our Impact?
              </h1>
              <p className="text-sm text-black/80 mt-2 leading-relaxed">
                Through targeted outreach, we have successfully empowered
                thousands of women across global communities with skill
                development, sustainable resource kits, and mentorship to foster
                independence.
              </p>
            </div>
          </div>
        </div>

        {/* OUR EVENTS */}
        <div
          className="w-full min-h-screen max-w-6xl flex-1 flex flex-col items-center justify-center gap-12 px-6 md:px-12 py-12"
          id="our-events"
        >
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.3] flex gap-2">
              Our
              <Revealskew word="Events" />
            </h1>
          </div>

          <div
            className="w-full h-full flex flex-wrap items-center justify-center relative gap-4 our-events1"
            ref={container2}
          >
            {[
              {
                title: "Empowerment Workshop",
                time: "Oct 12, 10:00 AM",
                aim: "Building leadership skills through collaborative mentoring sessions.",
                image:"/IMG_0758.jpg",
              },
              {
                title: "Global Literacy Drive",
                time: "Nov 05, 02:00 PM",
                aim: "Providing financial tools and resources for community growth.",
                image:"/Markelytics-drive-on-World-Literacy-Day.jpg",
              },
              {
                title: "Women's Tech Summit",
                time: "Dec 01, 09:00 AM",
                aim: "Breaking barriers in technology with hands-on skill development.",
                image:"/images.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="h-[500px] w-[320px] flex flex-col items-center rounded-3xl bg-white shadow-xl p-6"
              >
                <div className="h-[200px] w-full rounded-2xl bg-pink-100 mb-4 relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-1">
                  {event.title}
                </h1>
                <p className="text-sm font-bold mb-4">{event.time}</p>

                <p className="text-sm text-black/70 text-center leading-relaxed flex-grow">
                  {event.aim}
                </p>

                <button className="mt-6 w-full py-3 bg-pink-600 transition-all duration-300 text-white font-bold rounded-xl cursor-pointer hover:bg-black hover:text-white hover:scale-105">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* OUR CERTIFICATE */}
        <div
          className="w-full min-h-screen max-w-6xl flex-1 flex flex-col items-center justify-center gap-12 px-6 md:px-12 py-12"
          id="our-certificate"
        >
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.3] flex gap-2">
              Our
              <Revealskew word="Certificate" />
            </h1>
          </div>

          <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center relative gap-10">
            <div className="md:h-3/4 md:w-3/4 h-full w-full flex items-center justify-center rounded-2xl bg-white shadow-xl  our-certificate-img">
              <Image
                src="/she-YlenJon1O7ieeEoa.avif"
                alt="Certificate Image"
                width={600}
                height={400}
                className="rounded-3xl shadow-xl md:h-1/2 h-full w-full object-cover"
              />
            </div>

            <div className="flex-col items-center justify-center gap-4 md:w-1/4 w-full our-certificate-text">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-1">
                Indian Society Registration Certificate
              </h1>
              <p className="text-lg text-black/80">
                She Can Foundation is officially registered under the Indian
                Societies Registration Act, 1860. We operate under strict legal
                compliance, ensuring total organizational transparency,
                institutional accountability, and professional integrity.
              </p>
            </div>
          </div>
        </div>

        {/* OUR TEAM */}
        <div
          className="w-full min-h-screen max-w-6xl flex-1 flex flex-col items-center justify-center gap-12 px-6 md:px-12 py-12"
          id="our-team"
        >
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.3] flex gap-2">
              Our
              <Revealskew word="Team" />
            </h1>
          </div>

          <div className="w-full h-auto md:flex-row flex flex-col-reverse items-center justify-center relative gap-4">
            <div className="h-[450px] w-full md:w-1/2 flex flex-col items-center justify-center rounded-3xl bg-white shadow-2xl p-6 border border-pink-100 transition-transform ">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent mb-4 text-center">
                Join Our Team
              </h1>

              <p className="text-sm text-black/70 leading-relaxed text-center mb-6">
                Make a difference in the lives of women in need. Join our global
                team to contribute your unique skills, time, and ideas to help
                create a more equitable society, one woman at a time.
              </p>

              <button className="mt-6 w-full py-3 bg-pink-600 transition-all duration-300 text-white font-bold rounded-xl cursor-pointer hover:bg-black hover:text-white hover:scale-105">
                Join Now
              </button>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center relative">
              <div className="w-full relative p-2 bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-2xl shadow-pink-200/50 overflow-hidden our-team-img">
                <Image
                  src="/image.png"
                  alt="Team Image"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-xl h-full w-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>

        {/* OUR CONTACT */}
        <div
          className="w-full h-1/4 flex-col items-center justify-center p-10 gap-10 bg-black text-white text-sm font-bold"
          id="contact"
        >
          <h1 className="text-3xl font-bold mb-4 contact-item">Get In Touch</h1>
          <div>
            <p className="contact-item">Email:president@shecanfoundation.org</p>
            <p className="contact-item">Contact: +91-8283841830</p>
            <a
              href="https://www.shecanfoundation.org"
              className="block contact-item"
            >
              <FaInstagram className="mr-2 inline" /> Instagram
            </a>
            <a
              href="https://www.shecanfoundation.org"
              className="block contact-item"
            >
              <FaLinkedin className="mr-2 inline" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}