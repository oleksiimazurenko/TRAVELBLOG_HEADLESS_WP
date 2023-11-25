import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

const getErrorMessage = (error: unknown) => {
  let response: NextResponse<{ revalidated: boolean; message: string }>;

  if (error instanceof Error) {
    response = NextResponse.json(
      { revalidated: false, message: error.message },
      { status: 400 }
    );
  } else if (error && typeof error === 'object' && 'message' in error) {
    response = NextResponse.json(
      { revalidated: false, message: String(error.message) },
      { status: 400 }
    );
  } else if (typeof error === 'string') {
    response = NextResponse.json(
      { revalidated: false, message: error },
      { status: 400 }
    );
  } else {
    response = NextResponse.json(
      { revalidated: false, message: 'Что-то пошло не так.' },
      { status: 400 }
    );
  }

  return response;
};

export async function GET(request: Request) {
  let type = new URL(request.url).searchParams.get('type');
  let path = '';

  switch (type) {
    case 'post':
      path = '/blog/[postSlug]';
      break;
    case 'page':
      path = '/[pageSlug]';
      break;
    case 'home':
      path = '/blog';
      break;
  }

  if (
    new URL(request.url).searchParams.get('secret') !==
    process.env.REVALIDATION_SECRET
  ) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      path: path,
      time: Date.now(),
    });
  } catch (error) {
    return getErrorMessage(error);
  }
}
