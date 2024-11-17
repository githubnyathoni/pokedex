interface BadgeProps {
  content: string;
}

function Badge({ content }: BadgeProps) {
  return (
    <div className='rounded-xl py-1 px-2 w-fit bg-white/20 text-xs font-semibold text-white capitalize f'>
      {content}
    </div>
  );
}

export default Badge;
