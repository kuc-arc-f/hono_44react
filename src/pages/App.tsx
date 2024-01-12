import React from 'react';

//
export default function Page(props: any) {
    return (
    <div>
        <div id="root"></div>
        {/* JS */}
        <script type="module" src="/static/client.js"></script>
    </div>
    )
}
/*
{import.meta.env.PROD ? (
    <script type="module" src="/static/client.js"></script>
) : (
    <script type="module" src="/src/client.tsx"></script>
)}
*/