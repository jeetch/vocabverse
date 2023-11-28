import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = () => {
  const {} = getKindeServerSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <iframe
        src="/game_files/index.html"
        style={{ width: "1050px", height: "595px" }}
      />
    </div>
  );
};

export default Page;
