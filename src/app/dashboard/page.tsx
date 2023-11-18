import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import fs from "fs";
import path from "path";

const Page = () => {
  const {} = getKindeServerSession();

  // Your HTML content
  const htmlContent = fs.readFileSync(
    path.join(process.cwd(), "src/app/dashboard/game.html"),
    "utf8"
  );

  // Your JavaScript content
  const jsContent = fs.readFileSync(
    path.join(process.cwd(), "src/app/dashboard/game.js"),
    "utf8"
  );

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <script dangerouslySetInnerHTML={{ __html: jsContent }} />
    </div>
  );
};

export default Page;
