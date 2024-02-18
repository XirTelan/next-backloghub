import LoginForm from "@/components/LoginForm";
import React from "react";
import { GoogleSignIn } from "./Google/GoogleSignIn";
import Link from "next/link";

const LogSignIn = () => {
  return (
    <div className=" ms-12 flex w-80 max-w-xl flex-col self-start rounded bg-neutral-800 p-4 ">
      <div className="flex flex-col gap-2">
        <GoogleSignIn />
        <Link
          href={process.env.NEXT_PUBLIC_DISCORDOAUTH!}
          className="flex items-center justify-between rounded border border-neutral-600 bg-neutral-900 p-2 hover:bg-neutral-700"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 93 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M78.8098 6.40592C72.8379 3.66724 66.4524 1.67678 59.7766 0.543533C58.9567 1.99642 57.9988 3.95055 57.3385 5.50514C50.2419 4.45906 43.2106 4.45906 36.2446 5.50514C35.5842 3.95055 34.6046 1.99642 33.7774 0.543533C27.0944 1.67678 20.7016 3.6745 14.7297 6.42045C2.68434 24.2619 -0.580979 41.6602 1.05168 58.8115C9.04083 64.6593 16.7833 68.2117 24.3951 70.5363C26.2745 68.001 27.9507 65.3059 29.3946 62.4655C26.6445 61.4412 24.0105 60.1772 21.5216 58.7098C22.1819 58.2303 22.8277 57.7291 23.4518 57.2133C38.6319 64.1726 55.1254 64.1726 70.1241 57.2133C70.7554 57.7291 71.4012 58.2303 72.0542 58.7098C69.5581 60.1845 66.9168 61.4485 64.1667 62.4728C65.6107 65.3059 67.2796 68.0083 69.1662 70.5435C76.7853 68.2189 84.535 64.6666 92.5241 58.8115C94.4398 38.9288 89.2516 21.6903 78.8098 6.40592ZM31.4627 48.2635C26.9058 48.2635 23.1688 44.0938 23.1688 39.0159C23.1688 33.9381 26.8259 29.7611 31.4627 29.7611C36.0994 29.7611 39.8364 33.9308 39.7566 39.0159C39.7639 44.0938 36.0994 48.2635 31.4627 48.2635ZM62.1131 48.2635C57.5562 48.2635 53.8192 44.0938 53.8192 39.0159C53.8192 33.9381 57.4764 29.7611 62.1131 29.7611C66.7499 29.7611 70.4869 33.9308 70.4071 39.0159C70.4071 44.0938 66.7499 48.2635 62.1131 48.2635Z"
              fill="#5865F2"
            />
          </svg>
          <div className="w-full text-center">Sign in with Discord</div>
        </Link>
      </div>
      <div className="my-4 flex w-full items-center gap-1">
        <div className="h-0.5 w-1/2 bg-slate-500" />
        <span className=" text-sm text-neutral-300">OR</span>
        <div className="h-0.5 w-1/2 bg-slate-500" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LogSignIn;
