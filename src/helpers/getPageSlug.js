import slugify from 'slugify';

export const getPageSlug = (galleryTitle) => `/galeria/${slugify(galleryTitle.toLowerCase())}`;
