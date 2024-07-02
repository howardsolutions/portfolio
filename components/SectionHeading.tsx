type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium capitalize mb-8 text-center'>
      {children}
    </h2>
  );
}
