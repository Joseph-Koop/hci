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
            links.forEach(l => l.classList.remove("bg-orange-700"));
            if(btn) btn.classList.add("bg-orange-700");
          }
        });
      }, { threshold: 0.6 });
  
      sections.forEach(section => observer.observe(section));
    }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">  
    <section id="home" className="grid grid-rows-[1fr_1fr_1fr] items-center h-screen snap-start">
      <nav className="absolute left-0 grid grid-cols-1 rounded-2xl p-2 gap-2">
        <a className="p-1" href="#home"><li data-section="home" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">Home</li></a>
        <a className="p-1" href="#team"><li data-section="team" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">Team</li></a>
        <a className="p-1" href="#phase-1"><li data-section="phase-1" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">1</li></a>
        <a className="p-1" href="#phase-2"><li data-section="phase-2" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">2</li></a>
        <a className="p-1" href="#phase-3"><li data-section="phase-3" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">3</li></a>
        <a className="p-1" href="#phase-4"><li data-section="phase-4" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">4</li></a>
        <a className="p-1" href="#phase-5"><li data-section="phase-5" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">5</li></a>
        <a className="p-1" href="#phase-6"><li data-section="phase-6" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">6</li></a>
        <a className="p-1" href="#phase-7"><li data-section="phase-7" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">7</li></a>
        <a className="p-1" href="#phase-8"><li data-section="phase-8" className="bg-orange-400 hover:bg-amber-700 rounded-full aspect-square flex items-center justify-center p-2">8</li></a>
      </nav>
        <header className="flex flex-wrap gap-15 w-full justify-center">
          <p className="text-7xl text-orange-900">Right people.</p><p className="text-7xl text-orange-500">Right equipment.</p><p className="text-7xl text-orange-400">Right on time.</p>
        </header>
        <div>
          <div className="flex gap-3 w-full justify-center items-center">
            <img className="w-30 m-6" src="/logo.png" alt="Site Logo" />
            <h1 className="flex justify-center m-6 text-7xl">SiteManager</h1>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-xl w-1/2">
              Construction companies need a digital dashboard to track all projects, employees, and equipment in one place because current systems lack real-time visibility and lead to inefficiencies.
              Our solution is to create a live map that links to projects and shows exactly which employees, equipment, and materials are needed at each location.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-rows-[1fr_1fr_1fr] justify-items-center">
          <h1 className="text-7xl">The Team</h1>
          <div className="flex justify-center gap-20 bg-gray-900 p-10 rounded-2xl border-2 border-orange-500">
            <div>
              <h2 className="text-center text-2xl pb-2">Joseph</h2>
              <img className="rounded-full border-4 border-black" src="/joseph.webp" alt="Joseph Profile Picture" />
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Enrique</h2>
              <img className="rounded-full border-4 border-black" src="/enrique.webp" alt="Enrique Profile Picture" />
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Kelvin</h2>
              <img className="rounded-full border-4 border-black" src="/kelvin.webp" alt="Kelvin Profile Picture" />
            </div>
          </div>
        </div>
        
      </section>

      <section id="phase-1" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 1</h1>
          <h3 className="text-4xl pt-6">Needfinding</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Slides</h2>
              <iframe src="/slides1.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/slides1.pptx" download="Phase 1 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-2" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 2</h1>
          <h3 className="text-4xl pt-6">POV & EXP</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Report</h2>
              <iframe src="/report2.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/report2.docx" download="Phase 2 Report" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">Word File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Slides</h2>
              <iframe src="/slides2.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/slides2.pptx" download="Phase 2 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-3" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 3</h1>
          <h3 className="text-4xl pt-6">Website</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Ongoing</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-4" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 4</h1>
          <h3 className="text-4xl pt-6">Concept Video</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Video</h2>
              <video width="400" height="400" controls><source src="/video4.mp4" type="video/mp4"></source>Browser doesn't support video.</video>
              <div className="flex justify-center mt-4">
                <a href="/video4.mp4" download="Phase 4 Video" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">MP4 File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Slides</h2>
              <iframe src="/slides4.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/slides4.pptx" download="Phase 4 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-5" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 5</h1>
          <h3 className="text-4xl pt-6">Low-Fi Prototyping & Pilot Usability Test</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Prototype</h2>
              <iframe src="/prototype5.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/prototype5.pdf" download="Phase 5 Prototype" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PDF File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Report</h2>
              <iframe src="/report5.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/report5.docx" download="Phase 5 Report" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">Word File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl pb-2">Slides</h2>
              <iframe src="/slides5.pdf" width="400" height="400"></iframe>
              <div className="flex justify-center mt-4">
                <a href="/slides5.pptx" download="Phase 5 Slides" className="">
                  <button className="bg-orange-400 p-3 rounded-2xl flex gap-2 hover:cursor-pointer hover:bg-amber-700">PowerPoint File<i data-lucide="download"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-6" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 6</h1>
          <h3 className="text-4xl pt-6">Medium-Fi Prototype</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Pending</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-7" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 7</h1>
          <h3 className="text-4xl pt-6">Hi-Fi Prototype</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Future</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="phase-8" className="h-screen snap-start flex justify-center w-full">
        <div className="pt-20 grid grid-cols-1 grid-rows-[1fr_2fr_8fr] justify-items-center">
          <h1 className="text-7xl">Phase 8</h1>
          <h3 className="text-4xl pt-6">Poster & Pitch</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-center text-2xl pb-2">Pending</h2>
            </div>
          </div>
        </div>
      </section>
  </main>
  )
}

export default App
