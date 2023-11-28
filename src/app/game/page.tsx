import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div className="flex justify-center items-center h-screen">
      
      <iframe src="/game_files/index.html" className="w-[1050px] h-[595px]" />
    </div>
  );
};

export default Page;
