import Link from "next/link"; // Update import statement for Next.js Link
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6" />
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
      <main className="flex-1 mx-4 lg:mx-6"> {/* Add margin here */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Learn. Grow. Succeed.
              </h1>
              <p className="max-w-[600px] text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
                Master in-demand skills and land your dream job with SkillBridge. We offer cutting-edge courses and
                guaranteed job placements.
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
            <img
              alt="Students learning"
              className="w-full max-w-[400px] lg:max-w-[550px] aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/placeholder.svg?height=550&width=550"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Creplanos?</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center"> {/* Center text */}
                  <BookOpen className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Cutting-edge Curriculum</h3>
                  <p className="text-gray-500">
                    Our courses are designed by industry experts to teach you the most in-demand skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center"> {/* Center text */}
                  <Briefcase className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Job Guarantee</h3>
                  <p className="text-gray-500">
                    We're so confident in our program that we guarantee job placement upon completion.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center"> {/* Center text */}
                  <GraduationCap className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Personalized Learning</h3>
                  <p className="text-gray-500">
                    Our adaptive learning platform ensures you learn at your own pace and style.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Students Say</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col space-y-4 p-6 text-center"> {/* Center text */}
                  <p className="text-gray-500 italic">
                    "Creplanos transformed my career. I went from a dead-end job to a thriving tech career in just 6
                    months!"
                  </p>
                  <div className="flex items-center space-x-4 justify-center mx-auto"> {/* Center content */}
                    <img
                      alt="Student portrait"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Software Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col space-y-4 p-6 text-center"> {/* Center text */}
                  <p className="text-gray-500 italic">
                    "The personalized learning approach and job placement support made all the difference. I'm now
                    working at my dream company!"
                  </p>
                  <div className="flex items-center space-x-4 justify-center mx-auto"> {/* Center content */}
                    <img
                      alt="Student portrait"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-sm text-gray-500">Data Analyst</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have already transformed their careers with Creplanos. Sign up now
                  and take the first step towards your dream job.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Creplanos. All rights reserved.</p>
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
