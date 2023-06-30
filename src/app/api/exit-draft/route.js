import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  // Exit the current user from "Draft Mode". This function accepts no args.

  const secret = process.env.NEXT_DATOCMS_PREVIEW_SECRET;

  const { searchParams } = new URL(request.url);

  // Check the secret and next parameters
  if (secret && searchParams.get('secret') !== secret) {
    return NextResponse.json(
      {
        message: 'Missing or invalid `secret` query string parameter!'
      },
      { status: 401 }
    );
  }

  draftMode().disable();
  // redirect('/');

  // Redirect to the homepage, or to the URL provided with the `redirect` query string parameter:
  const redirectUrl = new URL(
    searchParams.get('redirect') || '/',
    'https://example.com'
  );

  redirect(`${redirectUrl.pathname}${redirectUrl.search}`);
}
