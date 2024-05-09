import { useEffect } from "react";

let reachA = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 1000, "A reached");
  else reject("A have  not reached");
});
async function fn() {
  try {
    console.log("hoorey....");
    const response = await reachA;
    console.log(response);
  } catch (err) {
    console.log("oops", err);
  }
}

function MyComponent() {
  useEffect(() => {
    fn();
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>
        Promise:
        <br />
        async await with try-catch
      </h1>
    </div>
  );
}

export { MyComponent };

