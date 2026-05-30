import Link from "next/link";

export default function Header() {
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
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">
          <img src="/img/logo.png" alt="logo" />
        </Link>

        <nav>
          {navItems.map((item) => (
            <Link href={item.url} key={item.name}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="action-group">
          <button className="login">Login</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </header>
  );
}