import slugify from 'slugify';

export const getPageSlug = (title) => `/galeria/${slugify(title.toLowerCase())}`;
