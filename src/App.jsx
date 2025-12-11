import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/lucide@latest";
      script.onload = () => window.lucide?.createIcons();
      document.body.appendChild(script);
    }, []);
  
    useEffect(() => {
      const sections = document.querySelectorAll("section");
      const links = document.querySelectorAll("nav li");
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const btn = document.querySelector(`[data-section="${entry.target.id}"]`);
          if(entry.isIntersecting){
            links.forEach(l => l.classList.remove("bg-orange-500"));
            if(btn) btn.classList.add("bg-orange-500");
          }
        });
      }, { threshold: 0.6 });
  
      sections.forEach(section => observer.observe(section));
    }, []);

  return (
    <>
    <nav className="flex justify-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl p-3 gap-2 bg-black overflow-x-auto">
        <a className="p-1" href="#home"><li data-section="home" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square flex w-12 items-center justify-center p-2">Home</li></a>
        <a className="p-1" href="#team"><li data-section="team" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square flex w-12 items-center justify-center p-2">Team</li></a>
        <a className="p-1" href="#phase-1"><li data-section="phase-1" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">1</li></a>
        <a className="p-1" href="#phase-2"><li data-section="phase-2" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">2</li></a>
        <a className="p-1" href="#phase-3"><li data-section="phase-3" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">3</li></a>
        <a className="p-1" href="#phase-4"><li data-section="phase-4" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">4</li></a>
        <a className="p-1" href="#phase-5"><li data-section="phase-5" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">5</li></a>
        <a className="p-1" href="#phase-6"><li data-section="phase-6" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">6</li></a>
        <a className="p-1" href="#phase-7"><li data-section="phase-7" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">7</li></a>
        <a className="p-1" href="#phase-8"><li data-section="phase-8" className="text-white border border-orange-400 hover:bg-orange-400 rounded-full aspect-square w-12 flex items-center justify-center p-2">8</li></a>
    </nav>
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">  
    <section id="home" className="grid grid-rows-[1fr_1fr_1fr] items-center h-screen snap-start">
        <header className="flex flex-wrap gap-15 w-full justify-center text-3xl lg:text-5xl 2xl:text-7xl">
          <p className=" text-orange-900">Right people.</p><p className=" text-orange-500">Right equipment.</p><p className=" text-orange-400">Right on time.</p>
        </header>
        <div>
          <div className="flex gap-3 w-full justify-center items-center">
            <img className="w-30 m-6" src="logo.png" alt="Site Logo" />
            <p className="flex justify-center m-6 text-xl lg:text-3xl 2xl:text-5xl">SiteManager</p>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-md lg:text-lg 2xl:text-xl w-1/2 text-center">
              Construction companies need a digital dashboard to track all projects, employees, and equipment in one place because current systems lack real-time visibility and lead to inefficiencies.
              Our solution is to create a live map that links to projects and shows exactly which employees, equipment, and materials are needed at each location.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-rows-[1fr_1fr_1fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">The Team</p>
          <div className="flex flex-wrap justify-center gap-20 bg-gray-900 p-10 rounded-2xl border-2 border-orange-500">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Joseph</p>
              <img className="rounded-full border-4 h-30 w-30 border-black" src="/joseph.webp" alt="Joseph Profile Picture" />
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Enrique</p>
              <img className="rounded-full border-4 h-30 w-30 border-black" src="/enrique.png" alt="Enrique Profile Picture" />
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Kelvin</p>
              <img className="rounded-full border-4 h-30 w-30 border-black" src="/kelvin.webp" alt="Kelvin Profile Picture" />
            </div>
          </div>
        </div>
        
      </section>

      <section id="phase-1" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 1</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Needfinding</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slides</p>
              <iframe src="slides1.pdf" className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="slides1.pptx" download="Phase 1 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-2" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 2</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">POV & EXP</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Report</p>
              <iframe src="report2.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="report2.docx" download="Phase 2 Report" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">Word File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slides</p>
              <iframe src="slides2.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="slides2.pptx" download="Phase 2 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-3" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 3</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Website</p>
          <div className="flex flex-wrap justify-center gap-12 text-blue-500 underline">
            <div>
              <a className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2" href="https://joseph-koop.github.io/hci/">
                Link to Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-4" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 4</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Concept Video</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Video</p>
              <video  className="w-50 lg:w-70 2xl:w-90 aspect-square" controls><source src="video4.mp4" type="video/mp4"></source>Browser doesn't support video.</video>
              <div className="flex justify-center mt-4">
                <a href="video4.mp4" download="Phase 4 Video" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">MP4 File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slides</p>
              <iframe src="slides4.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="slides4.pptx" download="Phase 4 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-5" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 5</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Low-Fi Prototyping & Pilot Usability Test</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Prototype</p>
              <iframe src="prototype5.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="prototype5.pdf" download="Phase 5 Prototype" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PDF File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Report</p>
              <iframe src="report5.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="report5.docx" download="Phase 5 Report" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">Word File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slides</p>
              <iframe src="slides5.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="slides5.pptx" download="Phase 5 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-6" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 6</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Medium-Fi Prototype</p>
          <div className="flex flex-wrap flex-col items-center gap-12">
            <div className="text-blue-500 underline">
              <a className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2" href="https://www.justinmind.com/open-resource?link=552b4a8e739ede3025e34fb434c8379a32143b9bd1c9440ed3e98c6e4d625944&utm_source=email&utm_medium=notification-share-editor&utm_campaign=action">
                Link to Prototype
              </a>
            </div>
            <p className="text-md lg:text-lg 2xl:text-xl w-1/2 text-center">Built in JustinMind's free version, our accounts expired and we couldn't retrieve the project.</p>
          </div>
        </div>
      </section>

      <section id="phase-7" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_1fr_7fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 7</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Hi-Fi Prototype</p>
          <div className="flex flex-wrap justify-center gap-12 text-blue-500 underline">
            <a className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2" href="https://joseph-koop.github.io/hci-final/">
              Link to Hi-Fi Prototype
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Report</p>
              <iframe src="report7.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="report7.docx" download="Phase 7 Report" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">Word File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slides</p>
              <iframe src="slides7.pdf"  className="w-50 lg:w-70 2xl:w-90 aspect-square"></iframe>
              <div className="flex justify-center mt-4">
                <a href="slides7.pptx" download="Phase 7 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-8" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-30 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <p className="text-xl lg:text-3xl 2xl:text-5xl">Phase 8</p>
          <p className="text-2xl lg:text-3xl 2xl:text-4xl pt-6">Poster & Pitch</p>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Poster</p>
              <img src="poster8.png" alt="Poster" className="w-50 lg:w-70 2xl:w-90 aspect-square object-cover"/>
              <div className="flex justify-center mt-4">
                <a href="poster8.pdf" download="Phase 8 Poster" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PDF File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-center text-lg lg:text-xl 2xl:text-2xl pb-2">Slide</p>
              <img src="slide8.png" alt="Slide" className="w-50 lg:w-70 2xl:w-90 aspect-square object-cover"></img>
              <div className="flex justify-center mt-4">
                <a href="slide8.pdf" download="Phase 8 Slide" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PDF File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  </main>
  </>
  )
}

export default App
