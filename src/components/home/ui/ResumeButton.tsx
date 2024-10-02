import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem] !border-pink-500 !text-pink-500"
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
