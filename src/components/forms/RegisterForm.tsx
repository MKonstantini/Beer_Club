const RegisterForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    // Functions
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const result = await signIn('credentials', { redirect: false, ...form });

            if (!result!.error) {
                // Successful login (handle user navigation or state updates)
                redirect('/')
            } else {
                setError(result!.error);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An unexpected error occurred.');
        }
    };

    // Component
    return (
        <div className="flex flex-col items-center">
            {/* Google SignIn */}
            <button onClick={() => signIn("google")} className=" bg-white flex gap-5 p-5 rounded-lg hover:bg-slate-100">
                <Image width={25} height={25} src="/icons/google.svg" alt="google icon" />
                Login With Google
            </button>
            <div className="text-center mt-5 mb-5">___________________________</div>

            {/* Credentials SignIn */}
            <h1 className="font-bold text-center">Login With Email</h1>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="text-center mt-5 flex flex-col sm:flex-row">
                    <label htmlFor="email" className="mb-1 sm:me-12">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center mt-5 flex flex-col sm:flex-row" >
                    <label htmlFor="password" className="mb-1 sm:me-5">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="text-center font-bold mt-2 text-red-700">
                    {error && <p>Error: {error} </p>}
                </div>

                <div className="flex justify-center mt-5">
                    <Button type="submit" variant={'black'}>Login</Button>
                </div>
                <div className="text-center mt-2 mb-5">___________________________</div>

                <div className="flex justify-center">
                    <Button type="button" onClick={() => redirect('/register')} variant={'black'} className="mt-2">
                        <Link href={"/register"}>
                            New User? Create An Account
                        </Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}