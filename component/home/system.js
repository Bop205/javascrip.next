export default function System({ system }) {
  return (
    <section className="system">
      <div className="system-wrapper">
        <h2>
          Manage your entire community <br />
          in a single system
        </h2>

        <p>Who is Nextcent suitable for?</p>

        <div className="system-cards">
          {system.map((system) => (
            <div className="card" key={system.id}>
              <img src={system.img} alt={system.title} />
              <h3>{system.title}</h3>
              <p>{system.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
