type ProgressBarProps = {
  value: number;
  max: number;
};

function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressColor = percentage < 50 ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className='basis-1/2 h-0.5 bg-gray-300 rounded-lg overflow-hidden'>
      <div
        className={`${progressColor} h-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
