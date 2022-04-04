import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const services = () => {
    return (
        <div>
            <Head>
                <title>Services Offered | SK Computer</title>
                <meta name="description" content="We (SK Computer Saharsa Bihar) Repair and Sell all electronics products as well as computer,printer(HP,Brother,Epson etc) Laptop,TFT,LCD,LED and its accessories" />
                <meta name="keywords"
                    content="SK Computer, Sk Computer Saharsa, sk computer Baghwa, SK-Computer, Printer Service Center, Computer Repair Center, Online Store, offline store, printer sell, sale, Services, Saharsa, Bihar India" />
                <meta name="author" content="Nitish Jha" />
                <link rel="icon" href="/favicon.ico?" />
            </Head>

            <div
                className="relative my-1 mx-4 justify-center flex">
                <h1 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-4xl font-semibold text-slate-800 ">SERVICES</h1>
                <Image src="/assets/service-main.eea7dfab.eea7dfab.jpg" alt="SK Computer Service" className="rounded-2xl" width={1350} height={400} />
            </div>

            <div className="">
                <h1 className="text-3xl text-center underline font-semibold font-serif">OUR TOP SERVICES</h1>
            </div>

            <div className="containe flex flex-wrap justify-center">
                <div className="service1 w-96 m-4 border-2 rounded-2xl overflow-hidden shadow-slate-500 shadow-lg">
                    <Image src="/assets/sk-computer-store-1.39c83483.39c83483.jpg" alt="SK Computer Store" className="" width={384} height={200} />
                    <a href="#" className="font-serif font-bold underline hover:no-underline">
                        <h3>
                            Best Computer Store In Saharsa Bihar
                        </h3>
                    </a>
                    <p>
                        We Sell Branded and Assembled Computers, Laptops and all its parts and accessories.
                    </p>
                </div>

                <div className="service2 w-96 m-4 border-2 rounded-2xl overflow-hidden shadow-slate-500 shadow-lg">
                    <Image src="/assets/Printer-store.c652a816.c652a816.jpg" alt="SK Printer Store" width={384} height={200}/>
                    <a href="#" className="font-serif font-bold underline hover:no-underline">
                        <h3>
                            Best printer Sell and Service Center In Saharsa
                        </h3>
                    </a>
                    <p>
                        We Sell all types (Inktank, Laserjet, Dot-Matrix, Thermal) of all Brand (Hp, Epson, Brother, Wep) New as
                        well as used printers.
                    </p>
                </div>

                <div className="service3 w-96 m-4 border-2 rounded-2xl overflow-hidden shadow-slate-500 shadow-lg">
                    <Image src="/assets/sk-computer-service-center.8f8c9170.8f8c9170.jpg" alt="Desktop, Laptop And Printer Services" width={384} height={200} />
                    <a href="#" className="font-serif font-bold underline hover:no-underline">
                        <h3>
                            Service center
                        </h3>
                    </a>
                    <p>
                        We Provide every Service Related to Desktop, Laptop, Printer, Toner, etc.
                    </p>
                </div>

                <div className="service4 w-96 m-4 border-2 rounded-2xl overflow-hidden shadow-slate-500 shadow-lg">
                    <Image src="/assets/Repair-center-Sk-Computer-saharsa.58553bc2.58553bc2.jpg" alt="Repair Center" width={384} height={200} />
                    <a href="#" className="font-serif font-bold underline hover:no-underline">
                        <h3>
                            Best PC Repair Center
                        </h3>
                    </a>
                    <p>
                        We Repair Laptop, Desktop, Printer, LCD, LED, Toner and all Related parts
                    </p>
                </div>
            </div>

            <div className="font-serif first-letter:uppercase text-slate-900 text-2xl text-center rounded-lg m-8">
                We are trying to get our website online as soon as possible. Till then you can take advantage of the services by
                Messaging via Whatsapp or Visiting our offline store at Saharsa, Supaul and Madhepura in Bihar India.
            </div>
            <div className="flex flex-wrap justify-center">
                <a href="https://wa.me/+919939527286"><button
                    className="font-serif font-bold m-4 p-4 rounded-xl bg-gray-300 hover:bg-gray-400">Click Here To Chat With us
                    On Whatsapp</button></a>
                <a href="tel:+919939527286"><button
                    className="font-serif font-bold m-4 p-4 rounded-xl bg-gray-300 w-96 hover:bg-gray-400">Click To
                    Call</button></a>
            </div>

        </div>
    )
}

export default services