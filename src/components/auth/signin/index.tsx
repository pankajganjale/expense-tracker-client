const SignInComponent = () => {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <form action="" className="w-2/6 grid grid-cols-1 justify-items-center gap-6 p-4 border-1 border-neutral-700 rounded-md shadow-2xl bg-gradient-to-r from-c-m-blue to-c-l-blue">
        <div>
          <label className="block text-center text-white" htmlFor="email">Email / Phone No.</label>
          <input className="border border-neutral-500 rounded-md focus:outline-none p-0.5" type="email" name="email" id="email" />
        </div>
        <div>
          <label className="block text-center text-white" htmlFor="password">Password</label>
          <input className="border border-neutral-500 rounded-md focus:outline-none p-0.5" type="password" name="password" id="password" />
        </div>
        <input className="px-16 py-1 text-white bg-sky-900 rounded-md" type="submit" value="Sign In" />
      </form>
    </main>
  )
}

export default SignInComponent;
