import "./page.css";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
  await getData();
  //  throw new Error("Website crashed!");
  const clients = [
    "/img/Logo (1).png",
    "/img/Logo (2).png",
    "/img/Logo (3).png",
    "/img/Logo (4).png",
    "/img/Logo (5).png",
    "/img/Logo (6).png",
    "/img/Logo (7).png",
  ];

  const systems = [
    {
      id: 1,
      img: "/img/Icon.png",
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      img: "/img/Icon (1).png",
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      img: "/img/Icon (2).png",
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  const achievements = [
    {
      id: 1,
      img: "/img/hel.png",
      number: "2,245,341",
      text: "Members",
    },
    {
      id: 2,
      img: "/img/hel1.png",
      number: "46,328",
      text: "Clubs",
    },
    {
      id: 3,
      img: "/img/hel2.png",
      number: "828,867",
      text: "Event Bookings",
    },
    {
      id: 4,
      img: "/img/hel3.png",
      number: "1,926,436",
      text: "Payments",
    },
  ];

  const blogs = [
    {
      id: 1,
      img: "/img/image 18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      img: "/img/image 19.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      img: "/img/image 20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <div>
      {/* BANNER */}
      <section className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <h1>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h1>

            <p>
              Where to grow your business as a photographer:
              site or social media?
            </p>

            <button>Register</button>
          </div>

          <div className="banner-img">
            <img src="/img/banner1.png" alt="banner" />
          </div>
        </div>
      </section>

      {/* CLIENT */}
      <section className="client">
        <div className="client-header">
          <h2>Our Client</h2>

          <p>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className="client-logo">
          {clients.map((client, index) => (
            <img src={client} alt="client" key={index} />
          ))}
        </div>
      </section>

      {/* SYSTEM */}
      <section className="system">
        <div className="system-wrapper">
          <h2>
            Manage your entire community <br />
            in a single system
          </h2>

          <p>Who is Nextcent suitable for?</p>

          <div className="system-cards">
            {systems.map((system) => (
              <div className="card" key={system.id}>
                <img src={system.img} alt={system.title} />

                <h3>{system.title}</h3>

                <p>{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT */}
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
            {achievements.map((item) => (
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

      {/* BLOG */}
      <section className="caring">
        <div className="caring-container">
          <h2>Caring is the new marketing</h2>

          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights.
          </p>

          <div className="caring-img">
            {blogs.map((blog) => (
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

      {/* DEMO */}
      <section className="suscipit">
        <div className="suscipit-content">
          <h1>
            Pellentesque suscipit <br />
            fringilla libero eu.
          </h1>

          <button>Get a Demo</button>
        </div>
      </section>
    </div>
  );
}