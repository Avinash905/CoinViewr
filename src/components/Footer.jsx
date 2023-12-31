import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded md:w-auto"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Sign up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaLinkedin />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </footer>
  );
};

export default Footer;
