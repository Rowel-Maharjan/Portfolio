import { twittersvg, insta, github } from "../assets";

const Footer = () => {
  return (
    <footer className="border-black-300 border-t ">
      <div className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5 max-w-7xl mx-auto">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/Rowel-Maharjan" target="_blank">
            <div className="social-icon">
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </div>
          </a>
          <a href="https://x.com/MaharjanRowel" target="_blank">
            <div className="social-icon">
              <img src={twittersvg} alt="twitter" className="w-1/2 h-1/2" />
            </div>
          </a>
          <a href="https://www.instagram.com/rowel_mhz/" target="_blank">
            <div className="social-icon">
              <img src={insta} alt="instagram" className="w-1/2 h-1/2" />
            </div>
          </a>
        </div>

        <p className="text-white-500">
          © {new Date().getFullYear()} Rowel Maharjan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
