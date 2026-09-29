export const PartView = ({ part }) => {
  return <div className="container">
        <h2>{part.title}</h2>
        <div>
          <p>Price : <strong>{part.price}</strong></p>
          <p>{part.description}</p>
        </div>
      </div>
}