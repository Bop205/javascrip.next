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
            <Image
              src="/img/logo.png"
              alt="logo"
              width={150}
              height={40}
            />
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
            <button className="login">
              Login
            </button>

            <button className="signup">
              Sign up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}