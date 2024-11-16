'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion';
import { Home } from './Home'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

export function TheCouch() {
  const [activeTab, setActiveTab] = useState('about')

  const psychologists = [
    { name: "Dr. Emma Thompson", experience: 15, specialization: "Cognitive Behavioral Therapy" },
    { name: "Dr. Michael Chen", experience: 12, specialization: "Family Therapy" },
    { name: "Dr. Sarah Patel", experience: 10, specialization: "Trauma and PTSD" },
  ]

  return (
    <motion.div className="min-h-screen bg-white text-black font-sans" initial="hidden" animate="visible" variants={fadeIn}>
      {/* Hero Section */}
      <Home />

      {/* Navigation */}
      <motion.nav className="sticky top-0 bg-white border-b border-gray-200 z-10" variants={fadeIn}>
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