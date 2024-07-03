type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl sm:text-4xl md:text-5xl font-medium capitalize mb-10 text-center'>
      {children}
    </h2>
  );
}
