import React from "react";

var date=new Date();
console.log(date.getFullYear)

function Footer(){
    return <footer><p>copyright {date.getFullYear()}</p></footer>
}

export default Footer;