/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Check } from "react-feather";
import axios from "axios";
import qs from "qs";
import Skeleton from "@/components/skeleton";
import channels from "@/lib/channel.json";
const pixelID = process.env.NEXT_PUBLIC_PIXEL || "393193640100982";

export default function Daftar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  const [errors, setErros] = useState<string>();

  const [nama, setNama] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();
  const [payment, setPayment] = useState<number>(1);

  // Extract the 'ref' query parameter from the URL
  const refCode = new URLSearchParams(window.location.search).get("ref");

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelID);
        ReactPixel.pageView();
        ReactPixel.track("InitiateCheckout");
      });
  });

  async function handleSubmit() {
    if (!nama || !email || !phone) {
      setErros("Nama, email dan No. Telp wajib di isi!");
      return setTimeout(() => setErros(""), 5000);
    }
    if (!payment) {
      setErros("Metode pembayaran belum di pilih");
      return setTimeout(() => setErros(""), 5000);
    }
    setSubmited(true);

    let data = qs.stringify({
      aff: false,
      kode: refCode || process.env.NEXT_PUBLIC_REFERRAL || "wkfyvj", // Use refCode if available
      price: true,
      paket: "platinum",
      promo: "DISKON50",
      nama: nama,
      phone: phone,
      email: email,
      payment: payment,
    });

    const config = {
      method: "post",
      url: "https://api.adhigama.education/v1/page/order",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        import("react-facebook-pixel")
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init(pixelID);
            ReactPixel.pageView();
            ReactPixel.track("Lead");
          });
        window.open(response.data.diagnostic.redirect, "_self");
      })
      .catch((error) => {
        console.log(error);
        setSubmited(false);
        setErros("Something went wrong: " + error);
        setTimeout(() => setErros(""), 5000);
      });
  }
  return (
    <main className="flex flex-col min-h-screen dark:bg-white text-black">
      <div className="max-w-xl mx-auto my-0 sm:my-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8"> */}
        <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 sm:rounded-xl sm:shadow-xl">
          {/* <Image src={BannerImg} alt='Digital Markeiting' className='rounded-t-xl' /> */}
          <div className="p-6">
            <h4 className="text-xl font-bold pb-4">1. Program Pelatihan</h4>
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
              <p className="font-semibold text-lg sm:font-medium">
                Paket Platinum
              </p>
              <p className="font-medium flex flex-col sm:flex-row">
                <del className="text-gray-500">Rp. 994.000</del>
                <span className="font-semibold ml-0 sm:ml-2">Rp. 497.000</span>
              </p>
            </div>

            <hr className="my-5" />
            <h4 className="text-xl font-bold pb-4">2. Data Peserta</h4>
            <div className="flex items-center justify-start mb-5">
              <label className="w-full max-w-32" htmlFor="nama">
                Nama Lengkap
              </label>
              <input
                id="nama"
                onChange={(e) => setNama(e.target.value)}
                className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="flex items-center justify-start mb-5">
              <label className="w-full max-w-32" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
              />
            </div>
            <div className="flex items-center justify-start mb-5">
              <label className="w-full max-w-32" htmlFor="phone">
                No. phone
              </label>
              <input
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
              />
            </div>
            <hr className="my-5" />

            <h4 className="text-xl font-bold pb-4">3. Pilih Pembayaran</h4>
            {/* <Tabs>
              <Tab label="Bank Transfer"> */}
            <ul className="mb-6">
              {loading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <li key={index}>
                    {" "}
                    <Skeleton classAtr="dark:border-gray-600 border w-full h-20 mb-2" />
                  </li>
                ))
              ) : (
                <li>
                  <div className="">
                    {channels &&
                      channels?.map((item) => {
                        // if (item.type === 'bank transfer' || item.type === 'virtual account') {
                        return (
                          <div
                            key={item.id}
                            className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2"
                          >
                            <input
                              id={`virtual-${item.id}`}
                              type="radio"
                              value={item.id}
                              checked={item.id == payment}
                              onChange={(e): any => {
                                setPayment(parseInt(e.target.value));
                              }}
                              name="payment"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor={`virtual-${item.id}`}
                              className="w-full py-4 ms-2 text-md font-semibold text-gray-900 dark:text-gray-300 flex flex-row items-center justify-between pr-4"
                            >
                              {item.bankName}
                              <img
                                src={`/bank/${item.logo}`}
                                alt={item.bankName}
                                className="h-7"
                              />
                            </label>
                          </div>
                        );
                        // }
                      })}
                  </div>
                </li>
              )}
            </ul>

            <div className="flex flex-col sm:flex-row items-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmited}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 font-bold text-white w-full sm:w-auto rounded-md mb-2 mr-0 sm:mb-0 sm:mr-2"
              >
                {isSubmited && <>Loading ...</>}
                {!isSubmited && <>Lanjut Pembayaran</>}
              </button>
              <div className="flex flex-row items-center font-medium">
                <Lock size={18} className="text-green-600" />
                <span className="ml-2">Pembayaran Aman dan Terenkripsi</span>
              </div>
            </div>
            {errors && (
              <p className="my-6 p-4 rounded-md bg-red-400 text-white text-sm border border-red-700">
                {errors}
              </p>
            )}
            <p className="mt-4">
              Dengan checkout, Anda setuju dengan{" "}
              <a
                href="/kebijakan-layanan"
                target="_blank"
                className="text-blue-600 font-semibold hover:underline"
              >
                Ketentuan Penggunaan
              </a>{" "}
              kami dan mengonfirmasi bahwa Anda telah membaca{" "}
              <a
                href="/kebijakan-privasi"
                target="_blank"
                className="text-blue-600 font-semibold hover:underline"
              >
                Kebijakan Privasi
              </a>{" "}
              kami.
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}
