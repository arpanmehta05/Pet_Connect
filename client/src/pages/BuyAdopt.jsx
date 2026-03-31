import { useState } from 'react';
import { DogIcon, CatIcon, RabbitIcon, BirdIcon, HomeIcon, HeartIcon, ImageIcon, FilterIcon, ChevronIcon } from '../icons';

const iconMap = { dog: DogIcon, cat: CatIcon, rabbit: RabbitIcon, bird: BirdIcon };

const allPets = [
  { id: 1, icon: 'dog', name: 'Buddy', breed: 'Golden Retriever', age: '2 yrs', gender: 'Male', type: 'sale', price: '₹18,000' },
  { id: 2, icon: 'cat', name: 'Whiskers', breed: 'Persian Cat', age: '1 yr', gender: 'Female', type: 'rent', price: '₹400/day' },
  { id: 3, icon: 'rabbit', name: 'Coco', breed: 'Holland Lop', age: '8 mo', gender: 'Male', type: 'sale', price: '₹6,500' },
  { id: 4, icon: 'bird', name: 'Kiwi', breed: 'Sun Conure', age: '3 yrs', gender: 'Male', type: 'rent', price: '₹300/day' },
  { id: 5, icon: 'dog', name: 'Max', breed: 'Labrador', age: '4 yrs', gender: 'Male', type: 'sale', price: '₹15,000' },
  { id: 6, icon: 'cat', name: 'Luna', breed: 'Siamese Cat', age: '2 yrs', gender: 'Female', type: 'sale', price: '₹12,000' },
  { id: 7, icon: 'dog', name: 'Charlie', breed: 'Beagle', age: '1 yr', gender: 'Male', type: 'rent', price: '₹500/day' },
  { id: 8, icon: 'rabbit', name: 'Snowball', breed: 'Mini Rex', age: '6 mo', gender: 'Female', type: 'rent', price: '₹250/day' },
  { id: 9, icon: 'cat', name: 'Milo', breed: 'Maine Coon', age: '3 yrs', gender: 'Male', type: 'sale', price: '₹22,000' },
];

const species = ['All', 'Dog', 'Cat', 'Rabbit', 'Bird'];

export default function BuyAdopt() {
  const [filter, setFilter] = useState('all'); // 'all' | 'sale' | 'rent'
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = allPets.filter((p) => {
    const matchType = filter === 'all' || p.type === filter;
    const matchSpecies = speciesFilter === 'All' || p.icon === speciesFilter.toLowerCase();
    return matchType && matchSpecies;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
          <HomeIcon className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Buy or Rent a Pet</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Browse our curated list of adorable animals. Filter by type to find your perfect match.
        </p>
      </div>

      <div className="flex gap-6 relative">
        {/* ── Mobile filter toggle ──────────────── */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform"
          aria-label="Toggle filters"
        >
          <FilterIcon className="w-6 h-6" />
        </button>

        {/* ── Sidebar ──────────────────────────── */}
        <aside className={`
          fixed lg:sticky top-16 lg:top-20 left-0 z-30 w-72 lg:w-64 shrink-0 h-[calc(100vh-4rem)] lg:h-fit
          bg-white/90 lg:bg-white/50 backdrop-blur-xl lg:backdrop-blur-md
          border-r lg:border border-beige-dark/20 lg:rounded-2xl
          p-6 overflow-y-auto
          transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Close button mobile */}
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-gray-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
            <FilterIcon className="w-4 h-4 text-primary" />
            Filters
          </h3>

          {/* Type toggle */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Listing Type</p>
            <div className="flex flex-col gap-1.5">
              {[
                { key: 'all', label: 'All Pets' },
                { key: 'sale', label: 'For Sale' },
                { key: 'rent', label: 'For Rent' },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => { setFilter(t.key); setSidebarOpen(false); }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    filter === t.key
                      ? 'bg-primary/10 text-primary-dark'
                      : 'text-gray-500 hover:bg-beige/50 hover:text-gray-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Species filter */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Species</p>
            <div className="flex flex-col gap-1.5">
              {species.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSpeciesFilter(s); setSidebarOpen(false); }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    speciesFilter === s
                      ? 'bg-primary/10 text-primary-dark'
                      : 'text-gray-500 hover:bg-beige/50 hover:text-gray-700'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="pt-4 border-t border-beige-dark/20">
            <p className="text-xs text-gray-400">{filtered.length} pet{filtered.length !== 1 ? 's' : ''} found</p>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden" />
        )}

        {/* ── Pet Grid ──────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Active filters bar */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-sm text-gray-400">Showing:</span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary-dark">
              {filter === 'all' ? 'All Types' : filter === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
            {speciesFilter !== 'All' && (
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-secondary/20 text-primary-dark flex items-center gap-1">
                {speciesFilter}
                <button onClick={() => setSpeciesFilter('All')} className="ml-1 hover:text-red-500 transition-colors">&times;</button>
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <HomeIcon className="w-12 h-12 text-beige-dark mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No pets match your filters.</p>
              <button onClick={() => { setFilter('all'); setSpeciesFilter('All'); }} className="mt-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((pet) => {
                const Icon = iconMap[pet.icon];
                return (
                  <div key={pet.id} className="group relative bg-white/50 backdrop-blur-md rounded-2xl border border-beige-dark/20 shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Image placeholder */}
                    <div className="relative h-44 bg-gradient-to-br from-beige-light/60 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${
                          pet.type === 'sale'
                            ? 'bg-primary/90 text-white'
                            : 'bg-secondary/90 text-primary-dark'
                        }`}>
                          {pet.type === 'sale' ? 'Sale' : 'Rent'}
                        </span>
                      </div>
                      <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-400 hover:text-red-400 hover:bg-white transition-all duration-200">
                        <HeartIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-1">
                        <h2 className="text-lg font-semibold text-gray-900">{pet.name}</h2>
                        <span className="text-base font-bold text-primary-dark">{pet.price}</span>
                      </div>
                      <p className="text-sm text-gray-500">{pet.breed}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                        <span className="px-2 py-0.5 rounded-md bg-beige/60">{pet.age}</span>
                        <span className="px-2 py-0.5 rounded-md bg-beige/60">{pet.gender}</span>
                      </div>
                      <button className="mt-4 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-[0.98]">
                        {pet.type === 'sale' ? 'View Details' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
