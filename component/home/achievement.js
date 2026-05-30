export default function Achievement({ achievement}) {
  return (
    <section className="achievement">
      <div className="achievement-content">
        <div className="left">
          <h1>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h1>

          <p>We reached here with our hard work and dedication</p>
        </div>

        <div className="achievement-img">
          {achievement.map((item) => (
            <div className="img" key={item.id}>
              <img src={item.img} alt={item.text} />

              <div className="text">
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
