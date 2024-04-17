import Login from "@/components/Login";
import Nav from "@/components/Nav";
import UserInfo from "@/components/User";

export default function Profile() {
  let user = true;
  let username = "jwbw29";

  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center items-center mt-20">
        {user ? <UserInfo username={username} /> : <Login />}
      </div>
    </main>
  );
}
