export const Visual = ({ visual_type, visual_src }) => {
  const isImage = visual_type === "img";
  return (
    <div className="img-container">
      {isImage ? (
        <img src={visual_src} alt={"Image de la part"} />
      ) : (
        <iframe height="100%" width="100%" src={visual_src}></iframe>
      )}
    </div>
  );
};
