import Head from '../components/Head'
//
function Page() {
  //
  const testProc = async function(){
    console.log("#testProc");
    const res = await fetch("/api/test1");
    const json = await res.json()
console.log(json); 
  }
  //
  return (
  <div className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl text-gray-700 font-bold my-2">test1.tsx
    </h1>
    <hr />
    <p>Test-page</p>
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>testProc()}>Test
    </button>
  </div>
  );
}

export default Page;