# Microfront Typescript Library
A library to work with micro frontends made in typescript.

The main idea is merge different fragment sources into a single template to serve a unique htmll page based on multiple independent endpoints.

This project was idealized on the [Tailor Project](https://github.com/zalando/tailor).

## Benefits
* **Enable SSR**: the server side render (SRR) is important for SEO and fastens the initial render.
* **Cache Management**: enable use the `cache` attribute in the `<fragment>` tag, to control the cache time. It active a best performance reducing unnecessary requests.

## About fragments

The Fragment concept is a part of your page, a fragment of one entire page.

## Fragment Tag
On the template you will represent the Fragment using the `<fragment />` tag with this attributes: href and cache.

### href *(needed)*
This attribute is used to provide the endpoint that will load the content you want to include in your page. Because it this attribute is mandatory.

Example:
```
<fragment href="http://example.fragment.com/" />
```

### cache *(optional)*
This attribute is optional, when setted the fragment will be cached looking to the value. When not provided, the fragment will be requested each time to the origin.

The cache value use the [DayJs](https://day.js.org/docs/en/manipulate/add)* format.

Example:

| Time	            | Cache attribute |
| ----------------- | --------------- |
| no cache          | don't use the cache attribute |
| 10 years	        | 10y |
| 3 quarters        | 3Q |
| 6 months          | 6M |
| 2 weeks           | 2w |
| 7 days            | 7d |
| 5 hours           | 5h |
| 12 minutes        | 12m |
| 3 seconds         | 3s |
| 5000 milliseconds | 5000ms |

Examples:

* Caching the fragment for 10 minutes:
```
<fragment href="http://example.fragment.com/" cache="10m" />
```

* Caching the fragment for 10 days:
```
<fragment href="http://example.fragment.com/" cache="10d" />
```

* No Cache:
If you don't want to use cache, just ommit the attribute:
```
<fragment href="http://example.fragment.com/" />
```

---

## Instalation
TODO

## Getting Started
TODO

### Template Example
Given you have this template:
```html
<html>
  <body>
    <fragment href="http://example.fragment.com/" />
  </body>
</html>
```
Given the endpoint http://example.fragment.com/ responds with:
```html
<header>
  <h1>This is a Fragment</h1>
</header>
```
The library will return:
```html
<html>
  <body>
    <header>
      <h1>This is a Fragment</h1>
    </header>
  </body>
</html>
```

### Development
TODO

### Cache Management
TODO

---

## License
This project use the [GNU GENERAL PUBLIC LICENSE v3](/LICENSE).

## Changelog
All the relevant changes will be defined in the [changelog file](/CHANGELOG.md).
