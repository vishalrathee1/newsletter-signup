import React from "react";

export default function Signup () {
    return(
        <div
        style={{
            height:"100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        }}>
            <h3>Signup To My News Letter</h3>
            <form action="/" method="POST" >
            <div
            style={{
                display: "flex",
                flexDirection : "column",

            }}>
            <input type="text" name = "fullName" placeholder="Full Name" />
            {/* <input type="text" name = "fullName" placeholder="Full Name" /> */}
            <input type="email" name = "email" placeholder="Email" />
            <button type="submit">Sign Me Up!</button>
            <p style={{display: "block", alignSelf: "center"}}>&copy; ViktorR</p>
            </div>
            </form>

        </div>
    )
}