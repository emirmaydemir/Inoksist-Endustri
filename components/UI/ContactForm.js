"use client";
import { Form, FormGroup, Input } from "reactstrap";
import Spinner from "react-bootstrap/Spinner"; // Yüklenme efekti için
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = ({ contactContent }) => {
  // -- Mail Gönderme --
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Form verilerini güncelleme fonksiyonu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Form verilerinin tüm alanlarının doldurulup doldurulmadığını kontrol et
    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key].trim() === ""
    );
    if (emptyFields.length > 0) {
      toast.error(contactContent.toastwarning);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Form doğrulaması başarısızsa e-posta gönderimini durdur
    setLoading(true);

    emailjs
      .send(
        "service_7lqnnch", // Service ID (EmailJS dashboard'dan alın)
        "template_g1d4m8m", // Template ID (EmailJS dashboard'dan alın)
        formData, // Form verileri
        "s-AQQB-m426dLJyWz" // User ID (EmailJS dashboard'dan alın)
      )
      .then((response) => {
        toast.success(contactContent.toastsuccess); // Başarı mesajı
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        }); // Formu temizle
      })
      .catch((err) => {
        toast.error(contactContent.toastfailed); // Hata mesajı
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <h6 className="fw-bold mb-4 contact-form-title">
        {contactContent.formTitle}
      </h6>
      <Form
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
        onSubmit={sendEmail}
      >
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFieldsname}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFieldsemail}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFieldscompany}
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFieldsphone}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <Input
            placeholder={contactContent.formFieldssubject}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="contact__form">
          <textarea
            rows="5"
            placeholder={contactContent.formFieldsmessage}
            style={{
              width: "100%",
              minHeight: "150px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
            className="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </FormGroup>
        <button className="contact__btn" type="submit" disabled={loading}>
          {loading ? (
            <Spinner animation="border" size="sm" />
          ) : (
            contactContent.submitButtonText
          )}
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
