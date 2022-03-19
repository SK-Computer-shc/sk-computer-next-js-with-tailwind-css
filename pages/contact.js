import React from 'react'
import Head from "next/head"

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact-us | SK Computer Saharsa Bihar</title>
        <meta name="description" content="We (SK Computer Saharsa Bihar) Repair and sale all electronics products as well as computer,printer(HP,Brother,Epson etc) Laptop,TFT,LCD,LED and its accessories" />
        <meta name="keywords"
          content="Contact, contact-SK-Computer-Saharsa, Contact SK Computer, Sk Computer Saharsa, sk computer Baghwa, SK-Computer, Printer Service Center, Computer Repair Center, Online Store, offline store, printer sell, sale, Services, Saharsa, Bihar India" />
        <meta name="author" content="Nitish Jha" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>

      <div className="relative mx-4 my-1">
        <h2
          className="font-serif text-5xl font-semibold text-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          CONTACT US</h2>
        <img className="w-full max-h-96 shadow-2xl rounded-2xl" src="/assets/Contact-us-sk-computer.be495efb.be495efb.png"
          alt="Contact SK Computer" />
      </div>
      <h3 className="font-serif text-2xl font-extrabold text-center text-inherit">WE'RE READY, LET'S TALK.</h3>
      <div
        className="max-w-screen-xl mt-2 flex flex-wrap justify-evenly py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="py-4">
          <form action="" />
          <h6 className="font-mono font-semibold">FULL NAME</h6>
          <input type="text" name="name" value=""
            className="bg-gray-300 inline-block w-full text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter Your Name" />
          <h6 className="font-mono font-semibold mt-3">EMAIL</h6>
          <input type="email" name="Email" id=""
            className="bg-gray-300 inline-block w-full text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter Your Email-Id" />
          <h6 className="font-mono font-semibold mt-3">PHONE</h6>
          <input type="number" name="Phone" id=""
            className="bg-gray-300 inline-block w-full text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter Your Number" />
          <h6 className="font-mono font-semibold mt-3">MESSAGE</h6>
          <textarea
            className="bg-gray-300 inline-block w-full text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter Your Message"></textarea>

          <button
            className="bg-blue-500 text-white p-1 rounded-lg focus:outline-none focus:shadow-outline hover:shadow-lg">Send
            Message</button>
        </div>
        <div className="font-serif lg:mt-0">
          <h3 className="text-2xl font-semibold font-serif underline underline-offset-4">CONTACT INFO</h3>
          <h6 className="mt-4 ">Address</h6>
          <p>Saharsa Bihar India</p>
          <h6>Email Us</h6>
          <p>skelectronics@outlook.in  skelectronics07@gmail.com</p>
          <h6>Call Us</h6>
          <p>+91 9939527286</p>
        </div>
      </div>


    </div>
  )
}

export default contact