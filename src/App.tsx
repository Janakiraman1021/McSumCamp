import React, { useEffect, useState } from 'react';
import { Code2, Brain, Globe2, Monitor, Users, Clock, Sparkles, GraduationCap, Star, Rocket, Heart, Trophy } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function App() {
  const [showCertificatePopup, setShowCertificatePopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#223a45] via-[#223a45] to-[#018dd2]">

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/summer.jpg"
            alt="Summer Camp"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            McZeal Academy
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Science Camp
          </h1>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto mb-8 animate-slide-up">
            Where Science Meets Technology!
          </p>

          {/* Main Buttons */}
          <div className="flex gap-4 justify-center animate-bounce-in">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all hover:scale-105"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Programs
            </button>

            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all hover:scale-105"
              onClick={() => window.location.href = "https://wa.me/9840827408?text=Heyy%20McZeal%20Im%20interested%20in%20McZeal's%20Science%20Camp"}
            >
              Register Now
            </button>
          </div>

          {/* Additional Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all hover:scale-105">
              Call Now <br></br>
              +91 98408 27408
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all hover:scale-105">
              Worksheet After <br></br>
              Every Class
            </button>
        
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transform transition-all hover:scale-105"
              onClick={() => setShowCertificatePopup(true)}
            >
              Certificate <br></br>
              After Completion
            </button>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white">Welcome to Our Summer Science Camp!</h2>
            <p className="text-purple-100 text-lg">
              At McZeal Academy, we believe in making summer learning an unforgettable experience. Our program combines cutting-edge technology, creative activities, and hands-on learning to inspire young minds.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-white">
                <Rocket className="w-6 h-6 mr-2" />
                <span>Interactive Learning</span>
              </div>
              <div className="flex items-center text-white">
                <Heart className="w-6 h-6 mr-2" />
                <span>Caring Environment</span>
              </div>
              <div className="flex items-center text-white">
                <Trophy className="w-6 h-6 mr-2" />
                <span>Skill Development</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="w-6 h-6 mr-2" />
                <span>Friend Making</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?auto=format&fit=crop&w=400&q=80"
              alt="Kids Coding"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
              alt="Kids Learning Math"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80"
              alt="Kids Science"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80"
              alt="Kids Art"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 mt-8"
            />
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
          Exciting Programs for Young Minds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CourseCard
            icon={<Monitor />}
            title="WEB DEVELOPMENT"
            description="Create your own websites and web applications"
            color="bg-gradient-to-br from-blue-600 to-blue-700"
            image="web1.jpg"
          />
          <CourseCard
            icon={<Brain />}
            title="SPEED MATH"
            description="Master mathematical concepts with interactive problem-solving sessions"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
            image="speed-math.jpg"
          />
          <CourseCard
            icon={<Globe2 />}
            title="ENGLISH FLUENCY & PUBLIC SPEAKING"
            description="Improve communication skills through engaging activities"
            color="bg-gradient-to-br from-blue-400 to-blue-500"
            image="/english-fluency.jpg"
          />
          <CourseCard
            icon={<GraduationCap />}
            title="SPOKEN HINDI"
            description="Learn new languages through immersive experiences"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            image="/spoken-hindi.jpg"
          />
          <ProfessionalCourseCard
            icon={<Code2 />}
            title="Professional Course 1: WEB DEVELOPMENT & DESIGNING"
            description="Advanced web development with industry-standard technologies and real-world projects"
            color="bg-gradient-to-br from-green-600 to-green-700"
            image="web1.jpg"
          />
          <ProfessionalCourseCard
            icon={<Code2 />}
            title="Professional Course 2: PYTHON & GAME DEVELOPMENT"
            description="Learn Python programming and create exciting games using PyGame"
            color="bg-gradient-to-br from-yellow-600 to-yellow-700"
            image="python-game.jpg"
          />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
          Why Join Our Adventure?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <BenefitCard
            icon={<Users />}
            title="Magic Teachers"
            description="Learn from experienced and passionate educators"
            color="bg-gradient-to-br from-pink-500 to-pink-600"
          />
          <BenefitCard
            icon={<Sparkles />}
            title="Friendly Squad"
            description="Join a supportive learning community"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <BenefitCard
            icon={<Brain />}
            title="Fun Learning"
            description="Enjoy interactive and engaging sessions"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <BenefitCard
            icon={<Globe2 />}
            title="Cool Projects"
            description="Work on exciting real-world projects"
            color="bg-gradient-to-br from-blue-400 to-blue-500"
          />
          <BenefitCard
            icon={<Clock />}
            title="Perfect Timing"
            description="Flexible schedule options available"
            color="bg-gradient-to-br from-orange-500 to-orange-600"
          />
          <BenefitCard
            icon={<Star />}
            title="Star Program"
            description="Earn certificates and recognition"
            color="bg-gradient-to-br from-purple-400 to-purple-500"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
          Summer Camp Moments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <GalleryImage src="/1.jpg" />
          <GalleryImage src="/2.jpg" />
          <GalleryImage src="/3.jpg" />
          <GalleryImage src="/4.jpg" />
          <GalleryImage src="/5.jpg" />
          <GalleryImage src="/6.jpg" />
          <GalleryImage src="/7.jpg" />
          <GalleryImage src="/8.jpg" />
          <GalleryImage src="/9.jpg" />
          <GalleryImage src="/10.jpg" />
          <GalleryImage src="/11.jpg" />
          <GalleryImage src="/13.jpg" />
        </div>
      </section>

      {/* Trainers Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
          Meet Our Amazing Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TrainerCard
            image="/image.png"
            name="Prof Dinesh"
            specialty="English Language"
            bio="Professor Dinesh is an accomplished English language educator with over 15 years of experience teaching students at all levels. He specializes in advanced grammar, literature analysis, and effective communication skills."
            achievements={[
              "Published author of 'Modern English Teaching Methods'",
              "Department Head of English Studies",
              "Certified TESOL instructor",
              "Mentor for over 200 undergraduate students"
            ]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/profdinesh",
              twitter: "https://twitter.com/profdinesh"
            }}
          />
          <TrainerCard
            image="/image.png"
            name="Prof Cruz"
            specialty="English Language"
            bio="Professor Cruz brings a unique global perspective to English language teaching, having taught in five different countries. His approach integrates cultural context with language learning, helping students develop both linguistic fluency and cultural understanding."
            achievements={[
              "PhD in Applied Linguistics",
              "Developer of 'Cross-Cultural Communication' curriculum",
              "Recipient of Excellence in Teaching Award 2023",
              "Fluent in 4 languages"
            ]}
            socialLinks={{
              instagram: "https://instagram.com/profcruz_english",
              linkedin: "https://linkedin.com/in/profcruz"
            }}
          />
          <TrainerCard
            image="/jesu_raja.jpg"
            name="Prof Jesu Raja"
            specialty="Math and AI"
            bio="Professor Jesu Raja bridges the gap between theoretical mathematics and practical AI applications. His research focuses on developing mathematical models that enhance machine learning algorithms, and he brings this cutting-edge knowledge into the classroom."
            achievements={[
              "Research contributor to leading AI projects",
              "Published 15+ papers in mathematics and artificial intelligence",
              "Developed an AI-powered tutoring system for mathematics education",
              "Winner of the National Mathematics Innovation Award"
            ]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/profjesuraja",
              github: "https://github.com/jesuraja"
            }}
          />
          <TrainerCard
            image="/Priscilla.png"
            name="Priscilla"
            specialty="Math and AI"
            bio="Priscilla combines her strong foundation in mathematics with expertise in artificial intelligence to create innovative learning experiences. She specializes in making complex mathematical concepts accessible through AI-enhanced visualization and interactive learning tools."
            achievements={[
              "Masters in Applied Mathematics and Computer Science",
              "Creator of 'MathVision' - an AI tool for mathematical concept visualization",
              "Guest lecturer at multiple tech conferences",
              "Mentored 30+ students in AI research projects"
            ]}
            socialLinks={{
              linkedin: "https://linkedin.com/in/priscillamath",
              twitter: "https://twitter.com/priscillamathai"
            }}
          />
          <TrainerCard
            image="/sai.JPG"
            name="Sai Krisshna"
            specialty="Web Development"
            bio="Sai Krisshna is a full-stack web developer with expertise in modern frameworks and technologies. He believes in teaching through practical, project-based learning that prepares students for real-world development challenges."
            achievements={[
              "Full-stack developer with 8+ years of industry experience",
              "Developed and launched 20+ commercial web applications",
              "Contributor to open-source development libraries",
              "Former tech lead at a leading software company"
            ]}
            socialLinks={{
              github: "https://github.com/saikrisshna",
              linkedin: "https://linkedin.com/in/saikrisshna",
              portfolio: "https://saikrisshna.dev"
            }}
          />
          <TrainerCard
            image="/jani.jpg"
            name="Janakiraman"
            specialty="Web Development"
            bio="Janakiraman specializes in modern web technologies with a focus on performance optimization and responsive design. His teaching methodology emphasizes hands-on coding practice and industry-standard development workflows."
            achievements={[
             "Blockchain & Web3 Certified Expert",
              "Founder of Cryptocortex Crew, a leading Web3 & AI solutions company",
              "Creator of the decentralized Learn-to-Earn platform 'Lexora'",
              "Developer of 'X2', an AI Agent for making the AI Agent",
              "Speaker at blockchain and Web3 conferences",
              "Consultant for multiple Web3 startups",
              "Expertise in Solidity, Rust, Move, and EVM-compatible blockchains",  
            ]}
            socialLinks={{
              github: "https://github.com/janakiraman",
              linkedin: "https://linkedin.com/in/janakiraman",
              twitter: "https://twitter.com/jani_webdev"
            }}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-on-scroll">
          Happy Campers & Parents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <TestimonialCard
            name="Aarif"
            image="/14.png"
            text="The classes are good and the teachers are interactive;over all amazing place Best coaching centre for english begineers"
            rating={5}
          />
          <TestimonialCard
            name="Selva Prakash"
            image="/16.png"
            text="Best coaching centre for english begineers"
            rating={5}
          />
          <TestimonialCard
            name="Karan"
            image="/15.png"
            text="Best academy to learn and gain new skills!!"
            rating={5}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Adventure?</h2>
          <p className="text-purple-100 mb-8">Secure your spot in our summer camp program today!</p>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg"
            onClick={() => window.location.href = "https://study.mczealconsultancy.com/s/pages/summercamp-nungambakkam"}
          >
            Enroll Now
          </button>
        </div>
      </section>

      {/* Certificate Popup */}
      {/* Certificate Popup */}
{showCertificatePopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sample Certificate</h2>
        <button
          onClick={() => setShowCertificatePopup(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      {/* Certificate Image - Portrait Mode */}
      <div className="mb-4 flex justify-center">
        <img 
          src="/certificare.jpg" 
          alt="McZeal Academy Certificate" 
          className="w-[350px] h-[500px] object-cover border-2 border-blue-200 rounded-lg"
        />
      </div>
      
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        onClick={() => setShowCertificatePopup(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}

function CourseCard({ icon, title, description, color, image }) {
  const [open, setOpen] = useState(false);
  const courseTitleUpper = title.toUpperCase(); // Add this line at the component level

  // Helper function to get batch timings based on course title
  const getBatchTimings = (courseTitle) => {
    const courseTitleUpper = courseTitle.toUpperCase();
    
    if (courseTitleUpper.includes("INNOVATIVE SCIENCE & CODING LAB")) {
      return {
        batchOne: "10:30 AM - 12:30 PM",
        batchTwo: "3:30 PM - 5:30 PM",
        duration: "12 Days",
        ageGroups: ["8 - 12", "13 - 16", "17 - 21"],
        price: "₹2000"
      };
    } 
    else if (courseTitleUpper.includes("WEB DEVELOPMENT")) {
      return {
        batchOne: "10:30 AM - 12:30 PM",
        batchTwo: "3:30 PM - 5:30 PM",
        duration: courseTitleUpper.includes("9-12") ? "24 Days" : "12 Days",
        ageGroups: ["Class 6-8", "Class 9-12"],
        price: courseTitleUpper.includes("9-12") ? "₹5000" : "₹2000"
      };
    }
    else if (courseTitleUpper.includes("MATH MASTERY") || courseTitleUpper.includes("SPEED MATH")) {
      return {
        batchOne: "9:00 AM - 10:15 AM",
        batchTwo: "-",
        duration: "12 Days",
        ageGroups: ["Class 1-5", "Class 6-8"],
        price: "₹2000"
      };
    }
    else if (courseTitleUpper.includes("PROMPT MASTER") || courseTitleUpper.includes("AI & CANVA")) {
      return {
        batchOne: "2:00 PM - 3:00 PM",
        batchTwo: "-",
        duration: "12 Days",
        ageGroups: ["11+ Years"],
        price: "₹2000"
      };
    }
    else if (courseTitleUpper.includes("ENGLISH FLUENCY") || courseTitleUpper.includes("PUBLIC SPEAKING")) {
      return {
        batchOne: "3:30 PM - 5:30 PM",
        batchTwo: "-",
        duration: "15 Days",
        ageGroups: ["7-14 years", "15+ years"],
        price: "₹5000"
      };
    }
    else if (courseTitleUpper.includes("SPOKEN HINDI")) {
      return {
        batchOne: "6:00 PM - 8:00 PM",
        batchTwo: "-",
        duration: "24 Days",
        ageGroups: ["11+ years"],
        price: "₹5000"
      };
    }
    else if (courseTitleUpper.includes("ENGLISH FLUENCY") || courseTitleUpper.includes("PUBLIC SPEAKING")) {
      return {
        batchOne: "3:30 PM - 5:30 PM",
        batchTwo: "-",
        duration: "15 Days",
        ageGroups: ["7-14 years", "15+ years"],
        price: "₹5000"
      };
    }
    else if (courseTitleUpper.includes("SPOKEN HINDI")) {
      return {
        batchOne: "6:00 PM - 8:00 PM",
        batchTwo: "-",
        duration: "24 Days",
        ageGroups: ["11+ years"],
        price: "₹5000"
      };
    }
    else if (courseTitleUpper.includes("Professional")) {
      return {
        batchOne: "6:00 PM - 8:00 PM",
        batchTwo: "-",
        duration: "30 Days",
        ageGroups: ["17+ years"],
        price: "₹10000"
      };
    }

    // Default values if no match
    return {
      batchOne: "10:30 AM - 12:30 PM",
      batchTwo: "3:30 PM - 5:30 PM",
      duration: "12 Days",
      ageGroups: ["8 - 16"],
      price: "₹2000"
    };
  };
  
  const courseInfo = getBatchTimings(title);

  return (
    <section id='courses'>
      <div className={`${color} rounded-xl overflow-hidden transform transition-all hover:scale-105 animate-on-scroll cursor-pointer flex flex-col h-full`} onClick={() => setOpen(true)}>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>  {/* 16:9 aspect ratio */}
          <img 
            src={image} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-white mb-2 w-6 h-6">{icon}</div>
          <h3 className="text-base font-semibold mb-1 text-white">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg overflow-y-auto max-h-[90vh]">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
              <h2 className="text-lg md:text-xl font-bold text-blue-600">{title}</h2>
              <button 
                onClick={() => setOpen(false)} 
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="p-4">
              <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ paddingBottom: "56.25%" }}>
                <img 
                  src={image} 
                  alt={title} 
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Course Details</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-blue-700 mb-2">Course Information:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Timing: {courseInfo.batchOne}</li>
                    <li>Duration: {courseInfo.duration}</li>
                    <li>Price: <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">50% OFF</span> {courseInfo.price}</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Worksheets after every class</li>
                    <li>Certificate upon completion</li>
                    <li>Develop critical thinking skills</li>
                    <li>Build confidence and creativity</li>
                  </ul>
                </div>
              </div>
              
              {/* Replacing batch timing buttons with class selection */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-3">Age Requirement</h3>
                <div className="space-y-3">
                  {courseInfo.ageGroups.map((group, index) => (
                    <button 
                      key={index}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center"
                      onClick={() => { 
                        if (title.toUpperCase().includes("WEB DEVELOPMENT")) {
                          if (group === "Class 6-8") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/Web-Development---Class-6-8-67ebcfc26777cb0a38897095";
                          } else if (group === "Class 9-12") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/Web-Development---Class-9--12-67ebd107451a672414c859a5";
                          }
                        } 
                        else if (title.toUpperCase().includes("SPEED MATH")) {
                          if (group === "Class 1-5") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/Speed-Math-for-Young-Minds---Class---1-to-5--67ebd206d1b8b445deb7d1a5";
                          } else if (group === "Class 6-8") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/Advanced-Speed-Math-for-Young-Minds---Class-6---8-67ebd2f2e02a1922b52ce483";
                          }
                        }
                        else if (title.toUpperCase().includes("ENGLISH FLUENCY")) {
                          if (group === "7-14 years") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/English-Fluency-Programme---Age-7-to-14-yrs--67ebd38c1148e14cd85234db";
                          } else if (group === "15+ years") {
                            window.location.href = "https://study.mczealconsultancy.com/courses/English-Fluency--Public-Speaking-Age-15-67ebd43b6777cb0a388972b7";
                          }
                        }
                        
                        else {
                          alert(`Selected: ${group}`); 
                        }
                      }}
                    >
                      <Users className="w-5 h-5 mr-2" />
                      {group}
                    </button>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProfessionalCourseCard({ icon, title, description, color, image }) {
  const [open, setOpen] = useState(false);
  const courseInfo = getProfessionalCourseInfo(title);

  return (
    <section id='courses'>
      <div className={`${color} rounded-xl overflow-hidden transform transition-all hover:scale-105 animate-on-scroll cursor-pointer flex flex-col h-full`} onClick={() => setOpen(true)}>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>  {/* 16:9 aspect ratio */}
          <img 
            src={image} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="text-white mb-2 w-6 h-6">{icon}</div>
          <h3 className="text-base font-semibold mb-1 text-white">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg overflow-y-auto max-h-[90vh]">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
              <h2 className="text-lg md:text-xl font-bold text-blue-600">{title}</h2>
              <button 
                onClick={() => setOpen(false)} 
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="p-4">
              <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ paddingBottom: "56.25%" }}>
                <img 
                  src={image} 
                  alt={title} 
                  className="absolute top-0 left-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Course Details</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-blue-700 mb-2">Course Information:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Timing: {courseInfo.batchOne}</li>
                    <li>Duration: {courseInfo.duration}</li>
                    <li>Price: <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">50% OFF</span> {courseInfo.price}</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Worksheets after every class</li>
                    <li>Certificate upon completion</li>
                    <li>Develop critical thinking skills</li>
                    <li>Build confidence and creativity</li>
                  </ul>
                </div>
              </div>
              
              {/* Replacing batch timing buttons with class selection */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-3">Age Requirement</h3>
                <div className="space-y-3">
                  {courseInfo.ageGroups.map((group, index) => (
                    <button 
                      key={index}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center"
                      onClick={() => { 
                        alert(`Selected: ${group}`); 
                        setOpen(false); 
                      }}
                    >
                      <Users className="w-5 h-5 mr-2" />
                      {group}
                    </button>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function getProfessionalCourseInfo(courseTitle) {
  const courseTitleUpper = courseTitle.toUpperCase();

  if (courseTitleUpper.includes("PROFESSIONAL COURSE 1: WEB DEVELOPMENT & DESIGNING")) {
    return {
      batchOne: "6:00 - 8:00 PM",
      batchTwo: "-",
      duration: "24 Days",
      ageGroups: ["17-21 years"],
      price: "₹10000"
    };
  } else if (courseTitleUpper.includes("PROFESSIONAL COURSE 2: PYTHON & GAME DEVELOPMENT")) {
    return {
      batchOne: "6:00 - 8:00 PM",
      batchTwo: "-",
      duration: "24 Days",
      ageGroups: ["17-21 years"],
      price: "₹10000"
    };

  }

  // Default values if no match
  return {
    batchOne: "6:00 PM - 8:00 PM",
    batchTwo: "-",
    duration: "30 Days",
    ageGroups: ["17+ years"],
    price: "₹10000"
  };
}

function BenefitCard({ icon, title, description, color }) {
  return (
    <div className={`${color} rounded-xl p-6 text-white transform transition-all hover:scale-105 animate-on-scroll`}>
      <div className="text-white mb-4 w-8 h-8">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}

function GalleryImage({ src }) {
  return (
    <div className="relative group overflow-hidden rounded-lg animate-on-scroll">
      <img
        src={src}
        alt="Camp Moment"
        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4">Memorable moments at McZeal Academy</p>
      </div>
    </div>
  );
}



function TrainerCard({ image, name, specialty, bio, achievements, socialLinks }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="group animate-on-scroll" onClick={openModal}>
        <div className="relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-64 sm:h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg sm:text-xl">{name}</h3>
              <p className="text-sm sm:text-base opacity-90">{specialty}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Modal with Glassmorphism Effect */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={closeModal}
          />
          
          {/* Modal Content - Glassmorphism Effect */}
          <div className="relative w-full max-h-[90vh] overflow-auto max-w-[95vw] sm:max-w-[85vw] md:max-w-4xl bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/30 shadow-xl">
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
              <button 
                onClick={closeModal}
                className="bg-white/30 hover:bg-white/50 rounded-full p-1.5 sm:p-2 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-48 sm:h-64 lg:h-full object-cover object-center" 
                />
              </div>
              
              {/* Content Section */}
              <div className="lg:w-3/5 p-4 sm:p-6 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{name}</h2>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4">{specialty}</p>
                
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">About</h3>
                  <p className="text-sm sm:text-base">{bio || "No biography available"}</p>
                </div>
                
                {achievements && achievements.length > 0 && (
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Achievements</h3>
                    <ul className="list-disc pl-5 text-sm sm:text-base">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact Information - New Section */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Contact</h3>
                  <p className="text-sm sm:text-base">
                    Email: {name.toLowerCase().replace(' ', '.')}@gmail.com
                  </p>
                  <p className="text-sm sm:text-base">
                    Office Hours: Monday-Friday, 10:00 AM - 4:00 PM
                  </p>
                </div>
                
                {/* Social Links with improved responsive design */}
                {socialLinks && (
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Connect</h3>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.instagram && (
                        <a href={socialLinks.instagram} className="text-white hover:opacity-75 transition-opacity flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span className="text-sm sm:text-base">Instagram</span>
                        </a>
                      )}
                      
                      {socialLinks.twitter && (
                        <a href={socialLinks.twitter} className="text-white hover:opacity-75 transition-opacity flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                          <span className="text-sm sm:text-base">Twitter</span>
                        </a>
                      )}
                      
                      {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} className="text-white hover:opacity-75 transition-opacity flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          <span className="text-sm sm:text-base">LinkedIn</span>
                        </a>
                      )}
                      
                      {socialLinks.github && (
                        <a href={socialLinks.github} className="text-white hover:opacity-75 transition-opacity flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span className="text-sm sm:text-base">GitHub</span>
                        </a>
                      )}

                      {socialLinks.portfolio && (
                        <a href={socialLinks.portfolio} className="text-white hover:opacity-75 transition-opacity flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                            <path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                          </svg>
                          <span className="text-sm sm:text-base">Portfolio</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


function TestimonialCard({ name, image, text, rating }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all hover:scale-105 animate-on-scroll">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-purple-100">{text}</p>
    </div>
  );
}

export default App;