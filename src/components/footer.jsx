import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* section 1 */}
      <div className="bg-slate-50 px-20">
        <div className="flex justify-center gap-40">
          <div className=" flex-row w-80 rounded-2xl p-2 my-2 font-thin">
            <p className="font-bold my-5">About</p>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="py-2">Email : info@jstemplate.net</p>
            <p className="">Phone : 880 123 456 789</p>
          </div>
          {/* 2nd */}
          <div className=" flex-row w-80 rounded-2xl p-2 my-5 font-thin">
            <ul>Home</ul>
            <ul>Blog</ul>
            <ul></ul>
          </div>
          {/* logos */}
          <div className="flex gap-4 my-7">
            <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedin />
          </div>
        </div>
        {/* footer logotoi heseg */}
        <div className="flex justify-between border-t-2 py-4">
          <img className=" w-[231px]" src="./images/Logo1.png" alt="" />
          <div className="flex justify-between items-center mx-20 mt-4">
            <ul className="flex justify-center gap-5 font-thin">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* section 2 */}
      </div>
    </>
  );
};
export default Footer;
