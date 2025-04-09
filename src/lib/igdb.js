// src/lib/igdb.js

const clientId = 'xkkabosjcql2537zv87orgiwm8hz73';
const clientSecret = 'dxsldmjqmxws6vt1b3cjlxnmeq5psv';

export async function getAccessToken() {
  const response = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials'
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const data = await response.json();
  return data.access_token;
}

export async function getGames() {
    const token = await getAccessToken();
  
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'text/plain'
      },
      body: 'fields name,cover.url,summary; limit 10; sort popularity desc;'
    });
  
    return await response.json();
  }