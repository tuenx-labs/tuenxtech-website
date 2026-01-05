import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, password } = body;

  // Send data to Supabase
  const { data, error } = await supabase
    .from('users')
    .insert([
      { 
        first_name: firstName, 
        last_name: lastName, 
        email: email, 
        password: password 
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}