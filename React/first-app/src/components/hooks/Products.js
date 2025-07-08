// import React from "react";
// import useFetch from "./useFetch";

// function Products() {
//   const { data, error, loading } = useFetch({
//     url: "https://fakestoreapi.com/products",
//     method: "GET"
//   });

//   return (
//     <main >
//       <h1>Products</h1>
//       {/* {loading ? "Loading..." : <img src={data?.image} alt="product" width={200} height={200} />} */}

//         data.image.map(image);

      
//     </main>
//   );
// }

// export default Products;


//---------------------------------------------------


import React from "react";
import useFetch from "./useFetch";

function Products() {
  const { data, error, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
    method: "GET"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <h1>Products</h1>
      {data && data.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <img
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <p>{product.title}</p>
        </div>
      ))}
    </main>
  );
}

export default Products;












