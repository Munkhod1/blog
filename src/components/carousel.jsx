const Carousel = ({ slides, currentIndex }) => {
  return (
    <div
      className="flex mt-10 transition-all duration-150"
      style={{ transform: `translateX(100%)` }}
    >
      {slide.map((color, i) => (
        <div className={`min-w-full h-full ${color}`}></div>
      ))}
    </div>
  );
};
export default Carousel;
