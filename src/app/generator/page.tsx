import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      Hello
    </div>
  );
};

export default Page;
