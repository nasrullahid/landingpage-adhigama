"use client";

import React, { useEffect } from "react";
import Image from "next/image";
const pixelID = process.env.NEXT_PUBLIC_PIXEL || "393193640100982";

export default function Home() {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelID);
        ReactPixel.pageView();
        ReactPixel.track("ViewContent");
      });
  });

  function triggerPixel() {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelID);
        ReactPixel.pageView();
        ReactPixel.track("AddToCart");
      });
  }
  return (
    <main className="flex flex-col min-h-screen dark:bg-white text-black">
      <section className="h-screen flex flex-col items-center justify-center max-w-4xl mx-auto text-center p-4 sm:p-8 md:p-12">
        <Image
          src="/logo.png"
          alt="Logo Adhigama Education"
          className="dark:invert"
          width={125}
          height={40}
          priority
        />
        <h1 className="text-3xl font-bold">
          Raih Sukses CPNS dan PPPK Bersama <br />
          Adhigama Education
        </h1>
        <h2 className="text-xl text-secondary font-semibold italic my-4">
          Jalur Lulusku, Jalan Suksesmu!
        </h2>
        <h3 className="text-2xl font-bold">
          Daftarkan dirimu sekarang dan dapatkan bimbingan belajar online
          terbaik untuk persiapan CPNS dan PPPK!
        </h3>
        <Image
          src="/hero.png"
          alt="Hero Adhigama Education"
          width={305}
          height={265}
          priority
        />
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold my-8">
            Temukan Kunci Sukses di Tes Masuk CPNS & PPPK!
          </h2>
          <p className="text-lg mb-8">
            Dalam mengejar cita-cita menjadi bagian dari institusi prestisius
            seperti CPNS dan PPPK, persiapan bukanlah sekadar opsi. Bersama
            Adhigama Education, kami menghadirkan panduan bimbingan belajar
            eksklusif yang membuka pintu menuju kesuksesan Anda.
          </p>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold my-8">
            MENGAPA MEMILIH ADHIGAMA EDUCATION?
          </h2>
          <p className="text-lg mb-8">
            Kami bukan hanya sekadar bimbingan belajar, melainkan mitra dalam
            setiap langkah perjalanan Anda meraih sukses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col justify-between items-center rounded-lg shadow-lg m-2 p-5">
              <Image
                src="/garansi.png"
                alt="Garansi"
                width={100}
                height={100}
                priority
              />
              <div className="text-center mt-3">
                <h4 className="font-bold text-lg">BERGARANSI LULUS</h4>
                <p className="text-md">Jaminan 100% Uang Kembali</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center rounded-lg shadow-lg m-2 p-5">
              <Image
                src="/modul.png"
                alt="Modul"
                width={100}
                height={100}
                priority
              />
              <div className="text-center mt-3">
                <h4 className="font-bold text-lg">FLEKSIBEL BELAJAR</h4>
                <p className="text-md">Cukup Buka HP atau Labtop</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center rounded-lg shadow-lg m-2 p-5">
              <Image src="/ai.png" alt="AI" width={100} height={100} priority />
              <div className="text-center mt-3">
                <h4 className="font-bold text-lg">AI TECHNOLOGY</h4>
                <p className="text-md">Menggunakan Teknologi AI</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center rounded-lg shadow-lg m-2 p-5">
              <Image
                src="/best.png"
                alt="Mentor"
                width={100}
                height={100}
                priority
              />
              <div className="text-center mt-3">
                <h4 className="font-bold text-lg">MENTOR TERBAIK</h4>
                <p className="text-md">Didukung oleh mentor berpengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold my-8 uppercase">
            Apa Yang Anda Dapatkan:
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M6 18v-5h5v5H6m1-4v3h3v-3H7m6-6.5h5v2h-5v-2M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.17c-.5-.11-1-.17-1.5-.17H19V5H5v14h8.17c.17.72.46 1.39.83 2H5m6-15v5H6V6h5m-1 4V7H7v3h3m9 2v1.5a4 4 0 0 1 4 4c0 .82-.25 1.58-.67 2.21l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 19 15v1.5l-2.25-2.25L19 12m0 11v-1.5a4 4 0 0 1-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 19 20v-1.5l2.25 2.25L19 23z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">Unlimited Tryout</h4>
                <p className="small">
                  Anda dapat menjalani latihan ujian sebanyak yang Anda
                  inginkan, memastikan kesiapan optimal untuk menghadapi tes
                  penerimaan
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M23 11h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m0 9h-5v-7h5v7M20 2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">
                  Computer Assisted Test (CAT)
                </h4>
                <p className="small">
                  Simulasikan pengalaman ujian sungguhan dengan Computer
                  Assisted Test (CAT).{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M22 16v2H6V2h2v11.57l5.71-9 3.16 2.11 2.42-2.42 1.42 1.42-3.58 3.61-2.84-1.89L8.82 16M4 20V4H2v18h20v-2z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">Report Pembelajaran</h4>
                <p className="small">
                  Dapatkan analisis yang membantu untuk fokus pada area yang
                  perlu ditingkatkan.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="m20 22.09 2.45 1.49-.65-2.81 2.2-1.88-2.89-.25L20 16l-1.13 2.64-2.87.25 2.18 1.88-.68 2.81 2.5-1.49M14.08 21H2a2.074 2.074 0 0 1-2-2V5c.04-1.09.91-1.96 2-2h20c1.09.04 1.96.91 2 2v10.53c-.58-.53-1.25-.92-2-1.19V5H2v14h12.08c-.05.33-.08.66-.08 1 0 .34.03.68.08 1M14 17H4v-1.25c0-1.66 3.34-2.5 5-2.5 1.66 0 5 .84 5 2.5V17m0-6h4v1h-4v-1M9 7C7.63 7 6.5 8.13 6.5 9.5S7.63 12 9 12s2.5-1.13 2.5-2.5S10.37 7 9 7m5 2h6v1h-6V9m0-2h6v1h-6V7z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">
                  Perengkingan Nasional
                </h4>
                <p className="small">
                  Bandingkan prestasi Anda dengan peserta lainnya, memberikan
                  gambaran nyata tentang posisi Anda di tingkat nasional.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M15 4v7H5.17L4 12.17V4h11m1-2H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m5 4h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">Chat Mentor AI</h4>
                <p className="small">
                  Bimbingan cepat dan responsif dengan Chat Mentor AI. Dapatkan
                  jawaban atas pertanyaan Anda seputar materi, strategi ujian,
                  dan tips sukses lainnya.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M17.5 14.33c.79 0 1.63.08 2.5.24v1.5c-.62-.16-1.46-.24-2.5-.24-1.9 0-3.39.33-4.5.99v-1.69c1.17-.53 2.67-.8 4.5-.8M13 12.46c1.29-.53 2.79-.79 4.5-.79.79 0 1.63.07 2.5.23v1.5c-.62-.16-1.46-.24-2.5-.24-1.9 0-3.39.34-4.5.99m4.5-3.65c-1.9 0-3.39.32-4.5 1V9.84c1.23-.56 2.73-.84 4.5-.84.79 0 1.63.08 2.5.23v1.55c-.74-.19-1.59-.28-2.5-.28m3.5 8V7c-1.04-.33-2.21-.5-3.5-.5-2.05 0-3.88.5-5.5 1.5v11.5c1.62-1 3.45-1.5 5.5-1.5 1.19 0 2.36.16 3.5.5m-3.5-14c2.35 0 4.19.5 5.5 1.5v14.56c0 .12-.05.24-.16.35-.11.09-.23.17-.34.17-.11 0-.19-.02-.25-.05-1.28-.69-2.87-1.03-4.75-1.03-2.05 0-3.88.5-5.5 1.5-1.34-1-3.17-1.5-5.5-1.5-1.66 0-3.25.36-4.75 1.07-.03.01-.07.01-.12.03-.04.01-.08.02-.13.02-.11 0-.23-.04-.34-.12a.475.475 0 0 1-.16-.35V6c1.34-1 3.18-1.5 5.5-1.5 2.33 0 4.16.5 5.5 1.5 1.34-1 3.17-1.5 5.5-1.5z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">LMS Modul Ebook</h4>
                <p className="small">
                  Akses materi pembelajaran secara praktis melalui Learning
                  Management System (LMS) dengan modul ebook yang komprehensif
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M5.5 16.8c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8C3.6 12 2 13.6 2 15.5 2 18.1 5.5 22 5.5 22S9 18.1 9 15.5C9 13.6 7.4 12 5.5 12M4 6c-.6 0-1 .4-1 1v3.6c.6-.3 1.3-.5 2-.6V8h10v8h-4c-.1.7-.2 1.4-.5 2H16c.6 0 1-.4 1-1v-3.5l4 4v-11l-4 4V7c0-.6-.4-1-1-1H4z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">
                  LMS Modul Video Pembelajaran
                </h4>
                <p className="small">
                  Pelajari konsep-konsep kunci melalui modul video pembelajaran
                  interaktif. Pengajaran multimedia untuk memperjelas materi dan
                  meningkatkan retensi informasi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="M15 12v8H5v-8h10m1-2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4V11a1 1 0 0 0-1-1M3 3.86l1.4 1.38c3.1-3.05 8.1-3.05 11.2 0L17 3.86C13.14.05 6.87.05 3 3.86m2.8 2.77L7.2 8c1.55-1.5 4.05-1.5 5.6 0l1.4-1.37c-2.32-2.29-6.08-2.29-8.4 0z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">
                  Live Streaming dengan Mentor
                </h4>
                <p className="small">
                  Jalin interaksi langsung dengan mentor melalui live streaming.
                  Dapatkan wawasan mendalam, ajukan pertanyaan, dan raih
                  pemahaman yang lebih baik tentang materi ujian.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-md rounded-lg p-5">
              <svg viewBox="0 0 24 24" className="w-14 text-blue-900">
                <path
                  fill="currentColor"
                  d="m9.78 18.65.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                ></path>
              </svg>
              <div className="text-center mt-3">
                <h4 className="text-xl font-bold mb-4">
                  FGD (Forum Group Discussion)
                </h4>
                <p className="small">
                  Diskusikan ide, strategi, dan tantangan bersama sesama peserta
                  bimbingan belajar melalui Forum Group Discussion (FGD).
                  Suasana kolaboratif untuk memperkaya persiapan Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold my-8 uppercase">
            Cerita Para Alumnus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
            <div className="w-full rounded-lg shadow-lg flex flex-col justify-between">
              <div className="h-3/4 mb-1">
                <Image
                  src="/bimbel-cpns-(1).png"
                  alt="Syafar"
                  className="w-full mx-auto h-ful rounded-t-lg"
                  width={360}
                  height={360}
                  priority
                />
              </div>
              <div className="p-2 mt-2">
                <h4 className="mt-1 text-center font-semibold capitalize">
                  Syafar
                </h4>
                <p className="mt-1 text-sm text-center">CPNS Guru</p>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-lg flex flex-col justify-between">
              <div className="h-3/4 mb-1">
                <Image
                  src="/bimbel-cpns-(3).png"
                  alt="ni made ratih"
                  className="w-full mx-auto h-ful rounded-t-lg"
                  width={360}
                  height={360}
                  priority
                />
              </div>
              <div className="p-2 mt-2">
                <h4 className="mt-1 text-center font-semibold capitalize">
                  ni made ratih
                </h4>
                <p className="mt-1 text-sm text-center">CPNS Polri</p>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-lg flex flex-col justify-between">
              <div className="h-3/4 mb-1">
                <Image
                  src="/bimbel-cpns-(4).png"
                  alt="Juamidil"
                  className="w-full mx-auto h-ful rounded-t-lg"
                  width={360}
                  height={360}
                  priority
                />
              </div>
              <div className="p-2 mt-2">
                <h4 className="mt-1 text-center font-semibold capitalize">
                  Juamidil
                </h4>
                <p className="mt-1 text-sm text-center">CPNS Kominfo</p>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-lg flex flex-col justify-between">
              <div className="h-3/4 mb-1">
                <Image
                  src="/bimbel-cpns-(5).png"
                  alt="ninik lestari"
                  className="w-full mx-auto h-ful rounded-t-lg"
                  width={360}
                  height={360}
                  priority
                />
              </div>
              <div className="p-2 mt-2">
                <h4 className="mt-1 text-center font-semibold capitalize">
                  ninik lestari
                </h4>
                <p className="mt-1 text-sm text-center">CPNS Guru SD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-2xl font-bold my-8 uppercase">
            Mentor Profesional dan Berbengalaman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-8">
            <div className="w-full shadow-lg">
              <Image
                src="/izzad.png"
                alt="Izzad"
                className="w-full h-ful"
                width={200}
                height={250}
                priority
              />
            </div>
            <div className="w-full shadow-lg">
              <Image
                src="/nurul.png"
                alt="nurul"
                className="w-full h-ful"
                width={200}
                height={250}
                priority
              />
            </div>
            <div className="w-full shadow-lg">
              <Image
                src="/bayu.png"
                alt="bayu"
                className="w-full h-ful"
                width={200}
                height={250}
                priority
              />
            </div>
            <div className="w-full shadow-lg">
              <Image
                src="/shahnaz.png"
                alt="shahnaz"
                className="w-full h-ful"
                width={200}
                height={250}
                priority
              />
            </div>
            <div className="w-full shadow-lg">
              <Image
                src="/reza.png"
                alt="reza"
                className="w-full h-ful"
                width={200}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center p-4 sm:p-8 md:p-12">
          <h2 className="text-4xl font-bold my-8">
            Bergabunglah dengan Ribuan Peserta yang Telah Sukses Bersama Kami!
          </h2>
          <p className="text-xl mb-8">
            Jangan lewatkan kesempatan menjadi bagian dari komunitas sukses
            Adhigama Education. Bersiaplah untuk menghadapi ujian dengan penuh
            percaya diri dan pengetahuan yang mumpuni.
          </p>
          <h3 className="font-bold text-2xl mb-4">INGAT!!!!</h3>
          <Image
            src="/garansi.png"
            alt="Garansi"
            className="mx-auto mb-2"
            width={100}
            height={100}
            priority
          />
          <p className="text-xs italic">* Syarat dan Ketentuan Berlaku</p>
          <h4 className="font-bold text-3xl my-5">
            Daftar Sekarang dan Raih Masa Depan Gemilang Anda!
          </h4>

          {/* <p className="mb-12 border-dashed border-2 border-orange-700 p-4 rounded-xl w-96 mx-auto flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl mb-4">Harga Normal <del className="text-secondary">Rp. 994.000</del></h2>
            <h2 className="font-bold text-2xl">Hari Ini Sisa <span className="text-secondary">Rp. 197.000</span></h2>
          </p> */}
          <a
            onClick={() => { triggerPixel() }}
            href="https://wa.me/62882020528374?text=Halo+Admin%2C+Saya+mau+daftar+bimbel+Adhigama+Education"
            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-1 focus:ring-orange-200 rounded-lg text-lg font-semibold py-5 px-10 text-center dark:text-white dark:focus:ring-orange-900"
          >
            Daftar Sekarang
          </a>
          <Image
            src="/logo-orange.png"
            alt="Logo Adhigama Education"
            className="my-20 mx-auto"
            width={184}
            height={50}
            priority
          />
        </div>
      </section>
    </main>
  );
}
