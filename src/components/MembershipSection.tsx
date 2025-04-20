import React, { useState } from 'react';
import './MembershipSection.css';
import { useLanguage } from '../context/LanguageContext';

const MembershipSection = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://racketcountryclubbackend-1081514700612.us-central1.run.app/api/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phoneNumber: phone
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
        setPhone('');
        setTimeout(() => setShowSuccess(false), 6000); // sakrij posle 6 sekundi
      } else {
        const error = await response.text();
        alert(language === 'sr' ? `Greška: ${error}` : `Error: ${error}`);
      }
    } catch (err) {
      alert(language === 'sr'
        ? 'Greška prilikom slanja zahteva.'
        : 'An error occurred while submitting your request.');
    }
  };

  return (
    <section className="Membership" id="membership">
      {showSuccess && (
        <div className="Membership-success-banner">
          {language === 'sr'
            ? '✅ Email je poslat! Proverite i spam folder.'
            : '✅ Email sent! Please check your spam folder too.'}
        </div>
      )}

      <div className="Membership-container">
        <h2 className="Membership-title">
          {language === 'sr' ? 'Postani Član' : 'Become a Member'}
        </h2>
        <p className="Membership-description">
          {language === 'sr'
            ? 'Popunite formular i neko iz našeg tima će Vas kontaktirati u vezi članstva.'
            : 'Fill out the form and someone from our team will reach out to you about membership.'}
        </p>
        <form className="Membership-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={language === 'sr' ? 'Email adresa' : 'Email address'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder={language === 'sr' ? 'Broj telefona' : 'Phone number'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="Membership-button">
            {language === 'sr' ? 'Pošalji zahtev' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MembershipSection;
