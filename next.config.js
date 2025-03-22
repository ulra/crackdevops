/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    // Agregar regla para manejar archivos .glb
    config.module.rules.push({
      test: /\.(glb|gltf|png|jpg|jpeg|svg)$/,
      type: 'asset/resource', // Usa el módulo de activos de Webpack 5+
      generator: {
        filename: 'static/[ext]/[name][ext]', // Guarda los archivos en esta carpeta
      },
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },


  
};

module.exports = nextConfig;
