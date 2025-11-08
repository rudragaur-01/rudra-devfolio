import { Button } from './ui/button';
import { socialLinks } from '@/constants';

const Profile = () => {
  return (
    <aside
      className='w-full max-w-md mx-auto 
                 bg-neutral-900 border border-neutral-700 
                 rounded-2xl p-6 text-white 
                 flex flex-col items-center gap-5 
                 shadow-lg shadow-neutral-800/40 
                 lg:sticky lg:top-8 lg:h-fit'
    >
      {/* Profile Image */}
      <img
        src='/avatar.jpg'
        alt='Portrait of Rudra Gaur'
        className='w-40 h-40 rounded-full object-cover border-2 border-neutral-700 shadow-md'
      />

      {/* Name & Role */}
      <div className='text-center space-y-1'>
        <h1 className='text-2xl font-bold tracking-tight'>Rudra Gaur</h1>
        <p className='text-sm text-neutral-400'>Full Stack Developer</p>
      </div>

      {/* Specialization */}
      <div className='text-center mt-2 space-y-1'>
        <p className='text-sm text-neutral-400 uppercase tracking-wide'>
          Specialization
        </p>
        <p className='text-base text-neutral-200 leading-snug'>
          Building modern, scalable, and user-centric web applications
        </p>
      </div>

      {/* Location */}
      <div className='text-center mt-1 space-y-1'>
        <p className='text-sm text-neutral-400 uppercase tracking-wide'>
          Based In
        </p>
        <p className='text-base text-neutral-200'>Delhi, India</p>
      </div>

      {/* Social Links */}
      <div className='flex justify-center gap-4 pt-3'>
        {socialLinks.map(({ icon: Icon, link }, i) => (
          <a
            key={i}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-full border border-neutral-700 text-neutral-400 
                       hover:text-primary hover:border-primary 
                       transition-all duration-200'
          >
            <Icon className='size-5' />
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        variant='outline'
        className='mt-3 w-full text-sm sm:text-base font-medium rounded-xl 
                   hover:bg-primary hover:text-white transition-colors duration-200'
      >
        Let’s Work Together!
      </Button>
    </aside>
  );
};

export default Profile;
