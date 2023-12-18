//Create a basic Next.js functional component template named 'Home' with an empty return statementwith a structured layout using Tailwind CSS.
// inside the return statement, create a div element with a sematic main element.
// inside the main element, add parent div. inside the parent div, add three empty child divs
// first empty child div contain a h1 tag with a placeholder text nemed 'string-app'.
// rest of the each child divs contain nextjs's links for singn-in and signup pages.
//  Use 'flex', 'min-h-screen', 'items-center', and 'justify-center' for the main container.
// Inside the main container, add a div with 'flex', 'flex-col', 'gap-2', 'p-5', 'max-w-xs', 'w-full', 'dark:bg-slate-800', 'bg-slate-300', and 'rounded-lg' classes.Include a centered header with 'text-center' and 'my-4' classes, and two Link components each with 'dark:bg-slate-900', 'bg-slate-400', 'my-4', 'p-3', 'rounded-lg', and 'block' classes for sign -in and sign - up
// export the Home component.
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full dark:bg-slate-800 bg-slate-300 rounded-lg">
        <h1 className="text-center my-4">String App</h1>
        <Link
          href="/signin"
          className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
