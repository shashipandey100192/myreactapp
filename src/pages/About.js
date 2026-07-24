import { Fragment } from "react/jsx-runtime"


export default function About() {
  return (
    <div>
      <h1>heading one</h1>
      <h2>heading two <p>skdfjksdj</p></h2>
    </div>

  )
}


function About2()
{
  return <h4>this is heading four</h4>
}

export {About2}



export function About3()
{
  return <h4>thidfsdfsdfsdfsdfsd s is heading four</h4>
}


export function Page()
{
  return(
    <Fragment>
    <h1>this is first page</h1>
    <h1>heading one</h1>
    </Fragment>
  )

}


