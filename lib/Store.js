import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const api = {};

api.createTodo = async function (todo) {
  const { error } = await supabase.from('todo').insert([todo]);

  return error;
};

api.updateTodo = async function () {};

api.deleteTodo = async function () {};

api.fetchTodos = async function (user_id) {
  let { data, error } = await supabase
    .from('todo')
    .select('*')
    .eq('user_id', user_id);
  return data;
};

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

api.passwordEmail = async function ({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  return { supaData: data, error };
};

api.changePassword = async function (password) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  return { data, error };
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

// api.onAuthStateChange = async function () {
//   const session = supabase.auth.onAuthStateChange((event, session) => {
//     if (event == 'SIGNED_OUT') {
//       return null;
//     } else if (event == 'SIGNED_IN') {
//       return session
//     }
//   });
//   return session;
// };

export default api;
