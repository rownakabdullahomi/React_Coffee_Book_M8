const Heading = ({ title, subtitle }) => {
  return (
    <div class="flex flex-col w-full justify-center items-center my-12">
      <h1 class="text-xl md:text-2xl lg:text-4xl font-thin mb-4">
        {title}
      </h1>
      <p class="text-xs md:text-base text-gray-600 text-center font-thin">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
