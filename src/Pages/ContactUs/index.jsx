import React from "react";
import Title from "../Home/Services/Title";
import assets from "../../assets/assets";
import toast from "react-hot-toast";

//this page will send emails for me :)

export default function ContactUs() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "a753f3ab-2e1a-43da-a7e3-5df38fab5501");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        e.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contactUs"
      className="flex flex-col items-center justify-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>

          <div className="flex px-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>

          <div className="flex px-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>

          <textarea
            rows={8}
            name="message"
            required
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 items-center bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
}
