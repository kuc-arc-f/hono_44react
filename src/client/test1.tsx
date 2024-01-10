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
  <div>
    <h1>test1.tsx</h1>
    <hr />
    <p>Test-page</p>
    <hr />
    <button onClick={()=>testProc()}>[ Test ]</button>
  </div>
  );
}

export default Page;