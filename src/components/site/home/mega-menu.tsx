'use client'

import Image from 'next/image'
import { useState } from 'react'

import { megaMenuData } from '@/content/home'
import { Link } from '@/i18n/navigation'

export function MegaMenu() {
  const [activeDeptId, setActiveDeptId] = useState(megaMenuData[0].id)

  const activeDept = megaMenuData.find((dept) => dept.id === activeDeptId) || megaMenuData[0]

  return (
    <div className='absolute left-0 top-full hidden w-screen bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] group-hover:block'>
      {}
      <div className='mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-8 px-[1rem] py-[2rem] sm:px-[1.5rem] lg:px-[6.25rem]'>
        {}
        <div className='col-span-3 border-r border-gray-100 pr-6'>
          <ul className='flex flex-col gap-1'>
            {megaMenuData.map((dept) => (
              <li
                key={dept.id}
                onMouseEnter={() => setActiveDeptId(dept.id)}
                className={`cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeDeptId === dept.id
                    ? 'bg-blue-50 text-brand-blue'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                }`}
              >
                {dept.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='col-span-4 pl-4'>
          <ul className='flex flex-col gap-4'>
            {activeDept.services.map((service, idx) => (
              <li key={idx}>
                <Link
                  href={service.href as any}
                  className='text-[15px] font-medium text-gray-700 transition-colors hover:text-brand-blue'
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='col-span-5 flex items-start justify-center overflow-hidden'>
          <Image
            src='/images/baner_nho.jpg'
            alt='IVF Đồng Tâm'
            width={1400}
            height={735}
            className='h-auto w-full object-cover transition-all duration-500 hover:scale-105'
          />
        </div>
      </div>
    </div>
  )
}
