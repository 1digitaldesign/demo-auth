import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'; // Verify Next.js license compliance

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure the method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Extract the authorization code from the request body
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  // ID.me Configuration (Read from environment variables)
  const idMeClientId = process.env.IDME_CLIENT_ID;
  const idMeClientSecret = process.env.IDME_CLIENT_SECRET;
  const idMeRedirectUri = process.env.IDME_REDIRECT_URI;

  if (!idMeClientId || !idMeClientSecret || !idMeRedirectUri) {
    return res.status(500).json({
      error:
        'Missing ID.me environment variables (IDME_CLIENT_ID, IDME_CLIENT_SECRET, IDME_REDIRECT_URI)',
    });
  }

  try {
    const tokenResponse = await axios.post(
      'https://api.id.me/oauth/token',
      new URLSearchParams({
        client_id: idMeClientId,
        client_secret: idMeClientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: idMeRedirectUri,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token, id_token } = tokenResponse.data;

    // In a real app, you would:
    // 1. Validate the ID token (e.g., check signature, issuer, audience, expiration).
    // 2. Store the access token securely (e.g., in an HTTP-only cookie).
    // 3. Potentially retrieve user information from the ID.me userinfo endpoint.
    // 4. Create a session for the user.

    res.json({ accessToken: access_token, idToken: id_token });
  } catch (error) {
    console.error('Token exchange error:', error);
    res.status(500).json({ error: 'Token exchange failed' });
  }
}
