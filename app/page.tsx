import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hej och Välkomna 👋&nbsp;
        <span className="whitespace-nowrap">
          till <span className="font-bold">Einars Hemservice</span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
