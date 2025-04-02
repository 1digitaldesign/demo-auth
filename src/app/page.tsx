// src/app/page.tsx

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
// This is the main entry point for the application, rendering the header, login form, and footer.
// It uses the Header, LoginForm, and Footer components to create a complete page layout.