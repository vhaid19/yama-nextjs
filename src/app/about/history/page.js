'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Aman, Saad } from '@/../public/index'
import Image from 'next/image'

function History() {
  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Typing Effect */}
        <div className=" w-full text-center mb-16 bg-transparent relative overflow-hidden">
          {/* Existing Typing Animation */}
          <TypeAnimation
            sequence={[
              'Our Journey Through Time',
              2000,
              'Building Excellence Since 1990',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl font-bold text-slate-100 mb-6 relative"
            repeat={Infinity}
          />

          {/* Added Company Information */}
          <h2 className="text-3xl font-bold text-slate-100 mb-4 relative">
            TechCorp Solutions
          </h2>

          <div className="max-w-3xl mx-auto relative">
            <p className="text-slate-300 mb-4">
              Established in 1990, TechCorp Solutions has been at the forefront of
              technological innovation for over three decades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Our Mission</h3>
                <p className="text-slate-300">
                  To deliver cutting-edge solutions that transform businesses and enhance
                  user experiences across the globe.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Key Milestones</h3>
                <ul className="text-slate-300 list-disc list-inside">
                  <li>1990: Company Founded</li>
                  <li>2000: Expanded to International Markets</li>
                  <li>2010: Launched Cloud Services Division</li>
                  <li>2020: Achieved Carbon Neutral Status</li>
                </ul>
              </div>
            </div>
          </div>

          <style jsx>{`
    @keyframes move {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}</style>
        </div>


        {/* Timeline */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <Image
              src={Aman}
              width={500}
              height={500}
              alt="Company Founding"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">1990 - The Beginning</h2>
              <p className="text-slate-300">
                Our company was founded with a vision to revolutionize the industry. Starting from a small office, we began our journey toward excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8"
          >
            <Image
              src="/expansion.jpg"
              width={500}
              height={500}
              alt="Global Expansion"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">2000 - Global Expansion</h2>
              <p className="text-slate-300">
                After a decade of success in the local market, we began our international expansion, opening offices across multiple continents.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <Image
              src="/innovation.jpg"
              width={500}
              height={500}
              alt="Innovation Era"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">2010 - Innovation Era</h2>
              <p className="text-slate-300">
                The last decade has been marked by groundbreaking innovations and technological advancements, cementing our position as industry leaders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8"
          >
            <Image
              src="/present.jpg"
              width={500}
              height={500}
              alt="Present Day"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Present Day</h2>
              <p className="text-slate-300">
                Today, we continue to push boundaries and set new standards in our industry, while maintaining our commitment to excellence and customer satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default History