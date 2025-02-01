import { useState } from "react"

export default function Form() {
    let [fullName, setFullName] = useState("Hasnain")
    let handleChange = (event) => {
        setFullName(event.target.value)
    }
    return(
        <form>
            <input type="text" value={fullName} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}