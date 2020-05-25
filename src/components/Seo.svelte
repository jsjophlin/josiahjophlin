<script>
  export let description, srcName, title, url;
  const urlBase = "https://res.cloudinary.com/dqeuiyobt/image/upload";
  const urlId = "v1590432733/josiahjophlin.dev";
</script>

<title>{title}</title>
{#if description}
  <meta name="description" content={description} />
{/if}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:title" content={title} />
{#if description}
  <meta property="og:description" content={description} />
{/if}
{#if srcName}
  <meta
    property="og:image"
    content={`${urlBase}/c_lfill,g_face,h_315,q_100,w_600,x_0/${urlId}/${srcName}`} />
{/if}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={url} />
<meta property="twitter:title" content={title} />
{#if description}
  <meta property="twitter:description" content={description} />
{/if}
{#if srcName}
  <meta
    property="twitter:image"
    content={`${urlBase}/c_fit,h_120,q_80,w_120/${urlId}/${srcName}`} />
{/if}
