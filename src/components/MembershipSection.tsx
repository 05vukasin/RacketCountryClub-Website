import React, { useState } from 'react';
import './MembershipSection.css';
import { useLanguage } from '../context/LanguageContext';

const MembershipSection = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Zahtev poslat:', { email, phone });
    alert(language === 'sr'
      ? 'Vaš zahtev je poslat. Hvala na interesovanju!'
      : 'Your request has been submitted. Thank you!');
    setEmail('');
    setPhone('');
  };

  return (
    <section className="Membership" id="membership">
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
