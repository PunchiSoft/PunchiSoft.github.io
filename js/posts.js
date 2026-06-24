(() => {
  'use strict';

  const script = document.currentScript;
  const siteRoot = script?.dataset.siteRoot || './';
  const siteRootUrl = new URL(siteRoot, document.baseURI);
  const catalogUrl = new URL('data/posts.json', siteRootUrl);
  const blogBaseUrl = new URL('blog/', siteRootUrl);

  const formatDate = (date) => new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${date}T00:00:00Z`)).replace('.', '');

  const appendMeta = (container, post) => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = post.category;

    const time = document.createElement('time');
    time.dateTime = post.date;
    time.textContent = formatDate(post.date);

    const readingTime = document.createElement('span');
    readingTime.textContent = post.readingTime;
    container.append(tag, time, readingTime);
  };

  const postUrl = (post) => new URL(post.url, blogBaseUrl).href;

  const renderPostCard = (post) => {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.id = post.id;

    const imageLink = document.createElement('a');
    imageLink.className = 'post-card-image';
    imageLink.href = postUrl(post);
    imageLink.ariaLabel = `Leer ${post.title}`;

    const image = document.createElement('img');
    image.src = new URL(post.image, catalogUrl).href;
    image.alt = post.imageAlt;
    image.loading = 'lazy';
    if (post.imageWidth) image.width = post.imageWidth;
    if (post.imageHeight) image.height = post.imageHeight;
    imageLink.append(image);

    const body = document.createElement('div');
    body.className = 'post-card-body';
    const meta = document.createElement('div');
    meta.className = 'post-meta';
    appendMeta(meta, post);

    const heading = document.createElement('h2');
    const titleLink = document.createElement('a');
    titleLink.href = postUrl(post);
    titleLink.textContent = post.title;
    heading.append(titleLink);

    const summary = document.createElement('p');
    summary.textContent = post.summary;

    const action = document.createElement('a');
    action.className = 'button button-ghost post-card-action';
    action.href = postUrl(post);
    action.append('Leer artículo ');
    const arrow = document.createElement('span');
    arrow.ariaHidden = 'true';
    arrow.textContent = '→';
    action.append(arrow);

    body.append(meta, heading, summary, action);
    article.append(imageLink, body);
    return article;
  };

  const renderPostList = (posts) => {
    const container = document.querySelector('[data-posts-list]');
    if (!container) return;
    container.replaceChildren(...posts.map(renderPostCard));
  };

  const renderLatestPost = (post) => {
    const article = document.querySelector('[data-latest-post]');
    if (!article) return;

    const meta = article.querySelector('[data-post-meta]');
    meta.replaceChildren();
    appendMeta(meta, post);

    article.querySelector('[data-post-title]').textContent = post.title;
    article.querySelector('[data-post-summary]').textContent = post.featuredSummary || post.summary;
    article.querySelector('[data-post-link]').href = postUrl(post);

    const featured = post.featured;
    if (!featured) return;
    const icon = article.querySelector('[data-feature-icon]');
    icon.src = new URL(featured.icon, siteRootUrl).href;
    article.querySelector('[data-feature-label]').textContent = featured.label;
    article.querySelector('[data-feature-title]').textContent = featured.title;
    article.querySelector('[data-feature-detail]').textContent = featured.detail;
  };

  fetch(catalogUrl)
    .then((response) => {
      if (!response.ok) throw new Error(`No se pudo cargar el catálogo (${response.status})`);
      return response.json();
    })
    .then((posts) => {
      const publishedPosts = posts
        .filter((post) => post.title && post.url && /^\d{4}-\d{2}-\d{2}$/.test(post.date))
        .sort((a, b) => b.date.localeCompare(a.date));

      if (!publishedPosts.length) return;
      renderPostList(publishedPosts);
      renderLatestPost(publishedPosts[0]);
    })
    .catch((error) => console.warn('Se mantiene el contenido de respaldo:', error));
})();
