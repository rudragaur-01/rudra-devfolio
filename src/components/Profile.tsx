import { Button } from './ui/button';
import { socialLinks } from '@/constants';

const Profile = () => {
  const profileData = {
    name: 'Rudra Gaur',
    title: 'Full Stack Developer',
    specialization:
      'Frontend & Backend Development, UI/UX Design, API Development, Payment Integration',
    techStack: [
      {
        label: 'Frontend',
        value: 'React.js, Next.js, Tailwind CSS, Chakra UI',
      },
      {
        label: 'Backend',
        value: 'Node.js, Express.js, JWT Authentication, Strapi CMS',
      },
      {
        label: 'Database',
        value: 'PostgreSQL',
      },
      {
        label: 'Tools & Platforms',
        value: 'Stripe, Sitecore (CH1), Git, Agile Workflows',
      },
    ],
    location: 'Delhi, India',
  };

  return (
    <div className='flex flex-col gap-6 xl:gap-8 2xl:gap-10'>
      <div className='flex flex-col gap-2 xl:gap-3 pb-4 border-b border-[var(--portfolio-border-secondary)]'>
        <h1 className='text-2xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-[var(--portfolio-text-primary)] to-[var(--portfolio-text-tertiary)] bg-clip-text text-transparent'>
          {profileData.name}
        </h1>
        <p className='text-sm xl:text-base 2xl:text-lg text-[var(--portfolio-text-muted)] font-medium'>
          {profileData.title}
        </p>
      </div>
      <div className='relative overflow-hidden rounded-2xl'>
        <img
          src='/profilePic.jpg'
          alt='Profile Pic'
          className='rounded-2xl object-cover w-full h-auto max-h-80 xl:max-h-96 2xl:max-h-[400px] transition-transform duration-300 hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl' />
      </div>
      <div className='space-y-2 xl:space-y-3 pt-2'>
        <p className='text-xs xl:text-sm 2xl:text-base text-[var(--portfolio-text-muted)] uppercase tracking-wider font-semibold'>
          Specialization
        </p>
        <p className='text-sm xl:text-base 2xl:text-lg text-[var(--portfolio-text-secondary)] leading-relaxed'>
          {profileData.specialization}
        </p>
      </div>
      <div className='space-y-2 xl:space-y-3 pt-2'>
        <p className='text-xs xl:text-sm 2xl:text-base text-[var(--portfolio-text-muted)] uppercase tracking-wider font-semibold'>
          Location
        </p>
        <p className='text-sm xl:text-base 2xl:text-lg text-[var(--portfolio-text-secondary)]'>
          {profileData.location}
        </p>
      </div>
      <div className='flex justify-between gap-2 xl:gap-3 pt-4 border-t border-[var(--portfolio-border-secondary)]'>
        {socialLinks.map((social, i) => {
          const Icon = social.icon;
          return (
            <a
              key={i}
              href={social.link}
              className='hover:text-primary border border-[var(--portfolio-border-primary)] p-2.5 xl:p-3 rounded-lg hover:border-primary hover:bg-[var(--portfolio-bg-tertiary)]/50 transition-all duration-200'
              title={social.label}
            >
              <Icon className='size-5 xl:size-6 2xl:size-6' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
