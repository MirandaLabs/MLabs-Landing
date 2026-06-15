import React from 'react';

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Caminho base sem sufixo de tamanho e sem extensão. Ex: /images/optimized/assets/cases/cardapio_qr/dashboard_admin */
  src: string;
  /** Extensão desejada (default: avif) */
  extension?: string;
}

/**
 * Componente simples para gerar variações de imagem otimizadas.
 * Espera que os arquivos existam com sufixos -small / -medium / -large + extensão.
 * Ex: dashboard_admin-small.avif, dashboard_admin-medium.avif, dashboard_admin-large.avif
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, extension = 'avif', ...imgProps }) => {
  const small = `${src}-small.${extension}`;
  const medium = `${src}-medium.${extension}`;
  const large = `${src}-large.${extension}`;

  return (
    <picture>
      <source srcSet={`${small}`} media="(max-width: 640px)" type={`image/${extension}`} />
      <source srcSet={`${medium}`} media="(max-width: 1024px)" type={`image/${extension}`} />
      <source srcSet={`${large}`} media="(min-width: 1025px)" type={`image/${extension}`} />
      <img
        src={medium} // fallback
        alt={alt}
        loading="lazy"
        className={className}
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedImage;
