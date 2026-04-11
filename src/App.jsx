import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <section id="#hero">
        <nav className="flex justify-between items-center px-20 py-10">
          <h1 className="text-3xl font-bold italic">
            <span className="text-blue-600">Daffa</span>
            <span className="text-black">AM</span>
          </h1>
          <ul className=" flex gap-5 text-3xl font-bold">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Project</li>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
        </nav>
      </section>
      <section id="#home">
        <div className="flex justify-between items-center px-50 py-10">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold">
              Halo,Saya <span className="text-blue-600">Daffa</span>
              <p className="mt-4 text-black">ini adalah portofolio saya</p>
            </h1>
            <p className="mt-10 text-2xl">
              Anda dapat melihat semua project yang telah saya kerjakan dan data
              saya secara lengkap
            </p>
          </div>
          <div className="relative">
            <img src="profil.png" />
            <img
              src="icon_profil.png"
              className="w-28 h-28 rounded-full shadow-lg absolute -bottom-12"
            ></img>
          </div>
        </div>
      </section>
      <section id="#about">
        <h1 className="text-center font-bold text-3xl mt-6 ">Tentang Kami</h1>
        <div className="flex justify-between items-center px-50 py-10 gap-96">
          <div>
            <h1 className="text-2xl text-justify mt-0">
              ini adalah sebuah portofolio saya yang menyangkut informasi
              tentang saya.disini ada profil yang berisi nama,alamat,kontak
              serta media sosial yang saya punyai atau yag dapat anda
              hubungi.selain itu,ana juga aat melihat atau mencoba karya yang
              suah saya kerjakan ataupun karya yang saya punyai
            </h1>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-blue-600 px-4 py-2 rounded border-white text-white hover:bg-blue-700">
                lihat profil
              </button>
              <button className="border-2 border-solid  border-blue-600 px-4 py-2 hover:bg-blue-600 hover:text-white">
                lihat project
              </button>
            </div>
          </div>
          <div>
            <img src="about.png" className="w-300 h-auto"></img>
          </div>
        </div>
      </section>
      <section id="project" className="px-50 py-10">
        <h1 className="text-center text-3xl mt-6 font-bold">Project Saya</h1>
        <p className="text-2xl text-center mt-5">
          dibawah ini adalah daftar project yang sudah saya buat atau saya
          kerjakan secara berkelompok dengan teman saya ataupun saya kerjakan
          seara mandiri.kalau mau melihat detailnya silakan pencet buttons di
          bawahnya aja
        </p>
        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="shadow-xl/30 p-4 rounded-lg bg-white overflow-hidden">
            <div className="relative w-full">
              <img src="project.png" className="w-full h-full object-cover rounded-t-lg" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>
          <div className="shadow-xl/30 p-4 rounded-lg bg-white">
            <div className="relative w-full">
              <img src="project.png" className="w-full rounded" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>
          <div className="shadow-xl/30 p-4 rounded-lg bg-white">
            <div className="relative w-full">
              <img src="project.png" className="w-full rounded" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>  
          <div className="shadow-xl/30 p-4 rounded-lg bg-white">
            <div className="relative w-full overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2">
              <img src="project.png" className="w-full rounded" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>  
          <div className="shadow-xl/30 p-4 rounded-lg bg-white">
            <div className="relative w-full overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2">
              <img src="project.png" className="w-full rounded" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>  
          <div className="shadow-xl/30 p-4 rounded-lg bg-white">
            <div className="relative w-full overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2">
              <img src="project.png" className="w-full h-40 object-cover transition duration-300 hover:scale-110" />
              <p className="absolute -bottom-2 -left-2 text-black/40 text-3xl font-bold px-2 py-1 rounded">
                gambar di dalam teks
              </p>
            </div>
            <h2 className="mt-4 font-bold">test-1</h2>
            <div className="flex gap-2 mt-10">
              <button className="border-2 border-solid bg-red-600 px-4 py-2 rounded border-white text-white hover:bg-red-700">
                lihat detail
              </button>
              <button className="border-2 border-solid  border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white">
                preview
              </button>
            </div>
          </div>  
        </div>
      </section>
    </>
  );
}

export default App;
