/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SUPABASE_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod3ZodGJvc3d6aGpoZ2FzZGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1OTAzNDgsImV4cCI6MTk5MDE2NjM0OH0.LVvsQ9sIIiP2MjZK7V99UxCEtbEJfPS2U8GV-5Amk9Q',
    SUPABASE_URL: 'https://whwvhtboswzhjhgasdif.supabase.co',
  },
};

module.exports = nextConfig;
