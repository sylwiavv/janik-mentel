import slugify from 'slugify';

export const getPageSlug = (galeriaTitle) => `/galeria/${slugify(galeriaTitle.toLowerCase())}`;
