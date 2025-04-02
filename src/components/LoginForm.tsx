'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function LoginForm() {
  const [idMeUrl, setIdMeUrl] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  // ID.me Configuration (Replace with your actual values)
  const clientId = 'YOUR_IDME_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI'; // e.g., http://localhost:3000/callback
  const scope = 'openid email profile'; // Adjust scopes as needed
  const responseType = 'code';
  const state = 'YOUR_STATE'; // Generate a random string for security

  useEffect(() => {
    // Construct the ID.me authorization URL
    const authorizationUrl = `https://api.id.me/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=${responseType}&scope=${encodeURIComponent(
      scope
    )}&state=${state}`;
    setIdMeUrl(authorizationUrl);

    // Check for the authorization code in the URL (after redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // Send the code to the Next.js API route to exchange for tokens
      axios
        .post('/api/idme/token', { code }) // Call the API route
        .then((response) => {
          setAccessToken(response.data.accessToken);
          setIdToken(response.data.idToken);
        })
        .catch((error) => {
          console.error('Token exchange error:', error);
        });
    }
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-row grid-gap">
        <main
          className="usa-layout-docs__main desktop:grid-col-9 usa-prose"
          id="main-content"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Log in to My Account</h1>
            <p className="mb-6">
              To access your account, please log in using ID.me.
            </p>
          </div>

          {/* ID.me Login Button */}
          {accessToken ? (
            <div className="text-center">
              <p>You are logged in!</p>
              <p>Access Token: {accessToken}</p>
              <p>ID Token: {idToken}</p>
            </div>
          ) : (
            <div className="text-center">
              <Link
              href={idMeUrl || ''}
              className="idme-connect-button"
              id="idme-connect-button"
              style={{ display: 'inline-block', width: '200px', height: '60px' }}
              >
              <Image
                src="/assets/idme/img/sign-in.svg"
                alt="Sign in with ID.me"
                width={200}
                height={60}
                style={{ background: '#08833D' }}
              />
              </Link>
            </div>
            )}

            {/* Create a New Account Section */}
            <div className="text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Create a New Account</h2>
            <Link
              href="https://api.id.me/registration" // Replace with the actual URL for creating a new account
              className="idme-create-account-button"
              id="idme-create-account-button"
            >
              <div
              style={{
                display: 'inline-block',
                width: '220px',
                height: '44px',
                border: '1px solid #08833D', // Reduced border size
                borderRadius: '4px',
              }}
              >
              <Image
                src="/assets/idme/img/create-acct.svg"
                alt="Create a new account"
                width={200}
                height={60}
              />
              </div>
            </Link>
          </div>

          {/* Security Information Section */}
          <div className="mt-8">
            <div
              className="usa-summary-box margin-top-4"
              role="region"
              aria-labelledby="security-info-heading"
            >
              <div className="usa-summary-box__body">
                <h3
                  className="usa-summary-box__heading"
                  id="security-info-heading"
                >
                  Protect Your Account
                </h3>
                <div className="usa-summary-box__text">
                  <ul>
                    <li>Use a strong, unique password.</li>
                    <li>Enable multi-factor authentication if available.</li>
                    <li>
                      Be wary of phishing attempts. TSP will never ask for your
                      password via email.
                    </li>
                    <li>Log out completely when you are finished.</li>
                  </ul>
                  <Link className="usa-link" href="#">
                    Learn more about account security
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginForm;
