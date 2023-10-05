// pages/api/googleAvatar.js

import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export default async (req, res) => {
  // Set up OAuth2Client with your Google API credentials
  const oauth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URL,
  });

  // Use the OAuth2Client to authenticate with the user's Google account
  // You would typically obtain an access token through the OAuth2 flow
  // const accessToken = 'YOUR_ACCESS_TOKEN';

  // Initialize the Google People API client
  const people = google.people({ version: 'v1', auth: oauth2Client });

  try {
    // Get the user's profile information
    const { data } = await people.people.get({
      resourceName: 'people/me',
      personFields: 'photos',
    });

    // Get the profile image URL (assuming there is one)
    const profileImageURL = data.photos?.[0]?.url;

    if (profileImageURL) {
      // Redirect to the Google profile image URL
      res.writeHead(302, { Location: profileImageURL });
      res.end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).end();
  }
};
