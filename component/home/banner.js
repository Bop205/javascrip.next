export default function Banner({ banner }) {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1>
            Lessons and insights <br />
            <span>from 8 years</span>
          </h1>

          <p>
            Where to grow your business as a photographer: site or social media?
          </p>

          <button>Register</button>
        </div>

        <div className="banner-img">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </section>
  );
}