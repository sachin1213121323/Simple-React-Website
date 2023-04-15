import { MdCall } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div
        className=""
        style={{
          backgroundImage: `url("/images/bg.webp")`,
          height: "100vh",
        }}
      >
        <h1 className=" text-center text-5xl font-bold text-red-500 pt-8 pb-5">
          Have some question
        </h1>
        <p className=" text-center text-xl px-96">
          Thank you for intraste in our services. Please fill out the form
          bellow or email us at @ and we will get back to you promptly regarding
          your request
        </p>
        <div className="flex flex-row justify-center pt-20 gap-20">
          <div className=" bg-white p-10 rounded-2xl flex flex-col gap-6 shadow-md">
            {Input({ hint: "First Name *", type: "text" })}
            {Input({ hint: "Last Name", type: "text" })}
            {Input({ hint: "Email *", type: "email" })}
            {Input({ hint: "Phone *", type: "number" })}
            <input
              type="text"
              className=" rounded-lg py-3 px-4 bg-slate-200 w-96 h-24"
              placeholder={"Message *"}
            />
            <button className=" bg-red-400 py-4 rounded-2xl hover:bg-red-800 hover:text-white uppercase">
              Submit
            </button>
            <p className="w-96 text-center px-4 text-gray-500">
              Company Name not sell, share or trade customer infomation, Your
              privacy is very important to us
            </p>
          </div>
          <div>
            <img src="/images/msg.webp" alt="" style={{ width: "350px" }} />
            <h1 className=" font-bold text-3xl pb-3 text-white">
              Get in touch
            </h1>
            <hr className=" mb-7" />
            <div className=" flex flex-row items-center gap-4 text-white font-bold pb-5">
              <span className=" p-2 border border-white rounded-full ">
                <MdCall size={30} color={"white"} />
              </span>
              <h1>+91 9000034546</h1>
            </div>
            <div className=" flex flex-row items-center gap-4 text-white font-bold pb-5">
              <span className=" p-2 border border-white rounded-full ">
                <AiTwotoneMail size={30} color={"white"} />
              </span>
              <h1>hello@gmail.com</h1>
            </div>
            <div className=" flex flex-row items-center gap-4 text-white font-bold pb-5">
              <span className=" p-2 border border-white rounded-full ">
                <ImLocation size={30} color={"white"} />
              </span>
              <h1>Rajsthan Sikar, fatehpur 332305</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Input = (props: any) => {
  return (
    <>
      <input
        type={props.type}
        className=" rounded-lg py-3 px-4 bg-slate-200 w-96"
        placeholder={props.hint}
      />
    </>
  );
};

export default Contact;
