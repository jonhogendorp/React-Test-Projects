'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowsUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

export default function JobMarketplace() {
  const [filters, setFilters] = useState({
    languages: [],
    workLocations: [],
    cities: [],
    assignmentTypes: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Naam');

  const sortOptions = [
    { id: 'name', label: 'Naam' },
    { id: 'created', label: 'Aanmaakdatum' },
    { id: 'starting', label: 'Startdatum' },
  ];

  const jobs = [
    {
      id: '1',
      title: 'Animation',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'John Doe',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
    {
      id: '2',
      title: 'Animation Project',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'Jane Smith',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
    {
      id: '3',
      title: 'Animation Project',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'Jane Smith',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
    {
      id: '4',
      title: 'Animation Project',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'Jane Smith',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
    {
      id: '5',
      title: 'Animation Project',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'Jane Smith',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
    {
      id: '6',
      title: 'Animation Project',
      description:
        'We need an animation... Tempor turpis diam malesuada ut. Dapibus habitant eget at feugiat a. Tristique turpis magna quam odio cras turpis nunc turpis enim.',
      contactPerson: {
        name: 'Jane Smith',
        avatarUrl: '/',
      },
      organization: {
        name: 'Bowling group',
        logoUrl: '/api/placeholder/32/32',
      },
      neededFrom: '2024-11-11',
      duration: '4 days',
    },
  ];

  interface FilterSectionProps {
    title: string;
    options: { id: string; label: string }[];
  }

  interface JobCardProps {
    job: {
      id: string;
      title: string;
      description: string;
      contactPerson: {
        name: string;
        avatarUrl: string;
      };
      organization: {
        name: string;
        logoUrl: string;
      };
      neededFrom: string;
      duration: string;
    };
  }

  const FilterSection = ({ title, options }: FilterSectionProps) => (
    <div className='py-4'>
      <h3 className='text-sm font-medium text-gray-900 mb-3'>{title}</h3>
      <div className='space-y-2'>
        {options.map((option) => (
          <label key={option.id} className='flex items-center'>
            <input
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-green-600 bg-green-500 focus:ring-green-500'
            />
            <span className='ml-2 text-sm text-gray-600'>{option.label} </span>
          </label>
        ))}
      </div>
    </div>
  );

  const JobCard = ({ job }: JobCardProps) => (
    <div className='bg-white rounded-lg shadow-md border-solid border border-slate-300 hover:shadow-md hover:bg-slate-50 transition-shadow'>
      <div className='p-6'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h2 className='text-xl font-semibold text-gray-900'>{job.title}</h2>
            <p className='mt-2 text-gray-600 line-clamp-2'>{job.description}</p>
          </div>
          {/* <div className='flex gap-2'>
             <button className='text-gray-400 hover:text-gray-500'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button> 
          </div> */}
        </div>

        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center'>
              <Image
                src={job.contactPerson.avatarUrl}
                alt={job.contactPerson.name}
                className='h-8 w-8 rounded-full bg-gray-200'
                width={32}
                height={32}
              />
              <span className='ml-2 text-gray-600'>
                {job.contactPerson.name}
              </span>
            </div>

            <div className='flex items-center'>
              <div className='h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center'>
                <span className='text-white text-sm font-medium'>
                  {job.organization.name[0]}
                </span>
              </div>
              <span className='ml-2 text-gray-600'>
                {job.organization.name}
              </span>
            </div>
          </div>

          <div className='flex items-center space-x-6 text-gray-500'>
            <div>
              <span>Startdatum:</span>
              <span>{job.neededFrom}</span>
            </div>
            <div>
              <span>Dagen geleden geplaatst:</span>
              <span>{job.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-slate-300 p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-8'>
          {/* Sidebar */}
          <div className='w-64 bg-white rounded-lg shadow-sm p-4'>
            <div className='mb-4'>
              <div className='relative'>
                <MagnifyingGlassIcon className='text-slate-400 h-6 w-6' />
                <input
                  type='text'
                  placeholder='Search'
                  className='w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                />
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <FilterSection
              title='Taal'
              options={[
                { id: 'nl', label: 'Nederlands' },
                { id: 'en', label: 'Engels' },
                { id: 'fr', label: 'Frans' },
                { id: 'de', label: 'Duits' },
              ]}
            />

            <FilterSection
              title='Werklocatie'
              options={[
                { id: 'onsite', label: 'Op Locatie' },
                { id: 'remote', label: 'Thuis' },
                { id: 'hybrid', label: 'Hybride' },
              ]}
            />

            <FilterSection
              title='Plaats'
              options={[
                { id: 'groningen', label: 'Groningen' },
                { id: 'amsterdam', label: 'Amsterdam' },
                { id: 'denhaag', label: 'Den Haag' },
                { id: 'utrecht', label: 'Utrecht' },
              ]}
            />

            <FilterSection
              title='Opdracht bij'
              options={[
                { id: 'internal', label: 'Binnen de Organisatie' },
                { id: 'external', label: 'Extern' },
              ]}
            />
          </div>

          {/* Main Content */}
          <div className='bg-white rounded-lg shadow-md'>
            <div className='flex-1 space-y-4 py-7 px-14 my-3 mx-3 max-h-[80vh] overflow-y-auto overflow-x-auto scrollbar'>
              <div className='relative'>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='absolute right-5 top-5 w-10 h-10 flex items-center justify-center border border-solid border-gray-400 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-50'
                >
                  <span>
                    <ArrowsUpDownIcon className='text-slate-400 h-6 w-6' />
                    {/* {selectedSort} */}
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black border border-solid border-gray-500 ring-opacity-5'>
                    <div
                      className='py-1'
                      role='menu'
                      aria-orientation='vertical'
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSelectedSort(option.label);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-green-500 hover:text-white ${
                            selectedSort === option.label
                              ? 'bg-green-500 text-white'
                              : 'text-gray-700'
                          }`}
                          role='menuitem'
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className='flex justify-end mb-4'></div>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
