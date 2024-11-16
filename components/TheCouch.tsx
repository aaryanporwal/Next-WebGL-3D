'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Home } from './Home'

export function TheCouch() {
  const [activeTab, setActiveTab] = useState('about')

  const psychologists = [
    { name: "Dr. Weasel", experience: 15, specialization: "Cognitive Behavioral Therapy", imageUrl: "https://placebear.com/g/300/300" },
    { name: "Dr. Lion", experience: 12, specialization: "Family Therapy", imageUrl: "https://placebear.com/g/300/300" },
    { name: "Dr. Fox", experience: 10, specialization: "Trauma and PTSD", imageUrl: "https://placebear.com/g/300/300" },
  ]

  return (
    <motion.div className="min-h-screen text-black font-sans" initial="hidden" animate="visible">
      {/* Hero Section */}
      <Home />
      {/* Navigation */}
      <motion.nav className="sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-center space-x-4">
          <Button 
            variant={activeTab === 'about' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('about')}
          >
            About
          </Button>
          <Button 
            variant={activeTab === 'psychologists' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('psychologists')}
          >
            Our Psychologists
          </Button>
          <Button 
            variant={activeTab === 'booking' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('booking')}
          >
            Book a Session
          </Button>
        </div>
      </motion.nav>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'about' && (
          <section id="about" className="mb-12">
            <h2 className="text-4xl font-bold mb-4">About The Couch</h2>
            <p className="text-xl leading-relaxed">
              The Couch provides a simple and beautiful way to connect with experienced psychologists. 
              Our platform is designed to make therapy accessible and comfortable, just like a cozy couch in your living room.
            </p>
          </section>
        )}

        {activeTab === 'psychologists' && (
          <section id="psychologists" className="mb-12">
            <h2 className="text-4xl font-bold mb-8">Our Psychologists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {psychologists.map((psych, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image src={psych.imageUrl} alt={psych.name} width={300} height={300} className="w-full h-48 object-cover mb-4 rounded-lg" />
                    <CardTitle>{psych.name}</CardTitle>
                    <CardDescription>{psych.experience} years of experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Specialization: {psych.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'booking' && (
          <section id="booking" className="mb-12">
            <h2 className="text-4xl font-bold mb-8">Book a Session</h2>
            {/* <div className="flex flex-col items-center"> */}
              <Card>
                <CardHeader>
                  <CardTitle>Select a Date and Time</CardTitle>
                  <CardDescription>Choose a convenient slot for your therapy session</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-4">
                    <Calendar className="w-16 h-16 text-red-500" />
                  </div>
                  <p className="text-center mb-4">Our booking system is simple and user-friendly.</p>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    View Available Slots
                  </Button>
                </CardContent>
              </Card>
            {/* </div> */}
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 The Couch. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  )
}