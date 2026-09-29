export function Visual({ type, src, title }) {
  if (type === "video") {
    return (
      <iframe
        src={src}
        title={`Vidéo de ${title}`}
        loading="lazy"
        allowFullScreen
      />
    );
  }

  return <img src={src} alt={title} />;
}
