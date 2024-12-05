import React from "react";

function page() {
  const handleSubmit = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("hello " + username);
  };
  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="username" id="" className="text-black" />
        <button>send</button>
      </form>
    </div>
  );
}

export default page;
