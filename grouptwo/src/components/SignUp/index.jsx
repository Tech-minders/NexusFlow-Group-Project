import Signup from "./components/Signup";

function SignUp({users, setUsers}) {
  return (
    <div>
      <Signup users={users} setUsers={setUsers}/>
    </div>
  );
}
export default SignUp;
