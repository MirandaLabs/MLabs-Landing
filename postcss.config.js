// PostCSS config — mantém o pipeline principal e documenta opção de otimização
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Para otimizar CSS em produção, você pode instalar cssnano e habilitar aqui:
    // cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
  },
}
