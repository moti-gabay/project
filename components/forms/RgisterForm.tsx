'use client';

import Filed from "./Filed";


function RgisterForm() {

    
    return (
        <div>
            <form action="">

                <Filed label="User Name" name="username" style="w-full rounded-lg border px-3 py-2" />

                <Filed label="Email" name="email" style="w-full rounded-lg border px-3 py-2" />

                <Filed label="Password" name="password" style="w-full rounded-lg border px-3 py-2" />

                <button type="submit">Sent</button>

            </form>
        </div>
    )
}

export default RgisterForm