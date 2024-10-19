import Link from "next/link";
import "@/styles/not-found.css"; // Eğer CSS kullanıyorsanız, bu satırı ekleyin

const NotFoundPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2" style={{ fontSize: "33px" }}>
                  Kaybolmuş gibisiniz
                </h3>
                <p style={{ fontSize: "18px" }}>Aradığınız sayfa mevcut değil!</p>

                <Link className="link_404" href="/" style={{ fontSize: "20px", backgroundColor: "black" }}>
                  Ana Sayfa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
