import ProgressBar from '@/components/ProgressBar';

interface DetailBaseStatProps {
  name: string;
  value: number;
  max: number;
}

function DetailBaseStat({ name, value, max }: DetailBaseStatProps) {
  return (
    <div className='flex flex-row w-full items-center'>
      <span className='opacity-40 basis-1/4'>{name}</span>
      <span className='basis-1/4 text-center'>{value}</span>
      <ProgressBar
        value={value}
        max={max}
      />
    </div>
  );
}

export default DetailBaseStat;
