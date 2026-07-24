import "./styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section footer-brand">
          <h2 className="footer-heading">Phonix</h2>
          <p className="footer-description">
            Phonix: The Ultimate Online Shopping Destination in Kuwait |
            Buy 100% genuine consumer electronics and home appliances from
            Phonix, the largest online electronics store in Kuwait.
          </p>
        </div>

        <div className="footer-section footer-info">
          <h2 className="footer-heading">General Information</h2>
          <p className="footer-link">About Phonix</p>
          <p className="footer-link">Help</p>
          <p className="footer-link">FAQs</p>
          <p className="footer-link">Terms & Conditions</p>
          <p className="footer-link">Sitemap</p>
        </div>

        <div className="footer-section footer-services">
          <h2 className="footer-heading">Our Services</h2>
          <p className="footer-link">Manual & Software</p>
          <p className="footer-link">Warranty Information</p>
          <p className="footer-link">Our Stores</p>
          <p className="footer-link">Service Center</p>
          <p className="footer-link">Track Repair</p>
          <p className="footer-link">Contact Us</p>
        </div>

        <div className="footer-section footer-account">
          <h2 className="footer-heading">Account</h2>
          <p className="footer-link">Rewards</p>
          <p className="footer-link">Vouchers</p>
          <p className="footer-link">Orders</p>
          <p className="footer-link">Member Community</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>Copyright © 2026 Phonix Inc. All rights reserved.</p>
        </div>

        <div className="footer-social">
          <p className="footer-social-title">Stay Connected</p>
          <p className="footer-social-link">Twitter</p>
          <p className="footer-social-link">Facebook</p>
          <p className="footer-social-link">Instagram</p>
          <p className="footer-social-link">YouTube</p>
        </div>
      </div>
    </footer>
  );
}