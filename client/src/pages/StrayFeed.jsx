import { useState } from 'react';
import { BowlIcon, LocationIcon, ClockIcon, UsersIcon, CheckCircleIcon, AlertIcon, HeartIcon } from '../icons';

const feedData = [
  { id: 1, type: 'good', title: 'Stray dog rescued and sheltered', location: 'Sector 22, Chandigarh', time: '2 hours ago', description: 'A golden stray found near the market has been rescued by volunteers and taken to Pawsome Shelter. She is being treated for minor injuries.', helpers: 5, resolved: true },
  { id: 2, type: 'urgent', title: 'Injured dog needs immediate help', location: 'MG Road, Bangalore', time: '30 minutes ago', description: 'A medium-sized brown dog with a limp on its hind leg was spotted near the bus stop. Needs veterinary attention urgently.', helpers: 2, resolved: false },
  { id: 3, type: 'good', title: 'Community feeding drive completed', location: 'Andheri West, Mumbai', time: '5 hours ago', description: '15 stray dogs were fed during the morning drive. Special thanks to all 8 volunteers who showed up!', helpers: 8, resolved: true },
  { id: 4, type: 'urgent', title: 'Stray puppies need shelter', location: 'Koramangala, Bangalore', time: '1 hour ago', description: 'A litter of 4 puppies found abandoned under a bridge. They look about 3 weeks old and need warmth and milk.', helpers: 1, resolved: false },
  { id: 5, type: 'good', title: 'Monthly vaccination camp held', location: 'Dwarka, Delhi', time: '1 day ago', description: '32 stray dogs were vaccinated against rabies in a free camp organized by Pet Connect volunteers and local vets.', helpers: 12, resolved: true },
  { id: 6, type: 'urgent', title: 'Dog stuck in construction site', location: 'Hinjewadi, Pune', time: '45 minutes ago', description: 'A stray has wandered into an active construction site and cannot find a way out. Workers are keeping it safe but need help extracting it.', helpers: 0, resolved: false },
  { id: 7, type: 'good', title: 'Stray adopted after 3 years', location: 'Chandigarh University', time: '3 hours ago', description: 'Brownie, the campus stray everyone loved, was officially adopted by a faculty member. He now has a forever home!', helpers: 0, resolved: true },
];

const tabs = [
  { key: 'all', label: 'All Updates' },
  { key: 'urgent', label: 'Urgent' },
  { key: 'good', label: 'Good News' },
];

export default function StrayFeed() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = feedData.filter((f) => activeTab === 'all' || f.type === activeTab);

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
          <BowlIcon className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Stray Feed</h1>
        <p className="mt-3 text-gray-500 max-w-lg mx-auto">
          Real-time updates on stray animals in your area. Help, share, or celebrate — every action matters.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-white/60 text-gray-500 border border-beige-dark/30 hover:border-primary/30 hover:text-primary-dark'
            }`}
          >
            {tab.key === 'urgent' && <AlertIcon className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
            {tab.key === 'good' && <CheckCircleIcon className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-beige-dark/30 hidden sm:block" />

        <div className="space-y-5">
          {filtered.map((item) => {
            const isUrgent = item.type === 'urgent';
            return (
              <div key={item.id} className="relative sm:pl-14 group">
                {/* Timeline dot */}
                <div className={`
                  hidden sm:flex absolute left-[11px] top-6 w-[18px] h-[18px] rounded-full border-[3px] items-center justify-center
                  ${isUrgent
                    ? 'bg-red-100 border-red-400'
                    : 'bg-green-100 border-green-400'
                  }
                `}>
                  <div className={`w-1.5 h-1.5 rounded-full ${isUrgent ? 'bg-red-500' : 'bg-green-500'}`} />
                </div>

                {/* Card */}
                <div className={`
                  bg-white/50 backdrop-blur-md rounded-2xl border shadow-sm
                  hover:shadow-xl hover:shadow-primary/6 transition-all duration-300
                  overflow-hidden
                  ${isUrgent
                    ? 'border-red-200/60'
                    : 'border-beige-dark/20'
                  }
                `}>
                  {/* Top accent */}
                  <div className={`h-1 ${isUrgent ? 'bg-gradient-to-r from-red-400 to-orange-400' : 'bg-gradient-to-r from-green-400 to-emerald-400'}`} />

                  <div className="p-5 sm:p-6">
                    {/* Badge + time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`
                        inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider
                        ${isUrgent
                          ? 'bg-red-50 text-red-600'
                          : 'bg-green-50 text-green-600'
                        }
                      `}>
                        {isUrgent
                          ? <><AlertIcon className="w-3.5 h-3.5" /> Urgent</>
                          : <><CheckCircleIcon className="w-3.5 h-3.5" /> Good News</>
                        }
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {item.time}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>

                    {/* Location + helpers */}
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <LocationIcon className="w-3.5 h-3.5 text-primary" />
                          {item.location}
                        </div>
                        {item.helpers > 0 && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                            <UsersIcon className="w-3.5 h-3.5 text-primary" />
                            {item.helpers} helper{item.helpers !== 1 ? 's' : ''}
                          </div>
                        )}
                      </div>

                      {isUrgent ? (
                        <button className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 active:scale-[0.98]">
                          Offer Help
                        </button>
                      ) : (
                        <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-primary-dark border border-primary/30 rounded-xl hover:bg-primary/10 transition-all duration-200">
                          <HeartIcon className="w-3.5 h-3.5" />
                          Celebrate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
