export default function Client({ client }) {
  return (
    <section className="client">
      <div className="client-header">
        <h2>Our Client</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className="client-logo">
        {client.map((client, index) => (
          <img key={index} src={client} alt="client" />
        ))}
      </div>
    </section>
  );
}