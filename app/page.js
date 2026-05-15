import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Features",
      url: "/features",
    },
    {
      name: "Product",
      url: "/product",
    },
    {
      name: "Testimonial",
      url: "/testimonial",
    },
    {
      name: "FAQ",
      url: "/faq",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="header-inner">
          {/* LOGO */}
          <Link href="/" className="logo">
            <Image src="/img/logo.png" alt="logo" width={150} height={40} />
          </Link>

          {/* NAVIGATION */}
          <nav>
            {navItems.map((item) => (
              <Link href={item.url} key={item.name}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* BUTTONS */}
          <div className="action-group">
            <button className="login">Login</button>

            <button className="signup">Sign up</button>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <h1>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h1>

            <p>
              Where to grow your business as a photographer: site or social
              media? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo eaque ipsa nemo. Ad deserunt necessitatibus animi,
              similique recusandae laboriosam maiores ducimus doloribus sunt
              earum quaerat nobis soluta consectetur assumenda dignissimos.
            </p>

            <button>Register</button>
          </div>

          <div className="banner-img">
            <img src="/img/banner1.png" alt="banner" />
          </div>
        </div>
        <div class="dots">
          <span></span>
          <span class="active"></span>
          <span></span>
        </div>
      </section>
      
    </div>
  );
}
