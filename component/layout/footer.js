import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/img/nex.png" alt="footer logo" />

          <p>
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>

          <div className="icon-mxh">
            <img src="/img/footer_logo1.png" alt="instagram" />
            <img src="/img/footer_logo2.png" alt="dribbble" />
            <img src="/img/footer_logo3.png" alt="twitter" />
            <img src="/img/footer_logo4.png" alt="youtube" />
          </div>
        </div>

        <div className="footer-col">
          <h3>Company</h3>

          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contact">Contact us</Link>
            </li>

            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Support</h3>

          <ul>
            <li>
              <Link href="/help">Help center</Link>
            </li>

            <li>
              <Link href="/terms">Terms of service</Link>
            </li>

            <li>
              <Link href="/legal">Legal</Link>
            </li>

            <li>
              <Link href="/privacy">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Stay up to date</h3>

          <div className="email-box">
            <input type="text" placeholder="Your email address" />
          </div>
        </div>
      </div>
    </footer>
  );
}
