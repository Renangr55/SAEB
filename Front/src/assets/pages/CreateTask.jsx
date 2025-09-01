import React from "react"
import { Button } from "../components/Button"
import Header from "../components/Header"

export const CreateTask = () => {
    return (
        <>
            <Header />
                        
            <main className="ml-5">
                <h1 className="text-zinc-800 text-2xl">Create Task</h1>

                <form className="flex flex-col">
                    <label className="" htmlFor="">Description</label>
                    <input  className="border-2 w-50" type="text"/>

                    <label htmlFor="">Sector</label>
                    <input className="border-2 w-50" type="text"     />

                    <Button text="Create"/>
                </form>

                
            </main>
        </>
    )
}
export default CreateTask;