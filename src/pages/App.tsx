import React from 'react';

//
export default function Page(props: any) {
  return (
  <html>
    <head>
      <title>title</title>
      <link href="/static/globals.css" rel="stylesheet" />
      <link href="/static/main.css" rel="stylesheet" />
      <link href="/static/micromodal.css" rel="stylesheet" />
    </head>    
    <div>
        <div id="root"></div>
        {/* JS */}
        <script type="module" src="/static/client.js"></script>
    </div>
  </html>
  )
}
/*
{import.meta.env.PROD ? (
    <script type="module" src="/static/client.js"></script>
) : (
    <script type="module" src="/src/client.tsx"></script>
)}
*/