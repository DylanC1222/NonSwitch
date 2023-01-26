import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const api = {};

api.signOut = async function () {
  const { error } = await supabase.auth.signOut();
  return error;
};

api.signInOAuth = async function () {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  return data.user;
};

api.signIn = async function ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return data.user;
};

api.signUp = async function ({ firstName, lastName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  return data.user;
};

api.getSession = async function () {
  const { data, error } = await supabase.auth.getSession();
  return data;
};

api.getUser = async function () {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export default api;
