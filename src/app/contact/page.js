import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
          ใส่ยังไงครับ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav p-1 ms-auto mb-2 mb-lg-3">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-4 mt-3"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item frontsize">
                <Link className="nav-link fs-4 mt-3" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4 mt-3" href="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4 mt-3" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-dark mx-2 fs-5" type="submit">
                SignUp
              </button>
              <button className="btn btn-outline-dark mx-2 fs-5" type="submit">
                SignIn
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}