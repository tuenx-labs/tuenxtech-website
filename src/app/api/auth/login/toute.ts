import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // 1. Check if user exists in Supabase
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password) // Note: In a real app, we would hash passwords!
    .single();

  if (error || !data) {
    return NextResponse.json({ success: false, error: "Invalid email or password" }, { status: 401 });
  }

  // 2. Return success and the user data
  return NextResponse.json({ success: true, user: data });
}