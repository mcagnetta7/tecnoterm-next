/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',           // abilita next export
  images: { unoptimized: true } // se usi <Image>, lo rende compatibile con export
};
export default nextConfig;