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
    <div className='flex flex-col gap-6'>
      <div className=' flex items-center justify-between gap-x-10'>
        <h1 className=' text-3xl font-bold'>{profileData.name}</h1>
        <p className='text-sm'>{profileData.title}</p>
      </div>

      <img
        src='/profilePic.jpg'
        alt='Profile Pic'
        className=' rounded-2xl object-cover
             lg:h-96 lg:w-auto
             xl:h-[400px]'
      />

      <div>
        <p className='text-sm text-neutral-300'>Specialization:</p>
        <p className='text-lg capitalize'>{profileData.specialization}</p>
      </div>

      <div>
        <p className='text-sm text-neutral-300'>Tech Stack:</p>
        <ul className='text-neutral-200 list-disc list-inside'>
          {profileData.techStack.map(({ label, value }, idx) => (
            <li key={idx}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className='text-sm text-neutral-300'>Based in:</p>
        <p className='text-lg capitalize'>{profileData.location}</p>
      </div>

      <div className='flex gap-3 pt-2 text-neutral-500'>
        {socialLinks.map((social, i) => {
          const Icon = social.icon;
          return (
            <a
              key={i}
              href={social.link}
              className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
            >
              <Icon className='size-6' />
            </a>
          );
        })}
      </div>

      <Button className='mt-4'>Let's Work!</Button>
    </div>
  );
};

export default Profile;
