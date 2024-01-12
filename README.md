# hono_44react

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/01/08

 update  : 2024/01/13 

***
### Summary

react + pages, sample

***
### Setup

* build , preview

```
yarn build
yarn dev
```

* deploy
```
npx wrangler pages deploy dist
```

***
* client.js build
```
npx esbuild --bundle ./src/client.tsx --format=esm --minify --outfile=./public/static/client.js
```
***
### blog 

https://zenn.dev/knaka0209/scraps/9e29547638a577

***

