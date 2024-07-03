type HighLightProps = {
  children: string;
};

export default function HighLight({ children }: HighLightProps) {
  return (
    <mark className='high-light rounded-xl p-1 leading-normal font-semibold mx-[1px]'>
      {children}
    </mark>
  );
}
