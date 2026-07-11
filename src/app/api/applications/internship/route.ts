import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, linkedinUrl, motivation, track } = body;

    // Send data to Supabase
    const { data, error } = await supabase
      .from('internship_applications')
      .insert([
        { 
          full_name: fullName, 
          email: email, 
          linkedin_url: linkedinUrl, 
          motivation: motivation,
          track: track
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('Application error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
