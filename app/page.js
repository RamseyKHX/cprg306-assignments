import Link from "next/link";


export default function Page() {
  return(
    <main className="min-h-screen flex flex-col items-center bg-black">
      <h1 className="text-4xl font-bold text-green-500 text-center mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      
      <div className="flex flex-col space-y-4 ml-4">
        <ul className="text-2xl">
            <li>
            <Link href="week-2" className="text-red-500 hover:underline">Week 2</Link>
            </li>
            
          </ul>
          
          <ul className="text-2xl">
            <li>
            <Link href="week-3" className="text-blue-500 hover:underline">Week 3</Link>
            </li>
          </ul>
          <ul className="text-2xl">
            <li>
            <Link href="week-4" className="text-purple-500 hover:underline">Week 4</Link>
            </li>
          </ul>
          <ul className="text-2xl">
            <li>
            <Link href="week-5" className="text-yellow-500 hover:underline">Week 5</Link>
            </li>
          </ul>
          <ul className="text-2xl">
            <li>
            <Link href="week-6" className="text-gray-500 hover:underline">Week 6</Link>
            </li>
          </ul>
          <ul className="text-2xl">
            <li>
            <Link href="week-7" className="text-orange-500 hover:underline">Week 7</Link>
            </li>
          </ul>
      </div>
    </main>
    
  );
}
