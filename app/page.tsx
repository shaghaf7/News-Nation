'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
   <div>
    <header>Welcome to News-Nation</header>
    <h5>
      A platform for worldwibe news for daily updates
    </h5>
    <div>
      <button onClick={()=>router.push('/login')}
      className=""
      >Login</button>
      <button onClick={()=>router.push('/signup')}
      className=""
      >Signup</button>

    </div>
   </div>
  );
}
