/**
 * @copyright 2025 Rudra Gaur
 * @license Apache-2.0
 */

import { socialLinks } from '@/constants';

const Profile = () => {
  const profileData = {
    name: 'Rudra Gaur',
    title: 'Full Stack Developer',
    location: 'Delhi, India',
  };

  return (
    <div className='flex flex-col gap-6 xl:gap-8 2xl:gap-10 relative overflow-hidden rounded-xl md:rounded-xl lg:rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl'>
      {/* Background Image Container */}
      <div
        className='relative w-full h-[520px] sm:h-[560px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[1200px] rounded-xl md:rounded-xl lg:rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-[1.015] hover:brightness-[1.02] bg-cover bg-center'
        style={{ backgroundImage: "url('/profilePic.jpg')" }}
      >
        {/* Gradient Overlay (Minimal) */}
        <div className='absolute inset-0 bg-gradient-to-t from-[var(--portfolio-bg-primary)]/40 via-[var(--portfolio-bg-primary)]/15 to-transparent'></div>

        {/* Text content */}
        <div className='absolute bottom-8 left-6 sm:left-10 text-white z-10 max-w-[90%] sm:max-w-[70%]'>
          <h1 className='text-3xl sm:text-3xl  3xl:text-6xl font-bold text-white drop-shadow-md'>
            {profileData.name}
          </h1>
          <h2 className='text-base sm:text-lg 3xl:text-3xl font-medium text-gray-200 mt-2 tracking-wide'>
            {profileData.title}
          </h2>
          <p className='text-sm 3xl:text-2xl sm:text-base text-gray-300 mt-1 flex items-center gap-1'>
            <span className='inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
            {profileData.location}
          </p>

          {/* Social Links */}
          <div className='flex gap-3 mt-5'>
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={social.label}
                  className='p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200'
                >
                  <Icon className='size-5 sm:size-6 3xl:size-8 text-white' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
