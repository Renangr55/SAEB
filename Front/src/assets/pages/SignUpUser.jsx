import React from "react"
import Header from "../components/Header"
import { Button } from "../components/Button"

export const SingUpUser = () => {
    return (
        <>
            <Header />
            
            <main className="ml-5">
                <h1 className="text-zinc-800 text-2xl">Create User</h1>

                <form className="flex flex-col">
                    <label className="" htmlFor="">Name</label>
                    <input  className="border-2 w-50" type="text"/>

                    <label htmlFor="">Email</label>
                    <input className="border-2 w-50" type="text" />

                    <Button text="Create"/>
                </form>

                
            </main>

        </>
    )
}
export default SingUpUser;