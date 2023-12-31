import IconBase from './IconBase';

const MailIcon = ({ size }: { size: string }) => (
  <IconBase color='bg-[#3B82F6]' text='Contact'>
    <svg
      width={size} height={size}
      viewBox='0 0 24 24'
      className='group-hover:text-[#3B82F6]'
      fill='none'
      stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
    >
      <rect width='20' height='16' x='2' y='4' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>
    </svg>
  </IconBase>
);

export default MailIcon;
