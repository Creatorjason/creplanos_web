"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, Library } from "lucide-react";
let data;
export default function LandingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const data = {
  //   name: name,
  //   email: email,
  //   phone_number: parseInt(phone, 10),
  // }
  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Start spinner
    
    try {
      const res = await fetch("https://api.creplanos.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone_number: parseInt(phone, 10) }),
      });
  
      const data = await res.json();
      if (res.ok) {
        setMessage("You've successfully joined the waitlist!");
      } else {
        setMessage("Superstar 👋, you have registered already with the above details");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setLoading(false); // Stop spinner
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Library className="h-6 w-6" />
          <span className="sr-only">Creplanos</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 mx-4 lg:mx-6">
        {/* First section with gradient background */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Learn. Grow. Succeed.
                  </h1>
                  <p className="max-w-[600px] text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
                    Master in-demand skills and launch your career with Creplanos. Our hands-on training and guaranteed job offerings ensures you succeed early in your journey.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={"/ed_pic.jpg"}
                  alt="Students learning"
                  width={550}
                  height={550}
                  className="w-full max-w-[400px] lg:max-w-[550px] aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Creplanos section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Creplanos?</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <BookOpen className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Cutting-edge Curriculum</h3>
                  <p className="text-gray-500">
                    Our courses are designed to teach you in-demand skills at affordable prices, ensuring you’re well-prepared for the real world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <Briefcase className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Job Guarantee</h3>
                  <p className="text-gray-500">
                    We don’t just teach; we connect you with jobs that allows you to grow and fully utilize your new skills in a fair and enabling environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <GraduationCap className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Personalized Learning</h3>
                  <p className="text-gray-500">
                    Our adaptive platform ensures you learn at your own pace, while guaranteeing a job placement so you can thrive in your career.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to action section with signup form */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
  Join us on a journey to rewrite the narrative that success comes through illegal means—learn the skills that empower you to thrive early, the right way.
</p>

              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                  <Input
                    className="max-w-lg flex-1 border-gray-300 rounded"
                    placeholder="Hey👋 superstar, your name please"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    className="max-w-lg flex-1 border-gray-300 rounded"
                    placeholder="your email too 📧"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    className="max-w-lg flex-1 border-gray-300 rounded"
                    placeholder="and your phone number 📱"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {/* bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded */}
                  <Button type="submit" className="white rounded border-indigo-300" disabled={loading}>
  {loading ? (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ) : (
    "Join Waitlist"
  )}
</Button>

                </form>
                {message && <p className="text-sm text-green-500">{message}</p>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Creplanos. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
