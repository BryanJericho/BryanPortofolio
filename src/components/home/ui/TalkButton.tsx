import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem] !bg-pink-500 !text-white !hover:bg-pink-600 !transition duration-300"
      href={Strings.telegramLink}
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
