import React from 'react';

//
export default function Page(props: any) {
    return (
    <div>
        <div id="root"></div>
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js"></script>
        ) : (
            <script type="module" src="/src/client.tsx"></script>
        )}        
    </div>
    )
}
/*
<h1 className="text-4xl font-bold">Test1/App1</h1>
*/