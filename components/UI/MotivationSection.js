"use client";
import "@/styles/become-motivation.css";
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/navigation"; // next/navigation'dan useRouter import ediyoruz
import Image from "next/image";

const MotivationSection = ({ motivationData }) => {
  const router = useRouter(); // useRouter hook'unu çağırıyoruz

  const handleClick = () => {
    router.push("/iletisim"); // useRouter ile yönlendirme yapıyoruz
  };

  return (
    <section className="become__motivation">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__motivation-img">
            <Image
              src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242900/civata2_xjdmni.jpg"
              alt="İnoksist İletişim"
              width={200}
              height={100}
              className="w-100"
              style={{ width: "auto", height: "auto" }}
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__motivation-title">
              {motivationData.title}
            </h2>

            <button
              className="btn become__motivation-btn mt-4"
              onClick={handleClick}
            >
              {motivationData.buttonText}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MotivationSection;
