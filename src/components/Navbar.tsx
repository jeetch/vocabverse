import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  LogoutLink, // Add the LogoutLink import
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import { Press_Start_2P } from "next/font/google";
import { cn } from "@/lib/utils";

const player = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-800  bg-[#14001e]/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-800">
          <Link
            href="/"
            className={cn("flex z-40 font-semibold ", player.className)}
          >
            <span>Vocabverse</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in <ArrowRight className="ml-1.5 h-5 w-5" />
                </LoginLink>
                {/* <LoginLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Sign In <ArrowRight className="ml-1.5 h-5 w-5" />
                </LoginLink> */}
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
                <LogoutLink // Add the LogoutLink component
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Logout
                </LogoutLink>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
