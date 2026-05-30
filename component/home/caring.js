export default function Caring({ blog }) {
  return (
    <section className="caring">
      <div className="caring-container">
        <h2>Caring is the new marketing</h2>

        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights.
        </p>

        <div className="caring-img">
          {blog.map((blog) => (
            <div className="item" key={blog.id}>
              <img src={blog.img} alt={blog.title} />

              <div className="content">
                <h3>{blog.title}</h3>
                <h4 className="read">Readmore →</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
