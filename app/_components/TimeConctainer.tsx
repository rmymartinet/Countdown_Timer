interface TimeContainerProps {
  time?: number;
  day: string;
}

const TimeContainer = ({ time, day }: TimeContainerProps) => {
  return (
    <div className="grid grid-rows-2 place-items-center gap-10">
      <div className="text-4xl lg:text-6xl font-semibold border-2 border-black rounded-xl p-1 lg:p-10 md:p-6 shadow-xl">
        {time}
      </div>
      <p className="text-sm md:text-xl">{day}</p>
    </div>
  );
};

export default TimeContainer;
