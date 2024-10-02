const SectionHeading = ({ title }) => {
  return (
    <div className="text-center md:mb-5 lg:mb-20">
      <h2 className="text-5xl font-bold pb-3  text-accent">{title}</h2>
      <div className="border border-accent  w-24 mx-auto"></div>
    </div>
  );
};
export default SectionHeading;
