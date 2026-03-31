import { Link } from 'react-router-dom';
import { StethoscopeIcon, UserIcon, StarIcon, CalendarIcon, LocationIcon } from '../icons';

const vets = [
  { id: 1, name: 'Dr. Priya Sharma', specialty: 'Small Animals', rating: 4.9, reviews: 127, experience: '12 yrs', location: 'Delhi', available: true, fee: '₹600' },
  { id: 2, name: 'Dr. Arjun Rao', specialty: 'Exotic Pets', rating: 4.8, reviews: 94, experience: '8 yrs', location: 'Bangalore', available: true, fee: '₹750' },
  { id: 3, name: 'Dr. Meera Joshi', specialty: 'Surgery & Ortho', rating: 4.9, reviews: 203, experience: '15 yrs', location: 'Mumbai', available: false, fee: '₹1,200' },
  { id: 4, name: 'Dr. Rahul Patel', specialty: 'Dermatology', rating: 4.7, reviews: 68, experience: '6 yrs', location: 'Pune', available: true, fee: '₹550' },
  { id: 5, name: 'Dr. Sneha Gupta', specialty: 'Cardiology', rating: 4.9, reviews: 156, experience: '10 yrs', location: 'Chandigarh', available: true, fee: '₹900' },
  { id: 6, name: 'Dr. Vikram Singh', specialty: 'General Checkup', rating: 4.6, reviews: 312, experience: '20 yrs', location: 'Delhi', available: true, fee: '₹400' },
];

export default function MeetAVet() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
          <StethoscopeIcon className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Meet a Vet</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Trusted veterinary professionals available for online and in-person consultations.
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
        {[
          { value: '200+', label: 'Verified Vets' },
          { value: '50k+', label: 'Consultations' },
          { value: '4.8', label: 'Avg Rating' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold text-primary-dark">{s.value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {vets.map((v) => (
          <div key={v.id} className="group bg-white/50 backdrop-blur-md rounded-2xl border border-beige-dark/20 shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Header band */}
            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <UserIcon className="w-7 h-7" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h2 className="text-base font-semibold text-gray-900 truncate">{v.name}</h2>
                    {v.available && (
                      <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" title="Available" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{v.specialty}</p>
                </div>
              </div>

              {/* Info chips */}
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-600">
                  <StarIcon className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{v.rating}</span>
                  <span className="text-[10px] text-amber-400">({v.reviews})</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-beige/60 text-xs text-gray-500">{v.experience} exp</span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-beige/60 text-xs text-gray-500">
                  <LocationIcon className="w-3 h-3" />
                  {v.location}
                </div>
              </div>

              {/* Fee & CTA */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-beige-dark/15">
                <div>
                  <p className="text-xs text-gray-400">Consultation Fee</p>
                  <p className="text-lg font-bold text-primary-dark">{v.fee}</p>
                </div>
                <Link
                  to={`/vet/book/${v.id}`}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 active:scale-[0.98] ${
                    v.available
                      ? 'text-white bg-gradient-to-r from-primary to-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30'
                      : 'text-gray-400 bg-beige/60 cursor-not-allowed'
                  }`}
                  onClick={(e) => !v.available && e.preventDefault()}
                >
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4" />
                    {v.available ? 'Book Now' : 'Unavailable'}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
