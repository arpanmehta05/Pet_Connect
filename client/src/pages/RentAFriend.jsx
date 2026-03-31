import { HeartHandIcon, DogIcon, CatIcon } from '../icons';

const iconMap = { dog: DogIcon, cat: CatIcon };

export default function RentAFriend() {
  const friends = [
    { icon: 'dog', name: 'Charlie', trait: 'Playful & energetic', rate: '₹500 / day' },
    { icon: 'cat', name: 'Mochi', trait: 'Calm & cuddly', rate: '₹400 / day' },
    { icon: 'dog', name: 'Daisy', trait: 'Great with kids', rate: '₹550 / day' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
          <HeartHandIcon className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Rent‑a‑Friend
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Not ready to commit? Spend a day with a furry companion and brighten
          both your lives.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {friends.map((f, i) => {
          const Icon = iconMap[f.icon];
          return (
            <div
              key={i}
              className="group p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-beige-dark/20 shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{f.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{f.trait}</p>
              <p className="mt-3 text-lg font-bold text-primary-dark">{f.rate}</p>
              <button className="mt-5 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-[0.98]">
                Book a Day
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
