import { GitHubIcon, LinkedinIcon } from "../utils/Icons";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center py-16 border-t">
      <div>
        <p className="text-white text-xl text-center">
          Developed by <br /> Juan José Cieri
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <a href="https://www.linkedin.com/in/juan-jose-cieri" target="blank__">
          <LinkedinIcon />
        </a>
        <a href="https://www.github.com/JuanjoCieri" target="blank__">
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}
