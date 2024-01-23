import React from 'react';
import Layout from '../app/layout';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Testimonial from '../components/Testimonial';
import Link from 'next/link';

export default function HomePage() {
    // We may want to get these testimonials from a static file or API
  const testimonials = [
    { quote: 'This app has been a game-changer for my studies.', author: 'Jason Parsons', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Akshay Rash', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Nikos Dritsakos', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Luke Reinaerts', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Gideon O', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Kelvin Odinamadu', title: '4th Year CS Student' },
    { quote: 'This app has been a game-changer for my studies.', author: 'Jingyi Ma', title: '4th Year CS Student' },
  ];

  return (
    <Layout>
      <Navbar />
      <header className="text-center mt-10">
        <h1 className="text-6xl font-bold">Quiz Qrafter</h1>
        <p className="text-2xl">your personal AI tutor</p>
        <Button href="/get-started" title="Get Started" />
      </header>

      <section className="my-20">
        <h2 className="text-4xl text-center font-bold mb-6">What students are saying</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((t) => (
            <Testimonial key={`testimonial-${t.author}-${t.title}`} quote={t.quote} author={t.author} title={t.title} />
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-10 text-center">
        <h2 className="text-4xl font-bold">Ace your exams here</h2>
        <p className="text-xl mt-4 mb-8">Start with us and watch your grades skyrocket</p>
        <Button href="/get-started" title="Get Started" />
      </section>
    </Layout>
  );
}
