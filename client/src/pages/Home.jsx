import { Link } from 'react-router-dom';
import { PawIcon, HomeIcon, HeartHandIcon, StethoscopeIcon, BowlIcon } from '../icons';

const features = [
  { Icon: HomeIcon, title: 'Buy / Adopt', desc: 'Find your perfect companion from verified breeders and shelters.', to: '/buy-adopt' },
  { Icon: HeartHandIcon, title: 'Rent‑a‑Friend', desc: 'Spend quality time with a furry buddy for a day.', to: '/rent-a-friend' },
  { Icon: StethoscopeIcon, title: 'Meet a Vet', desc: 'Online & in-person consultations with trusted vets.', to: '/meet-a-vet' },
  { Icon: BowlIcon, title: 'Stray Feed', desc: 'Help strays near you by organising community feeds.', to: '/stray-feed' },
];

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-primary/15 rounded-full blur-3xl -z-10 animate-pulse [animation-delay:1s]" />

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
          <PawIcon className="w-8 h-8 text-primary" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Every Pet Deserves
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary-dark bg-clip-text text-transparent">
            A Loving Home
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
          Buy, adopt, rent-a-friend, consult a vet, or feed a stray — all in
          one warm, furry community. Welcome to{' '}
          <span className="font-semibold text-primary-dark">Pet Connect</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/buy-adopt"
            className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:from-primary-dark hover:to-primary-deeper transition-all duration-300 active:scale-95"
          >
            Explore Pets
          </Link>
          <Link
            to="/rent-a-friend"
            className="px-8 py-3 text-base font-semibold text-primary-dark border border-primary/60 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
          >
            Rent a Friend
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ Icon, title, desc, to }) => (
            <Link
              key={to}
              to={to}
              className="group p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-beige-dark/20 shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-base font-semibold text-gray-900 mb-1.5">{title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
