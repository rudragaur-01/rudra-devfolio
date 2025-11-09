import type { ExperienceType } from '@/types';

const ExpCard = ({ item }: { item: ExperienceType }) => {
  return (
    <div className='relative group'>
      <div className='absolute -left-8 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300' />
      <span className='text-neutral-400 text-base xl:text-lg 2xl:text-xl lining-nums group-hover:text-primary transition duration-300'>
        {item.year}
      </span>
      <h3 className='text-lg xl:text-xl 2xl:text-2xl font-semibold mt-1'>{item.title} </h3>
      <p className='text-sm xl:text-base 2xl:text-lg text-neutral-400 mb-1'>
        Course by{' '}
        <span className='font-medium text-foreground'>{item.institute}</span>
      </p>
      <p className='text-sm xl:text-base 2xl:text-lg text-neutral-400'>{item.desc}</p>
    </div>
  );
};

export default ExpCard;
