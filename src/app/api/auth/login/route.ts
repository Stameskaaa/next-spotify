import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Authorization code is missing' }, { status: 400 });
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.CLIENT_SECRET}`,
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REDIRECT_URI as string,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.access_token, data.refresh_token, data.expires_in);

      return NextResponse.json(data, {
        headers: {
          'Set-Cookie': [
            `accessToken=${data.access_token};  Path=/; Max-Age=${data.expires_in}`,
            `refreshToken=${data.refresh_token};  Path=/; Max-Age=604800`,
          ].join('; '),
        },
      });
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
