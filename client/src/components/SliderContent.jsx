const SliderContent = ({ item }) => {
  const { id, title, img } = item;
  return (
    <div
      className="flex flex-col sm:flex-row h-full justify-center items-center w-full z-20"
      key={id}
    >
      <div className="flex flex-col justify-center items-center h-full sm:ml-11">
        <img className="w-full " src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-center items-center sm:w-1/2 h-full text-2xl text-center">
        <h3 className="text-lg sm:text-xl lg:text-3xl sm:pr-8 font-normal z-40">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SliderContent;
